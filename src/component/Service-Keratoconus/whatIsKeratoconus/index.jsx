import { SERVICE_KERATOCONUS_CONTENT } from "@/constant/serviceKeratoconusContent";
import styles from "./styles.module.css";

const WhatIsKeratoconus = () => {
  const { title, paragraphs, image } = SERVICE_KERATOCONUS_CONTENT.whatIsKeratoconus;

  return (
    <section className={styles.section} aria-labelledby="what-is-keratoconus-title">
      <div className={styles.inner}>
        <div className={styles.copyColumn}>
          <h2 id="what-is-keratoconus-title" className={styles.title}>
            {title}
          </h2>

          <div className={styles.paragraphs}>
            {paragraphs.map((paragraph, index) => (
              <p key={`what-is-keratoconus-${index}`} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.progressTrack} aria-hidden="true">
            <span className={styles.progressFill} />
          </div>
        </div>

        <div className={styles.visualColumn}>
          <img src={image.src} alt={image.alt} className={styles.visualImage} />
        </div>
      </div>
    </section>
  );
};

export default WhatIsKeratoconus;
