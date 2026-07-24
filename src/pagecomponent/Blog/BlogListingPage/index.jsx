import BlogCard from "@/component/Blog/BlogCard";
import BlogSeo from "@/common/Blog/BlogSeo";
import styles from "./styles.module.css";

export default function BlogListingPage({ blogs = [] }) {
  return (
    <>
      <BlogSeo
        blog={{
          seo: {
            title: "Blog | Pixel Eye Hospitals",
            description: "Eye care articles, patient guides, and medical insights from Pixel Eye Hospitals.",
            canonicalUrl: "/blog",
          },
        }}
      />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span>Pixel Eye Blog</span>
          <h1>Eye care guides for clearer decisions</h1>
          <p>Explore article templates, medical guides, and custom builder previews powered by dynamic content blocks.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </>
  );
}
