import { useState } from "react";
import Image from "next/image";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const TypesOfCataract = () => {
  const { types } = SERVICE_CATARACT_CONTENT;
  const slides =
    types.slides ?? [types.items.left, types.items.main, types.items.right];
  const [activeIndex, setActiveIndex] = useState(1);

  const getSlide = (offset) =>
    slides[(activeIndex + offset + slides.length) % slides.length];

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const leftSlide = getSlide(-1);
  const activeSlide = getSlide(0);
  const rightSlide = getSlide(1);

  return (
    <section className={styles["types-cataract"]} aria-labelledby="types-cataract-title">
      <div className={styles["types-cataract__header"]}>
        <h2 id="types-cataract-title">{types.title}</h2>
        <p>{types.description}</p>
      </div>

      <div className={styles["types-cataract__stage"]} aria-label="Types of cataract carousel">
        <button
          className={styles["types-cataract__arrow"]}
          type="button"
          aria-label={types.controls.previousAriaLabel}
          onClick={previousSlide}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <article className={`${styles["types-cataract__item"]} ${styles["types-cataract__item--side"]}`}>
          <Image src={leftSlide.image} alt={leftSlide.alt} width={282} height={225} />
          <h3>{leftSlide.title}</h3>
        </article>

        <article
          className={`${styles["types-cataract__item"]} ${styles["types-cataract__item--main"]}`}
          aria-live="polite"
        >
          <Image src={activeSlide.image} alt={activeSlide.alt} width={474} height={381} priority />
          <h3>{activeSlide.title}</h3>
        </article>

        <article className={`${styles["types-cataract__item"]} ${styles["types-cataract__item--side"]}`}>
          <Image src={rightSlide.image} alt={rightSlide.alt} width={282} height={225} />
          <h3>{rightSlide.title}</h3>
        </article>

        <button
          className={styles["types-cataract__arrow"]}
          type="button"
          aria-label={types.controls.nextAriaLabel}
          onClick={nextSlide}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TypesOfCataract;
