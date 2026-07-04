import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const LasikLaserVisionOptions = () => {
  const { laserVisionOptions } = SERVICE_LASIK_CONTENT;
  const { options } = laserVisionOptions;
  const optionCards = [options.left, options.main, options.right];
  const [activeIndex, setActiveIndex] = useState(1);

  const getCard = (offset) =>
    optionCards[(activeIndex + offset + optionCards.length) % optionCards.length];

  const previousCard = () => {
    setActiveIndex((current) => (current - 1 + optionCards.length) % optionCards.length);
  };

  const nextCard = () => {
    setActiveIndex((current) => (current + 1) % optionCards.length);
  };

  const leftCard = getCard(-1);
  const activeCard = getCard(0);
  const rightCard = getCard(1);

  return (
    <section
      className={styles["laser-options"]}
      aria-labelledby="laser-options-title"
    >
      <div className={styles["laser-options__inner"]}>
        <div className={styles["laser-options__hero"]}>
          <Image
            className={styles["laser-options__hero-image"]}
            src={laserVisionOptions.backgroundImage.src}
            alt={laserVisionOptions.backgroundImage.alt}
            width={1361}
            height={411}
          />
          <div className={styles["laser-options__copy"]}>
            <h2 id="laser-options-title">{laserVisionOptions.title}</h2>
            <p>{laserVisionOptions.description}</p>
          </div>
        </div>

        <div
          className={styles["laser-options__stage"]}
          aria-label="Laser vision correction options"
        >
          <button
            type="button"
            className={`${styles["laser-options__arrow"]} ${styles["laser-options__arrow--prev"]}`}
            aria-label={laserVisionOptions.controls.previousAriaLabel}
            onClick={previousCard}
          >
            <ChevronLeft aria-hidden="true" strokeWidth={2.5} />
          </button>

          <article
            className={`${styles["laser-options__card"]} ${styles["laser-options__card--side"]} ${styles["laser-options__card--left"]}`}
          >
            <Image
              src={leftCard.image}
              alt={leftCard.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 25vw"
            />
            <div className={styles["laser-options__side-copy"]}>
              <h3>{leftCard.title}</h3>
              <p>{leftCard.description}</p>
            </div>
          </article>

          <article
            className={`${styles["laser-options__card"]} ${styles["laser-options__card--main"]}`}
            aria-label={activeCard.title}
            aria-live="polite"
          >
            <Image
              src={activeCard.image}
              alt={activeCard.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 38vw"
            />
            <div className={styles["laser-options__main-copy"]}>
              <h3>{activeCard.title}</h3>
              <p>{activeCard.description}</p>
            </div>
          </article>

          <article
            className={`${styles["laser-options__card"]} ${styles["laser-options__card--side"]} ${styles["laser-options__card--right"]}`}
          >
            <Image
              src={rightCard.image}
              alt={rightCard.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 24vw"
            />
            <div className={styles["laser-options__side-copy"]}>
              <h3>{rightCard.title}</h3>
              <p>{rightCard.description}</p>
            </div>
          </article>

          <button
            type="button"
            className={`${styles["laser-options__arrow"]} ${styles["laser-options__arrow--next"]}`}
            aria-label={laserVisionOptions.controls.nextAriaLabel}
            onClick={nextCard}
          >
            <ChevronRight aria-hidden="true" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LasikLaserVisionOptions;
