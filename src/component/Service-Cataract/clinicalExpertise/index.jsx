import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const ClinicalExpertise = () => {
  const { clinicalExpertise: data } = SERVICE_CATARACT_CONTENT;

  const cardBgSrc = data.cardBg || "";
  const cardBgAlt = data.cardBgAlt || "";
  const doctorSrc = data.doctorImage || "";
  const doctorAlt = data.doctorImageAlt || data.doctorName || "";

  return (
    <section
      className={styles["clinical-expertise"]}
      aria-labelledby="clinical-expertise-title"
    >
      <div className={styles["clinical-expertise__inner"]}>
        <div className={styles["clinical-expertise__header"]}>
          <h2 id="clinical-expertise-title">{data.title}</h2>
          <p>{data.intro}</p>
        </div>

        <div className={styles["clinical-expertise__card"]}>
          <img
            src={cardBgSrc}
            alt={cardBgAlt}
            className={styles["clinical-expertise__card-bg"]}
            aria-hidden="true"
          />

          <div className={styles["clinical-expertise__card-body"]}>
            <div className={styles["clinical-expertise__text"]}>
              <h3 className={styles["clinical-expertise__doctor-name"]}>
                {data.doctorName}
              </h3>
              <p className={styles["clinical-expertise__doctor-desc"]}>
                {data.doctorDescription}
              </p>
            </div>
          </div>

          <img
            src={doctorSrc}
            alt={doctorAlt}
            className={styles["clinical-expertise__doctor"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ClinicalExpertise;
