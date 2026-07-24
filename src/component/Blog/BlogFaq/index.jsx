import { useState } from "react";
import styles from "./styles.module.css";

export default function BlogFaq({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={data.id} className={styles.block}>
      {data.title ? <h2>{data.title}</h2> : null}
      <div className={styles.items}>
        {data.items?.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className={styles.item}>
              <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : index)} className={styles.question}>
                <span>{item.question}</span>
                <span>{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen ? <p>{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
