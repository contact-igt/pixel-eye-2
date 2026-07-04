import { SERVICE_GLAUCOMA_CONTENT } from "@/constant/serviceGlaucomaContent";

export const GLAUCOMA_TREATMENT = {
  slug: "glaucoma",
  banner: SERVICE_GLAUCOMA_CONTENT.banner,
  symptoms: SERVICE_GLAUCOMA_CONTENT.symptoms,
  causes: SERVICE_GLAUCOMA_CONTENT.causes,
  types: SERVICE_GLAUCOMA_CONTENT.types,
  diagnosis: SERVICE_GLAUCOMA_CONTENT.diagnosis,
  clinicalExpertise: null, // not in glaucoma content
  faq: SERVICE_GLAUCOMA_CONTENT.faq, // undefined → falls back to CataractFaq
  patientExperience: SERVICE_GLAUCOMA_CONTENT.rememberRecommend, // undefined → falls back

  sections: [
    "banner",
    "symptoms",
    "causes",
    "types",
    "diagnosis",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};
