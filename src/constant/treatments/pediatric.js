import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";

export const PEDIATRIC_TREATMENT = {
  slug: "pediatric",
  banner: SERVICE_PEDIATRIC_CONTENT.banner,
  symptoms: SERVICE_PEDIATRIC_CONTENT.symptoms,
  causes: SERVICE_PEDIATRIC_CONTENT.causes,
  types: SERVICE_PEDIATRIC_CONTENT.types,
  diagnosis: SERVICE_PEDIATRIC_CONTENT.diagnosis,
  clinicalExpertise: {
    ...SERVICE_PEDIATRIC_CONTENT.clinicalExpertise,
    variant: "multi",
  },
  faq: SERVICE_PEDIATRIC_CONTENT.faq,
  patientExperience: SERVICE_PEDIATRIC_CONTENT.rememberRecommend, // undefined → falls back to CataractPatientExperience

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
