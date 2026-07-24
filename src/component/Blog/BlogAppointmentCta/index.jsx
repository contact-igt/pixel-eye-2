import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function BlogAppointmentCta({ data }) {
  return (
    <section className={styles.card}>
      <h2>{data.title || "Book Appointment"}</h2>
      <p>Get a precise diagnosis and a treatment plan from our eye care team.</p>
      <Button label="Book Appointment" href="/appointment" variant="light" />
    </section>
  );
}
