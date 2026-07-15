import { SERVICE_KERATOCONUS_CONTENT } from "@/constant/serviceKeratoconusContent";
import { SHARED_SERVICE_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

const { diagnosisSlider, treatmentApproach, risks } =
  SERVICE_KERATOCONUS_CONTENT;

export const KERATOCONUS_TREATMENT = {
  slug: "keratoconus",

  // Common TreatmentBanner data
  banner: {
    ...SERVICE_KERATOCONUS_CONTENT.banner,
    explainer: {
      ...SERVICE_KERATOCONUS_CONTENT.whatIsKeratoconus,
      variant: "keratoconus",
    },
  },

  // TreatmentSymptoms
  symptoms: SERVICE_KERATOCONUS_CONTENT.signs,

  // Map risks → TreatmentCauses format
  causes: {
    title: risks.titleLines[0],
    description: risks.descriptionLines.join(" "),
    items: risks.items,
  },

  // TreatmentTypes carousel → "How Keratoconus is diagnosed" (diagnosisSlider items as slides)
  types: {
    title: treatmentApproach.title, // "How Keratoconus is diagnosed"
    description: treatmentApproach.paragraphs[0],
    image: treatmentApproach.image, // hero banner image for the section
    controls: {
      previousAriaLabel: diagnosisSlider.previousAriaLabel,
      nextAriaLabel: diagnosisSlider.nextAriaLabel,
    },
    slides: diagnosisSlider.items.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
    })),
  },

  // TreatmentDiagnosis panel → "Our Keratoconus treatment approach"
  diagnosis: SERVICE_KERATOCONUS_CONTENT.diagnosis,

  clinicalExpertise: {
      ...SERVICE_KERATOCONUS_CONTENT.clinicalExpertise,
      variant: "multi",
    },
  faq: SERVICE_KERATOCONUS_CONTENT.faq,
  patientExperience: SHARED_SERVICE_PATIENT_EXPERIENCE,

  // types (How Keratoconus is diagnosed carousel) comes FIRST per Figma
  // diagnosis (Our Keratoconus treatment approach panel) comes SECOND per Figma
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


