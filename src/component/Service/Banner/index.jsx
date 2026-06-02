import HeroBanner from "@/common/HeroBanner";
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

const ServiceBanner = () => {
  const {
    image,
    title,
    subtitle,
    rightSlot,
    navTheme,
    cardBg,
    height,
    showOverlay,
    imagePosition,
  } = HERO_BANNER_CONTENT.service;

  return (
    <HeroBanner
      image={image}
      title={title}
      subtitle={subtitle}
      rightSlot={rightSlot}
      navTheme={navTheme}
      cardBg={cardBg}
      height={height}
      showOverlay={showOverlay}
      imagePosition={imagePosition}
    />
  );
};

export default ServiceBanner;
