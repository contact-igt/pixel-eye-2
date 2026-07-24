import styles from "./styles.module.css";

export default function BlogKeyTakeaways({ data }) {
  return (
    <section id={data.id} className={styles.card}>
      <h2>{data.title}</h2>
      <ul>
        {data.items?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
