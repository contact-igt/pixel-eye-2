import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const TreatmentFaq = ({ data, slug = "treatment" }) => {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!data) return null;

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      ref={sectionRef}
      className={`${styles["treatment-faq"]} ${
        isRevealed ? styles["is-revealed"] : ""
      }`.trim()}
      aria-labelledby={`${slug}-faq-title`}
    >
      <div className={styles["treatment-faq__inner"]}>
        <div className={styles["treatment-faq__left"]}>
          <div className={styles["treatment-faq__image-card"]}>
            <div className={styles["treatment-faq__title-bubble"]}>
              <h3 id={`${slug}-faq-title`}>{data.title}</h3>
            </div>
            <img
              src={data.image}
              alt={data.imageAlt || ""}
              className={styles["treatment-faq__image"]}
            />
          </div>
          {data.note && (
            <p className={styles["treatment-faq__note"]}>{data.note}</p>
          )}
        </div>

        <div className={styles["treatment-faq__right"]}>
          <ul className={styles["treatment-faq__list"]}>
            {data.items.map((it, idx) => {
              const isOpen = openId === it.id;
              return (
                <li key={it.id} className={styles["treatment-faq__row"]}>
                  <button
                    id={`${slug}-faq-question-${it.id}`}
                    className={styles["treatment-faq__trigger"]}
                    onClick={() => toggle(it.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${slug}-faq-answer-${it.id}`}
                  >
                    <span className={styles["treatment-faq__question"]}>
                      {idx + 1}. {it.question}
                    </span>
                    <span className={styles["treatment-faq__icon"]} aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`${slug}-faq-answer-${it.id}`}
                    role="region"
                    aria-labelledby={`${slug}-faq-question-${it.id}`}
                    className={`${styles["treatment-faq__answer"]} ${
                      isOpen ? styles["treatment-faq__answer--open"] : ""
                    }`}
                  >
                    <p className={styles["treatment-faq__answer-text"]}>
                      {it.answer}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TreatmentFaq;
