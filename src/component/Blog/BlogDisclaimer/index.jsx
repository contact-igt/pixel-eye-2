import styles from "./styles.module.css";

export default function BlogDisclaimer({ data, settings = {} }) {
  return <aside id={data.id} className={`${styles.disclaimer} ${styles[`variant_${settings.variant || "standard"}`] || ""}`}>{data.content}</aside>;
}
