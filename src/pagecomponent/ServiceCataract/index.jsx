import CataractBanner from "@/component/Service-Cataract/banner";
import CataractRiskFactors from "@/component/Service-Cataract/Cataract";
import TypesOfCataract from "@/component/Service-Cataract/typesOfCataract";
import SignsYouNotice from "@/component/Service-Cataract/signYouNotice";
import TreatmentApproach from "@/component/Service-Cataract/treatmentApproach";
import SurgicalOptions from "@/component/Service-Cataract/surgicalOptions";
import CataractApproach from "@/component/Service-Cataract/cataractApproach";
import ClinicalExpertise from "@/component/Service-Cataract/clinicalExpertise";
import CataractFaq from "@/component/Service-Cataract/cataractFaq";
import PatientExperience from "@/component/Service-Cataract/patientsExperience";
import SuggestedReads from "@/component/About/SuggestedReads";

const ServiceCataractPageComponent = () => {
  return (
    <>
      <CataractBanner />
      <CataractRiskFactors />
      <TypesOfCataract />
      <SignsYouNotice />
      <TreatmentApproach />
      <SurgicalOptions />
      <CataractApproach />
      <ClinicalExpertise />
      <CataractFaq />
      <SuggestedReads />
      <PatientExperience/>
    </>
  );
};

export default ServiceCataractPageComponent;