import PediatricBanner from "@/component/Service-Pediatric/banner";
import PediatricSymptoms from "@/component/Service-Pediatric/symptomsYouNotice";
import PediatricCauses from "@/component/Service-Pediatric/whatCanLead";
import TypesOfPediatricCare from "@/component/Service-Pediatric/typesOfSquint";
import HowPediatricCareIsDiagnosed from "@/component/Service-Pediatric/howSquintIsDiagnosed";
import PediatricClinicalExpertise from "@/component/Service-Pediatric/clinicalExpertise";
import CataractFaq from "@/component/Service-Cataract/cataractFaq";
import SuggestedReads from "@/component/About/SuggestedReads";
import PatientExperience from "@/component/Service-Cataract/patientsExperience";

const ServicePediatricPageComponent = () => {
  return (
    <>
      <PediatricBanner />
      <PediatricSymptoms />
      <PediatricCauses />
      <TypesOfPediatricCare />
      <HowPediatricCareIsDiagnosed />
      <PediatricClinicalExpertise />
      <CataractFaq />
      <SuggestedReads />
      <PatientExperience />
    </>
  );
};

export default ServicePediatricPageComponent;