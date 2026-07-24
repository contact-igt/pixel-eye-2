import styles from "./styles.module.css";

export default function BlogUnknownBlock({ data }) {
  return (
    <section className={styles.notice}>
      Unknown blog block type: <strong>{data?.type || "missing type"}</strong>
    </section>
  );
}
