import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { SERVICE_RETINA_CONTENT } from "@/constant/serviceRetinaContent";
import styles from "./styles.module.css";

const ArrowIcon = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles["clinical-expertise__arrow"]}
  >
    <path
      d="M4.5 13.5L13.5 4.5M13.5 4.5H6.5M13.5 4.5V11.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RetinaClinicalExpertise = () => {
  const { clinicalExpertise: data } = SERVICE_RETINA_CONTENT;

  const cardBgSrc = data.cardBg || "";
  const cardBgAlt = data.cardBgAlt || "";

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
      { threshold: 0.1 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles["clinical-expertise"]} ${
        isRevealed ? styles["is-revealed"] : ""
      }`.trim()}
      aria-labelledby="clinical-expertise-title"
    >
      <div className={styles["clinical-expertise__inner"]}>
        <div className={styles["clinical-expertise__header"]}>
          <h2 id="clinical-expertise-title">{data.title}</h2>
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

          <div className={styles["clinical-expertise__doctors-grid"]}>
            {data.doctors.map((doctor, idx) => {
              const isLeft = doctor.imagePosition === "left";
              return (
                <div
                  key={doctor.name}
                  className={`${styles["clinical-expertise__doctor-row"]} ${
                    isLeft ? styles["is-left"] : styles["is-right"]
                  }`}
                >
                  {isLeft && (
                    <div className={styles["clinical-expertise__doctor-img-container"]}>
                      <img
                        src={doctor.image}
                        alt={doctor.imageAlt}
                        className={styles["clinical-expertise__doctor-img"]}
                      />
                    </div>
                  )}

                  <div className={styles["clinical-expertise__doctor-card"]}>
                    <div className={styles["clinical-expertise__doctor-info"]}>
                      <h3 className={styles["clinical-expertise__doctor-name"]}>
                        {doctor.name}
                      </h3>
                      <p className={styles["clinical-expertise__doctor-desc"]}>
                        {doctor.description}
                      </p>
                    </div>
                    <Link
                      href={doctor.buttonLink}
                      className={styles["clinical-expertise__doctor-btn"]}
                    >
                      <span>{doctor.buttonText}</span>
                      <div className={styles["clinical-expertise__arrow-circle"]}>
                        <ArrowIcon />
                      </div>
                    </Link>
                  </div>

                  {!isLeft && (
                    <div className={styles["clinical-expertise__doctor-img-container"]}>
                      <img
                        src={doctor.image}
                        alt={doctor.imageAlt}
                        className={styles["clinical-expertise__doctor-img"]}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetinaClinicalExpertise;
