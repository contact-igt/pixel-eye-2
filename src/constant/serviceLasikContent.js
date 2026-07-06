import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";

const LASIK_SYMPTOMS = {
  title: "Is LASIK right for you?",
  description:
    "LASIK may be considered if you have been using glasses or contact lenses and want to reduce your dependency on them.",
  note: "Your spectacle or contact lens power should usually be stable before considering LASIK.",
  image: {
    src: "/assets/Service/Lasik/1.png",
    alt: "LASIK laser vision correction procedure",
  },
  items: [
    { number: "01", text: "Stable glass power" },
    { number: "02", text: "Healthy cornea" },
    { number: "03", text: "No major dry eye or eye disease" },
  ],
};

export const SERVICE_LASIK_CONTENT = {
  banner: {
    hero: {
      titleLines: ["LASIK: Clear vision", "beyond glasses"],
      description:
        "At Pixel Eye Hospital, we use Advanced laser vision correction to reduce dependence on spectacles and contact lenses, with a detailed eye evaluation to check your suitability.",
      image: {
        src: "/assets/Service/Lasik/Lasik_header.png",
        alt: "LASIK laser eye surgery procedure",
      },
      mobileImage: "/assets/Service/Lasik/herobannermb.png",
      showMobileNabhBadge: true,
    },
    explainer: {
      variant: "lasik",
      title: "What is LASIK?",
      paragraphs: [
        "LASIK is a laser vision correction procedure used to treat common refractive errors such as nearsightedness, farsightedness, and astigmatism.",
        "During the procedure, the cornea is reshaped with a precise laser so that light focuses more accurately on the retina, helping improve vision without depending fully on glasses or contact lenses.",
      ],
    },
    comparison: {
      image: {
        src: "/assets/Service/Lasik/glasses.png",
        alt: "Normal Vision vs Refractive Error comparison through glasses",
      },
    },
  },

  symptoms: LASIK_SYMPTOMS,
  signs: LASIK_SYMPTOMS,

  types: {
    title: "What LASIK can correct",
    description:
      "LASIK is designed to correct refractive errors that cause blurred vision.",
    controls: {
      previousAriaLabel: "Previous refractive error type",
      nextAriaLabel: "Next refractive error type",
    },
    slides: [
      {
        id: "hyperopia",
        title: "Hyperopia ( Farsightedness )",
        image: "/assets/Service/Lasik/hyperopia.png",
        alt: "Hyperopia eye illustration",
      },
      {
        id: "myopia",
        title: "Myopia ( Nearsightedness )",
        image: "/assets/Service/Lasik/myopia.png",
        alt: "Myopia eye illustration",
      },
      {
        id: "astigmatism",
        title: "Astigmatism",
        image: "/assets/Service/Lasik/astigmatism.png",
        alt: "Astigmatism eye illustration",
      },
    ],
  },

  laserVisionOptions: {
    title: "Laser vision correction options",
    description:
      "Your doctor will suggest the right procedure based on your cornea, power, lifestyle, and eye health.",
    image: {
      src: "/assets/Service/Lasik/Subtract.png",
      mobileSrc: "/assets/Service/Lasik/vision_correction_mobile.png",
      alt: "Eye drop being applied before laser vision correction",
    },
    controls: {
      previousAriaLabel: "Previous laser vision correction option",
      nextAriaLabel: "Next laser vision correction option",
    },
    slides: [
      {
        id: "femto-lasik",
        title: "Femto LASIK / Bladeless LASIK",
        description:
          "A laser-assisted flap creation method designed for greater precision and comfort.",
        image: "/assets/Service/Lasik/3.png",
        alt: "Femto LASIK bladeless laser equipment",
      },
      {
        id: "lasik",
        title: "LASIK",
        description:
          "A commonly performed laser vision correction procedure where the cornea is reshaped to improve focusing power.",
        image: "/assets/Service/Lasik/1.png",
        alt: "LASIK laser vision correction procedure",
      },
      {
        id: "contoura-lasik",
        title: "Contoura LASIK",
        description:
          "A customized laser correction option planned according to the unique shape of the cornea.",
        image: "/assets/Service/Lasik/2.png",
        alt: "Contoura LASIK laser equipment",
      },
    ],
  },

  surgicalOptions: {
    titleLines: ["Our LASIK treatment", "approach"],
    paragraphs: [
      "At Pixel Eye Hospitals, LASIK is planned only after a detailed pre-LASIK evaluation.",
      "The aim is not just to remove glasses, but to choose the safest and most suitable vision correction option for your eyes.",
      "Your evaluation may include refraction testing, corneal mapping, corneal thickness measurement, dry-eye assessment, eye pressure check, and retinal examination when required.",
      "Based on these results, the doctor will explain whether LASIK is suitable for you or whether another option would be safer.",
    ],
    options: [
      {
        id: "femto-lasik",
        title: "Common LASIK",
        image: "/assets/Service/cataract/option1.png",
        imageAlt: "Femto LASIK bladeless procedure",
      },
      {
        id: "common-lasik",
        title: "Contoura / Topography-Guided LASIK",
        image: "/assets/Service/cataract/option3.png",
        imageAlt: "Common LASIK procedure",
      },
      {
        id: "contoura-lasik",
        title: "Femto / Bladeless LASIK",
        image: "/assets/Service/cataract/option2.png",
        imageAlt: "Contoura topography-guided LASIK",
      },
    ],
  },

  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "LASIK FAQ consultation",
    note: "For more detailed and personalised information on LASIK suitability and cost, contact us via email or phone to book your evaluation appointment.",
    items: [
      {
        id: "am-i-a-candidate-for-lasik",
        question: "Am I a candidate for LASIK?",
        answer:
          "Suitable candidates typically have a stable refractive error for at least a year, adequate corneal thickness, no significant dry eye, and are above 18 years of age. A detailed pre-LASIK evaluation at our clinic will confirm your suitability.",
      },
      {
        id: "how-long-does-lasik-last",
        question: "How long does LASIK last?",
        answer:
          "For most patients, LASIK provides long-lasting vision correction. The reshaping of the cornea is permanent. However, natural age-related vision changes (such as presbyopia) may still occur over time.",
      },
      {
        id: "is-lasik-painful",
        question: "Is LASIK painful?",
        answer:
          "The procedure is performed under topical anaesthetic eye drops, so you should feel no pain during LASIK. Some patients report mild discomfort or a gritty sensation for a few hours afterward, which usually resolves quickly.",
      },
      {
        id: "lasik-recovery-time",
        question: "What is the recovery time after LASIK?",
        answer:
          "Most patients notice significantly improved vision within 24–48 hours. Full stabilisation typically takes 1–3 months. You should avoid rubbing your eyes and strenuous activity for the first week.",
      },
      {
        id: "can-lasik-correct-astigmatism",
        question: "Can LASIK correct astigmatism?",
        answer:
          "Yes. LASIK, including Contoura / Topography-Guided LASIK, can effectively treat astigmatism by precisely reshaping the irregular corneal curvature that causes blurred or distorted vision.",
      },
      {
        id: "what-happens-during-lasik",
        question: "What happens during the LASIK procedure?",
        answer:
          "A thin flap is created on the cornea (using a microkeratome or femtosecond laser), folded back, and an excimer laser reshapes the underlying tissue. The flap is then repositioned. The entire procedure typically takes under 15 minutes per eye.",
      },
      {
        id: "both-eyes-same-day",
        question: "Can both eyes be treated on the same day?",
        answer:
          "In most cases, yes. Treating both eyes on the same day is standard practice and is safe and convenient for the majority of patients.",
      },
      {
        id: "lasik-risks",
        question: "What are the risks of LASIK?",
        answer:
          "LASIK is a well-established procedure with a high safety record. Potential risks include dry eyes, halos or glare at night, and under- or over-correction. These are discussed in detail during your pre-LASIK evaluation.",
      },
    ],
  },

  clinicalExpertise: SERVICE_PEDIATRIC_CONTENT.clinicalExpertise,

  patientsExperience: {
    titleLines: ["patient experiences"],
    description:
      "From patients who have already taken their first step toward clearer vision.",
    testimonials: [
      {
        id: "lasik-exp-1",
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
        id: "lasik-exp-2",
        text: "Outstanding experience. My vision improved significantly within a day. Highly recommend Pixel Eye!",
        name: "P. Lakshmi",
        rating: "5.0",
        profileImage: {
          src: "/assets/About/cardimg2.png",
          alt: "Patient profile image 2",
        },
        backgroundImage: "/assets/About/remembercard.png",
      },
      {
        id: "lasik-exp-3",
        text: "Very thorough pre-LASIK evaluation. The team explained every step clearly. Wonderful results.",
        name: "A. Kumar",
        rating: "4.8",
        profileImage: {
          src: "/assets/About/cardimg3.png",
          alt: "Patient profile image 3",
        },
        backgroundImage: "/assets/About/remembercard.png",
      },
    ],
  },
};
