import { ABOUT_CONTENT } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const ExperienceSection = () => {
  const { titleLines, subtitleLines, image, paragraphs } = ABOUT_CONTENT.experience;

  const renderLines = (lines) =>
    lines.map((line, index) => (
      <span key={`${line}-${index}`}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));

  return (
    <section className={styles.section} aria-labelledby="about-experience-title">
      <div className={styles.careContainer}>
        <div className={styles.header}>
          <h2 id="about-experience-title" className={styles.title}>
            {renderLines(titleLines)}
          </h2>
          <p className={styles.subtitle}>{renderLines(subtitleLines)}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <div className={styles.backAccent} aria-hidden="true" />
            <img
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
            <div className={styles.frontAccent} aria-hidden="true" />
          </div>

          <div className={styles.copy}>
            {paragraphs.map((paragraphLines, index) => (
              <p key={`paragraph-${index}`}>{renderLines(paragraphLines)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
