import { SERVICE_RETINA_CONTENT } from "@/constant/serviceRetinaContent";

export const RETINA_TREATMENT = {
  slug: "retina",
  banner: SERVICE_RETINA_CONTENT.banner,
  symptoms: SERVICE_RETINA_CONTENT.symptoms,
  causes: SERVICE_RETINA_CONTENT.causes,
  types: SERVICE_RETINA_CONTENT.types,
  diagnosis: SERVICE_RETINA_CONTENT.diagnosis,
  clinicalExpertise: SERVICE_RETINA_CONTENT.clinicalExpertise
    ? { ...SERVICE_RETINA_CONTENT.clinicalExpertise, variant: "multi" }
    : null,
  faq: SERVICE_RETINA_CONTENT.faq,

  sections: [
    "banner",
    "symptoms",
    "causes",
    "types",
    "diagnosis",
    ...(SERVICE_RETINA_CONTENT.clinicalExpertise ? ["clinicalExpertise"] : []),
    "faq",
    "suggestedReads",
  ],
};


