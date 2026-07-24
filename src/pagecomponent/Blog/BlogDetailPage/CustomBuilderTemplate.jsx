import BlogHero from "@/component/Blog/BlogHero";
import BlogBlockRenderer from "@/common/Blog/BlogBlockRenderer";
import BlogSidebarBlockRenderer from "@/common/Blog/BlogSidebarBlockRenderer";
import BlogContainer from "@/common/Blog/BlogContainer";
import styles from "./styles.module.css";

export default function CustomBuilderTemplate({ blog }) {
  const hasSidebar = blog.layoutVariant === "with-sidebar" && blog.sidebarBlocks?.length;

  return (
    <>
      <BlogHero variant={blog.heroVariant || "template-1"} data={blog.hero} />
      <BlogContainer variant={hasSidebar ? "with-sidebar" : "article"}>
        {hasSidebar ? (
          <div className={styles.sidebarLayout}>
            <article className={styles.mainColumn}>
              <BlogBlockRenderer blocks={blog.blocks} />
            </article>
            <aside className={styles.sidebarColumn}>
              <BlogSidebarBlockRenderer
                blocks={blog.sidebarBlocks}
                articleBlocks={blog.blocks}
              />
            </aside>
          </div>
        ) : (
          <div className={styles.articleFlow}>
            <BlogBlockRenderer blocks={blog.blocks} />
          </div>
        )}
      </BlogContainer>
    </>
  );
}
