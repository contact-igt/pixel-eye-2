import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const SignsYouNotice = () => {
  const { signs } = SERVICE_CATARACT_CONTENT;

  return (
    <section className={styles["cataract-signs"]} aria-labelledby="cataract-signs-title">
      <div className={styles["cataract-signs__header"]}>
        <h2 id="cataract-signs-title">{signs.title}</h2>
        <p>{signs.description}</p>
      </div>

      <div className={styles["cataract-signs__body"]}>
        <img
          className={styles["cataract-signs__image"]}
          src={signs.image.src}
          alt={signs.image.alt}
        />

        <div className={styles["cataract-signs__list"]} aria-label="Cataract signs">
          {signs.items.map((sign) => (
            <article
              className={`${styles["cataract-signs__item"]} ${sign.active ? styles["is-active"] : ""}`.trim()}
              key={sign.number}
            >
              <span className={styles["cataract-signs__number"]}>{sign.number}</span>
              <span className={styles["cataract-signs__divider"]} aria-hidden="true" />
              <p>{sign.text}</p>
            </article>
          ))}
        </div>

        <div className={styles["cataract-signs__scroll"]} aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
};

export default SignsYouNotice;
