import Link from "next/link";
import styles from "./styles.module.css";

const DryEye = () => {
  return (
    <section
      className={styles["dry-eye-service"]}
      id="dry-eye-treatment"
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

          <Link
            className={styles["dry-eye-service__link"]}
            href="/service#dry-eye-treatment"
          >
            <span>Explore More</span>
            <i aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 17 17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </i>
          </Link>
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
