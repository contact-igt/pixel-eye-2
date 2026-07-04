import Image from "next/image";
import { useState, useRef } from "react";
import { SERVICE_GLAUCOMA_CONTENT } from "@/constant/serviceGlaucomaContent";
import styles from "./styles.module.css";

const GlaucomaSymptoms = () => {
  const { symptoms } = SERVICE_GLAUCOMA_CONTENT;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProgrammatic, setIsProgrammatic] = useState(false);
  const listRef = useRef(null);

  const updateActiveSign = (event) => {
    if (isProgrammatic) return;
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress = list.scrollTop / maxScroll;
    const nextIndex = Math.round(progress * (symptoms.items.length - 1));
    setActiveIndex(Math.min(symptoms.items.length - 1, Math.max(0, nextIndex)));
  };

  const handleWheel = (event) => {
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;

    if (maxScroll <= 0) {
      return;
    }

    event.preventDefault();
    list.scrollBy({
      top: event.deltaY * 0.45,
      behavior: "smooth",
    });
  };

  const handleItemClick = (index) => {
    setIsProgrammatic(true);
    setActiveIndex(index);
    const listNode = listRef.current;
    if (listNode) {
      const itemNode = listNode.children[index];
      if (itemNode) {
        listNode.scrollTo({
          top: itemNode.offsetTop - listNode.offsetTop,
          behavior: "smooth",
        });
      }
    }
    setTimeout(() => {
      setIsProgrammatic(false);
    }, 800);
  };

  return (
    <section
      className={styles["squint-symptoms"]}
      aria-labelledby="squint-symptoms-title"
    >
      <div className={styles["squint-symptoms__header"]}>
        <h2 id="squint-symptoms-title">{symptoms.title}</h2>
        <p>{symptoms.description}</p>
      </div>

      <div className={styles["squint-symptoms__body"]}>
        <Image
          className={styles["squint-symptoms__image"]}
          src={symptoms.image.src}
          alt={symptoms.image.alt}
          width={975}
          height={486}
        />

        <div className={styles["squint-symptoms__content"]}>
          <p className={styles["squint-symptoms__note"]}>{symptoms.note}</p>

          <div
            ref={listRef}
            className={styles["squint-symptoms__list"]}
            aria-label="Squint symptoms"
            onScroll={updateActiveSign}
            onWheel={handleWheel}
            tabIndex={0}
          >
            {symptoms.items.map((symptom, index) => (
              <article
                className={`${styles["squint-symptoms__item"]} ${index === activeIndex ? styles["is-active"] : ""}`.trim()}
                key={symptom.number}
                onMouseEnter={() => {
                  if (!isProgrammatic) {
                    setActiveIndex(index);
                  }
                }}
                onClick={() => handleItemClick(index)}
                style={{ cursor: "pointer" }}
              >
                <span className={styles["squint-symptoms__number"]}>
                  {symptom.number}
                </span>
                <span
                  className={styles["squint-symptoms__divider"]}
                  aria-hidden="true"
                />
                <p>{symptom.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlaucomaSymptoms;
