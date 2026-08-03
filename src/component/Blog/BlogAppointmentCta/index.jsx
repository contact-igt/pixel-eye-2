import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function BlogAppointmentCta({ data = {}, settings = {} }) {
  const heading = data.title || data.heading || settings.heading || "Book an Appointment";
  const description = data.description || settings.description || "Get a precise diagnosis and a treatment plan from our eye care team.";
  const book = data.book_appointment || {};
  const call = data.call_now || {};
  const buttonLabel = book.label || data.buttonLabel || data.button_label || settings.buttonLabel || settings.button_label || "Schedule Now";
  const targetUrl = book.url || data.targetUrl || data.target_url || settings.targetUrl || settings.target_url || "/appointment";
  const callLabel = call.label || "Call Now";
  const callUrl = call.url || "tel:07075008561";

  return (
    <section className={styles.card}>
      <h2>{heading}</h2>
      {description ? <p>{description}</p> : null}
      <div className={styles.actions}>
        <Button label={buttonLabel} href={targetUrl} variant="light" />
        <Button label={callLabel} href={callUrl} variant="dark" />
      </div>
    </section>
  );
}
