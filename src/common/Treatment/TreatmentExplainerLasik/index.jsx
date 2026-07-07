import Image from "next/image";
import styles from "./styles.module.css";

const TreatmentExplainerLasik = ({ explainer }) => {
  if (!explainer) return null;

  return (
    <section className={styles.explainer}>
      <div className={styles.copy}>
        {explainer.paragraphs.map((paragraph, index) => (
          <p key={`lasik-explainer-paragraph-${index}`}>{paragraph}</p>
        ))}

        {explainer.loader && (
          <Image
            src={explainer.loader.src}
            alt={explainer.loader.alt}
            width={1029}
            height={21}
            className={styles.loader}
            aria-hidden="true"
          />
        )}
      </div>
    </section>
  );
};

export default TreatmentExplainerLasik;
