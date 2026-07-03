import { SERVICE_LASIK_CONTENT } from "@/constant/serviceLasikContent";

export const LASIK_TREATMENT = {
  slug: "lasik",
  banner: SERVICE_LASIK_CONTENT.banner,
  symptoms: SERVICE_LASIK_CONTENT.signs,
  types: SERVICE_LASIK_CONTENT.types,
  surgicalOptions: SERVICE_LASIK_CONTENT.surgicalOptions,
  clinicalExpertise: {
    ...SERVICE_LASIK_CONTENT.clinicalExpertise,
    variant: "single",
  },
  faq: SERVICE_LASIK_CONTENT.faq,
  patientExperience: SERVICE_LASIK_CONTENT.patientsExperience,

  sections: [
    "banner",
    "symptoms",
    "types",
    "laserVisionOptions",
    "surgicalOptions",
    "clinicalExpertise",
    "faq",
    "suggestedReads",
    "patientExperience",
  ],
};
