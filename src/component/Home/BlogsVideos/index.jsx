import Image from "next/image";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import styles from "./styles.module.css";

const BlogsVideos = () => {
  const { blogsVideos } = HOME_CONTENT;
  const { title, subtitle, items, cta } = blogsVideos;

  return (
    <section className={styles.blogsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.grid}>
          {items.map((item) => {
            return (
              <article key={item.id} className={styles.item}>
                <div className={styles.mediaWrap}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 991px) 100vw, 560px"
                    className={styles.mediaImage}
                  />
                  {item.type === "blog" && (
                    <div className={styles.cardOverlayText}>
                      {item.title}
                    </div>
                  )}
                </div>

                <h3 className={styles.itemTitle}>{item.title}</h3>
              </article>
            );
          })}
        </div>
        <div className={styles.ctaRow}>
          <Button label={cta.label} href={cta.href} variant="muted" />
        </div>
      </div>
    </section>
  );
};

export default BlogsVideos;
