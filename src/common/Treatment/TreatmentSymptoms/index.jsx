import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const TreatmentSymptoms = ({ data, slug = "treatment" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProgrammatic, setIsProgrammatic] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const programmaticTimerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 991px)");
    const handleViewportChange = (event) => setIsMobileView(event.matches);

    setIsMobileView(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleViewportChange);
      return () =>
        mediaQuery.removeEventListener("change", handleViewportChange);
    }

    mediaQuery.addListener(handleViewportChange);
    return () => mediaQuery.removeListener(handleViewportChange);
  }, []);

  useEffect(() => {
    if (!isMobileView || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const nodes = itemRefs.current.filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammatic) return;

        if (!entries.some((entry) => entry.isIntersecting)) return;

        const viewportCenter = window.innerHeight / 2;
        let nextIndex = -1;
        let closestDistance = Number.POSITIVE_INFINITY;

        nodes.forEach((node, index) => {
          const rect = node.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (visibleHeight <= rect.height * 0.25) return;

          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            nextIndex = index;
          }
        });

        if (nextIndex !== -1) {
          setActiveIndex((current) =>
            current === nextIndex ? current : nextIndex,
          );
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [data.items, isMobileView, isProgrammatic]);

  useEffect(
    () => () => {
      if (programmaticTimerRef.current) {
        clearTimeout(programmaticTimerRef.current);
      }
    },
    [],
  );

  const updateActiveSign = (event) => {
    if (isProgrammatic || isMobileView) return;
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;
    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }
    const progress = list.scrollTop / maxScroll;
    const nextIndex = Math.round(progress * (data.items.length - 1));
    setActiveIndex(Math.min(data.items.length - 1, Math.max(0, nextIndex)));
  };

  const handleItemClick = (index) => {
    if (programmaticTimerRef.current) {
      clearTimeout(programmaticTimerRef.current);
    }

    setIsProgrammatic(true);
    setActiveIndex(index);

    const listNode = listRef.current;
    if (listNode) {
      const itemNode = itemRefs.current[index] || listNode.children[index];
      if (itemNode) {
        if (isMobileView) {
          itemNode.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        } else {
          listNode.scrollTo({
            top: itemNode.offsetTop - listNode.offsetTop,
            behavior: "smooth",
          });
        }
      }
    }

    programmaticTimerRef.current = setTimeout(() => {
      setIsProgrammatic(false);
      programmaticTimerRef.current = null;
    }, 650);
  };

  return (
    <section
      className={styles["treatment-symptoms"]}
      aria-labelledby={`${slug}-symptoms-title`}
    >
      <div className={styles["treatment-symptoms__header"]}>
        <h2 id={`${slug}-symptoms-title`}>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className={styles["treatment-symptoms__body"]}>
        <Image
          className={styles["treatment-symptoms__image"]}
          src={data.image.src}
          alt={data.image.alt}
          width={975}
          height={486}
        />

        <div className={styles["treatment-symptoms__content"]}>
          {data.note && (
            <p className={styles["treatment-symptoms__note"]}>{data.note}</p>
          )}

          <div
            ref={listRef}
            className={styles["treatment-symptoms__list"]}
            aria-label={`${data.title} list`}
            onScroll={updateActiveSign}
            tabIndex={0}
          >
            {data.items.map((item, index) => (
              <article
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={`${styles["treatment-symptoms__item"]} ${
                  index === activeIndex ? styles["is-active"] : ""
                }`.trim()}
                key={item.number}
                onMouseEnter={() => {
                  if (!isProgrammatic && !isMobileView) setActiveIndex(index);
                }}
                onClick={() => handleItemClick(index)}
                style={{ cursor: "pointer" }}
              >
                <span className={styles["treatment-symptoms__number"]}>
                  {item.number}
                </span>
                <span
                  className={styles["treatment-symptoms__divider"]}
                  aria-hidden="true"
                />
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSymptoms;
