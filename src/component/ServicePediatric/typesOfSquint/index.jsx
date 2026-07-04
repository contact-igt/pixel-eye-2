import { useState } from "react";
import Image from "next/image";
import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";
import styles from "./styles.module.css";

const ArrowIcon = ({ direction }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direction === "left" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

const TypesOfPediatricCare = () => {
  const { types } = SERVICE_PEDIATRIC_CONTENT;
  const [activeIndex, setActiveIndex] = useState(1);

  const getSlide = (offset) =>
    types.slides[(activeIndex + offset + types.slides.length) % types.slides.length];

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + types.slides.length) % types.slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % types.slides.length);
  };

  const leftSlide = getSlide(-1);
  const activeSlide = getSlide(0);
  const rightSlide = getSlide(1);
  const mobileSlides = [activeSlide, rightSlide, leftSlide];

  return (
    <section className={styles["types-squint"]} aria-labelledby="types-squint-title">
      <div className={styles["types-squint__hero"]}>
        <Image
          src={types.image.src}
          alt={types.image.alt}
          width={4083}
          height={1233}
          className={`${styles["types-squint__image"]} ${styles["types-squint__image--desktop"]}`}
        />
        <Image
          src={types.image.mobileSrc}
          alt={types.image.alt}
          width={1119}
          height={338}
          className={`${styles["types-squint__image"]} ${styles["types-squint__image--mobile"]}`}
        />
        <div className={styles["types-squint__copy"]}>
          <h2 id="types-squint-title">{types.title}</h2>
          <p>{types.description}</p>
        </div>
      </div>

      <div className={styles["types-squint__stage"]} aria-label="Pediatric eye care carousel">
        <div className={styles["types-squint__cards-wrapper"]}>
          <button
            className={`${styles["types-squint__arrow"]} ${styles["types-squint__arrow--left"]}`}
            type="button"
            aria-label={types.controls.previousAriaLabel}
            onClick={previousSlide}
          >
            <ArrowIcon direction="left" />
          </button>

          <article
            className={`${styles["types-squint__card"]} ${styles["types-squint__card--side"]}`}
          >
            {leftSlide.image && (
              <div className={styles["types-squint__card-image"]}>
                <Image src={leftSlide.image} alt={leftSlide.title} width={300} height={300} />
              </div>
            )}
            <div className={styles["types-squint__card-content"]}>
              <h3>{leftSlide.title}</h3>
              <p>{leftSlide.description}</p>
            </div>
          </article>

          <article
            className={`${styles["types-squint__card"]} ${styles["types-squint__card--main"]}`}
            aria-live="polite"
          >
            {activeSlide.image && (
              <div className={styles["types-squint__card-image"]}>
                <Image src={activeSlide.image} alt={activeSlide.title} width={500} height={500} />
              </div>
            )}
            <div className={styles["types-squint__card-content"]}>
              <h3>{activeSlide.title}</h3>
              <p>{activeSlide.description}</p>
            </div>
          </article>

          <article
            className={`${styles["types-squint__card"]} ${styles["types-squint__card--side"]}`}
          >
            {rightSlide.image && (
              <div className={styles["types-squint__card-image"]}>
                <Image src={rightSlide.image} alt={rightSlide.title} width={300} height={300} />
              </div>
            )}
            <div className={styles["types-squint__card-content"]}>
              <h3>{rightSlide.title}</h3>
              <p>{rightSlide.description}</p>
            </div>
          </article>

          <button
            className={`${styles["types-squint__arrow"]} ${styles["types-squint__arrow--right"]}`}
            type="button"
            aria-label={types.controls.nextAriaLabel}
            onClick={nextSlide}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div className={styles["types-squint__mobile-list"]}>
          {mobileSlides.map((slide) => (
            <article
              className={`${styles["types-squint__card"]} ${styles["types-squint__mobile-card"]}`}
              key={slide.id}
            >
              {slide.image && (
                <div className={styles["types-squint__card-image"]}>
                  <Image src={slide.image} alt={slide.title} width={500} height={500} />
                </div>
              )}
              <div className={styles["types-squint__card-content"]}>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesOfPediatricCare;


