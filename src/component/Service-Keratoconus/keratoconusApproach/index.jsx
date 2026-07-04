import styles from "./styles.module.css";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import { SERVICE_KERATOCONUS_CONTENT } from "@/constant/serviceKeratoconusContent";

export const KeratoconusApproach = () => {
  const { keratoconusApproach } = SERVICE_KERATOCONUS_CONTENT;
  const { surgicalOptions } = SERVICE_CATARACT_CONTENT;
  const approachCards =
    SERVICE_KERATOCONUS_CONTENT.keratoconusApproach.options || [];
  const cardOne = approachCards[0];
  const cardTwo = approachCards[1];
  const cardThree = approachCards[2];
  const cardFour = approachCards[3];

  return (
    <section
      className={styles.section}
      aria-labelledby="keratoconus-approach-title"
    >
      <div className="container-fluid">
        <div className={styles.approachbg}>
          <div className={styles.bgimg}>
            <img
              src="/assets/Service/keratoconus/Subtract (2).png"
              className={`${styles.kerapbg} img-fluid `}
              alt=""
            />
          </div>

          <div className={styles.approchsec}>
            <div className={styles["surgical-options__inner"]}>
              <div className={styles["surgical-options__left"]}>
                <h2 id="surgical-options-title">
                  {keratoconusApproach.titleLines[0]}
                  <br />
                  {keratoconusApproach.titleLines[1]}
                </h2>
                {(keratoconusApproach.descriptionLines || []).map(
                  (line, index) => (
                    <p key={index}>{line}</p>
                  ),
                )}
              </div>

              <div
                className={styles["surgical-options__right"]}
                aria-label="Surgical options list"
              >
                {(keratoconusApproach.options || []).map((option, index) => {
                  const cataractOption = surgicalOptions.options?.[index];

                  return (
                    <div
                      className={styles["surgical-options__card"]}
                      key={option.id}
                    >
                      <div className={styles["surgical-options__media"]}>
                        <img
                          src={cataractOption?.image || option.image}
                          alt={
                            cataractOption?.imageAlt ||
                            option.imageAlt ||
                            option.title
                          }
                          className={styles["surgical-options__img"]}
                        />
                        <button
                          type="button"
                          className={styles["surgical-options__play"]}
                          aria-label={`Play ${option.title}`}
                        >
                          <span
                            className={
                              styles["surgical-options__play-triangle"]
                            }
                          />
                        </button>
                      </div>
                      <div className={styles["surgical-options__card-title"]}>
                        {option.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {cardOne ? (
            <div className={styles.approchcard1}>
              <img
                src={cardOne.image}
                alt={cardOne.imageAlt || cardOne.title}
                className={styles.approachCardImage}
              />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>
                  {cardOne.number} {cardOne.title}
                </h3>
                <p>{cardOne.description}</p>
              </div>
            </div>
          ) : null}

          {cardThree ? (
            <div className={styles.approchcard2}>
              <img
                src={cardThree.image}
                alt={cardThree.imageAlt || cardThree.title}
                className={styles.approachCardImage}
              />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>
                  {cardThree.number} {cardThree.title}
                </h3>
                <p>{cardThree.description}</p>
              </div>
            </div>
          ) : null}

          {cardTwo ? (
            <div className={styles.approchcard3}>
              <img
                src={cardTwo.image}
                alt={cardTwo.imageAlt || cardTwo.title}
                className={styles.approachCardImage}
              />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>
                  {cardTwo.number} {cardTwo.title}
                </h3>
                <p>{cardTwo.description}</p>
              </div>
            </div>
          ) : null}

          <div className={styles.approchcard4}>
            <img
              src="/assets/Service/keratoconus/k4.png"
              alt="Intracorneal ring segments treatment"
              className={styles.approachCardImage}
            />
            <div className={styles.approachCardOverlay} />
            <div className={styles.approachCardContent}>
              <h3>4. Intracorneal Ring Segments</h3>

              <p>
                Small ring segments may be placed inside the cornea in selected
                mild to moderate cases to help flatten the cornea and improve
                vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
