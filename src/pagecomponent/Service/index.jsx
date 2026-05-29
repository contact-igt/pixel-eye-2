import HeroBanner from "@/common/HeroBanner";
import Cataract from "@/component/Service/cataract";
import ClearWay from "@/component/Service/clearWay";
import DryEye from "@/component/Service/dryEye";
import Glaucomo from "@/component/Service/glaucomo";
import Keratoconous from "@/component/Service/keratoconus";
import Lasik from "@/component/Service/lasikRefractive";
import Paediatric from "@/component/Service/paediatric";
import RefractiveError from "@/component/Service/refractiveError";
import Retina from "@/component/Service/retinaCare";
import Squint from "@/component/Service/squint";
import { HERO_BANNER_CONTENT } from "@/constant/heroBannerContent";

const ServicePageComponent = () => {
  const { image, title, subtitle, rightSlot, navTheme, cardBg, height, showOverlay, imagePosition } =
    HERO_BANNER_CONTENT.service;

  return (
    <>
      <HeroBanner
        image={image}
        title={title}
        subtitle={subtitle}
        rightSlot={rightSlot}
        cardBg={cardBg}
        height={height}
        showOverlay={showOverlay}
        imagePosition={imagePosition}
      />
      <ClearWay />
      <Cataract />
      <Lasik />
      <RefractiveError />
      <Paediatric />
      <Squint />
      <DryEye />
      <Retina />
      <Keratoconous />
      <Glaucomo />
    </>
  );
};

export default ServicePageComponent;
