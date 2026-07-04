import { useState } from "react";
import styles from "./styles.module.css";

const getWrappedIndex = (index, total) => {
  if (!total) return 0;
  return (index + total) % total;
};

const SlideCard = ({ item, className, titleId }) => (
  <article className={`${styles.slideCard} ${className || ""}`} aria-labelledby={titleId}>
    {item.image ? (
      <img src={item.image} alt={item.imageAlt || item.title} className={styles.slideImage} />
    ) : null}
    <div className={styles.slideOverlay} />
    <div className={styles.slideContent}>
      <h3 id={titleId}>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  </article>
);

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
          <span aria-hidden="true" className={styles.arrowIcon}>
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M14.5 5.5L8 12l6.5 6.5" />
            </svg>
          </span>
        </button>

        <SlideCard item={previous} className={`${styles.sideCard} ${styles.sideCardLeft}`} />
        <SlideCard item={current} className={styles.centerCard} titleId={`${sectionId}-title`} />
        <SlideCard item={next} className={`${styles.sideCard} ${styles.sideCardRight}`} />

        <button
          type="button"
          className={`${styles.navButton} ${styles.navButtonRight}`}
          aria-label={sliderContent?.nextAriaLabel || "Next slide"}
          onClick={() => setActiveIndex((index) => getWrappedIndex(index + 1, total))}
        >
          <span aria-hidden="true" className={styles.arrowIcon}>
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M9.5 5.5L16 12l-6.5 6.5" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default DiagnosisSlider;

