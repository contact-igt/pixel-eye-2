import HeroBanner from "@/common/HeroBanner";
import styles from "./styles.module.css";

export default function BlogFirstBanner({ data = {} }) {
  return (
    <HeroBanner
      image={data.image || "/assets/Service/dryeye/Subtract (9).jpg"}
      mobileImage={data.mobileImage}
      mobileImageMedia={data.mobileImageMedia}
      title={data.title || "Suggested Reads"}
      subtitle={data.subtitle}
      rightSlot={data.nav?.rightSlot || "book"}
      navTheme={data.nav?.navTheme || "light"}
      cardBg={data.nav?.cardBg || "transparent"}
      showOverlay={data.showOverlay ?? false}
      imagePosition={data.imagePosition || "center center"}
      className={styles.blogBanner}
      frameClassName={styles.bannerFrame}
      imageClassName={styles.bannerImage}
      copyClassName={styles.bannerCopy}
      mobileCta={data.cta}
    />
  );
}



