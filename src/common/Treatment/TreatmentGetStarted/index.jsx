import Image from "next/image";
import Button from "@/common/Button";
import styles from "./styles.module.css";

const GET_STARTED_IMAGES = {
  cataract: "/assets/Service/cataract/catractsm.png",
  glaucoma: "/assets/Service/glaucoma/glucomasm.png",
  keratoconus: "/assets/Service/keratoconus/kertoconusm.png",
  lasik: "/assets/Service/Lasik/lasiksm.png",
  pediatric: "/assets/Service/pediatric/pediatricsm.png",
  retina: "/assets/Service/Retina/retinasm.png",
  squint: "/assets/Service/squint/squintsm.png",
};

const TreatmentGetStarted = ({ slug }) => {
  const image = GET_STARTED_IMAGES[slug];

  if (!image) return null;

  return (
    <section className={styles.getStarted} aria-labelledby={`${slug}-get-started`}>
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 767px) calc(100vw - 24px), 100vw"
        className={styles.background}
        aria-hidden="true"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h2 id={`${slug}-get-started`}>Get Started</h2>
        <p>Visit us or reach out to schedule a consultation with our eye care specialists.</p>
        <Button
          label="Book Appointment"
          href="/appointment"
          variant="light"
          className={styles.cta}
        />
      </div>
    </section>
  );
};

export default TreatmentGetStarted;
