import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const TreatmentDiagnosis = ({ data, slug = "treatment" }) => {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeTreatmentIndex, setActiveTreatmentIndex] = useState(0);
  const treatments = data.treatments || [];
  const visibleMobileTreatments = treatments.length
    ? [
        treatments[activeTreatmentIndex],
        treatments[(activeTreatmentIndex + 1) % treatments.length],
      ].filter(Boolean)
    : [];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (treatments.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveTreatmentIndex((current) => (current + 1) % treatments.length);
    }, 2500);

    return () => window.clearInterval(timer);
  }, [treatments.length]);

  const renderTreatmentCard = (item, index, isSlider = false) => (
    <article
      className={`${styles["treatment-diagnosis__treatment-card"]} ${
        item.highlighted
          ? styles["treatment-diagnosis__treatment-card--highlight"]
          : ""
      }`}
      style={{ "--item-index": index }}
      key={item.number}
    >
      <Image
        src={isSlider && item.sliderImage ? item.sliderImage : item.image}
        alt={item.alt}
        width={item.highlighted ? 3816 : 1755}
        height={item.highlighted ? 1569 : 1875}
        className={styles["treatment-diagnosis__treatment-image"]}
      />
      <div className={styles["treatment-diagnosis__treatment-content"]}>
        <h3>
          <span>{item.number}</span> {item.title}
        </h3>
        <p>{item.description}</p>
      </div>
    </article>
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles["treatment-diagnosis"]} ${
        isRevealed ? styles["is-revealed"] : ""
      }`.trim()}
      aria-labelledby={`${slug}-diagnosis-title`}
    >
      <div
        className={styles["treatment-diagnosis__panel"]}
        style={
          data.bgImage
            ? { backgroundImage: `url('${data.bgImage}')` }
            : undefined
        }
      >
        <div className={styles["treatment-diagnosis__copy"]}>
          <h2 id={`${slug}-diagnosis-title`}>{data.title}</h2>
          {data.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className={styles["treatment-diagnosis__media-list"]}>
          {(data.media || []).map((item, index) => (
            <figure
              className={styles["treatment-diagnosis__media-card"]}
              style={{ "--item-index": index }}
              key={item.title}
            >
              <div className={styles["treatment-diagnosis__media-frame"]}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1779}
                  height={792}
                  className={styles["treatment-diagnosis__media-image"]}
                />
                {/* <PlayIcon /> */}
              </div>
              <figcaption
                className={styles["treatment-diagnosis__media-label"]}
              >
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles["treatment-diagnosis__treatments"]}>
        {treatments.map((item, index) =>
          renderTreatmentCard(item, index, false),
        )}
      </div>

      <div className={styles["treatment-diagnosis__treatment-slider"]}>
        <div
          className={styles["treatment-diagnosis__treatment-track"]}
          aria-live="polite"
        >
          {visibleMobileTreatments.map((item, index) =>
            renderTreatmentCard(item, activeTreatmentIndex + index, true),
          )}
        </div>
        <div
          className={styles["treatment-diagnosis__treatment-dots"]}
          aria-label="Treatment options slides"
        >
          {treatments.map((item, index) => (
            <button
              key={`treatment-dot-${item.number ?? index}`}
              type="button"
              className={`${styles["treatment-diagnosis__treatment-dot"]} ${
                activeTreatmentIndex === index
                  ? styles["treatment-diagnosis__treatment-dot--active"]
                  : ""
              }`}
              aria-label={`Show treatment option ${index + 1}`}
              aria-current={activeTreatmentIndex === index ? "true" : undefined}
              onClick={() => setActiveTreatmentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentDiagnosis;
