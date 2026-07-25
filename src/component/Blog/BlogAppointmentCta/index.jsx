import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function BlogAppointmentCta({ data = {} }) {
  return (
    <section className={styles.card}>
      <h2>{data.title || "Book Appointment"}</h2>
      <p>Get a precise diagnosis and a treatment plan from our eye care team.</p>
      <div className={styles.actions}>
        <Button label="Book Appointment" href="/appointment" variant="light" />
        <Button label="Call Now" href="tel:07075008561" variant="dark" />
      </div>
    </section>
  );
}
