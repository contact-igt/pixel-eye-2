import Button from "@/common/Button";
import styles from "./styles.module.css";

const Cataract = () => {
  return (
    <section
      className={styles["cataract-service"]}
      id="cataract"
      aria-labelledby="cataract-service-title"
    >
      <div className={styles["cataract-service__card"]}>
        <h2
          id="cataract-service-title"
          className={styles["cataract-service__title"]}
        >
          Cataract
        </h2>

        <div className={styles["cataract-service__details"]}>
          <p>
            A condition in which the natural lens of the eye becomes cloudy,
            affecting vision over time. Treatment involves replacing the lens
            with an artificial intraocular lens to restore clarity.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Button
              label="Explore More"
              href="/service#cataract"
              variant="muted"
            />
          </div>
        </div>

        <img
          className={styles["cataract-service__image"]}
          src="/assets/Service/Cataract.png"
          alt="Close view of an eye with cataract"
        />
      </div>
    </section>
  );
};

export default Cataract;
