import { useState } from "react";
import Image from "next/image";
import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const TypesOfLasik = () => {
  const { types } = SERVICE_LASIK_CONTENT;
  const slides = types.slides;
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
    <section className={styles["types-lasik"]} aria-labelledby="types-lasik-title">
      <div className={styles["types-lasik__header"]}>
        <h2 id="types-lasik-title">{types.title}</h2>
        <p>{types.description}</p>
      </div>

      <div className={styles["types-lasik__stage"]} aria-label="Types of refractive errors carousel">
        <button
          className={styles["types-lasik__arrow"]}
          type="button"
          aria-label={types.controls.previousAriaLabel}
          onClick={previousSlide}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <article className={`${styles["types-lasik__item"]} ${styles["types-lasik__item--side"]}`}>
          <Image src={leftSlide.image} alt={leftSlide.alt} width={282} height={225} />
          <h3>{leftSlide.title}</h3>
        </article>

        <article
          className={`${styles["types-lasik__item"]} ${styles["types-lasik__item--main"]}`}
          aria-live="polite"
        >
          <Image src={activeSlide.image} alt={activeSlide.alt} width={474} height={381} priority />
          <h3>{activeSlide.title}</h3>
        </article>

        <article className={`${styles["types-lasik__item"]} ${styles["types-lasik__item--side"]}`}>
          <Image src={rightSlide.image} alt={rightSlide.alt} width={282} height={225} />
          <h3>{rightSlide.title}</h3>
        </article>

        <button
          className={styles["types-lasik__arrow"]}
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

export default TypesOfLasik;
