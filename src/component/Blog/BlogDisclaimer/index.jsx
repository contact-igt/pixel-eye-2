import styles from "./styles.module.css";

export default function BlogDisclaimer({ data }) {
  return <aside id={data.id} className={styles.disclaimer}>{data.content}</aside>;
}
