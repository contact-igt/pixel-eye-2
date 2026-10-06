import { buildCategoryList, collectPublishedBlogs, getBlogCategory } from "@/lib/blogSidebarData";
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
        {categories.map((category) => (
          <li key={category.name} aria-current={category.name.toLowerCase() === currentCategory ? "true" : undefined}>
            <span>{category.name}</span>
            {settings.showCount ? <span className={styles.count}>({category.count})</span> : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
