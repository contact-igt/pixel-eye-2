import styles from "./styles.module.css";

export default function BlogContainer({ variant = "article", children }) {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles[variant] || styles.article}`}>
        {children}
      </div>
    </section>
  );
}
