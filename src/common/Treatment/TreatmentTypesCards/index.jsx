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

/**
 * TreatmentTypesCards
 *
 * Simple image-card carousel used by treatment pages whose "types" section
 * has NO hero banner and NO per-slide description (currently cataract & lasik).
 * Renders a centered header followed by a 3-up image carousel (side / main / side)
 * where each card shows its image with the title below it.
 */
const TreatmentTypesCards = ({ data, slug = "treatment" }) => {
  const slides =
    data.slides ??
    [data.items?.left, data.items?.main, data.items?.right].filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(1);

  const getSlide = (offset) =>
    slides[(activeIndex + offset + slides.length) % slides.length];

  const previousSlide = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  const leftSlide = getSlide(-1);
  const activeSlide = getSlide(0);
  const rightSlide = getSlide(1);

  return (
    <section
      className={styles["types-cards"]}
      aria-labelledby={`${slug}-types-title`}
    >
      <div className={styles["types-cards__header"]}>
        <h2 id={`${slug}-types-title`}>{data.title}</h2>
        {data.description && <p>{data.description}</p>}
      </div>

      <div
        className={styles["types-cards__stage"]}
        aria-label={`${data.title} carousel`}
      >
        <button
          className={styles["types-cards__arrow"]}
          type="button"
          aria-label={data.controls?.previousAriaLabel ?? "Previous"}
          onClick={previousSlide}
        >
          <ArrowIcon direction="left" />
        </button>

        <article
          className={`${styles["types-cards__item"]} ${styles["types-cards__item--side"]}`}
        >
          <Image
            src={leftSlide.image}
            alt={leftSlide.alt ?? leftSlide.title}
            width={282}
            height={225}
          />
          <h3>{leftSlide.title}</h3>
        </article>

        <article
          className={`${styles["types-cards__item"]} ${styles["types-cards__item--main"]}`}
          aria-live="polite"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt ?? activeSlide.title}
            width={474}
            height={381}
            priority
          />
          <h3>{activeSlide.title}</h3>
        </article>

        <article
          className={`${styles["types-cards__item"]} ${styles["types-cards__item--side"]}`}
        >
          <Image
            src={rightSlide.image}
            alt={rightSlide.alt ?? rightSlide.title}
            width={282}
            height={225}
          />
          <h3>{rightSlide.title}</h3>
        </article>

        <button
          className={styles["types-cards__arrow"]}
          type="button"
          aria-label={data.controls?.nextAriaLabel ?? "Next"}
          onClick={nextSlide}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>
    </section>
  );
};

export default TreatmentTypesCards;
