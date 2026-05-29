import styles from "./styles.module.css";

const Squint = () => {
  return (
    <section
      className={styles["squint-service"]}
      aria-labelledby="squint-service-title"
    >
      <div className={styles["squint-service__card"]}>
        <h2
          id="squint-service-title"
          className={styles["squint-service__title"]}
        >
          Squint
          <br />
          treatment
        </h2>

        <div className={styles["squint-service__details"]}>
          <p>
            Management of eye misalignment that can affect coordination and depth
            perception. Treatment is tailored to the severity and type of
            condition.
          </p>

          <a
            className={styles["squint-service__link"]}
            href="/services/squint-treatment"
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
          className={styles["squint-service__image"]}
          src="/assets/Service/Squint Treatment.png"
          alt="Child receiving a squint eye examination"
        />
      </div>
    </section>
  );
};

export default Squint;
