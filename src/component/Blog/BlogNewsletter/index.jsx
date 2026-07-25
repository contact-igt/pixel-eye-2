import styles from "./styles.module.css";

export default function BlogNewsletter({ data }) {
  return (
    <section className={styles.card}>
      <h2>{data.title || "Get Eye-Care Guidance"}</h2>
      <p>Receive expert medical tips and news from our specialists directly in your inbox.</p>
      <form className={styles.form}>
        <input type="email" placeholder="Your Email Address" aria-label="Email address" />
        <button type="submit">Subscribe Now</button>
      </form>
    </section>
  );
}
