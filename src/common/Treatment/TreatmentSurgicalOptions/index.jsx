import styles from "./styles.module.css";

const TreatmentSurgicalOptions = ({ data, slug = "treatment" }) => {
  if (!data) return null;

  const { titleLines = [], description, paragraphs = [], options = [] } = data;

  return (
    <section
      className={styles["surgical-options"]}
      aria-labelledby={`${slug}-surgical-options-title`}
    >
      <div className={styles["surgical-options__inner"]}>
        <div className={styles["surgical-options__left"]}>
          <h2 id={`${slug}-surgical-options-title`}>
            {titleLines[0]}
            {titleLines[1] && (
              <>
                <br />
                {titleLines[1]}
              </>
            )}
          </h2>
          {description && <p>{description}</p>}
          {paragraphs.map((para, i) => (
            <p key={`${slug}-surgical-p-${i}`}>{para}</p>
          ))}
        </div>

        <div
          className={styles["surgical-options__right"]}
          aria-label="Surgical options list"
        >
          {options.map((option) => (
            <div className={styles["surgical-options__card"]} key={option.id}>
              <div className={styles["surgical-options__media"]}>
                <img
                  src={option.image}
                  alt={option.imageAlt || option.title}
                  className={styles["surgical-options__img"]}
                />
                {/* Play button intentionally hidden — uncomment if needed
                <button
                  type="button"
                  className={styles["surgical-options__play"]}
                  aria-label={`Play ${option.title}`}
                >
                  <span className={styles["surgical-options__play-triangle"]} />
                </button>
                */}
              </div>
              <div className={styles["surgical-options__card-title"]}>
                {option.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSurgicalOptions;
