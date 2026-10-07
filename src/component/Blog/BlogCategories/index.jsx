import { buildCategoryList, collectPublishedBlogs, getBlogCategory } from "@/lib/blogSidebarData";
import Link from "next/link";
import styles from "./styles.module.css";

export default function BlogCategories({ settings = {}, currentBlog, suggestedBlogs = [] }) {
  const categories = buildCategoryList(collectPublishedBlogs(currentBlog, suggestedBlogs), Number(settings.maxItems) || 8);
  if (!categories.length) return null;

  const heading = (settings.heading ?? "Categories").trim();
  const currentCategory = getBlogCategory(currentBlog).toLowerCase();

  return (
    <nav className={styles.block} aria-label={heading || "Categories"}>
      {heading ? <h2>{heading}</h2> : null}
      <ul className={styles.list}>
        <li>
          <Link href="/blog">All Blogs</Link>
        </li>
        {categories.map((category) => (
          <li key={category.name} aria-current={category.name.toLowerCase() === currentCategory ? "true" : undefined}>
            <Link href={`/blog?category=${encodeURIComponent(category.name)}`}>{category.name}</Link>
            {settings.showCount ? <span className={styles.count}>({category.count})</span> : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
