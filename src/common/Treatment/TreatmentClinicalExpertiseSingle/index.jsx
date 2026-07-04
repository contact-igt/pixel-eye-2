import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.css";

/* ── Single-doctor card (Squint / Cataract / Lasik style) ──────── */
const TreatmentClinicalExpertiseSingle = ({ data, slug = "treatment" }) => {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

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
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const doctorSrc = data.doctorImage || "";
  const doctorAlt = data.doctorImageAlt || data.doctorName || "";

  return (
    <section
      ref={sectionRef}
      className={`${styles["clinical-expertise"]} ${styles["clinical-expertise--single"]} ${
        isRevealed ? styles["is-revealed"] : ""
      }`.trim()}
      aria-labelledby={`${slug}-clinical-expertise-title`}
    >
      <div className={styles["clinical-expertise__inner"]}>
        <div className={styles["clinical-expertise__header"]}>
          <h2 id={`${slug}-clinical-expertise-title`}>{data.title}</h2>
          <p>{data.intro}</p>
        </div>

        <div className={styles["clinical-expertise__card"]}>
          <div className={styles["clinical-expertise__card-bg-wrapper"]}>
            {data.cardBg && (
              <img
                src={data.cardBg}
                alt={data.cardBgAlt || ""}
                className={styles["clinical-expertise__card-bg"]}
                aria-hidden="true"
              />
            )}
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

export default TreatmentClinicalExpertiseSingle;
