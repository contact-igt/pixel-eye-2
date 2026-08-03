import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogFaq({ data, settings = {} }) {
  const [openIndex, setOpenIndex] = useState(settings.defaultOpen === "none" ? -1 : 0);

  return (
    <section id={data?.id} className={`${styles.block} ${styles[`layout_${settings.layout || "accordion"}`] || ""}`}>
      {data?.title ? <h2>{data.title}</h2> : null}
      <div className={styles.items}>
        {data?.items?.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question || index} className={styles.item}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={styles.question}
              >
                <span>{item.question}</span>
                <Image
                  src={isOpen ? "/assets/blog/up-arrow.png" : "/assets/blog/down-arrow.png"}
                  alt=""
                  width={16}
                  height={16}
                  className={styles.arrowIcon}
                  aria-hidden
                />
              </button>
              {isOpen ? <p>{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
