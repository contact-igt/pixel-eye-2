import HeroBanner from "@/common/HeroBanner";
import { ABOUT_CONTENT } from "@/constant/aboutContent";

const HeroSection = () => {
  const {
    image,
    mobileImage,
    titleLines,
    subtitle,
    rightSlot,
    navTheme,
    cardBg,
    height,
    showOverlay,
    imagePosition,
    mobileCta,
  } = ABOUT_CONTENT.hero;

  return (
    <HeroBanner
      image={image}
      title={
        <>
          {titleLines[0]}
          <br />
          {titleLines[1]}
        </>
      }
      subtitle={subtitle}
      rightSlot={rightSlot}
      navTheme={navTheme}
      cardBg={cardBg}
      height={height}
      showOverlay={showOverlay}
      imagePosition={imagePosition}
      mobileImage={mobileImage}
      mobileCta={mobileCta}
      showMobileNabhBadge
      variant="aboutMasked"
    />
  );
};

export default HeroSection;
