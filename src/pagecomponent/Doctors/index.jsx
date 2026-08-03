import HeroSection from "@/component/Doctors/HeroSection";
import DoctorSpecialistsSection from "@/component/Doctors/DoctorSpecialistsSection";
import ProcessVideos from "@/component/About/ProcessVideos";
import RememberRecommend from "@/component/About/RememberRecommend";

const DoctorsPageComponent = () => {
  return (
    <>
      <HeroSection />
      <DoctorSpecialistsSection />
      <ProcessVideos />
      <RememberRecommend />
    </>
  );
};

export default DoctorsPageComponent;
