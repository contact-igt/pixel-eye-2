import styles from "./styles.module.css";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";

export const KerstoconusApproach = () => {
  const { surgicalOptions } = SERVICE_CATARACT_CONTENT;

  return (
    <section
      className={styles.section}
      aria-labelledby="keratoconus-approach-title"
    >
      <div className="container">
        <div className={styles.approachbg}>
          <div className="bgimg">
            <img
              src="/assets/Service/keratoconus/Subtract (2).png"
              className="img-fluid"
            />
          </div>

          <div className={styles.approchsec}>
            <div className={styles["surgical-options__inner"]}>
              <div className={styles["surgical-options__left"]}>
                <h2 id="surgical-options-title">
                  {surgicalOptions.titleLines[0]}
                  <br />
                  {surgicalOptions.titleLines[1]}
                </h2>
                <p>{surgicalOptions.description}</p>
              </div>

              <div
                className={styles["surgical-options__right"]}
                aria-label="Surgical options list"
              >
                {(surgicalOptions.options || []).map((option) => (
                  <div
                    className={styles["surgical-options__card"]}
                    key={option.id}
                  >
                    <div className={styles["surgical-options__media"]}>
                      <img
                        src={option.image}
                        alt={option.imageAlt || option.title}
                        className={styles["surgical-options__img"]}
                      />
                      <button
                        type="button"
                        className={styles["surgical-options__play"]}
                        aria-label={`Play ${option.title}`}
                      >
                        <span
                          className={styles["surgical-options__play-triangle"]}
                        />
                      </button>
                    </div>
                    <div className={styles["surgical-options__card-title"]}>
                      {option.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.approchcard1}>
            <h3>1. Glasses & Soft Contact Lenses</h3>
            <p>
              Creates a detailed map of the cornea and helps detect early
              irregularity.
            </p>
          </div>

          <div className={styles.approchcard2}>
            <h3>3. Corneal Collagen Cross-Linking / C3R</h3>
            <p>
              Creates a detailed map of the cornea and helps detect early
              irregularity.
            </p>
          </div>

          <div className={styles.approchcard3}>
            <h3>2. RGP, Hybrid & Scleral Lenses</h3>
            <p>
              Creates a detailed map of the cornea and helps detect early
              irregularity.
            </p>
          </div>

          <div className={styles.approchcard4}>
            <img
              src="/assets/Service/keratoconus/Union (1).png"
              className="img-fluid"
            />

            <h3>4. Intracorneal Ring Segments</h3>

            <p>
              Small ring segments may be placed inside the cornea in selected
              mild to moderate cases to help flatten the cornea and improve
              vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
