import BannerNav from "@/common/BannerNav";
import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import styles from "./styles.module.css";

const LasikBanner = () => {
  const { hero, explainer, comparison } = SERVICE_LASIK_CONTENT.banner;

  return (
    <div className={styles["lasik-page"]}>
      <section className={styles["lasik-hero"]}>
        {/* Image + overlays share one relative container */}
        <div className={styles["lasik-hero__wrap"]}>
          <img
            className={styles["lasik-hero__image"]}
            src={hero.image.src}
            alt={hero.image.alt}
          />

          {/* Text sits on the left-centre of the image */}
          <div className={styles["lasik-hero__copy"]}>
            <h1 className={styles["lasik-hero__title"]}>
              {hero.titleLines[0]}
              <br />
              {hero.titleLines[1]}
            </h1>
            <p className={styles["lasik-hero__subtitle"]}>{hero.description}</p>
          </div>

          {/* Heading sits directly in the image's white concave cutout — no card */}
          <h2 id="lasik-what-title" className={styles["lasik-what__title"]}>
            {explainer.title}
          </h2>
        </div>

        <BannerNav rightSlot="book" navTheme="light" cardBg="white" />
      </section>

      {/* Paragraphs — plain section below the hero, no overlap */}
      <section className={styles["lasik-what__body"]} aria-labelledby="lasik-what-title">
        {explainer.paragraphs.map((p, i) => (
          <p key={i} className={styles["lasik-what__p"]}>{p}</p>
        ))}
      </section>

      {/* Normal Vision vs Refractive Error comparison image */}
      <section className={styles["lasik-comparison"]}>
        <img
          className={styles["lasik-comparison__img"]}
          src={comparison.image.src}
          alt={comparison.image.alt}
        />
      </section>
    </div>
  );
};

export default LasikBanner;


