import { useState } from "react";
import Image from "next/image";
import { SERVICE_RETINA_CONTENT } from "@/constant/serviceRetinaContent";
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

const TypesOfRetina = () => {
    const { types } = SERVICE_RETINA_CONTENT;
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

    return (
        <section className={styles["types-retina"]} aria-labelledby="types-retina-title">
            <div className={styles["types-retina__hero"]}>
                <Image
                    src={types.image.src}
                    alt={types.image.alt}
                    width={4083}
                    height={1233}
                    className={styles["types-retina__image"]}
                />
                <div className={styles["types-retina__copy"]}>
                    <h2 id="types-retina-title">{types.title}</h2>
                    <p>{types.description}</p>
                </div>
            </div>

            <div className={styles["types-retina__stage"]} aria-label="Types of retina carousel">
                <div className={styles["types-retina__cards-wrapper"]}>
                    <button
                        className={`${styles["types-retina__arrow"]} ${styles["types-retina__arrow--left"]}`}
                        type="button"
                        aria-label={types.controls.previousAriaLabel}
                        onClick={previousSlide}
                    >
                        <ArrowIcon direction="left" />
                    </button>

                    <article
                        className={`${styles["types-retina__card"]} ${styles["types-retina__card--side"]}`}
                    >
                        {leftSlide.image && (
                            <div className={styles["types-retina__card-image"]}>
                                <Image src={leftSlide.image} alt={leftSlide.title} width={300} height={300} />
                            </div>
                        )}
                        <div className={styles["types-retina__card-content"]}>
                            <h3>{leftSlide.title}</h3>
                            <p>{leftSlide.description}</p>
                        </div>
                    </article>

                    <article
                        className={`${styles["types-retina__card"]} ${styles["types-retina__card--main"]}`}
                        aria-live="polite"
                    >
                        {activeSlide.image && (
                            <div className={styles["types-retina__card-image"]}>
                                <Image src={activeSlide.image} alt={activeSlide.title} width={500} height={500} />
                            </div>
                        )}
                        <div className={styles["types-retina__card-content"]}>
                            <h3>{activeSlide.title}</h3>
                            <p>{activeSlide.description}</p>
                        </div>
                    </article>

                    <article
                        className={`${styles["types-retina__card"]} ${styles["types-retina__card--side"]}`}
                    >
                        {rightSlide.image && (
                            <div className={styles["types-retina__card-image"]}>
                                <Image src={rightSlide.image} alt={rightSlide.title} width={300} height={300} />
                            </div>
                        )}
                        <div className={styles["types-retina__card-content"]}>
                            <h3>{rightSlide.title}</h3>
                            <p>{rightSlide.description}</p>
                        </div>
                    </article>

                    <button
                        className={`${styles["types-retina__arrow"]} ${styles["types-retina__arrow--right"]}`}
                        type="button"
                        aria-label={types.controls.nextAriaLabel}
                        onClick={nextSlide}
                    >
                        <ArrowIcon direction="right" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TypesOfRetina;