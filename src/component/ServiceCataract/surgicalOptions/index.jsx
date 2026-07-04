import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const SurgicalOptions = () => {
  const { surgicalOptions } = SERVICE_CATARACT_CONTENT;

  return (
    <section
      className={styles["surgical-options"]}
      aria-labelledby="surgical-options-title"
    >
      <div className={styles["surgical-options__inner"]}>
        <div className={styles["surgical-options__left"]}>
          <h2 id="surgical-options-title">
            {surgicalOptions.titleLines[0]}
            <br />
            {surgicalOptions.titleLines[1]}
          </h2>
          <p>{surgicalOptions.description}</p>
        </div>

        <div
          className={styles["surgical-options__right"]}
          aria-label="Surgical options list"
        >
          {(surgicalOptions.options || []).map((option) => (
            <div className={styles["surgical-options__card"]} key={option.id}>
              <div className={styles["surgical-options__media"]}>
                <img
                  src={option.image}
                  alt={option.imageAlt || option.title}
                  className={styles["surgical-options__img"]}
                />
                <button
                  type="button"
                  className={styles["surgical-options__play"]}
                  aria-label={`Play ${option.title}`}
                >
                  <span className={styles["surgical-options__play-triangle"]} />
                </button>
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

export default SurgicalOptions;
