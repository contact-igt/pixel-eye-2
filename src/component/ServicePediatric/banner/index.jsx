import Image from "next/image";
import HeroBanner from "@/common/HeroBanner";
import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";
import styles from "./styles.module.css";

const PediatricBanner = () => {
  const { hero, explainer } = SERVICE_PEDIATRIC_CONTENT.banner;

  return (
    <div className={styles["squint-detail"]}>
      <div className={styles["squint-hero-wrap"]}>
        <HeroBanner
          image={hero.image.src}
          rightSlot={hero.nav.rightSlot}
          navTheme={hero.nav.navTheme}
          cardBg={hero.nav.cardBg}
          showOverlay={false}
          imagePosition="center center"
          className={styles["squint-hero"]}
          frameClassName={styles["squint-hero__frame"]}
          imageClassName={styles["squint-hero__image"]}
        />

        <div className={styles["squint-hero__copy"]}>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </div>

      <section
        className={styles["squint-explainer"]}
        aria-labelledby="squint-explainer-title"
      >
        <h1
          id="squint-explainer-title"
          className={styles["squint-explainer__title"]}
        >
          {explainer.title}
        </h1>

        <div className={styles["squint-explainer__copy"]}>
          {explainer.paragraphs.map((paragraph, index) => (
            <p key={`pediatric-explainer-paragraph-${index}`}>{paragraph}</p>
          ))}

          <Image
            src={explainer.loader.src}
            alt={explainer.loader.alt}
            width={1029}
            height={21}
            className={styles["squint-explainer__loader"]}
            aria-hidden="true"
          />
        </div>

        <div className={styles["squint-explainer__visual"]}>
          <Image
            src={explainer.image.src}
            alt={explainer.image.alt}
            width={2484}
            height={1398}
            className={`${styles["squint-explainer__image"]} ${styles["squint-explainer__image--desktop"]}`}
          />
          <Image
            src={explainer.image.mobileSrc}
            alt={explainer.image.alt}
            width={686}
            height={340}
            className={`${styles["squint-explainer__image"]} ${styles["squint-explainer__image--mobile"]}`}
          />
        </div>
      </section>
    </div>
  );
};

export default PediatricBanner;

