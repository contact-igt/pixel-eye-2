import BlogHero from "@/component/Blog/BlogHero";
import BlogBlockRenderer from "@/common/Blog/BlogBlockRenderer";
import BlogSidebarBlockRenderer from "@/common/Blog/BlogSidebarBlockRenderer";
import BlogContainer from "@/common/Blog/BlogContainer";
import SuggestedReads from "@/component/About/SuggestedReads";
import styles from "./styles.module.css";

const TEMPLATE_TWO_BLOCK_ORDER = [
  "keyTakeaways",
  "richHtml",
  "richText",
  "imageCards",
  "imageComparison",
  "numberedList",
  "symptoms",
  "doctorQuote",
  "emergencyCta",
  "faq",
  "feedbackShare",
  "disclaimer",
];

function orderTemplateTwoBlocks(blocks = []) {
  return [...blocks].sort((a, b) => {
    const first = TEMPLATE_TWO_BLOCK_ORDER.indexOf(a.type);
    const second = TEMPLATE_TWO_BLOCK_ORDER.indexOf(b.type);
    return (first === -1 ? 999 : first) - (second === -1 ? 999 : second);
  });
}

export default function TemplateTwo({ blog }) {
  const orderedBlocks = orderTemplateTwoBlocks(
    (blog.blocks || []).filter((b) => b.type !== "suggestedReads")
  );

  return (
    <>
      <BlogHero variant="template-2" data={blog.hero} />
      <BlogContainer variant="with-sidebar">
        <div className={styles.sidebarLayout}>
          <article className={styles.mainColumn}>
            <BlogBlockRenderer
              blocks={orderedBlocks}
              variant="template-2"
              suggestedBlogs={blog.suggestedBlogs}
              currentSlug={blog.slug}
            />
          </article>
          {blog.sidebarBlocks?.length ? (
            <aside className={styles.sidebarColumn}>
              <BlogSidebarBlockRenderer
                blocks={blog.sidebarBlocks}
                articleBlocks={orderedBlocks}
              />
            </aside>
          ) : null}
        </div>
      </BlogContainer>
      <SuggestedReads />
    </>
  );
}
