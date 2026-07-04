import HeroBanner from "@/common/HeroBanner";
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

const ServiceBanner = () => {
  const {
    image,
    mobileImage,
    title,
    subtitle,
    rightSlot,
    navTheme,
    cardBg,
    height,
    showOverlay,
    imagePosition,
    showMobileNabhBadge,
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
      mobileImage={mobileImage}
      showMobileNabhBadge={showMobileNabhBadge}
    />
  );
};

export default ServiceBanner;
