import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const CataractApproach = () => {
  const { cataractApproach: approach } = SERVICE_CATARACT_CONTENT;
  const imageSrc =
    typeof approach.image === "string"
      ? approach.image
      : approach.image?.src || "";
  const imageAlt =
    typeof approach.image === "string"
      ? approach.imageAlt || ""
      : approach.image?.alt || approach.imageAlt || "";

  const paragraphs = approach.paragraphs || [];

  return (
    <section
      className={styles["cataract-approach"]}
      aria-labelledby="cataract-approach-title"
    >
      <div className={styles["cataract-approach__inner"]}>
        <div className={styles["cataract-approach__media"]}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles["cataract-approach__img"]}
          />
        </div>

        <div className={styles["cataract-approach__copy"]}>
          <h2 id="cataract-approach-title">
            {approach.titleLines[0]}
            <br />
            {approach.titleLines[1]}
          </h2>

          {paragraphs[0] && (
            <p className={styles["cataract-approach__p"]}>{paragraphs[0]}</p>
          )}

          {paragraphs[1] && (
            <p className={styles["cataract-approach__p"]}>{paragraphs[1]}</p>
          )}

          <ul className={styles["cataract-approach__outcomes"]}>
            {(approach.outcomes || []).map((o, i) => (
              <li key={o} className={styles["cataract-approach__outcome"]}>
                <span className={styles["cataract-approach__outcome-label"]}>
                  {String.fromCharCode(97 + i)})
                </span>
                <span className={styles["cataract-approach__outcome-text"]}>
                  {o}
                </span>
              </li>
            ))}
          </ul>

          {paragraphs.slice(2).map((p, i) => (
            <p
              key={`cataract-approach-p-${i}`}
              className={styles["cataract-approach__p"]}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CataractApproach;
