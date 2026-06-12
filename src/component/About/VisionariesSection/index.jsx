import { ABOUT_CONTENT } from "@/constant/aboutContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const VisionariesSection = () => {
  const { titleLines, subtitleLines, doctors } = ABOUT_CONTENT.visionaries;

  const renderLines = (lines) =>
    lines.map((line, index) => (
      <span key={`${line}-${index}`}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));

  return (
    <section
      id="visionaries"
      className={styles.section}
      aria-labelledby="visionaries-title"
    >
      <RevealOnView className={styles.revealShell}>
        <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="visionaries-title" className={styles.title}>
            {renderLines(titleLines)}
          </h2>
          <p className={styles.subtitle}>{renderLines(subtitleLines)}</p>
        </header>

        <div className={styles.cards}>
          {doctors.map((doctor, index) => {
            const isRightImage = doctor.imagePosition === "right";
            const rowClass = isRightImage
              ? `${styles.row} ${styles.rowReverse}`
              : styles.row;
            const infoClass = isRightImage
              ? `${styles.infoPanel} ${styles.infoPanelRight}`
              : styles.infoPanel;

            return (
              <div key={doctor.id} className={styles.cardBlock}>
                <article className={rowClass}>
                  <div className={styles.mediaSection}>
                    <div className={styles.imageBlock}>
                      <img
                        src={doctor.backgroundShape.src}
                        alt={doctor.backgroundShape.alt}
                        className={styles.bgShape}
                        aria-hidden="true"
                      />
                      <img
                        src={doctor.image.src}
                        alt={doctor.image.alt}
                        className={styles.image}
                      />
                    </div>

                    <div className={infoClass}>
                      <h3 className={styles.name}>{doctor.name}</h3>
                      <p className={styles.degree}>{doctor.degree}</p>
                      {doctor.specialties.map((speciality) => (
                        <p key={`${doctor.id}-${speciality}`} className={styles.spec}>
                          {speciality}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className={styles.contentSection}>
                    {doctor.paragraphs.map((paragraph, index) => (
                      <p key={`${doctor.id}-p-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                </article>

                {index < doctors.length - 1 && <div className={styles.divider} aria-hidden="true" />}
              </div>
            );
          })}
        </div>
        </div>
      </RevealOnView>
    </section>
  );
};

export default VisionariesSection;
