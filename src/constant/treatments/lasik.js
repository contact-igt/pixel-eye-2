import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

export const LASIK_TREATMENT = {
  slug: "lasik",
  banner: SERVICE_LASIK_CONTENT.banner,
  symptoms: SERVICE_LASIK_CONTENT.symptoms,
  types: SERVICE_LASIK_CONTENT.types,
  laserVisionOptions: SERVICE_LASIK_CONTENT.laserVisionOptions,
  surgicalOptions: SERVICE_LASIK_CONTENT.surgicalOptions,
  clinicalExpertise: {
    ...SERVICE_LASIK_CONTENT.clinicalExpertise,
    variant: "multi",
  },
  faq: SERVICE_LASIK_CONTENT.faq,
  patientExperience: SHARED_SERVICE_PATIENT_EXPERIENCE,

  sections: [
    "banner",
    "symptoms",
    "types",
    "laserVisionOptions",
    "surgicalOptions",
    "clinicalExpertise",
    "getStarted",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};


