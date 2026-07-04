import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const LasikSurgicalOptions = () => {
  const { surgicalOptions } = SERVICE_LASIK_CONTENT;

  return (
    <section
      className={styles["lasik-surgical"]}
      aria-labelledby="lasik-surgical-title"
    >
      <div className={styles["lasik-surgical__inner"]}>
        <div className={styles["lasik-surgical__left"]}>
          <h2 id="lasik-surgical-title">
            {surgicalOptions.titleLines[0]}
            <br />
            {surgicalOptions.titleLines[1]}
          </h2>
          {(surgicalOptions.paragraphs || []).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div
          className={styles["lasik-surgical__right"]}
          aria-label="LASIK surgical options list"
        >
          {(surgicalOptions.options || []).map((option) => (
            <div className={styles["lasik-surgical__card"]} key={option.id}>
              <div className={styles["lasik-surgical__media"]}>
                <img
                  src={option.image}
                  alt={option.imageAlt || option.title}
                  className={styles["lasik-surgical__img"]}
                />
                <button
                  type="button"
                  className={styles["lasik-surgical__play"]}
                  aria-label={`Play ${option.title}`}
                >
                  <span className={styles["lasik-surgical__play-triangle"]} />
                </button>
              </div>
              <p className={styles["lasik-surgical__card-title"]}>
                {option.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LasikSurgicalOptions;
