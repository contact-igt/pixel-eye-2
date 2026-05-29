import Button from "@/common/Button";
import styles from "./styles.module.css";

const Paediatric = () => {
  return (
    <section
      className={styles["paediatric-service"]}
      aria-labelledby="paediatric-service-title"
    >
      <div className={styles["paediatric-service__card"]}>
        <h2
          id="paediatric-service-title"
          className={styles["paediatric-service__title"]}
        >
          Paediatric
          <br />
          ophthalmology
        </h2>

        <div className={styles["paediatric-service__details"]}>
          <p>
            Eye care for children, including vision development, early detection
            of conditions, and treatment of both routine and complex eye
            concerns.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Button
              label="Explore More"
              href="/services/paediatric-ophthalmology"
              variant="muted"
            />
          </div>
        </div>

        <img
          className={styles["paediatric-service__image"]}
          src="/assets/Service/Paediatric ophthalmology.png"
          alt="Child having an eye examination"
        />
      </div>
    </section>
  );
};

export default Paediatric;
