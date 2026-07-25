import styles from "./styles.module.css";

function toAnchor(id) {
  return `#${id}`;
}

export default function BlogArticleSidebar({ data = {}, settings = {}, articleBlocks = [] }) {
  const title = data.title || data.heading || settings.heading || settings.title || "In This Article";
  const links = articleBlocks.filter((block) => (block.title || block.heading) && block.id);

  const displayLinks = links.length
    ? links
    : [
        { id: "block-understanding-1", title: "Understanding Cataracts" },
        { id: "block-key-takeaways", title: "Key Takeaways" },
        { id: "block-image-comparison", title: "How Cataracts Affect Vision" },
        { id: "block-doctor-quote", title: "Expert Insights" },
        { id: "block-faq", title: "Frequently Asked Questions" },
      ];

  return (
    <nav className={styles.card} aria-label={title}>
      <h2>{title}</h2>
      <ul>
        {displayLinks.map((block, idx) => (
          <li key={block.id || idx}>
            <a href={toAnchor(block.id)}>{block.title || block.heading}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
