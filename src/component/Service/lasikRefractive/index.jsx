import Button from "@/common/Button";
import styles from "./styles.module.css";

const Refractive = () => {
  return (
    <section
      className={styles["refractive-service"]}
      aria-labelledby="refractive-service-title"
    >
      <div className={styles["refractive-service__card"]}>
        <h2
          id="refractive-service-title"
          className={styles["refractive-service__title"]}
        >
          LASIK and refractive
          <br />
          surgery
        </h2>

        <div className={styles["refractive-service__details"]}>
          <p>
            Procedures that reshape the cornea to correct vision issues such as
            myopia, hyperopia, and astigmatism, helping reduce dependence on
            glasses or contact lenses.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Button
              label="Explore More"
              href="/services/lasik-refractive-surgery"
              variant="muted"
            />
          </div>
        </div>

        <img
          className={styles["refractive-service__image"]}
          src="/assets/Service/Lasik Surgery.png"
          alt="Patient undergoing LASIK eye procedure"
        />
      </div>
    </section>
  );
};

export default Refractive;
