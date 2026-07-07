import Image from "next/image";
import styles from "./styles.module.css";

const TreatmentExplainerCataract = ({ explainer, slug = "treatment" }) => {
  if (!explainer) return null;

  const titleId = `${slug}-explainer-title`;

  const renderImage = (image) => {
    if (!image) return null;

    return image.mobileSrc ? (
      <>
        <Image
          src={image.src}
          alt={image.alt}
          width={2484}
          height={1398}
          className={`${styles.image} ${styles["image--desktop"]}`}
        />
        <Image
          src={image.mobileSrc}
          alt={image.alt}
          width={686}
          height={340}
          className={`${styles.image} ${styles["image--mobile"]}`}
        />
      </>
    ) : (
      <Image
        src={image.src}
        alt={image.alt}
        width={2484}
        height={1398}
        className={styles.image}
      />
    );
  };

  return (
    <section className={styles.explainer} aria-labelledby={titleId}>
      <div className={styles.copy}>
        <h1 id={titleId} className={styles.title}>
          {explainer.title}
        </h1>
        {explainer.paragraphs.map((paragraph, index) => (
          <p key={`cataract-explainer-paragraph-${index}`}>{paragraph}</p>
        ))}
      </div>

      {explainer.image && (
        <div
          className={styles.visual}
          aria-label="Normal eye and cataract comparison"
        >
          {renderImage(explainer.image)}
        </div>
      )}
    </section>
  );
};

export default TreatmentExplainerCataract;
