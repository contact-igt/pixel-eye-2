import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buildRecentBlogs, buildRelatedBlogs, formatBlogDate } from "@/lib/blogSidebarData";
import styles from "./styles.module.css";

function BlogList({ blogs, settings }) {
  return (
    <ul className={styles.list}>
      {blogs.map((blog) => {
        const imageUrl = blog.hero?.coverImage || "/assets/blog/blog_banner.png";
        const date = formatBlogDate(blog.hero?.publishedAt);
        return (
          <li key={blog.id || blog.slug}>
            <Link href={`/blog/${blog.slug}`} className={`${styles.item} ${settings.showImage ? "" : styles.noImage}`}>
              {settings.showImage ? (
                <Image
                  src={imageUrl}
                  alt=""
                  width={72}
                  height={58}
                  className={styles.image}
                  unoptimized={typeof imageUrl === "string" && (imageUrl.startsWith("http://") || imageUrl.startsWith("blob:"))}
                />
              ) : null}
              <span>
                <strong>{blog.hero?.title}</strong>
                {settings.showDate && date ? <time dateTime={blog.hero?.publishedAt || undefined}>{date}</time> : null}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function BlogRecentRelated({ settings = {}, currentBlog, suggestedBlogs = [] }) {
  const maxItems = Number(settings.maxItems) || 6;
  const mode = settings.mode || "tabs";
  const resolved = { showImage: settings.showImage !== false, showDate: settings.showDate !== false };

  const recent = buildRecentBlogs(currentBlog, suggestedBlogs, maxItems);
  const related = buildRelatedBlogs(currentBlog, suggestedBlogs, maxItems);

  // Tabs mode always offers both tabs. Single-list modes show one list ("related" falls back to recent).
  const tabs = [];
  if (mode === "tabs") {
    tabs.push({ key: "related", label: "Related", blogs: related, emptyText: "No related blogs for this article yet." });
    tabs.push({ key: "recent", label: "Recent", blogs: recent, emptyText: "No recent blogs yet." });
  } else if (mode === "related" && related.length) {
    tabs.push({ key: "related", label: "Related", blogs: related });
  } else {
    tabs.push({ key: "recent", label: "Recent", blogs: recent });
  }

  // Start on the first tab that has posts.
  const [activeKey, setActiveKey] = useState((tabs.find((tab) => tab.blogs.length) || tabs[0])?.key);
  if (tabs.every((tab) => !tab.blogs.length)) return null;

  const active = tabs.find((tab) => tab.key === activeKey) || tabs[0];
  const showTabs = mode === "tabs";
  const defaultHeading = mode === "related" && related.length ? "Related Blogs" : mode === "tabs" ? "" : "Recent Blogs";
  const heading = (settings.heading || defaultHeading).trim();

  return (
    <aside className={styles.block} aria-label="Recent and related blogs">
      {heading ? <h2>{heading}</h2> : null}
      {showTabs ? (
        <div className={styles.tabs} role="tablist" aria-label="Blog lists">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              id={`blog-rr-tab-${tab.key}`}
              aria-selected={active.key === tab.key}
              aria-controls="blog-rr-panel"
              className={active.key === tab.key ? styles.tabActive : styles.tab}
              onClick={() => setActiveKey(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : null}
      <div id="blog-rr-panel" role={showTabs ? "tabpanel" : undefined} aria-labelledby={showTabs ? `blog-rr-tab-${active.key}` : undefined}>
        {active.blogs.length ? <BlogList blogs={active.blogs} settings={resolved} /> : <p className={styles.empty}>{active.emptyText}</p>}
      </div>
    </aside>
  );
}
