import { useRef, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const specialistImagesByName = new Map(
  (HOME_CONTENT.specialist?.doctors || []).map((doctor) => [doctor.name, doctor.image]),
);

/* Multi-doctor panel */
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
          {(data.doctors || []).map((doctor, index) => (
            <article
              className={styles["clinical-expertise__doctor-card"]}
              style={{ "--doctor-index": index }}
              key={doctor.name}
            >
              <div className={styles["clinical-expertise__doctor-unit"]}>
                <img
                  src={specialistImagesByName.get(doctor.name) || doctor.image}
                  alt={doctor.imageAlt || doctor.name}
                  className={styles["clinical-expertise__doctor-image"]}
                />
                <div className={styles["clinical-expertise__doctor-info"]}>
                  <h3>{doctor.name}</h3>
                  <p>{doctor.description}</p>
                  <a
                    href={doctor.href || doctor.buttonLink || "/doctors"}
                    className={styles["clinical-expertise__doctor-link"]}
                    aria-label={`View profile for ${doctor.name}`}
                  >
                    <span>{doctor.buttonText || "View Doctor Profiles"}</span>
                    <span
                      className={styles["clinical-expertise__doctor-link-icon"]}
                    >
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

const TreatmentClinicalExpertise = ({ data, slug = "treatment" }) => {
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

  return (
    <MultiDoctorPanel
      data={data}
      sectionRef={sectionRef}
      isRevealed={isRevealed}
      slug={slug}
    />
  );
};

export default TreatmentClinicalExpertise;