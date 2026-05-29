import styles from "./styles.module.css";

const Glaucomo = () => {
  return (
    <section
      className={styles["glaucoma-service"]}
      aria-labelledby="glaucoma-service-title"
    >
      <div className={styles["glaucoma-service__card"]}>
        <h2
          id="glaucoma-service-title"
          className={styles["glaucoma-service__title"]}
        >
          Glaucoma
          <br />
          care
        </h2>

        <div className={styles["glaucoma-service__details"]}>
          <p>
            Monitoring and treatment of conditions that damage the optic nerve,
            often linked to increased eye pressure. Early detection is key to
            preventing vision loss.
          </p>

          <a
            className={styles["glaucoma-service__link"]}
            href="/services/glaucoma-care"
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
          className={styles["glaucoma-service__image"]}
          src="/assets/Service/Glaucoma care.png"
          alt="Close view of an eye for glaucoma care"
        />
      </div>
    </section>
  );
};

export default Glaucomo;
