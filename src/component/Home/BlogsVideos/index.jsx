import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import { fetchPublishedBlogs } from "@/lib/apiService";
import { adaptApiBlogListToLocal } from "@/lib/blogAdapter";
import styles from "./styles.module.css";

const BlogsVideos = () => {
  const { blogsVideos } = HOME_CONTENT;
  const { title, subtitle, cta } = blogsVideos;
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      const blogs = adaptApiBlogListToLocal(await fetchPublishedBlogs(1, 4));
      if (!active || !blogs.length) return;

      setBlogItems(
        blogs.map((blog) => ({
          id: blog.id || blog.slug,
          title: blog.hero.title || "Eye-care guide",
          image: blog.hero.coverImage,
          href: `/blog/${blog.slug}`,
        })),
      );
    }

    loadBlogs();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className={styles.blogsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.grid}>
          {blogItems.map((item) => {
            return (
              <article key={item.id} className={styles.item}>
                <Link href={item.href || "/blog"} className={styles.itemLink}>
                  <div className={`${styles.mediaWrap} ${styles.dynamicMedia}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 991px) 100vw, 560px"
                      className={styles.mediaImage}
                    />
                    <span className={styles.blogLabel}>Blog</span>
                  </div>

                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </Link>
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
