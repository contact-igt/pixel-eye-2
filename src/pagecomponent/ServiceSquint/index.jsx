import SquintBanner from "@/component/Service-Squint/banner";
import SquintSymptoms from "@/component/Service-Squint/symptomsYouNotice";
import SquintCauses from "@/component/Service-Squint/whatCanLead";
import TypesOfSquint from "@/component/Service-Squint/typesOfSquint";
import HowSquintIsDiagnosed from "@/component/Service-Squint/howSquintIsDiagnosed";
import SquintClinicalExpertise from "@/component/Service-Squint/clinicalExpertise";
import CataractFaq from "@/component/Service-Cataract/cataractFaq";
import SuggestedReads from "@/component/About/SuggestedReads";
import PatientExperience from "@/component/Service-Cataract/patientsExperience";

const ServiceSquintPageComponent = () => {
  return (
    <>
      <SquintBanner />
      <SquintSymptoms />
      <SquintCauses />
      <TypesOfSquint />
      <HowSquintIsDiagnosed />
      <SquintClinicalExpertise />
      <CataractFaq />
      <SuggestedReads />
      <PatientExperience />
    </>
  );
};

export default ServiceSquintPageComponent;
