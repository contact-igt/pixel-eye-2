import { useState } from "react";
import styles from "./styles.module.css";

const getWrappedIndex = (index, total) => {
  if (!total) return 0;
  return (index + total) % total;
};

const DiagnosisSlider = ({ sliderContent, sectionId = "keratoconus-diagnosis-slider" }) => {
  const slides = sliderContent?.items || [];
  const [activeIndex, setActiveIndex] = useState(1);

  if (!slides.length) return null;

  const total = slides.length;
  const current = slides[getWrappedIndex(activeIndex, total)];
  const previous = slides[getWrappedIndex(activeIndex - 1, total)];
  const next = slides[getWrappedIndex(activeIndex + 1, total)];

  return (
    <div className={styles.sliderShell} aria-labelledby={`${sectionId}-title`}>
      <div className={styles.sliderDeck}>
        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonLeft}`}
          aria-label={sliderContent?.previousAriaLabel || "Previous slide"}
          onClick={() => setActiveIndex((index) => getWrappedIndex(index - 1, total))}
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>

        <article className={`${styles.slideCard} ${styles.sideCard} ${styles.sideCardLeft}`}>
          <h3>{previous.title}</h3>
          <p>{previous.description}</p>
        </article>

        <article className={`${styles.slideCard} ${styles.centerCard}`} aria-labelledby={`${sectionId}-title`}>
          <div className={styles.centerTitleWrap}>
            <h3 id={`${sectionId}-title`}>{current.title}</h3>
          </div>
          <p>{current.description}</p>
        </article>

        <article className={`${styles.slideCard} ${styles.sideCard} ${styles.sideCardRight}`}>
          <h3>{next.title}</h3>
          <p>{next.description}</p>
        </article>

        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonRight}`}
          aria-label={sliderContent?.nextAriaLabel || "Next slide"}
          onClick={() => setActiveIndex((index) => getWrappedIndex(index + 1, total))}
        >
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default DiagnosisSlider;
