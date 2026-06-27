import Image from "next/image";
import { SERVICE_SQUINT_CONTENT } from "@/constant/serviceSquintContent";
import styles from "./styles.module.css";

const PlayIcon = () => (
  <span className={styles["squint-diagnosis__play"]} aria-hidden="true" />
);

const HowSquintIsDiagnosed = () => {
  const { diagnosis } = SERVICE_SQUINT_CONTENT;

  return (
    <section
      className={styles["squint-diagnosis"]}
      aria-labelledby="squint-diagnosis-title"
    >
      <div className={styles["squint-diagnosis__panel"]}>
        <div className={styles["squint-diagnosis__copy"]}>
          <h2 id="squint-diagnosis-title">{diagnosis.title}</h2>
          {diagnosis.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles["squint-diagnosis__media-list"]}>
          {diagnosis.media.map((item) => (
            <figure className={styles["squint-diagnosis__media-card"]} key={item.title}>
              <div className={styles["squint-diagnosis__media-frame"]}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={760}
                  height={285}
                  className={styles["squint-diagnosis__media-image"]}
                />
                <PlayIcon />
              </div>
              <figcaption className={styles["squint-diagnosis__media-label"]}>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles["squint-diagnosis__treatments"]}>
        {diagnosis.treatments.map((item) => (
          <article
            className={`${styles["squint-diagnosis__treatment-card"]} ${
              item.highlighted
                ? styles["squint-diagnosis__treatment-card--highlight"]
                : ""
            }`}
            key={item.number}
          >
            <h3>
              <span>{item.number}</span> {item.title}
            </h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowSquintIsDiagnosed;
