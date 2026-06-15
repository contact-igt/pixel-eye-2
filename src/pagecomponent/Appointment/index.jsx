import HeroBanner from "@/common/HeroBanner";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("@/component/Appointment/form"), {
  ssr: false,
});
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

const AppointmentPageComponent = () => {
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
    mobileOverlay,
    mobileCta,
  } = HERO_BANNER_CONTENT.appointment;

  return (
    <>
      <HeroBanner
        image={image}
        title={title}
        subtitle={subtitle}
        mobileImage={mobileImage}
        rightSlot={rightSlot}
        navTheme={navTheme}
        cardBg={cardBg}
        height={height}
        showOverlay={showOverlay}
        imagePosition={imagePosition}
        mobileOverlay={mobileOverlay}
        mobileCta={mobileCta}
      />
      <Form />
    </>
  );
};

export default AppointmentPageComponent;
