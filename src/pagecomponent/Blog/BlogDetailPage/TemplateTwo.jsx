import BlogHero from "@/component/Blog/BlogHero";
import BlogBlockRenderer from "@/common/Blog/BlogBlockRenderer";
import BlogSidebarBlockRenderer from "@/common/Blog/BlogSidebarBlockRenderer";
import BlogContainer from "@/common/Blog/BlogContainer";
import styles from "./styles.module.css";

export default function TemplateTwo({ blog }) {
  return (
    <>
      <BlogHero variant="template-2" data={blog.hero} />
      <BlogContainer variant="with-sidebar">
        <div className={styles.sidebarLayout}>
          <article className={styles.mainColumn}>
            <BlogBlockRenderer blocks={blog.blocks} />
          </article>
          {blog.sidebarBlocks?.length ? (
            <aside className={styles.sidebarColumn}>
              <BlogSidebarBlockRenderer
                blocks={blog.sidebarBlocks}
                articleBlocks={blog.blocks}
              />
            </aside>
          ) : null}
        </div>
      </BlogContainer>
    </>
  );
}
