import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./styles.module.css";

/* ── Multi-doctor panel (Pediatric style — DEFAULT) ────────────── */
const MultiDoctorPanel = ({ data, sectionRef, isRevealed, slug }) => (
  <section
    ref={sectionRef}
    className={`${styles["clinical-expertise"]} ${
      isRevealed ? styles["is-revealed"] : ""
    }`.trim()}
    aria-labelledby={`${slug}-clinical-expertise-title`}
  >
    <div className={styles["clinical-expertise__inner"]}>
      <div className={styles["clinical-expertise__header"]}>
        <h2 id={`${slug}-clinical-expertise-title`}>{data.title}</h2>
        <p>{data.intro}</p>
      </div>

      <div className={styles["clinical-expertise__panel"]}>
        {data.cardBg && (
          <img
            src={data.cardBg}
            alt=""
            aria-hidden="true"
            className={styles["clinical-expertise__watermark"]}
          />
        )}

        <div className={styles["clinical-expertise__doctors"]}>
          {(data.doctors || []).map((doctor) => (
            <article
              className={styles["clinical-expertise__doctor-card"]}
              key={doctor.name}
            >
              <div className={styles["clinical-expertise__doctor-unit"]}>
                <img
                  src={doctor.image}
                  alt={doctor.imageAlt || doctor.name}
                  className={styles["clinical-expertise__doctor-image"]}
                />
                <div className={styles["clinical-expertise__doctor-info"]}>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.description}</p>
                  <a
                    href={doctor.href || "/doctors"}
                    className={styles["clinical-expertise__doctor-link"]}
                    aria-label={`View profile for ${doctor.name}`}
                  >
                    <span>View Doctor Profiles</span>
                    <span className={styles["clinical-expertise__doctor-link-icon"]}>
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ── Single-doctor card (Squint style) ─────────────────────────── */
const SingleDoctorCard = ({ data, sectionRef, isRevealed, slug }) => {
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

/* ── Main export ───────────────────────────────────────────────── */
const TreatmentClinicalExpertise = ({ data, slug = "treatment" }) => {
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsRevealed(true); observer.disconnect(); }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variant = data.variant ?? "multi";
  const sharedProps = { data, sectionRef, isRevealed, slug };

  return variant === "single"
    ? <SingleDoctorCard {...sharedProps} />
    : <MultiDoctorPanel {...sharedProps} />;
};

export default TreatmentClinicalExpertise;
