import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const CataractRiskFactors = () => {
  const { risks } = SERVICE_CATARACT_CONTENT;

  return (
    <section className={styles["cataract-risks"]} aria-labelledby="cataract-risks-title">
      <div className={styles["cataract-risks__header"]}>
        <h2 id="cataract-risks-title">
          {risks.titleLines[0]}
          <br />
          {risks.titleLines[1]}
        </h2>
        <p>
          {risks.descriptionLines[0]}
          <br />
          {risks.descriptionLines[1]}
        </p>
      </div>

      <div className={styles["cataract-risks__cards"]}>
        {risks.items.map((factor) => (
          <article className={styles["cataract-risk-card"]} key={factor.number}>
            <img src={factor.image} alt={factor.title} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default CataractRiskFactors;
