import { SERVICE_SQUINT_CONTENT } from "@/constant/serviceSquintContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

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
    mobileVariant: "single",
  },
  faq: SERVICE_SQUINT_CONTENT.faq,
  patientExperience: SHARED_SERVICE_PATIENT_EXPERIENCE,

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


