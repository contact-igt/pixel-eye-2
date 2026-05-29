import styles from "./styles.module.css";

const Keratoconous = () => {
  return (
    <section
      className={styles["keratoconus-service"]}
      aria-labelledby="keratoconus-service-title"
    >
      <div className={styles["keratoconus-service__card"]}>
        <h2
          id="keratoconus-service-title"
          className={styles["keratoconus-service__title"]}
        >
          Keratoconus
          <br />
          treatment
        </h2>

        <div className={styles["keratoconus-service__details"]}>
          <p>
            Management of a condition where the cornea thins and changes shape,
            affecting how light is focused, leading to blurred vision.
          </p>

          <a
            className={styles["keratoconus-service__link"]}
            href="/services/keratoconus-treatment"
          >
            <span>Explore More</span>
            <i aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </i>
          </a>
        </div>

        <img
          className={styles["keratoconus-service__image"]}
          src="/assets/Service/Keratoconus treatment.png"
          alt="Keratoconus eye examination"
        />
      </div>
    </section>
  );
};

export default Keratoconous;
