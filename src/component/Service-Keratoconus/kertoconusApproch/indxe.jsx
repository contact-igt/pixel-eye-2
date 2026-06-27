import styles from "./styles.module.css";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import { SERVICE_KERATOCONUS_CONTENT } from "@/constant/serviceKeratoconusContent";

export const KerstoconusApproach = () => {
  const { surgicalOptions } = SERVICE_CATARACT_CONTENT;
  const approachCards = SERVICE_KERATOCONUS_CONTENT.keratoconusApproach.options || [];
  const cardOne = approachCards[0];
  const cardTwo = approachCards[1];
  const cardThree = approachCards[2];
  const cardFour = approachCards[3];

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
              alt=""
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

          {cardOne ? (
            <div className={styles.approchcard1}>
              <img src={cardOne.image} alt={cardOne.imageAlt || cardOne.title} className={styles.approachCardImage} />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>{cardOne.number} {cardOne.title}</h3>
                <p>{cardOne.description}</p>
              </div>
            </div>
          ) : null}

          {cardThree ? (
            <div className={styles.approchcard2}>
              <img src={cardThree.image} alt={cardThree.imageAlt || cardThree.title} className={styles.approachCardImage} />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>{cardThree.number} {cardThree.title}</h3>
                <p>{cardThree.description}</p>
              </div>
            </div>
          ) : null}

          {cardTwo ? (
            <div className={styles.approchcard3}>
              <img src={cardTwo.image} alt={cardTwo.imageAlt || cardTwo.title} className={styles.approachCardImage} />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>{cardTwo.number} {cardTwo.title}</h3>
                <p>{cardTwo.description}</p>
              </div>
            </div>
          ) : null}

          {cardFour ? (
            <div className={styles.approchcard4}>
              <img
                src={cardFour.image}
                alt={cardFour.imageAlt || cardFour.title}
                className={styles.approachCardImage}
              />
              <div className={styles.approachCardOverlay} />
              <div className={styles.approachCardContent}>
                <h3>{cardFour.number} {cardFour.title}</h3>
                <p>{cardFour.description}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
