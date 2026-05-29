import styles from "./styles.module.css";

const DryEye = () => {
  return (
    <section
      className={styles["dry-eye-service"]}
      aria-labelledby="dry-eye-service-title"
    >
      <div className={styles["dry-eye-service__card"]}>
        <h2
          id="dry-eye-service-title"
          className={styles["dry-eye-service__title"]}
        >
          Dry eye
          <br />
          treatment
        </h2>

        <div className={styles["dry-eye-service__details"]}>
          <p>
            Care for conditions in which the eyes do not produce enough tears or
            where tear quality is affected, leading to discomfort and irritation
          </p>

          <a
            className={styles["dry-eye-service__link"]}
            href="/services/dry-eye-treatment"
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
          className={styles["dry-eye-service__image"]}
          src="/assets/Service/Dry eye Treatment.png"
          alt="Close view of an eye receiving drops"
        />
      </div>
    </section>
  );
};

export default DryEye;
