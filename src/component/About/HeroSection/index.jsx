import HeroBanner from "@/common/HeroBanner";
import { ABOUT_CONTENT } from "@/constant/aboutContent";

const HeroSection = () => {
  const { image, titleLines, subtitle, rightSlot, navTheme, cardBg, height, showOverlay, imagePosition } =
    ABOUT_CONTENT.hero;
  const { mobileCta } = ABOUT_CONTENT.hero;

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
      mobileCta={mobileCta}
      variant="aboutMasked"
    />
  );
};

export default HeroSection;
