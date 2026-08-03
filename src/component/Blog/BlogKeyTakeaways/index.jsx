import styles from "./styles.module.css";

export default function BlogKeyTakeaways({ data, settings = {} }) {
  return (
    <section id={data.id} className={`${styles.card} ${styles[`variant_${settings.variant || "soft"}`] || ""} ${styles[`columns_${settings.columns || "one"}`] || ""}`}>
      <h2>{data.title}</h2>
      <ul>
        {data.items?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
