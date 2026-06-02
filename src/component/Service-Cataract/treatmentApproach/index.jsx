import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const TreatmentApproach = () => {
  const { treatmentApproach: treatment } = SERVICE_CATARACT_CONTENT;

  const imageSrc =
    typeof treatment.image === "string"
      ? treatment.image
      : treatment.image?.src || "";
  const imageAlt =
    typeof treatment.image === "string"
      ? treatment.imageAlt || ""
      : treatment.image?.alt || treatment.imageAlt || "";

  return (
    <section
      className={styles["treatment-approach"]}
      aria-labelledby="treatment-approach-title"
    >
      <div className={styles["treatment-approach__card"]}>
        <img
          className={styles["treatment-approach__image"]}
          src={imageSrc}
          alt={imageAlt}
        />

        <div className={styles["treatment-approach__overlay"]}>
          <div className={styles["treatment-approach__content"]}>
            <h2 id="treatment-approach-title">{treatment.title}</h2>
            {(treatment.paragraphs || []).map((p, i) => (
              <p key={`treatment-paragraph-${i}`}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentApproach;
