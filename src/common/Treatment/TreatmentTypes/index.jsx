import { useState } from "react";
import Image from "next/image";
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

const TreatmentTypes = ({ data, slug = "treatment" }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const getSlide = (offset) =>
    data.slides[(activeIndex + offset + data.slides.length) % data.slides.length];

  const previousSlide = () =>
    setActiveIndex((c) => (c - 1 + data.slides.length) % data.slides.length);

  const nextSlide = () =>
    setActiveIndex((c) => (c + 1) % data.slides.length);

  const leftSlide = getSlide(-1);
  const activeSlide = getSlide(0);
  const rightSlide = getSlide(1);
  const mobileSlides = [activeSlide, rightSlide, leftSlide];
  const sectionClassName = `${styles["treatment-types"]}${
    styles[`treatment-types--${slug}`] ? ` ${styles[`treatment-types--${slug}`]}` : ""
  }`;

  return (
    <section
      className={sectionClassName}
      aria-labelledby={`${slug}-types-title`}
    >
      <div className={styles["treatment-types__hero"]}>
        {data.image && (
          <>
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={4083}
              height={1233}
              className={`${styles["treatment-types__image"]} ${styles["treatment-types__image--desktop"]}`}
            />
            {data.image.mobileSrc && (
              <Image
                src={data.image.mobileSrc}
                alt={data.image.alt}
                width={1119}
                height={338}
                className={`${styles["treatment-types__image"]} ${styles["treatment-types__image--mobile"]}`}
              />
            )}
          </>
        )}
        <div className={styles["treatment-types__copy"]}>
          <h2 id={`${slug}-types-title`}>{data.title}</h2>
          {data.description && <p>{data.description}</p>}
        </div>
      </div>

      <div
        className={styles["treatment-types__stage"]}
        aria-label={`${data.title} carousel`}
      >
        <div className={styles["treatment-types__cards-wrapper"]}>
          <button
            className={`${styles["treatment-types__arrow"]} ${styles["treatment-types__arrow--left"]}`}
            type="button"
            aria-label={data.controls?.previousAriaLabel ?? "Previous"}
            onClick={previousSlide}
          >
            <ArrowIcon direction="left" />
          </button>

          {[
            { slide: leftSlide, variant: "side" },
            { slide: activeSlide, variant: "main" },
            { slide: rightSlide, variant: "side" },
          ].map(({ slide, variant }) => (
            <article
              key={`${variant}-${slide.id ?? slide.title}`}
              className={`${styles["treatment-types__card"]} ${
                styles[`treatment-types__card--${variant}`]
              }`}
              aria-live={variant === "main" ? "polite" : undefined}
            >
              {slide.image && (
                <div className={styles["treatment-types__card-image"]}>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={variant === "main" ? 500 : 300}
                    height={variant === "main" ? 500 : 300}
                  />
                </div>
              )}
              <div className={styles["treatment-types__card-content"]}>
                <h3>{slide.title}</h3>
                {slide.description && <p>{slide.description}</p>}
              </div>
            </article>
          ))}

          <button
            className={`${styles["treatment-types__arrow"]} ${styles["treatment-types__arrow--right"]}`}
            type="button"
            aria-label={data.controls?.nextAriaLabel ?? "Next"}
            onClick={nextSlide}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        <div className={styles["treatment-types__mobile-list"]}>
          {mobileSlides.map((slide) => (
            <article
              key={`mobile-${slide.id ?? slide.title}`}
              className={`${styles["treatment-types__card"]} ${styles["treatment-types__mobile-card"]}`}
            >
              {slide.image && (
                <div className={styles["treatment-types__card-image"]}>
                  <Image src={slide.image} alt={slide.title} width={500} height={500} />
                </div>
              )}
              <div className={styles["treatment-types__card-content"]}>
                <h3>{slide.title}</h3>
                {slide.description && <p>{slide.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentTypes;
