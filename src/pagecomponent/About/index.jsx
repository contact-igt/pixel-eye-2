import HeroSection from "@/component/About/HeroSection";
import ExperienceSection from "@/component/About/ExperienceSection";
import VisionariesSection from "@/component/About/VisionariesSection";
import ProcessVideos from "@/component/About/ProcessVideos";
import RememberRecommend from "@/component/About/RememberRecommend";
import SuggestedReads from "@/component/About/SuggestedReads";

const AboutPageComponent = () => {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <VisionariesSection />
      <ProcessVideos />
      <RememberRecommend />
      <SuggestedReads />
    </>
  );
};

export default AboutPageComponent;
