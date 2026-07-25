import BlogHero from "@/component/Blog/BlogHero";
import BlogBlockRenderer from "@/common/Blog/BlogBlockRenderer";
import BlogContainer from "@/common/Blog/BlogContainer";
import styles from "./styles.module.css";

const TEMPLATE_ONE_BLOCK_ORDER = [
  "richHtml",
  "richText",
  "keyTakeaways",
  "imageCards",
  "imageComparison",
  "numberedList",
  "symptoms",
  "doctorQuote",
  "emergencyCta",
  "faq",
  "feedbackShare",
  "disclaimer",
  "suggestedReads",
];

function orderTemplateOneBlocks(blocks = []) {
  return [...blocks].sort((a, b) => {
    const first = TEMPLATE_ONE_BLOCK_ORDER.indexOf(a.type);
    const second = TEMPLATE_ONE_BLOCK_ORDER.indexOf(b.type);
    return (first === -1 ? 999 : first) - (second === -1 ? 999 : second);
  });
}

export default function TemplateOne({ blog }) {
  return (
    <>
      <BlogHero variant="template-1" data={blog.hero} />
      <BlogContainer variant="article">
        <div className={styles.articleFlow}>
          <BlogBlockRenderer
            blocks={orderTemplateOneBlocks(blog.blocks)}
            variant="template-1"
          />
        </div>
      </BlogContainer>
    </>
  );
}
