import { SERVICE_SQUINT_CONTENT } from "@/constant/serviceSquintContent";
import styles from "./styles.module.css";

const SquintCauses = () => {
  const { causes } = SERVICE_SQUINT_CONTENT;

  return (
    <section
      className={styles["squint-causes"]}
      aria-labelledby="squint-causes-title"
    >
      <div className={styles["squint-causes__header"]}>
        <h2 id="squint-causes-title">{causes.title}</h2>
        <p>{causes.description}</p>
      </div>

      <div className={styles["squint-causes__cards"]}>
        {causes.items.map((factor) => (
          <article className={styles["squint-cause-card"]} key={factor.number}>
            <img src={factor.image} alt={factor.title} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default SquintCauses;
