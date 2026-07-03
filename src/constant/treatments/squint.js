import { SERVICE_SQUINT_CONTENT } from "@/constant/serviceSquintContent";

export const SQUINT_TREATMENT = {
  slug: "squint",
  banner: SERVICE_SQUINT_CONTENT.banner,
  symptoms: SERVICE_SQUINT_CONTENT.symptoms,
  causes: SERVICE_SQUINT_CONTENT.causes,
  types: SERVICE_SQUINT_CONTENT.types,
  diagnosis: SERVICE_SQUINT_CONTENT.diagnosis,
  clinicalExpertise: {
    ...SERVICE_SQUINT_CONTENT.clinicalExpertise,
    variant: "single",
  },
  faq: SERVICE_SQUINT_CONTENT.faq,             // undefined → falls back to CataractFaq
  patientExperience: SERVICE_SQUINT_CONTENT.rememberRecommend, // undefined → falls back

  sections: [
    "banner",
    "symptoms",
    "causes",
    "types",
    "diagnosis",
    "clinicalExpertise",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};
