import TreatmentBanner from "@/common/Treatment/TreatmentBanner";
import TreatmentSymptoms from "@/common/Treatment/TreatmentSymptoms";
import TreatmentCauses from "@/common/Treatment/TreatmentCauses";
import TreatmentTypes from "@/common/Treatment/TreatmentTypes";
import TreatmentDiagnosis from "@/common/Treatment/TreatmentDiagnosis";
import TreatmentClinicalExpertise from "@/common/Treatment/TreatmentClinicalExpertise";
import TreatmentFaq from "@/common/Treatment/TreatmentFaq";
import TreatmentPatientExperience from "@/common/Treatment/TreatmentPatientExperience";
import TreatmentSurgicalOptions from "@/common/Treatment/TreatmentSurgicalOptions";
import SuggestedReads from "@/component/About/SuggestedReads";
import CataractFaqFallback from "@/component/ServiceCataract/cataractFaq";
import CataractPatientExperienceFallback from "@/component/ServiceCataract/patientsExperience";
import CataractRiskFactors from "@/component/ServiceCataract/Cataract";
import TreatmentApproach from "@/component/ServiceCataract/treatmentApproach";
import CataractApproach from "@/component/ServiceCataract/cataractApproach";
import LasikLaserVisionOptions from "@/component/ServiceLasik/laserVisionOptions";
import { KeratoconusApproach } from "@/component/ServiceKeratoconus/keratoconusApproach/index";

/**
 * Maps section keys to render functions.
 * Each function receives the full `treatment` config and returns JSX (or null).
 */
const SECTION_MAP = {
  banner: (t) => <TreatmentBanner key="banner" data={t.banner} slug={t.slug} />,
  symptoms: (t) => (
    <TreatmentSymptoms key="symptoms" data={t.symptoms} slug={t.slug} />
  ),
  causes: (t) =>
    t.causes ? <TreatmentCauses key="causes" data={t.causes} /> : null,
  types: (t) =>
    t.types ? <TreatmentTypes key="types" data={t.types} slug={t.slug} /> : null,
  diagnosis: (t) =>
    t.diagnosis ? (
      <TreatmentDiagnosis key="diagnosis" data={t.diagnosis} slug={t.slug} />
    ) : null,
  clinicalExpertise: (t) =>
    t.clinicalExpertise ? (
      <TreatmentClinicalExpertise
        key="clinicalExpertise"
        data={t.clinicalExpertise}
        slug={t.slug}
      />
    ) : null,
  faq: (t) =>
    t.faq ? (
      <TreatmentFaq key="faq" data={t.faq} slug={t.slug} />
    ) : (
      <CataractFaqFallback key="faq" />
    ),
  suggestedReads: (_t) => <SuggestedReads key="suggestedReads" />,
  patientExperience: (t) =>
    t.patientExperience ? (
      <TreatmentPatientExperience
        key="patientExperience"
        data={t.patientExperience}
        slug={t.slug}
      />
    ) : (
      <CataractPatientExperienceFallback key="patientExperience" />
    ),

  // Cataract-specific sections
  riskFactors: (t) =>
    t.risks ? (
      <CataractRiskFactors key="riskFactors" riskContent={t.risks} />
    ) : null,
  treatmentApproach: (t) =>
    t.treatmentApproach ? (
      <TreatmentApproach
        key="treatmentApproach"
        treatmentContent={t.treatmentApproach}
      />
    ) : null,
  surgicalOptions: (t) =>
    t.surgicalOptions ? (
      <TreatmentSurgicalOptions
        key="surgicalOptions"
        data={t.surgicalOptions}
        slug={t.slug}
      />
    ) : null,
  cataractApproach: (t) =>
    t.cataractApproach ? <CataractApproach key="cataractApproach" /> : null,

  // Lasik-specific sections
  laserVisionOptions: (_t) => (
    <LasikLaserVisionOptions key="laserVisionOptions" />
  ),

  // Keratoconus-specific sections
  keratoconusApproach: (_t) => (
    <KeratoconusApproach key="keratoconusApproach" />
  ),
};

/**
 * TreatmentPage
 *
 * Renders a full treatment page by iterating over `treatment.sections`
 * and delegating to the appropriate component via SECTION_MAP.
 *
 * @param {{ treatment: object }} props
 */
const TreatmentPage = ({ treatment }) => {
  if (!treatment || !Array.isArray(treatment.sections)) return null;

  return (
    <>
      {treatment.sections.map((key) => {
        const render = SECTION_MAP[key];
        if (!render) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`TreatmentPage: unknown section key "${key}"`);
          }
          return null;
        }
        return render(treatment);
      })}
    </>
  );
};

export default TreatmentPage;
