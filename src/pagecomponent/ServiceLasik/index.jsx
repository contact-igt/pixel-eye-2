import LasikBanner from "@/component/Service-Lasik/banner";
import LasikSignsYouNotice from "@/component/Service-Lasik/signYouNotice";
import TypesOfLasik from "@/component/Service-Lasik/typesOfLasik";
import LasikLaserVisionOptions from "@/component/Service-Lasik/laserVisionOptions";
import LasikSurgicalOptions from "@/component/Service-Lasik/surgicalOptions";
import LasikClinicalExpertise from "@/component/Service-Lasik/clinicalExpertise";
import LasikFaq from "@/component/Service-Lasik/lasikFaq";
import SuggestedReads from "@/component/About/SuggestedReads";
import LasikPatientExperience from "@/component/Service-Lasik/patientsExperience";

const ServiceLasikPageComponent = () => {
  return (
    <>
      <LasikBanner />
      <LasikSignsYouNotice />
      <TypesOfLasik />
      <LasikLaserVisionOptions />
      <LasikSurgicalOptions />
      <LasikClinicalExpertise />
      <LasikFaq />
      <SuggestedReads />
      <LasikPatientExperience />
    </>
  );
};

export default ServiceLasikPageComponent;
