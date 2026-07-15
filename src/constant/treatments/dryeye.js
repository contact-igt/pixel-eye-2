import { SERVICE_DRYEYE_CONTENT } from "@/constant/serviceDryeyeContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

export const DRYEYE_TREATMENT = {
  slug: "dryeye",
  banner: SERVICE_DRYEYE_CONTENT.banner,
  symptoms: SERVICE_DRYEYE_CONTENT.symptoms,
  causes: SERVICE_DRYEYE_CONTENT.causes,
  types: SERVICE_DRYEYE_CONTENT.types,
  diagnosis: SERVICE_DRYEYE_CONTENT.diagnosis,
  clinicalExpertise: SERVICE_DRYEYE_CONTENT.clinicalExpertise,
  faq: SERVICE_DRYEYE_CONTENT.faq,
  patientExperience: SHARED_SERVICE_PATIENT_EXPERIENCE,

  // Add only dedicated Dry Eye sections as their content and assets are supplied.
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