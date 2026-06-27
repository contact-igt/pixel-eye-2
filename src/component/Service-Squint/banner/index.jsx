import Image from "next/image";
import HeroBanner from "@/common/HeroBanner";
import { SERVICE_SQUINT_CONTENT } from "@/constant/serviceSquintContent";
import styles from "./styles.module.css";

const SquintBanner = () => {
  const { hero, explainer } = SERVICE_SQUINT_CONTENT.banner;

  return (
    <div className={styles["squint-detail"]}>
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
            <p key={`squint-explainer-paragraph-${index}`}>{paragraph}</p>
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
            className={styles["squint-explainer__image"]}
          />
        </div>
      </section>
    </div>
  );
};

export default SquintBanner;