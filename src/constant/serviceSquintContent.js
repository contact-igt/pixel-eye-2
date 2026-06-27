export const SERVICE_SQUINT_CONTENT = {
  banner: {
    hero: {
      image: {
        src: "/assets/Service/squint/squint_banner.png",
        alt: "",
      },
      nav: {
        rightSlot: "book",
        navTheme: "dark",
        cardBg: "white",
      },
    },
    explainer: {
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
    note:
      "One eye may move away from the normal direction while the other eye looks straight.",
    image: {
      src: "/assets/Service/Squint Treatment.png",
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
        image: "/assets/Service/cataract/Frame 241.png",
      },
      {
        number: "02",
        title: "Weak eye muscle coordination",
        image: "/assets/Service/cataract/Frame 111.png",
      },
      {
        number: "03",
        title: "Lazy eye",
        image: "/assets/Service/cataract/Frame 109.png",
      },
      {
        number: "04",
        title: "Family history",
        image: "/assets/Service/cataract/Frame 108.png",
      },
      {
        number: "05",
        title: "Neurological or nerve-related causes",
        image: "/assets/Service/cataract/Frame 110.png",
      },
      {
        number: "06",
        title: "Eye injury or poor vision in one eye",
        image: "/assets/Service/cataract/Frame 107.png",
      },
    ],
  },

  types: {
    title: "Types of Squint",
    description:
      "The type of squint depends on the direction in which the eye turns.",
    image: {
      src: "/assets/Service/squint/typeofsquint.png",
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
      },
      {
        id: "esotropia",
        title: "Esotropia",
        description: "The eye turns inward, toward the nose.",
      },
      {
        id: "exotropia",
        title: "Exotropia",
        description: "The eye turns outward, away from the nose.",
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
        title: "Femto LASIK / Bladeless LASIK",
        image: "/assets/Service/squint/diagnosed_image1.png",
        alt: "Eye surgery illustration",
      },
      {
        title: "Contoura / Topography-Guided LASIK",
        image: "/assets/Service/squint/diagnosed_image2.png",
        alt: "Eye surgery illustration",
      },
      {
        title: "Common LASIK",
        image: "/assets/Service/squint/diagnosed_image4.png",
        alt: "Eye surgery illustration",
      },
    ],
    treatments: [
      {
        number: "1.",
        title: "Glasses & Soft Contact Lenses",
        description:
          "Creates a detailed map of the cornea and helps detect early irregularity.",
      },
      {
        number: "2.",
        title: "RGP, Hybrid & Scleral Lenses",
        description:
          "Creates a detailed map of the cornea and helps detect early irregularity.",
      },
      {
        number: "3.",
        title: "Corneal Collagen Cross-Linking / C3R",
        description:
          "Creates a detailed map of the cornea and helps detect early irregularity.",
      },
      {
        number: "4.",
        title: "Intracorneal Ring Segments",
        description:
          "Small ring segments may be placed inside the cornea in selected mild to moderate cases to help flatten the cornea and improve vision.",
        highlighted: true,
      },
    ],
  },
};
