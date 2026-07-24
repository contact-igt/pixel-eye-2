import styles from "./styles.module.css";

function toAnchor(id) {
  return `#${id}`;
}

export default function BlogArticleSidebar({ data, articleBlocks = [] }) {
  const links = articleBlocks.filter((block) => block.title && block.id);

  return (
    <nav className={styles.card} aria-label={data.title || "In this article"}>
      <h2>{data.title || "In This Article"}</h2>
      <ul>
        {links.map((block) => (
          <li key={block.id}>
            <a href={toAnchor(block.id)}>{block.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
