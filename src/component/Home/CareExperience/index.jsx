import Image from "next/image";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const CareExperience = () => {
  const { careExperience } = HOME_CONTENT;
  const { title, paragraphs, image, mobileImage } = careExperience;

  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </div>

          <div className={styles.imageWrap}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`${styles.image} ${styles.desktopImage}`}
              sizes="(max-width: 991px) 100vw, 560px"
              priority
              draggable={false}
            />
            <Image
              src={mobileImage.src}
              alt={mobileImage.alt}
              fill
              className={`${styles.image} ${styles.mobileImage}`}
              sizes="(max-width: 991px) 100vw, 560px"
              priority
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareExperience;
