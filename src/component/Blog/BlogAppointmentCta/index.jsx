import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function BlogAppointmentCta({ data = {}, settings = {} }) {
  const heading = data.title || data.heading || settings.heading || "Book an Appointment";
  const buttonLabel = data.buttonLabel || data.button_label || settings.buttonLabel || settings.button_label || "Schedule Now";
  const targetUrl = data.targetUrl || data.target_url || settings.targetUrl || settings.target_url || "/appointment";

  return (
    <section className={styles.card}>
      <h2>{heading}</h2>
      <p>Get a precise diagnosis and a treatment plan from our eye care team.</p>
      <div className={styles.actions}>
        <Button label={buttonLabel} href={targetUrl} variant="light" />
        <Button label="Call Now" href="tel:07075008561" variant="dark" />
      </div>
    </section>
  );
}
