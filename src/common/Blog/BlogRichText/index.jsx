import styles from "./styles.module.css";

export default function BlogRichText({ data }) {
  return (
    <section id={data.id} className={styles.block}>
      {data.title ? <h2>{data.title}</h2> : null}
      {data.content ? <p>{data.content}</p> : null}
    </section>
  );
}
