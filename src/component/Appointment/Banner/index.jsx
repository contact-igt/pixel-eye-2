import BannerNav from "@/common/BannerNav";
import styles from "./styles.module.css";

const AppointmentBanner = () => {
  return (
    <section className={styles.hero} aria-label="Appointment banner">
      <BannerNav rightSlot="nabh" navTheme="light" cardBg="transparent" />

      <div className={styles.bannerPanel} aria-hidden="true">
        <img
          className={styles.bannerImage}
          src="/assets/Appointment/Mask group (15).png"
          alt=""
        />
      </div>

      <div className={styles.copy}>
        <h1>Schedule The Care Your Eyes Deserve</h1>
        <p>Tell us your concern or select your preferred specialist</p>
      </div>
    </section>
  );
};

export default AppointmentBanner;
