import HeroBanner from "@/common/HeroBanner";
import { SERVICE_KERATOCONUS_CONTENT } from "@/constant/serviceKeratoconusContent";
import styles from "./styles.module.css";

const KeratoconusBanner = () => {
  const { hero } = SERVICE_KERATOCONUS_CONTENT.banner;

  return (
    <div className={styles.detailPage}>
      <HeroBanner
        image={hero.image.src}
        mobileImage={hero.mobileImage?.src}
        title={
          <>
            {hero.titleLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < hero.titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </>
        }
        subtitle={hero.description}
        rightSlot={hero.nav.rightSlot}
        navTheme={hero.nav.navTheme}
        cardBg={hero.nav.cardBg}
        mobileCta={hero.mobileCta}
        showOverlay={hero.showOverlay}
        imagePosition={hero.imagePosition}
      />
    </div>
  );
};

export default KeratoconusBanner;
