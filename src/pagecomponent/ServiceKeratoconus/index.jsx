import KeratoconusBanner from "@/component/Service-Keratoconus/banner";
import DiagnosisSlider from "@/component/Service-Keratoconus/DiagnosisSlider";
import WhatIsKeratoconus from "@/component/Service-Keratoconus/whatIsKeratoconus";
import SuggestedReads from "@/component/About/SuggestedReads";
import PatientExperience from "@/component/Service-Cataract/patientsExperience";
import CataractFaq from "@/component/Service-Cataract/cataractFaq";
import SignsYouNotice from "@/component/Service-Cataract/signYouNotice";
import TreatmentApproach from "@/component/Service-Cataract/treatmentApproach";
import ClinicalExpertise from "@/component/Service-Cataract/clinicalExpertise";
import { SERVICE_KERATOCONUS_CONTENT } from "@/constant/serviceKeratoconusContent";
import CataractRiskFactors from "@/component/Service-Cataract/Cataract";
import { KerstoconusApproach } from "@/component/Service-Keratoconus/kertoconusApproch/indxe";

const ServiceKeratoconusPageComponent = () => {
  return (
    <>
      <KeratoconusBanner />
      <WhatIsKeratoconus />
      <SignsYouNotice
        signsContent={SERVICE_KERATOCONUS_CONTENT.signs}
        sectionId="keratoconus-signs"
      />
      <CataractRiskFactors
        riskContent={SERVICE_KERATOCONUS_CONTENT.risks}
        sectionId="keratoconus-risks"
        cardsLayout="centered"
      />
      <TreatmentApproach
        treatmentContent={SERVICE_KERATOCONUS_CONTENT.treatmentApproach}
        sectionId="keratoconus-treatment-approach"
        contentLayout="wide"
        sectionWidth="full"
      >
        <DiagnosisSlider
          sliderContent={SERVICE_KERATOCONUS_CONTENT.diagnosisSlider}
        />
      </TreatmentApproach>

      <KerstoconusApproach />

      <CataractFaq />
      <SuggestedReads />
      <PatientExperience />
    </>
  );
};

export default ServiceKeratoconusPageComponent;
