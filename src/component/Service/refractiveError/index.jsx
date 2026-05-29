import Button from "@/common/Button";
import styles from "./styles.module.css";

const RefractiveError = () => {
  return (
    <section
      className={styles["refractive-error"]}
      aria-labelledby="refractive-error-title"
    >
      <div className={styles["refractive-error__card"]}>
        <h2
          id="refractive-error-title"
          className={styles["refractive-error__title"]}
        >
          Refractive error
          <br />
          management
        </h2>

        <div className={styles["refractive-error__details"]}>
          <p>
            Care for vision problems caused by improper focusing of light on the
            retina. Managed through glasses, contact lenses, or corrective
            procedures depending on the need.
          </p>
          <div style={{ marginTop: "32px" }}>
            <Button
              label="Explore More"
              href="/services/refractive-error-management"
              variant="muted"
            />
          </div>
        </div>

        <img
          className={styles["refractive-error__image"]}
          src="/assets/Service/error management.png"
          alt="Patient covering one eye during a vision check"
        />
      </div>
    </section>
  );
};

export default RefractiveError;
