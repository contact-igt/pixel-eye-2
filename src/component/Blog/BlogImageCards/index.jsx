import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogImageCards({ data }) {
  return (
    <section id={data.id} className={styles.block}>
      {data.title ? <h2>{data.title}</h2> : null}
      <div className={styles.grid}>
        {data.items?.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.media}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 767px) 100vw, 260px" className={styles.image} />
            </div>
            <div className={styles.body}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
