import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";

export const CATARACT_TREATMENT = {
  slug: "cataract",
  banner: SERVICE_CATARACT_CONTENT.banner,
  risks: SERVICE_CATARACT_CONTENT.risks,
  types: SERVICE_CATARACT_CONTENT.types,
  symptoms: SERVICE_CATARACT_CONTENT.signs,
  treatmentApproach: SERVICE_CATARACT_CONTENT.treatmentApproach,
  surgicalOptions: SERVICE_CATARACT_CONTENT.surgicalOptions,
  cataractApproach: SERVICE_CATARACT_CONTENT.cataractApproach,
  clinicalExpertise: {
    ...SERVICE_CATARACT_CONTENT.clinicalExpertise,
    variant: "single",
  },
  faq: SERVICE_CATARACT_CONTENT.faq,
  suggestedReads: SERVICE_CATARACT_CONTENT.suggestedReads,
  patientExperience: SERVICE_CATARACT_CONTENT.patientsExperience,

  sections: [
    "banner",
    "riskFactors",
    "types",
    "symptoms",
    "treatmentApproach",
    "surgicalOptions",
    "cataractApproach",
    "clinicalExpertise",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};
