import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const TreatmentApproach = ({
  treatmentContent = SERVICE_CATARACT_CONTENT.treatmentApproach,
  sectionId = "treatment-approach",
  contentLayout = "default",
  sectionWidth = "default",
  children,
}) => {
  const treatment = treatmentContent;

  const imageSrc =
    typeof treatment.image === "string"
      ? treatment.image
      : treatment.image?.src || "";
  const mobileImageSrc =
    typeof treatment.mobileImage === "string"
      ? treatment.mobileImage
      : treatment.mobileImage?.src || "";
  const imageAlt =
    typeof treatment.image === "string"
      ? treatment.imageAlt || ""
      : treatment.image?.alt || treatment.imageAlt || "";

  return (
    <section
      className={`${styles["treatment-approach"]} ${
        sectionWidth === "full" ? styles["treatment-approach--full"] : ""
      }`}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className={styles["treatment-approach__card"]}>
        <picture className={styles["treatment-approach__media"]}>
          {mobileImageSrc ? (
            <source media="(max-width: 768px)" srcSet={mobileImageSrc} />
          ) : null}
          <img
            className={styles["treatment-approach__image"]}
            src={imageSrc}
            alt={imageAlt}
          />
        </picture>

        <div
          className={`${styles["treatment-approach__overlay"]} ${
            contentLayout === "wide"
              ? styles["treatment-approach__overlay--wide"]
              : ""
          }`}
        >
          <div
            className={`${styles["treatment-approach__content"]} ${
              contentLayout === "wide"
                ? styles["treatment-approach__content--wide"]
                : ""
            }`}
          >
            <h2 id={`${sectionId}-title`}>{treatment.title}</h2>
            {(treatment.paragraphs || []).map((p, i) => (
              <p key={`${sectionId}-paragraph-${i}`}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {children ? <div className={styles["treatment-approach__addon"]}>{children}</div> : null}
    </section>
  );
};

export default TreatmentApproach;
