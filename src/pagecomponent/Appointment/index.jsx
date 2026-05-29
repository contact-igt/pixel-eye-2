import HeroBanner from "@/common/HeroBanner";
import Form from "@/component/Appointment/form";
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

const AppointmentPageComponent = () => {
  const { image, title, subtitle, rightSlot, navTheme, cardBg, height, showOverlay, imagePosition } =
    HERO_BANNER_CONTENT.appointment;

  return (
    <>
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
      <Form />
    </>
  );
};

export default AppointmentPageComponent;
