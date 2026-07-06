import Image from "next/image";
import HeroBanner from "@/common/HeroBanner";
import TreatmentExplainerCataract from "@/common/Treatment/TreatmentExplainerCataract";
import TreatmentExplainerSquint from "@/common/Treatment/TreatmentExplainerSquint";
import TreatmentExplainerKeratoconus from "@/common/Treatment/TreatmentExplainerKeratoconus";
import TreatmentExplainerLasik from "@/common/Treatment/TreatmentExplainerLasik";
import styles from "./styles.module.css";

const TreatmentBanner = ({ data, slug = "treatment" }) => {
  const { hero, explainer, comparison } = data;
  const variant = explainer?.variant;
  const isCataract = variant === "cataract";
  const isLasik = variant === "lasik";
  const isKeratoconus = variant === "keratoconus";
  const isSquint = variant === "squint";

  const isBlueHeroCopy = slug === "pediatric" || slug === "retina";
  const heroCopyThemeClass = isBlueHeroCopy
    ? styles["treatment-hero__copy--blue"]
    : styles["treatment-hero__copy--white"];

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

  const rootClassName = `${styles["treatment-detail"]}${
    styles[`treatment-detail--${slug}`]
      ? ` ${styles[`treatment-detail--${slug}`]}`
      : ""
  }`;

  const explainerClassName = `${styles["treatment-explainer"]}${
    variant && styles[`treatment-explainer--${variant}`]
      ? ` ${styles[`treatment-explainer--${variant}`]}`
      : ""
  }`;

  const explainerTitleId = `${slug}-explainer-title`;

  const renderExplainerImage = (image) => {
    if (!image) return null;

    return image.mobileSrc ? (
      <>
        <Image
          src={image.src}
          alt={image.alt}
          width={2484}
          height={1398}
          className={`${styles["treatment-explainer__image"]} ${styles["treatment-explainer__image--desktop"]}`}
        />
        <Image
          src={image.mobileSrc}
          alt={image.alt}
          width={686}
          height={340}
          className={`${styles["treatment-explainer__image"]} ${styles["treatment-explainer__image--mobile"]}`}
        />
      </>
    ) : (
      <Image
        src={image.src}
        alt={image.alt}
        width={2484}
        height={1398}
        className={styles["treatment-explainer__image"]}
      />
    );
  };

  const renderExplainerParagraphs = () =>
    explainer.paragraphs.map((paragraph, index) => (
      <p key={`explainer-paragraph-${index}`}>{paragraph}</p>
    ));

  const renderGenericExplainer = () => (
    <section className={explainerClassName} aria-labelledby={explainerTitleId}>
      <h1
        id={explainerTitleId}
        className={styles["treatment-explainer__title"]}
      >
        {explainer.title}
      </h1>

      <div className={styles["treatment-explainer__copy"]}>
        {renderExplainerParagraphs()}

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
          {renderExplainerImage(explainer.image)}
        </div>
      )}
    </section>
  );

  const renderExplainer = () => {
    if (!explainer) return null;
    if (isCataract)
      return <TreatmentExplainerCataract explainer={explainer} slug={slug} />;
    if (isSquint)
      return <TreatmentExplainerSquint explainer={explainer} slug={slug} />;
    if (isKeratoconus)
      return (
        <TreatmentExplainerKeratoconus explainer={explainer} slug={slug} />
      );
    if (isLasik) return <TreatmentExplainerLasik explainer={explainer} />;
    return renderGenericExplainer();
  };

  return (
    <div className={rootClassName}>
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
          showMobileNabhBadge={hero.showMobileNabhBadge ?? false}
          showOverlay={
            hero.showOverlay !== undefined ? hero.showOverlay : false
          }
          imagePosition={hero.imagePosition || "center center"}
          className={styles["treatment-hero"]}
          frameClassName={styles["treatment-hero__frame"]}
          imageClassName={styles["treatment-hero__image"]}
          copyClassName={heroCopyThemeClass}
        />

        {hero.title && (
          <div
            className={`${styles["treatment-hero__copy"]} ${heroCopyThemeClass}`}
          >
            <h1>{hero.title}</h1>
            {hero.description && <p>{hero.description}</p>}
          </div>
        )}

        {isLasik && explainer?.title && (
          <h2
            id={explainerTitleId}
            className={styles["treatment-explainer__cutout-title"]}
          >
            {explainer.title}
          </h2>
        )}
      </div>

      {renderExplainer()}

      {comparison?.image && (
        <section className={styles["treatment-comparison"]}>
          <Image
            src={comparison.image.src}
            alt={comparison.image.alt}
            width={2484}
            height={600}
            className={styles["treatment-comparison__image"]}
          />
        </section>
      )}
    </div>
  );
};

export default TreatmentBanner;
