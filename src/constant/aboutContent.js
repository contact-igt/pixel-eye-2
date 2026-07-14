import { DOCTORS_CONTENT } from "@/constant/doctorsContent";
import { SHARED_ABOUT_PATIENT_EXPERIENCE } from "@/constant/sharedPatientExperience";

const ABOUT_VISIONARIES_DOCTORS = [
  DOCTORS_CONTENT.doctors.find((doctor) => doctor.id === "krishna-poojita"),
  DOCTORS_CONTENT.doctors.find((doctor) => doctor.id === "abdul-rasheed"),
].filter(Boolean);

export const ABOUT_CONTENT = {
  hero: {
    image: "/assets/About/about-banner-new.jpeg",
    mobileImage: "/assets/About/about-banner-mb-new.jpeg",
    titleLines: ["Precision in care.", "Clarity in vision."],
    subtitle:
      "Personalised eye care that helps you see life, fully and with confidence.",
    rightSlot: "book",
    navTheme: "light",
    cardBg: "transparent",
    height: "medium",
    showOverlay: true,
    imagePosition: "center center",
  },
  experience: {
    titleLines: ["We experience the world", "through what we see"],
    subtitleLines: [
      "Personalised eye care that helps you see life, fully",
      "and with confidence.",
    ],
    image: {
      src: "/assets/About/experience.png",
      alt: "Doctor checking a patient's eye",
    },
    paragraphs: [
      [
        "At **Pixel Eye Hospital**,",
      ],
      [
        "we understand what better vision truly means to you.",
        
      ],
      [
        "We are a modern eye care centre, where advanced Ophthalmology meets a",
        "more personal, considered approach to treatment. From routine check-ups to",
        "complex procedures, care for us is as much about the experience as it is about",
        "the outcome.",
      ],
      [
        "Every patient is different, and deserves to be understood that way.",
        "We take time to listen, explain clearly, and guide you with honesty and care.",
      ],
      ["No complexity. No uncertainty. Just clarity and confidence."],
      [
        "Backed by advanced technology and clinical expertise, we ensure you feel",
        "informed and comfortable at every step.",
        "Because clear vision matters-and so does the journey.",
      ],
    ],
  },
  visionaries: {
    titleLines: ["The visionaries behind", "Pixel Eye"],
    subtitleLines: [
      "Founded by specialists who make eye care clear and comfortable",
      "through a patient-first approach.",
    ],
    doctors: ABOUT_VISIONARIES_DOCTORS,
  },
  processVideos: {
    titleLines: ["Understand the process,", "trust the outcome"],
    description:
      "A closer look at how each treatment works, so that every step feels familiar and you feel ready for what comes next.",
    videos: [
      {
        id: "prk-recovery",
        title: "PRK Surgery Recovery!",
        description:
          "The Brutal Truth About Pain, Healing Time, and What to Expect Day-by-Day!",
        image: "/assets/About/thumbnail1.png",
        link: "https://www.youtube.com/watch?v=l-ARAIopPeM",
        target_blank: true,
      },
      {
        id: "cataract-types",
        title: "Types of Cataract Surgery Explained",
        description:
          "A Simple Guide to the Different Cataract Procedures and How to Choose the Right One for You.",
        image: "/assets/About/thumbnai2.png",
        link: "https://www.youtube.com/watch?v=Du0BiqaQ_rE",
        target_blank: true,
      },
      {
        id: "clear-vision",
        title: "Clear Vision without Glasses",
        description:
          "Discover the Vision Correction Options That Can Free You from Glasses and Contact Lenses.",
        image: "/assets/About/thumbnail3.png",
        link: "https://www.youtube.com/watch?v=n5V-uGRkYVM",
        target_blank: true,
      },
    ],
    exploreMore: {
      label: "Explore More",
      href: "https://www.youtube.com/@pixeleyehospitaleducation?app=desktop&ra=m&fbclid=PAZnRzaAS65nhwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp_scFwqiz_mZUjmok_7iw_cN4vq9QyQpdmZ-Htw_39kAzRAlWS9kj0rOLv5G_aem_M4p4DiJN9-y_58A5Gzmx7Q",
      target_blank: true,
    },
  },
  rememberRecommend: SHARED_ABOUT_PATIENT_EXPERIENCE,
  suggestedReads: {
    heading: "Suggested reads",
    subtitle: "Learn more about cataracts",
    reads: [
      {
        id: "suggested-read-1",
        featured: true,
        title: "At what age should squint treatment be done?",
        description:
          "Many people are curious about when a person should receive treatment for a squint and at what age.",
        date: "12 Jul 2025",
        image: "/assets/About/read1.png",
        href: "/appointment",
      },
      {
        id: "suggested-read-2",
        featured: false,
        title: "Advancements and Future of Lasik surgery",
        description:
          "LASIK eye surgery is a refractive eye surgery that makes use of lasers to fix issues with your vision.",
        date: "12 Jul 2025",
        image: "/assets/About/read2.png",
        href: "/appointment",
      },
      {
        id: "suggested-read-3",
        featured: false,
        title: "Age Related Macular Degeneration (AMD)",
        description:
          "It might not be a term as common as cataract, but people whose parents or someone they know have had this,",
        date: "12 Jul 2025",
        image: "/assets/About/read3.png",
        href: "/appointment",
      },
    ],
  },
};




