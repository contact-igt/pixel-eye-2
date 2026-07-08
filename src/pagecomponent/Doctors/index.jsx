import HeroSection from "@/component/Doctors/HeroSection";
import VisionariesSection from "@/component/About/VisionariesSection";
import { DOCTORS_CONTENT } from "@/constant/doctorsContent";

const doctorsVisionariesContent = {
  ...DOCTORS_CONTENT.list,
  doctors: DOCTORS_CONTENT.doctors,
};

const DoctorsPageComponent = () => {
  return (
    <>
      <HeroSection />
      <VisionariesSection content={doctorsVisionariesContent} />
    </>
  );
};

export default DoctorsPageComponent;

