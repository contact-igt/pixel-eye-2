import { SERVICE_GLAUCOMA_CONTENT } from "@/constant/serviceglaucomaContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

export const GLAUCOMA_TREATMENT = {
  slug: "glaucoma",
  banner: SERVICE_GLAUCOMA_CONTENT.banner,
  symptoms: SERVICE_GLAUCOMA_CONTENT.symptoms,
  causes: SERVICE_GLAUCOMA_CONTENT.causes,
  types: SERVICE_GLAUCOMA_CONTENT.types,
  diagnosis: SERVICE_GLAUCOMA_CONTENT.diagnosis,
  clinicalExpertise: {
    ...SERVICE_GLAUCOMA_CONTENT.clinicalExpertise,
    variant: "multi",
  },
  faq: SERVICE_GLAUCOMA_CONTENT.faq,
  patientExperience: SHARED_SERVICE_PATIENT_EXPERIENCE,

  sections: [
    "banner",
    "symptoms",
    "causes",
    "types",
    "diagnosis",
    "clinicalExpertise",
    "getStarted",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};


