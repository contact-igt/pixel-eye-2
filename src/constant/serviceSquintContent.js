export const SERVICE_SQUINT_CONTENT = {
  banner: {
    hero: {
      titleLines: [
        "Squint: When eyes",
        "don’t align,",
        "vision needs",
        "attention",
      ],
      description:
        "Squint can appear in childhood or adulthood and may cause eye strain, double vision, or lazy eye if left untreated.",
      image: {
        src: "/assets/Service/squint/squint_banner.png",
        alt: "",
      },
      mobileImage: "/assets/Service/squint/herobannermb.png",
      mobileImageMedia: "(max-width: 767px)",
      showMobileNabhBadge: true,
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "white",
      },
    },
    explainer: {
      variant: "squint",
      title: "What is Squint?",
      paragraphs: [
        "Squint, medically called strabismus, is an eye condition where the eyes are not aligned properly.",
        "One eye may look straight while the other eye turns inward, outward, upward, or downward.",
        "It may be constant or may appear only sometimes, especially when the child is tired, sick, or focusing on an object.",
        "In children, untreated squint can affect vision development and may lead to lazy eye, also called amblyopia.",
        "In adults, a newly developed squint may cause double vision, eye strain, or difficulty focusing.",
      ],
      loader: {
        src: "/assets/Service/squint/squint_loader.png",
        alt: "",
      },
      image: {
        src: "/assets/Service/squint/squint.png",
        alt: "Normal eye alignment and squint eye comparison",
      },
    },
  },

  symptoms: {
    title: "Symptoms you may notice",
    description:
      "Squint may be visible all the time or may appear only during certain activities.",
    note: "One eye may move away from the normal direction while the other eye looks straight.",
    image: {
      src: "/assets/Service/squint/squint_symptoms.png",
      alt: "Squint eye examination",
    },
    items: [
      { number: "01", text: "Eye turning inward or outward" },
      { number: "02", text: "Closing one eye often" },
      { number: "03", text: "Poor depth judgement" },
      { number: "04", text: "Tilting the head to focus clearly" },
      { number: "05", text: "Double vision or eye strain" },
    ],
  },

  causes: {
    title: "What can lead to Squint?",
    description:
      "Squint can happen due to different reasons, and the cause may vary from child to child or adult to adult.",
    items: [
      {
        number: "01",
        title: "Uncorrected glass power",
        image: "/assets/Service/squint/lead1.png",
      },
      {
        number: "02",
        title: "Weak eye muscle coordination",
        image: "/assets/Service/squint/lead2.png",
      },
      {
        number: "03",
        title: "Lazy eye",
        image: "/assets/Service/squint/lead3.png",
      },
      {
        number: "04",
        title: "Family history",
        image: "/assets/Service/squint/lead4.png",
      },
      {
        number: "05",
        title: "Neurological or nerve-related causes",
        image: "/assets/Service/squint/lead5.png",
      },
      {
        number: "06",
        title: "Eye injury or poor vision in one eye",
        image: "/assets/Service/squint/lead6.png",
      },
    ],
  },

  types: {
    title: "Types of Squint",
    description:
      "The type of squint depends on the direction in which the eye turns.",
    image: {
      src: "/assets/Service/squint/typeofsquint.png",
      mobileSrc: "/assets/Service/squint/typeofsquint_mobile.png",
      alt: "Eye drops being applied during squint care",
    },
    controls: {
      previousAriaLabel: "Previous squint type",
      nextAriaLabel: "Next squint type",
    },
    slides: [
      {
        id: "hypertropia",
        title: "Hypertropia",
        description: "One eye turns upward compared to the other eye.",
        image: "/assets/Service/squint/hypertropia.png",
      },
      {
        id: "esotropia",
        title: "Esotropia",
        description: "The eye turns inward, toward the nose.",
        image: "/assets/Service/squint/esotropia.png",
      },
      {
        id: "exotropia",
        title: "Exotropia",
        description: "The eye turns outward, away from the nose.",
        image: "/assets/Service/squint/exotropia.png",
      },
    ],
  },

  diagnosis: {
    title: "How Squint is diagnosed",
    paragraphs: [
      "A squint evaluation is more than just checking eye power. The doctor checks eye alignment, eye movements, vision in both eyes, glass power, depth perception, and whether lazy eye is present.",
      "Early assessment is especially important in children because timely treatment can help protect vision development.",
      "Treatment may include glasses, patching, eye exercises, prism glasses, or eye muscle surgery depending on the type and cause of squint.",
    ],
    media: [
      {
        title: "Cover Test",
        image: "/assets/Service/squint/diagnosed_image1.png",
        alt: "Cover test illustration",
      },
      {
        title: "Corneal Light Reflex Test",
        image: "/assets/Service/squint/diagnosed_image2.png",
        alt: "Corneal light reflex test illustration",
      },
      {
        title: "Visual Acuity Test",
        image: "/assets/Service/squint/diagnosed_image4.png",
        alt: "Visual acuity test illustration",
      },
    ],
    treatments: [
      {
        number: "1.",
        title: "Cover Test",
        description:
          "The specialist covers one of your eyes with an opaque paddle and watches how the other eye moves to focus on an object, which reveals hidden or visible misalignment.",
        image: "/assets/Service/squint/cover_test.png",
        alt: "Cover test for squint diagnosis",
      },
      {
        number: "2.",
        title: "Corneal Light Reflex Test",
        description:
          "A bright light is shone directly into the eyes. The specialist observes where the light reflects off your pupils to check if your eyes are pointing at the same spot.",
        image: "/assets/Service/squint/corneal_test.png",
        alt: "Corneal light reflex test for squint diagnosis",
      },
      {
        number: "3.",
        title: "Visual Acuity Test",
        description:
          "You read letters on a standard eye chart to measure how clearly each eye can see independently.",
        image: "/assets/Service/squint/visual_test.png",
        alt: "Visual acuity test for squint diagnosis",
      },
      {
        number: "4.",
        title: "Retinal & Refraction Examination",
        description:
          "Eye drops may be used to dilate your pupils and relax the focusing muscles. This allows the doctor to check for underlying vision issues (like nearsightedness or farsightedness) that might be causing the squint, and to inspect the internal structures of your eye.",
        image: "/assets/Service/squint/refraction_examination.png",
        sliderImage: "/assets/Service/squint/refraction_examination_mobile.png",
        alt: "Retinal and refraction examination for squint diagnosis",
        highlighted: true,
      },
    ],
  },
  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Squint care at Pixel Eye Hospital is led by experienced ophthalmologists trained in eye alignment, child vision development, and advanced treatment planning.",
    cardBg: "/assets/Service/cataract/clinicbg.png",
    cardBgAlt: "Pixel Eye clinic background",
    doctorImage: "/assets/Service/Dr. Abdul Rasheed.png",
    doctorImageAlt: "Dr. Abdul Rasheed",
    doctorName: "Dr. Abdul Rasheed",
    doctorDescription:
      "An ophthalmic surgeon trained at AIIMS New Delhi, with experience in squint diagnosis and management across age groups. He also works closely with patients for cataract and LASIK care, with a clear, patient-focused approach.",
  },
};
