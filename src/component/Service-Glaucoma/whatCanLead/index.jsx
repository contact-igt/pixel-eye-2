import { useRef, useEffect, useState } from "react";
import { SERVICE_GLAUCOMA_CONTENT } from "@/constant/serviceGlaucomaContent";
import styles from "./styles.module.css";

const GlaucomaCauses = () => {
  const { causes } = SERVICE_GLAUCOMA_CONTENT;
  const cardsRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = cardsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={styles["squint-causes"]}
      aria-labelledby="squint-causes-title"
    >
      <div className={styles["squint-causes__header"]}>
        <h2 id="squint-causes-title">{causes.title}</h2>
        <p>{causes.description}</p>
      </div>

      <div
        ref={cardsRef}
        className={`${styles["squint-causes__cards"]} ${
          isRevealed ? styles["is-revealed"] : ""
        }`.trim()}
      >
        {causes.items.map((factor, index) => (
          <article
            className={styles["squint-cause-card"]}
            style={{ "--i": index }}
            key={factor.number}
          >
            <img src={factor.image} alt={factor.title} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default GlaucomaCauses;
