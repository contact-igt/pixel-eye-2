import styles from "./styles.module.css";

export default function BlogEmptyState() {
  return (
    <section className={styles.empty}>
      This blog has no builder blocks yet. Add blocks in the admin content model to render the article body.
    </section>
  );
}
