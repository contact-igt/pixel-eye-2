import BannerNav from "@/common/BannerNav";
import styles from "./styles.module.css";

const ServiceBanner = () => {
  return (
    <section className={styles.banner} aria-label="Service banner">
      <div className={styles.imageWrap} aria-hidden="true">
        <img
          className={styles.image}
          src="/assets/Service/Subtract (5).png"
          alt=""
        />
      </div>

      <BannerNav rightSlot="book" navTheme="dark" cardBg="transparent" />
    </section>
  );
};

export default ServiceBanner;
