import { useState } from "react";
import { SERVICE_RETINA_CONTENT } from "@/constant/serviceRetinaContent";
import styles from "./styles.module.css";

const RetinaFaq = ({ faqContent = SERVICE_RETINA_CONTENT.faq, sectionId = "retina-faq" }) => {
  const faq = faqContent;
  const [openId, setOpenId] = useState(null);

  if (!faq) return null;

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className={styles["retina-faq"]}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className={styles["retina-faq__inner"]}>
        <div className={styles["retina-faq__left"]}>
          <div className={styles["retina-faq__image-card"]}>
            <div className={styles["retina-faq__title-bubble"]}>
              <h3 id={`${sectionId}-title`}>{faq.title}</h3>
            </div>
            <img
              src={faq.image}
              alt={faq.imageAlt || ""}
              className={styles["retina-faq__image"]}
            />
          </div>

          <p className={styles["retina-faq__note"]}>{faq.note}</p>
        </div>

        <div className={styles["retina-faq__right"]}>
          <ul className={styles["retina-faq__list"]}>
            {faq.items.map((it, idx) => {
              const isOpen = openId === it.id;
              return (
                <li key={it.id} className={styles["retina-faq__row"]}>
                  <button
                    id={`${sectionId}-question-${it.id}`}
                    className={styles["retina-faq__trigger"]}
                    onClick={() => toggle(it.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${sectionId}-answer-${it.id}`}
                  >
                    <span className={styles["retina-faq__question"]}>
                      {idx + 1}. {it.question}
                    </span>
                    <span className={styles["retina-faq__icon"]} aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`${sectionId}-answer-${it.id}`}
                    role="region"
                    aria-labelledby={`${sectionId}-question-${it.id}`}
                    className={`${styles["retina-faq__answer"]} ${isOpen ? styles["retina-faq__answerOpen"] : ""}`}
                  >
                    <p className={styles["retina-faq__answer-text"]}>
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

export default RetinaFaq;
