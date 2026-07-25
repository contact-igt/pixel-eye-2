import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogImageCards({ data }) {
  if (!data || data.enabled === false || !Array.isArray(data.items) || data.items.length === 0) {
    return null;
  }

  const sectionHeading = data.heading || data.title;

  return (
    <section id={data.id} className={styles.comparisonSection}>
      {/* 1. Main Section Heading (Rendered ONCE at the top) */}
      {sectionHeading ? (
        <h2 className={styles.sectionHeading}>{sectionHeading}</h2>
      ) : null}

      {/* 2. Cards Grid Container (Renders all items side-by-side) */}
      <div className={styles.cardsGrid}>
        {data.items.map((item, index) => {
          const imageUrl = item.url || item.original_url || item.media?.original_url || item.image || "/assets/blog/blog_banner.png";

          return (
            <article key={item.title || index} className={styles.card}>
              {/* Image Preview Container */}
              {imageUrl && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={imageUrl}
                    alt={item.title || `Comparison item ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                    className={styles.cardImage}
                    unoptimized={typeof imageUrl === "string" && (imageUrl.startsWith("http://") || imageUrl.startsWith("blob:"))}
                  />
                </div>
              )}

              {/* Card Title & Description */}
              <div className={styles.cardContent}>
                {item.title && <h3 className={styles.cardTitle}>{item.title}</h3>}
                {item.description && (
                  <p className={styles.cardDescription}>{item.description}</p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
