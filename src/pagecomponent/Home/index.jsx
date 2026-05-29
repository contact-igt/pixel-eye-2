import Banner from "@/component/Home/Banner";
import Stats from "@/component/Home/Stats";
import Care from "@/component/Home/Care";
import Protect from "@/component/Home/Protect";
import WhyChoose from "@/component/Home/WhyChoose";
import Specialist from "@/component/Home/Specialist";
import CareExperience from "@/component/Home/CareExperience";
import Testimonials from "@/component/Home/Testimonials";
import BlogsVideos from "@/component/Home/BlogsVideos";
import VisionCta from "@/component/Home/VisionCta";

const Homepagecomponent = () => {
  return (
    <>
      <Banner />
      <Care />
      <Protect />
      <WhyChoose />
      <Specialist />
      <CareExperience />
      <Stats />
      <Testimonials />
      <BlogsVideos />
      <VisionCta />
    </>
  );
};

export default Homepagecomponent;
