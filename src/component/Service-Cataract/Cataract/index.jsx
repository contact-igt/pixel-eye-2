import { useRef, useEffect, useState } from "react";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const CataractRiskFactors = ({
  riskContent = SERVICE_CATARACT_CONTENT.risks,
  sectionId = "cataract-risks",
  variant = "image",
  cardsLayout = "default",
}) => {
  const risks = riskContent;
  const cardsRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const total = risks.items.length;

  useEffect(() => {
    const node = cardsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles["cataract-risks"]} aria-labelledby={`${sectionId}-title`}>
      <div className={styles["cataract-risks__header"]}>
        <h2 id={`${sectionId}-title`}>
          {risks.titleLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </h2>
        <p>
          {risks.descriptionLines.map((line, index) => (
            <span key={line}>
              {index > 0 ? <br /> : null}
              {line}
            </span>
          ))}
        </p>
      </div>

      <div
        ref={cardsRef}
        className={`${styles["cataract-risks__cards"]} ${
          variant === "text" ? styles["cataract-risks__cards--text"] : ""
        } ${cardsLayout === "centered" ? styles["cataract-risks__cards--centered"] : ""} ${
          isRevealed ? styles["is-revealed"] : ""
        }`.trim()}
        style={{ "--total": total }}
      >
        {risks.items.map((factor, index) => (
          <article
            className={`${styles["cataract-risk-card"]} ${
              variant === "text" ? styles["cataract-risk-card--text"] : ""
            }`}
            style={{
              "--i": index,
            }}
            key={factor.number}
          >
            {variant === "text" ? (
              <>
                <span className={styles["cataract-risk-card__number"]}>{factor.number}</span>
                <p className={styles["cataract-risk-card__title"]}>{factor.title}</p>
                <img
                  className={styles["cataract-risk-card__icon"]}
                  src={factor.image}
                  alt=""
                  aria-hidden="true"
                />
              </>
            ) : (
              <img src={factor.image} alt={factor.title} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default CataractRiskFactors;