import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

const { risks } = SERVICE_CATARACT_CONTENT;

export const CATARACT_TREATMENT = {
  slug: "cataract",
  banner: SERVICE_CATARACT_CONTENT.banner,
  // Map risks → common TreatmentCauses format
  causes: {
    title: risks.titleLines.join(" "),
    description: risks.descriptionLines.join(" "),
    items: risks.items,
  },
  types: SERVICE_CATARACT_CONTENT.types,
  symptoms: SERVICE_CATARACT_CONTENT.signs,
  treatmentApproach: SERVICE_CATARACT_CONTENT.treatmentApproach,
  surgicalOptions: SERVICE_CATARACT_CONTENT.surgicalOptions,
  cataractApproach: SERVICE_CATARACT_CONTENT.cataractApproach,
  clinicalExpertise: {
    ...SERVICE_CATARACT_CONTENT.clinicalExpertise,
    variant: "multi",
  },
  faq: SERVICE_CATARACT_CONTENT.faq,
  patientExperience: SHARED_SERVICE_PATIENT_EXPERIENCE,
  suggestedReads: SERVICE_CATARACT_CONTENT.suggestedReads,

  sections: [
    "banner",
    "symptoms",
    "causes",
    "types",
    "treatmentApproach",
    "surgicalOptions",
    "cataractApproach",
    "clinicalExpertise",
    "getStarted",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};


