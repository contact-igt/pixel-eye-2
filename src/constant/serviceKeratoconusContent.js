export const SERVICE_KERATOCONUS_CONTENT = {
  banner: {
    hero: {
      titleLines: [
        "Keratoconus:",
        "Protect your cornea,",
        "preserve your",
        "vision",
      ],
      description:
        "Keratoconus can slowly change the shape of your cornea and cause distorted or blurred vision. Early diagnosis and timely treatment can help control progression and improve visual quality.",
      image: {
        src: "/assets/Service/keratoconus/Subtract.png",
        alt: "Close view of an eye showing keratoconus banner artwork",
      },
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "transparent",
      },
      mobileCta: {
        label: "BOOK APPOINTMENT",
        href: "/appointment",
        variant: "light",
      },
      imagePosition: "center center",
      showOverlay: true,
    },
  },
  whatIsKeratoconus: {
    title: "What is Keratoconus?",
    paragraphs: [
      "Keratoconus is a condition where the normally round cornea becomes thin and gradually bulges into a cone-like shape.",
      "This irregular shape affects how light enters the eye, leading to blurred, distorted, or fluctuating vision.",
      "It often starts with frequent changes in glass power, increasing astigmatism, glare, halos, or difficulty seeing clearly even with spectacles.",
      "A detailed corneal evaluation is needed to diagnose the condition and understand whether it is stable or progressing.",
    ],
    image: {
      src: "/assets/Service/keratoconus/Rectangle 99.png",
      alt: "Comparison of normal eye and keratoconus corneal shape",
    },
  },
  signs: {
    title: "Symptoms you may notice",
    description:
      "Keratoconus can be missed in the early stage because it may look like a simple change in glass power.",
    listIntro:
      "your spectacle power keeps changing often, especially cylindrical power.",
    ariaLabel: "Keratoconus symptoms list",
    image: {
      src: "/assets/Service/keratoconus/Rectangle 10.png",
      alt: "Eye examination for keratoconus symptoms",
    },
    items: [
      { number: "01", text: "Frequent change in glasses" },
      { number: "02", text: "Blurred or distorted vision", active: true },
      { number: "03", text: "Glare and halos at night" },
    ],
  },
  risks: {
    titleLines: ["What can worsen Keratoconus?"],
    descriptionLines: [
      "Some habits and conditions can increase the risk of corneal weakening",
      "or faster progression.",
    ],
    items: [
      {
        number: "01",
        title: "Eye rubbing",
        image: "/assets/Service/keratoconus/Frame 241.png",
      },
      {
        number: "02",
        title: "Eye allergies",
        image: "/assets/Service/keratoconus/Frame 111.png",
      },
      {
        number: "03",
        title: "Family history",
        image: "/assets/Service/keratoconus/Frame 109.png",
      },
      {
        number: "04",
        title: "Rapid power changes",
        image: "/assets/Service/keratoconus/Frame 108.png",
      },
      {
        number: "05",
        title: "Poor contact lens tolerance",
        image: "/assets/Service/keratoconus/Frame 110.png",
      },
      {
        number: "06",
        title: "Delayed diagnosis",
        image: "/assets/Service/keratoconus/Frame 107.png",
      },
    ],
  },
  treatmentApproach: {
    title: "How Keratoconus is diagnosed",
    paragraphs: [
      "A normal eye power check may not be enough to detect keratoconus.",
      "Diagnosis usually requires a detailed corneal evaluation to study the shape, thickness, and curvature of the cornea.",
    ],
    image: {
      src: "/assets/Service/keratoconus/Subtract (1).png",
      alt: "Keratoconus diagnosis evaluation",
    },
  },
  diagnosisSlider: {
    previousAriaLabel: "Previous keratoconus diagnosis step",
    nextAriaLabel: "Next keratoconus diagnosis step",
    items: [
      {
        id: "corneal-thickness-check",
        title: "Corneal Thickness Check",
        description:
          "Measures how thin the cornea is and helps decide treatment safety.",
        image: "/assets/Service/keratoconus/corneal_thickness.png",
        imageAlt: "Corneal thickness check",
      },
      {
        id: "corneal-topography-tomography",
        title: "Corneal Topography / Tomography",
        description:
          "Creates a detailed map of the cornea and helps detect early irregularity.",
        image: "/assets/Service/keratoconus/corneal_topography.png",
        imageAlt: "Corneal topography tomography",
      },
      {
        id: "refraction-test",
        title: "Refraction Test",
        description:
          "Checks spectacle power and irregular astigmatism.",
        image: "/assets/Service/keratoconus/refraction_test.png",
        imageAlt: "Refraction test",
      },
    ],
  },
  keratoconusApproach: {
    titleLines: ["Our Keratoconus", "treatment approach"],
    description:
      "At Pixel Eye Hospitals, keratoconus care starts with a detailed evaluation of corneal shape, thickness, and progression before selecting the right treatment option.",
    options: [
      {
        id: "glasses-soft-contact-lenses",
        number: "1.",
        title: "Glasses & Soft Contact Lenses",
        description:
          "Glasses or soft contact lenses may help in early or mild keratoconus when vision can still be corrected comfortably.",
        image: "/assets/Service/keratoconus/glasses.png",
        imageAlt: "Glasses and soft contact lenses for keratoconus",
      },
      {
        id: "rgp-hybrid-scleral-lenses",
        number: "2.",
        title: "RGP, Hybrid & Scleral Lenses",
        description:
          "Special contact lenses may be recommended when regular glasses do not provide clear vision because of corneal irregularity.",
        image: "/assets/Service/keratoconus/hybrid_lens.png",
        imageAlt: "RGP hybrid and scleral lenses for keratoconus",
      },
      {
        id: "c3r-corneal-collagen-cross-linking",
        number: "3.",
        title: "Corneal Collagen Cross-Linking / C3R",
        description:
          "C3R helps strengthen the cornea and is commonly advised when keratoconus shows signs of progression.",
        image: "/assets/Service/keratoconus/corneal_cologen.png",
        imageAlt: "Corneal collagen cross-linking for keratoconus",
      },
      {
        id: "intracorneal-ring-segments",
        number: "4.",
        title: "Intracorneal Ring Segments",
        description:
          "Small ring segments may be placed inside the cornea in selected mild to moderate cases to help flatten the cornea and improve vision.",
        image: "/assets/Service/keratoconus/intracorneal.png",
        imageAlt: "Intracorneal ring segments for keratoconus",
        featured: true,
      },
    ],
  },
};




