import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogImageCards({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section id={data.id} className={styles.block}>
      {data.title ? <h2>{data.title}</h2> : null}
      <div className={styles.grid}>
        {data.items.map((item, idx) => (
          <article key={item.title || idx} className={styles.card}>
            <div className={styles.media}>
              <Image
                src={item.image || "/assets/blog/blog_banner.png"}
                alt={item.title || "Comparison image"}
                fill
                sizes="(max-width: 767px) 100vw, 260px"
                className={styles.image}
                unoptimized={typeof item.image === "string" && (item.image.startsWith("http://") || item.image.startsWith("blob:"))}
              />
            </div>
            <div className={styles.body}>
              {item.title ? <h3>{item.title}</h3> : null}
              {item.description ? <p>{item.description}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
