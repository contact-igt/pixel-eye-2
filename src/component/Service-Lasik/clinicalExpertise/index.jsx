import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const LasikClinicalExpertise = () => {
  const { clinicalExpertise: data } = SERVICE_LASIK_CONTENT;

  const cardBgSrc = data.cardBg || "";
  const cardBgAlt = data.cardBgAlt || "";
  const doctorSrc = data.doctorImage || "";
  const doctorAlt = data.doctorImageAlt || data.doctorName || "";

  return (
    <section
      className={styles["clinical-expertise"]}
      aria-labelledby="lasik-clinical-expertise-title"
    >
      <div className={styles["clinical-expertise__inner"]}>
        <div className={styles["clinical-expertise__header"]}>
          <h2 id="lasik-clinical-expertise-title">{data.title}</h2>
          <p>{data.intro}</p>
        </div>

        <div className={styles["clinical-expertise__card"]}>
          <div className={styles["clinical-expertise__card-bg-wrapper"]}>
            <img
              src={cardBgSrc}
              alt={cardBgAlt}
              className={styles["clinical-expertise__card-bg"]}
              aria-hidden="true"
            />
          </div>

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

export default LasikClinicalExpertise;
