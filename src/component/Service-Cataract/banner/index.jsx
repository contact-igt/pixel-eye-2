import HeroBanner from "@/common/HeroBanner";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const CataractBanner = () => {
  const { hero, explainer } = SERVICE_CATARACT_CONTENT.banner;

  return (
    <div className={styles["cataract-detail"]}>
      <HeroBanner
        image={hero.image.src}
        mobileImage={hero.mobileImage}
        mobileImageMedia={hero.mobileImageMedia}
        mobileCta={hero.mobileCta}
        title={
          <>
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </>
        }
        subtitle={hero.description}
        rightSlot={hero.nav.rightSlot}
        navTheme={hero.nav.navTheme}
        cardBg={hero.nav.cardBg}
      />

      <section
        className={styles["cataract-explainer"]}
        aria-labelledby="cataract-explainer-title"
      >
        <div className={styles["cataract-explainer__copy"]}>
          <h2 id="cataract-explainer-title">{explainer.title}</h2>
          {explainer.paragraphs.map((paragraph, index) => (
            <p key={`explainer-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div
          className={styles["cataract-explainer__visual"]}
          aria-label="Normal eye and cataract comparison"
        >
          <img src={explainer.image.src} alt={explainer.image.alt} />
        </div>
      </section>
    </div>
  );
};

export default CataractBanner;
