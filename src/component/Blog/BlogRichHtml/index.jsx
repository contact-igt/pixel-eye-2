import styles from "./styles.module.css";

/**
 * BlogRichHtml
 * ─────────────
 * Renders the published_version.content_html field from the API.
 * Uses dangerouslySetInnerHTML — content is authored/sanitised by the backend CMS.
 *
 * data shape: { id, type: "richHtml", html: "<h2>...</h2><p>...</p>" }
 */
export default function BlogRichHtml({ data, settings = {} }) {
  if (!data?.html) return null;

  return (
    <section
      id={data.id}
      className={`${styles.richContent} ${styles[`fontSize_${settings.fontSize || "medium"}`] || ""} ${styles[`lineHeight_${settings.lineHeight || "normal"}`] || ""}`}
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  );
}
