import Image from "next/image";
import { useState, useRef } from "react";
import styles from "./styles.module.css";

const TreatmentSymptoms = ({ data, slug = "treatment" }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isProgrammatic, setIsProgrammatic] = useState(false);
  const listRef = useRef(null);

  const updateActiveSign = (event) => {
    if (isProgrammatic) return;
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;
    if (maxScroll <= 0) { setActiveIndex(0); return; }
    const progress = list.scrollTop / maxScroll;
    const nextIndex = Math.round(progress * (data.items.length - 1));
    setActiveIndex(Math.min(data.items.length - 1, Math.max(0, nextIndex)));
  };

  const handleWheel = (event) => {
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;
    if (maxScroll <= 0) return;
    event.preventDefault();
    list.scrollBy({ top: event.deltaY * 0.45, behavior: "smooth" });
  };

  const handleItemClick = (index) => {
    setIsProgrammatic(true);
    setActiveIndex(index);
    const listNode = listRef.current;
    if (listNode) {
      const itemNode = listNode.children[index];
      if (itemNode) {
        listNode.scrollTo({ top: itemNode.offsetTop - listNode.offsetTop, behavior: "smooth" });
      }
    }
    setTimeout(() => setIsProgrammatic(false), 800);
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
            onWheel={handleWheel}
            tabIndex={0}
          >
            {data.items.map((item, index) => (
              <article
                className={`${styles["treatment-symptoms__item"]} ${
                  index === activeIndex ? styles["is-active"] : ""
                }`.trim()}
                key={item.number}
                onMouseEnter={() => { if (!isProgrammatic) setActiveIndex(index); }}
                onClick={() => handleItemClick(index)}
                style={{ cursor: "pointer" }}
              >
                <span className={styles["treatment-symptoms__number"]}>{item.number}</span>
                <span className={styles["treatment-symptoms__divider"]} aria-hidden="true" />
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
