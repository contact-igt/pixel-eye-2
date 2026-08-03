import BlogCard from "@/component/Blog/BlogCard";
import BlogFirstBanner from "@/component/Blog/BlogFirstBanner";
import BlogSeo from "@/common/Blog/BlogSeo";
import { BLOG_BANNER_CONTENT } from "@/constant/blogBannerContent";
import { FileText } from "lucide-react";
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
      <BlogFirstBanner
        data={{
          ...BLOG_BANNER_CONTENT,
          cta: { ...BLOG_BANNER_CONTENT.cta, href: "#blog-list" },
        }}
      />
      <section id="blog-list" className={styles.section}>
        {blogs.length > 0 ? (
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState} role="status">
            <div className={styles.emptyIcon} aria-hidden="true">
              <FileText size={64} strokeWidth={1.4} />
            </div>
            <h2>No blog articles available</h2>
            <p>Check back soon for the latest eye-care guides and insights.</p>
          </div>
        )}
      </section>
    </>
  );
}





