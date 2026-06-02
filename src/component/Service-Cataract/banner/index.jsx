import BannerNav from "@/common/BannerNav";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const CataractBanner = () => {
  const { hero, explainer } = SERVICE_CATARACT_CONTENT.banner;

  return (
    <div className={styles["cataract-detail"]}>
      <section className={styles["cataract-detail-hero"]} aria-label="Cataract detail hero">
        <img
          className={styles["cataract-detail-hero__image"]}
          src={hero.image.src}
          alt={hero.image.alt}
        />

        <BannerNav
          rightSlot={hero.nav.rightSlot}
          navTheme={hero.nav.navTheme}
          cardBg={hero.nav.cardBg}
        />

        <div className={styles["cataract-detail-copy"]}>
          <h1>
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>
          <p>{hero.description}</p>
        </div>
      </section>

      <section className={styles["cataract-explainer"]} aria-labelledby="cataract-explainer-title">
        <div className={styles["cataract-explainer__copy"]}>
          <h2 id="cataract-explainer-title">{explainer.title}</h2>
          {explainer.paragraphs.map((paragraph, index) => (
            <p key={`explainer-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className={styles["cataract-explainer__visual"]} aria-label="Normal eye and cataract comparison">
          <img src={explainer.image.src} alt={explainer.image.alt} />
        </div>
      </section>
    </div>
  );
};

export default CataractBanner;
