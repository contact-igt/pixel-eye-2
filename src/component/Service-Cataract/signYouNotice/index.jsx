import { useState, useRef, useEffect } from "react";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const HOVER_DELAY = 200; // ms the mouse must stay on a card before it commits to scrolling

const SignsYouNotice = ({
  signsContent = SERVICE_CATARACT_CONTENT.signs,
  sectionId = "cataract-signs",
}) => {
  const signs = signsContent;

  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, signs.items.findIndex((item) => item.active)),
  );

  const itemRefs = useRef([]);
  const viewportRef = useRef(null);
  const isClickScrolling = useRef(false);
  const hoverTimer = useRef(null);

  const activateAndScroll = (index) => {
    isClickScrolling.current = true;
    setActiveIndex(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    window.clearTimeout(activateAndScroll._t);
    activateAndScroll._t = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 500);
  };

  // hover: just highlight immediately, but DELAY the scroll until the mouse settles
  const handleItemHover = (index) => {
    setActiveIndex(index); // instant visual highlight, no scroll yet

    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      activateAndScroll(index);
    }, HOVER_DELAY);
  };

  const handleHoverCancel = () => {
    window.clearTimeout(hoverTimer.current);
  };

  // click/keyboard: commit instantly, no delay
  const handleItemClick = (index) => {
    window.clearTimeout(hoverTimer.current);
    activateAndScroll(index);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const mostCentered = visible.reduce((best, entry) => {
          const bestDist = Math.abs(best.intersectionRatio - 1);
          const entryDist = Math.abs(entry.intersectionRatio - 1);
          return entryDist < bestDist ? entry : best;
        });

        const index = itemRefs.current.findIndex((el) => el === mostCentered.target);
        if (index !== -1) setActiveIndex(index);
      },
      {
        root: viewport,
        threshold: [0.5, 0.75, 1],
      },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [signs.items]);

  return (
    <section className={styles["cataract-signs"]} aria-labelledby={`${sectionId}-title`}>
      <div className={styles["cataract-signs__header"]}>
        <h2 id={`${sectionId}-title`}>{signs.title}</h2>
        <p>{signs.description}</p>
      </div>

      <div className={styles["cataract-signs__body"]}>
        <img className={styles["cataract-signs__image"]} src={signs.image.src} alt={signs.image.alt} />

        <div className={styles["cataract-signs__listCol"]}>
          {signs.listIntro ? (
            <p className={styles["cataract-signs__listIntro"]}>{signs.listIntro}</p>
          ) : null}

          <div
            ref={viewportRef}
            className={styles["cataract-signs__viewport"]}
            aria-label={signs.ariaLabel || "Signs list"}
            onMouseLeave={handleHoverCancel}
          >
            {signs.items.map((sign, index) => (
              <article
                className={`${styles["cataract-signs__item"]} ${index === activeIndex ? styles["is-active"] : ""}`.trim()}
                key={sign.number}
                ref={(el) => (itemRefs.current[index] = el)}
                onClick={() => handleItemClick(index)}
                onMouseEnter={() => handleItemHover(index)}
                onFocus={() => handleItemClick(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleItemClick(index);
                  }
                }}
              >
                <span className={styles["cataract-signs__number"]}>{sign.number}</span>
                <span className={styles["cataract-signs__divider"]} aria-hidden="true" />
                <p>{sign.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignsYouNotice;