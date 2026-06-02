import Link from "next/link";
import styles from "./styles.module.css";

const Retina = () => {
  return (
    <section
      className={styles["retina-service"]}
      id="retina-care"
      aria-labelledby="retina-service-title"
    >
      <div className={styles["retina-service__card"]}>
        <h2
          id="retina-service-title"
          className={styles["retina-service__title"]}
        >
          Retina
          <br />
          care
        </h2>

        <div className={styles["retina-service__details"]}>
          <p>
            Diagnosis and treatment of retinal conditions such as diabetic
            retinopathy, macular degeneration, and retinal detachment that can
            impact vision.
          </p>

          <Link className={styles["retina-service__link"]} href="/service#retina-care">
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
          className={styles["retina-service__image"]}
          src="/assets/Service/Retina Care.png"
          alt="Close view of an eye for retina care"
        />
      </div>
    </section>
  );
};

export default Retina;
