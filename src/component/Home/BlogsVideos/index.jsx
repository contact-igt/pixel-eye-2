import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import { fetchPublishedBlogs } from "@/lib/apiService";
import { adaptApiBlogListToLocal } from "@/lib/blogAdapter";
import { getServiceBlogConfig, pickBlogsForService } from "@/lib/serviceBlogCategories";
import styles from "./styles.module.css";

/**
 * Home page: the 4 latest published blogs.
 * Service pages: pass `serviceSlug` to show only the latest (max 4) blogs whose category belongs to that
 * service. The section renders nothing when the service has no matching blog.
 */
const BlogsVideos = ({ serviceSlug, limit = 4 }) => {
  const { blogsVideos } = HOME_CONTENT;
  const { cta } = blogsVideos;
  const service = serviceSlug ? getServiceBlogConfig(serviceSlug) : null;
  const title = service ? `Related ${service.label} Blogs` : blogsVideos.title;
  const subtitle = service
    ? `Read the latest eye-care insights and guidance on ${service.label.toLowerCase()} from our specialists.`
    : blogsVideos.subtitle;
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadBlogs() {
      // Service pages filter by category, so look at the newest 100 published blogs; home just needs the latest.
      const blogs = adaptApiBlogListToLocal(await fetchPublishedBlogs(1, serviceSlug ? 100 : limit));
      const selected = serviceSlug ? pickBlogsForService(blogs, serviceSlug, limit) : blogs;
      if (!active || !selected.length) return;

      setBlogItems(
        selected.map((blog) => ({
          id: blog.id || blog.slug,
          title: blog.hero.title || "Eye-care guide",
          image: blog.hero.coverImage,
          href: `/blog/${blog.slug}#blog-detail`,
        })),
      );
    }

    loadBlogs();
    return () => {
      active = false;
    };
  }, [serviceSlug, limit]);

  // A service page with no matching blog shows no section at all.
  if (serviceSlug && !blogItems.length) return null;

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
