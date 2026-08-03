import styles from "./styles.module.css";

/**
 * BlogNumberedList
 * ─────────────────
 * Renders the `numbered_list` block from the API.
 * Each item has { title, description }.
 *
 * data shape: { id, type: "numberedList", title: string, items: [{ title, description }] }
 */
export default function BlogNumberedList({ data, settings = {} }) {
  if (!data?.items?.length) return null;

  return (
    <section id={data.id} className={`${styles.block} ${styles[`style_${settings.style || "circle"}`] || ""}`}>
      {data.title ? <h2>{data.title}</h2> : null}
      <ol className={styles.list}>
        {data.items.map((item, idx) => (
          <li key={item.title || idx}>
            <strong>{item.title}</strong>
            {item.description ? <span>{item.description}</span> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
