import Button from "@/common/Button";
import styles from "./styles.module.css";

const GET_STARTED_IMAGES = {
  cataract: {
    desktop: "/assets/Service/cataract/catractsm.png",
        mobile: "/assets/Service/cataract/bannersmmb.png",

  },
  dryeye: {
    desktop: "/assets/Service/dryeye/bannersm.png",
    mobile: "/assets/Service/dryeye/bannersmmb.png",
  },
  glaucoma: {
    desktop: "/assets/Service/glaucoma/glucomasm.png",
    mobile: "/assets/Service/glaucoma/bannersmmb.png",

  },
  keratoconus: {
    desktop: "/assets/Service/keratoconus/kertoconusm.png",
    mobile: "/assets/Service/keratoconus/bannersmmb.png",

  },
  lasik: {
    desktop: "/assets/Service/Lasik/lasiksm.png",
    mobile: "/assets/Service/Lasik/bannersmmb.png",

  },
  pediatric: {
    desktop: "/assets/Service/pediatric/pediatricsm.png",
    mobile: "/assets/Service/pediatric/bannersmmb.png",

  },
  retina: {
    desktop: "/assets/Service/Retina/retinasm.png",
    mobile: "/assets/Service/Retina/bannersmmb.png",

  },
  squint: {
    desktop: "/assets/Service/squint/squintsm.png",
    mobile: "/assets/Service/squint/bannersmmb.png",

  },
};

const TreatmentGetStarted = ({ slug }) => {
  const image = GET_STARTED_IMAGES[slug];

  if (!image?.desktop) return null;

  return (
    <section className={styles.getStarted} aria-labelledby={`${slug}-get-started`}>
      <picture className={styles.background} aria-hidden="true">
        {image.mobile ? (
          <source media="(max-width: 767px)" srcSet={image.mobile} />
        ) : null}
        <img src={image.desktop} alt="" loading="lazy" decoding="async" />
      </picture>
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

