import Image from "next/image";
import HeroBanner from "@/common/HeroBanner";
import styles from "./styles.module.css";

const TreatmentBanner = ({ data }) => {
  const { hero, explainer } = data;

  const hasTitleLines =
    Array.isArray(hero.titleLines) && hero.titleLines.length > 0;

  const heroBannerTitle = hasTitleLines
    ? hero.titleLines.map((line, i) => (
        <span key={i}>
          {line}
          {i < hero.titleLines.length - 1 && <br />}
        </span>
      ))
    : undefined;

  const mobileImageSrc =
    typeof hero.mobileImage === "string"
      ? hero.mobileImage
      : hero.mobileImage?.src;

  return (
    <div className={styles["treatment-detail"]}>
      <div className={styles["treatment-hero-wrap"]}>
        <HeroBanner
          image={hero.image.src}
          mobileImage={mobileImageSrc}
          mobileImageMedia={hero.mobileImageMedia}
          mobileCta={hero.mobileCta}
          title={heroBannerTitle}
          subtitle={hasTitleLines ? hero.description : undefined}
          rightSlot={hero.nav?.rightSlot ?? "book"}
          navTheme={hero.nav?.navTheme ?? "light"}
          cardBg={hero.nav?.cardBg ?? "white"}
          showOverlay={hero.showOverlay !== undefined ? hero.showOverlay : false}
          imagePosition={hero.imagePosition || "center center"}
          className={styles["treatment-hero"]}
          frameClassName={styles["treatment-hero__frame"]}
          imageClassName={styles["treatment-hero__image"]}
        />

        {hero.title && (
          <div className={styles["treatment-hero__copy"]}>
            <h1>{hero.title}</h1>
            {hero.description && <p>{hero.description}</p>}
          </div>
        )}
      </div>

      {explainer && (
        <section
          className={styles["treatment-explainer"]}
          aria-labelledby="treatment-explainer-title"
        >
          <h1
            id="treatment-explainer-title"
            className={styles["treatment-explainer__title"]}
          >
            {explainer.title}
          </h1>

          <div className={styles["treatment-explainer__copy"]}>
            {explainer.paragraphs.map((paragraph, index) => (
              <p key={`explainer-paragraph-${index}`}>{paragraph}</p>
            ))}

            {explainer.loader && (
              <Image
                src={explainer.loader.src}
                alt={explainer.loader.alt}
                width={1029}
                height={21}
                className={styles["treatment-explainer__loader"]}
                aria-hidden="true"
              />
            )}
          </div>

          {explainer.image && (
            <div className={styles["treatment-explainer__visual"]}>
              {explainer.image.mobileSrc ? (
                <>
                  <Image
                    src={explainer.image.src}
                    alt={explainer.image.alt}
                    width={2484}
                    height={1398}
                    className={`${styles["treatment-explainer__image"]} ${styles["treatment-explainer__image--desktop"]}`}
                  />
                  <Image
                    src={explainer.image.mobileSrc}
                    alt={explainer.image.alt}
                    width={686}
                    height={340}
                    className={`${styles["treatment-explainer__image"]} ${styles["treatment-explainer__image--mobile"]}`}
                  />
                </>
              ) : (
                <Image
                  src={explainer.image.src}
                  alt={explainer.image.alt}
                  width={2484}
                  height={1398}
                  className={styles["treatment-explainer__image"]}
                />
              )}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default TreatmentBanner;
