import { useState } from "react";
import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const LasikSignsYouNotice = () => {
  const { signs } = SERVICE_LASIK_CONTENT;
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveSign = (event) => {
    const list = event.currentTarget;
    const maxScroll = list.scrollHeight - list.clientHeight;

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    const progress = list.scrollTop / maxScroll;
    const nextIndex = Math.round(progress * (signs.items.length - 1));
    setActiveIndex(Math.min(signs.items.length - 1, Math.max(0, nextIndex)));
  };

  const handleWheel = (event) => {
    event.preventDefault();
    event.currentTarget.scrollBy({
      top: event.deltaY * 0.45,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles["lasik-signs"]} aria-labelledby="lasik-signs-title">
      <div className={styles["lasik-signs__header"]}>
        <h2 id="lasik-signs-title">{signs.title}</h2>
        <p>{signs.description}</p>
      </div>

      <div className={styles["lasik-signs__body"]}>
        <img
          className={styles["lasik-signs__image"]}
          src={signs.image.src}
          alt={signs.image.alt}
        />

        <div className={styles["lasik-signs__right"]}>
          {signs.note && (
            <p className={styles["lasik-signs__note"]}>{signs.note}</p>
          )}
          <div
            className={styles["lasik-signs__list"]}
            aria-label="LASIK criteria"
            onScroll={updateActiveSign}
            onWheel={handleWheel}
            tabIndex={0}
          >
          {signs.items.map((sign, index) => (
            <article
              className={`${styles["lasik-signs__item"]} ${index === activeIndex ? styles["is-active"] : ""}`.trim()}
              key={sign.number}
            >
              <span className={styles["lasik-signs__number"]}>{sign.number}</span>
              <span className={styles["lasik-signs__divider"]} aria-hidden="true" />
              <p>{sign.text}</p>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LasikSignsYouNotice;
