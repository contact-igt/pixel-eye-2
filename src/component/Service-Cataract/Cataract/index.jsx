import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const CataractRiskFactors = ({
  riskContent = SERVICE_CATARACT_CONTENT.risks,
  sectionId = "cataract-risks",
  variant = "image",
  cardsLayout = "default",
}) => {
  const risks = riskContent;

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
        className={`${styles["cataract-risks__cards"]} ${
          variant === "text" ? styles["cataract-risks__cards--text"] : ""
        } ${cardsLayout === "centered" ? styles["cataract-risks__cards--centered"] : ""}`}
      >
        {risks.items.map((factor) => (
          <article
            className={`${styles["cataract-risk-card"]} ${
              variant === "text" ? styles["cataract-risk-card--text"] : ""
            }`}
            key={factor.number}
          >
            {variant === "text" ? (
              <>
                <span className={styles["cataract-risk-card__number"]}>{factor.number}</span>
                <p className={styles["cataract-risk-card__title"]}>{factor.title}</p>
                <div className={styles["cataract-risk-card__eye"]} aria-hidden="true">
                  <span className={styles["cataract-risk-card__eye-outline"]} />
                  <span className={styles["cataract-risk-card__eye-iris"]} />
                  <span className={styles["cataract-risk-card__eye-highlight"]} />
                </div>
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
