import BlogCard from "@/component/Blog/BlogCard";
import BlogFirstBanner from "@/component/Blog/BlogFirstBanner";
import BlogSeo from "@/common/Blog/BlogSeo";
import { BLOG_BANNER_CONTENT } from "@/constant/blogBannerContent";
import { FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const fallbackCategories = ["Cataract Care", "Dry Eye", "Glaucoma", "Lasik", "Paediatric Eye Care", "Retina Care"];

export default function BlogListingPage({ blogs = [] }) {
  const { query } = useRouter();
  const selectedCategory = typeof query.category === "string" ? query.category.trim() : "";
  const categories = [...new Set(blogs.map((blog) => blog?.hero?.category?.trim()).filter(Boolean))];
  const displayedBlogs = selectedCategory
    ? blogs.filter((blog) => blog?.hero?.category?.trim().toLowerCase() === selectedCategory.toLowerCase())
    : blogs;
  const recentBlogs = [...blogs]
    .sort((a, b) => new Date(b?.hero?.publishedAt || 0) - new Date(a?.hero?.publishedAt || 0))
    .slice(0, 3);

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
          <div className={styles.layout}>
            <div className={styles.list}>
              {displayedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
              {selectedCategory && !displayedBlogs.length ? <p className={styles.noResults}>No articles found in {selectedCategory}.</p> : null}
            </div>
            <aside className={styles.sidebar} aria-label="Blog resources">
              <section className={styles.sidebarSection}>
                <h2>Eye Care Categories</h2>
                <ul className={styles.categoryList}>
                  <li><Link href="/blog">All Blogs</Link></li>
                  {(categories.length ? categories : fallbackCategories).map((category) => (
                    <li key={category} aria-current={category.toLowerCase() === selectedCategory.toLowerCase() ? "true" : undefined}>
                      <Link href={`/blog?category=${encodeURIComponent(category)}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
              </section>
              {recentBlogs.length > 0 && (
                <section className={styles.sidebarSection}>
                  <h2>Recent Blogs</h2>
                  <ul className={styles.recentList}>
                    {recentBlogs.map((blog) => (
                      <li key={blog.id}>
                        <Link href={`/blog/${blog.slug}`} className={styles.recentBlog}>
                          <Image
                            src={blog.hero.coverImage || "/assets/blog/blog_banner.png"}
                            alt=""
                            width={72}
                            height={58}
                            className={styles.recentImage}
                          />
                          <span>
                            <strong>{blog.hero.title}</strong>
                            <time dateTime={blog.hero.publishedAt || undefined}>
                              {formatDate(blog.hero.publishedAt)}
                            </time>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </aside>
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

function formatDate(value) {
  const date = value && new Date(value);
  return date && !Number.isNaN(date.valueOf())
    ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(date)
    : "";
}





