import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const TypesOfCataract = () => {
  const { types } = SERVICE_CATARACT_CONTENT;

  return (
    <section className={styles["types-cataract"]} aria-labelledby="types-cataract-title">
      <div className={styles["types-cataract__header"]}>
        <h2 id="types-cataract-title">{types.title}</h2>
        <p>{types.description}</p>
      </div>

      <div className={styles["types-cataract__stage"]} aria-label="Types of cataract carousel">
        <button
          className={styles["types-cataract__arrow"]}
          type="button"
          aria-label={types.controls.previousAriaLabel}
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>

        <article className={`${styles["types-cataract__item"]} ${styles["types-cataract__item--side"]}`}>
          <img src={types.items.left.image} alt={types.items.left.alt} />
          <h3>{types.items.left.title}</h3>
        </article>

        <article className={`${styles["types-cataract__item"]} ${styles["types-cataract__item--main"]}`}>
          <img src={types.items.main.image} alt={types.items.main.alt} />
        </article>

        <article className={`${styles["types-cataract__item"]} ${styles["types-cataract__item--side"]}`}>
          <img src={types.items.right.image} alt={types.items.right.alt} />
          <h3>{types.items.right.title}</h3>
        </article>

        <button className={styles["types-cataract__arrow"]} type="button" aria-label={types.controls.nextAriaLabel}>
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      </div>
    </section>
  );
};

export default TypesOfCataract;
