import Image from "next/image";
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
    mobile: "/assets/Service/Keratoconus/bannersmmb.png",

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

  if (!image) return null;

  return (
    <section className={styles.getStarted} aria-labelledby={`${slug}-get-started`}>
      <Image
        src={image.desktop}
        alt=""
        fill
        sizes="(max-width: 767px) calc(100vw - 24px), 100vw"
        className={`${styles.background} ${styles.desktopBackground}`}
        aria-hidden="true"
      />
      {image.mobile ? (
        <Image
          src={image.mobile}
          alt=""
          fill
          sizes="(max-width: 767px) calc(100vw - 24px), 100vw"
          className={`${styles.background} ${styles.mobileBackground}`}
          aria-hidden="true"
        />
      ) : null}
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

