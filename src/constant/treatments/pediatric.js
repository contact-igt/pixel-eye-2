import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

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


