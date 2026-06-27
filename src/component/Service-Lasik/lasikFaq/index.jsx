import { useState } from "react";
import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const LasikFaq = () => {
  const { faq } = SERVICE_LASIK_CONTENT;
  const [openId, setOpenId] = useState(null);

  if (!faq) return null;

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      className={styles["cataract-faq"]}
      aria-labelledby="lasik-faq-title"
    >
      <div className={styles["cataract-faq__inner"]}>
        <div className={styles["cataract-faq__left"]}>
          <div className={styles["cataract-faq__image-card"]}>
            <div className={styles["cataract-faq__title-bubble"]}>
              <h3 id="lasik-faq-title">{faq.title}</h3>
            </div>
            <img
              src={faq.image}
              alt={faq.imageAlt || ""}
              className={styles["cataract-faq__image"]}
            />
          </div>

          <p className={styles["cataract-faq__note"]}>{faq.note}</p>
        </div>

        <div className={styles["cataract-faq__right"]}>
          <ul className={styles["cataract-faq__list"]}>
            {faq.items.map((it, idx) => {
              const isOpen = openId === it.id;
              return (
                <li key={it.id} className={styles["cataract-faq__row"]}>
                  <button
                    id={`lasik-question-${it.id}`}
                    className={styles["cataract-faq__trigger"]}
                    onClick={() => toggle(it.id)}
                    aria-expanded={isOpen}
                    aria-controls={`lasik-answer-${it.id}`}
                  >
                    <span className={styles["cataract-faq__question"]}>
                      {idx + 1}. {it.question}
                    </span>
                    <span className={styles["cataract-faq__icon"]} aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`lasik-answer-${it.id}`}
                    role="region"
                    aria-labelledby={`lasik-question-${it.id}`}
                    className={`${styles["cataract-faq__answer"]} ${isOpen ? styles["cataract-faq__answerOpen"] : ""}`}
                  >
                    <p className={styles["cataract-faq__answer-text"]}>
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

export default LasikFaq;
