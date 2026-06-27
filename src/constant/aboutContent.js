import { DOCTORS_CONTENT } from "@/constant/doctorsContent";

export const ABOUT_CONTENT = {
  hero: {
    image: "/assets/About/about-banner.png",
    titleLines: ["Precision in care.", "Clarity in vision."],
    subtitle: "Personalised eye care that helps you see life, fully and with confidence.",
    rightSlot: "book",
    navTheme: "light",
    cardBg: "transparent",
    height: "medium",
    showOverlay: true,
    imagePosition: "center center",
    mobileCta: {
      label: "BOOK APPOINTMENT",
      href: "/appointment",
      variant: "light",
    },
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
      ["At Pixel Eye Hospital,", "we understand what better vision truly means to you."],
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
    doctors: DOCTORS_CONTENT.doctors,
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
        link: "#",
      },
      {
        id: "cataract-types",
        title: "Types of Cataract Surgery Explained",
        description:
          "The Brutal Truth About Pain, Healing Time, and What to Expect Day-by-Day!",
        image: "/assets/About/thumbnai2.png",
        link: "#",
      },
      {
        id: "clear-vision",
        title: "Clear Vision without Glasses",
        description:
          "The Brutal Truth About Pain, Healing Time, and What to Expect Day-by-Day!",
        image: "/assets/About/thumbnail3.png",
        link: "#",
      },
    ],
    exploreMore: {
      label: "Explore More",
      href: "/appointment",
    },
  },
  rememberRecommend: {
    titleLines: ["Care that patients remember", "and recommend"],
    description:
      "Honest stories from people who trusted us with their vision, treatment, and their recovery journey.",
    testimonials: [
      {
        id: "remember-1",
        text: "The LASIK procedure was quick, safe, and well-explained. Truly professional care.",
        name: "S. Ramesh",
        rating: "4.5",
        profileImage: {
          src: "/assets/About/cardimg1.png",
          alt: "Patient profile image 1",
        },
        backgroundImage: "/assets/About/remembercard.png",
      },
      {
        id: "remember-2",
        text: "The LASIK procedure was quick, safe, and well-explained. Truly professional care.",
        name: "S. Ramesh",
        rating: "4.5",
        profileImage: {
          src: "/assets/About/cardimg2.png",
          alt: "Patient profile image 2",
        },
        backgroundImage: "/assets/About/remembercard.png",
      },
      {
        id: "remember-3",
        text: "The LASIK procedure was quick, safe, and well-explained. Truly professional care.",
        name: "S. Ramesh",
        rating: "4.5",
        profileImage: {
          src: "/assets/About/cardimg3.png",
          alt: "Patient profile image 3",
        },
        backgroundImage: "/assets/About/remembercard.png",
      },
    ],
  },
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

