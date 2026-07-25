import styles from "./styles.module.css";

export default function BlogSymptomsList({ data }) {
  return (
    <section id={data.id} className={styles.block}>
      {data.title ? <h2>{data.title}</h2> : null}
      <ol className={styles.list}>
        {data.items?.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
