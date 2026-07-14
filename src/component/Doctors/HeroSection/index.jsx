import HeroBanner from "@/common/HeroBanner";
import { DOCTORS_CONTENT } from "@/constant/doctorsContent";

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
  } = DOCTORS_CONTENT.hero;

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
      cta={{ label: "Book Appointment", href: "/appointment" }}
      showMobileNabhBadge
      variant="aboutMasked"
    />
  );
};

export default HeroSection;
