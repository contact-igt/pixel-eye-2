import React from "react";
import styles from "../Testimonials/styles.module.css";

const TestimonialCard = ({
  name,
  rating = 5,
  text,
  active = false,
  onClick,
}) => {
  return (
    <article
      className={`${styles.card} ${active ? styles.active : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick && onClick();
      }}
    >
      <div className={styles.activeOverlay} />

      <div className={styles.cardTab}>
        <span className={styles.cardName}>{name}</span>
      </div>

      <div className={styles.starPill}>
        {Array.from({ length: rating }).map((_, s) => (
          <span key={s} className={styles.star}>
            &#9733;
          </span>
        ))}
      </div>

      <div className={styles.cardBody}>
        <p className={styles.text}>
          &quot;{text}&quot;
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
