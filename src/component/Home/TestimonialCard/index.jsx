import React, { useEffect, useRef, useState } from "react";
import styles from "../Testimonials/styles.module.css";

const MAX_VISIBLE_LINES = 6;

const TestimonialCard = ({
  name,
  rating = 5,
  text,
  active = false,
  onClick,
}) => {
  const textRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const node = textRef.current;
    if (!node || typeof window === "undefined") return undefined;

    const updateToggleVisibility = () => {
      const computedStyles = window.getComputedStyle(node);
      const lineHeight = Number.parseFloat(computedStyles.lineHeight) || 0;
      const maxHeight = lineHeight * MAX_VISIBLE_LINES;
      setShowToggle(node.scrollHeight > maxHeight + 1);
    };

    updateToggleVisibility();
    window.addEventListener("resize", updateToggleVisibility);

    return () => window.removeEventListener("resize", updateToggleVisibility);
  }, [text]);

  return (
    <article
      className={`${styles.card} ${active ? styles.active : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) onClick();
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
        <p
          ref={textRef}
          className={`${styles.text} ${expanded ? styles.textExpanded : styles.textClamped}`}
        >
          &quot;{text}&quot;
        </p>

        {showToggle ? (
          <button
            type="button"
            className={styles.textToggle}
            onClick={(event) => {
              event.stopPropagation();
              setExpanded((current) => !current);
            }}
          >
            {expanded ? "See less" : "See more"}
          </button>
        ) : null}
      </div>
    </article>
  );
};

export default TestimonialCard;
