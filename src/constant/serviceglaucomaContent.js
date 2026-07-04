export const SERVICE_GLAUCOMA_CONTENT = {
  banner: {
    hero: {
      image: {
        src: "/assets/Service/glaucoma/banner.png",
        alt: "",
      },
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "white",
      },
    },
    explainer: {
      title: "What is Glaucoma?",
      paragraphs: [
        "Glaucoma is a group of eye conditions that can damage the optic nerve, which carries visual information from the eye to the brain.",
        "It is commonly associated with increased eye pressure, but glaucoma can also occur even when eye pressure is within the normal range.",
        "If left untreated, it can slowly affect side vision and may eventually lead to permanent vision loss.",
      ],

      image: {
        src: "/assets/Service/glaucoma/herobanner1.png",
        alt: "Normal eye alignment and squint eye comparison",
      },
    },
  },

  symptoms: {
    title: "Symptoms you may notice",
    description:
      "Glaucoma may not show clear symptoms in the beginning. However, certain signs should not be ignored.",
    note: "Peripheral vision may slowly reduce, often without being noticed in the early stage.",
    image: {
      src: "/assets/Service/glaucoma/symptoms.jpg",
      alt: "Glaucoma symptoms",
    },
    items: [
      { number: "01", text: "Gradual loss of side vision" },
      { number: "02", text: "Frequent change in glasses power" },
      { number: "03", text: "Blurred or hazy visiont" },
    ],
  },

  causes: {
    title: "What can lead to Glaucoma?",
    description:
      "Glaucoma can develop due to several risk factors. Some people may have a higher chance of developing it.",
    items: [
      {
        number: "01",
        title: "High eye pressure (IOP)",
        image: "/assets/Service/squint/lead1.png",
      },
      {
        number: "02",
        title: "Family History",
        image: "/assets/Service/squint/lead2.png",
      },
      {
        number: "03",
        title: "Age above 40",
        image: "/assets/Service/squint/lead3.png",
      },
      {
        number: "04",
        title: "Diabetes or High BP",
        image: "/assets/Service/squint/lead4.png",
      },
      {
        number: "05",
        title: "Long-term Steroid use",
        image: "/assets/Service/squint/lead5.png",
      },
      {
        number: "06",
        title: "Previous Eye Injury",
        image: "/assets/Service/squint/lead6.png",
      },
    ],
  },

  types: {
    title: "Types of Glaucoma",
    description:
      "Different types of glaucoma affect the eye in different ways. Identifying the type helps plan the right treatment.",
    image: {
      src: "/assets/Service/glaucoma/types.png",
      mobileSrc: "/assets/Service/glaucoma/types_mobile.png",
      alt: "Types of Glaucoma",
    },
    controls: {
      previousAriaLabel: "Previous Glaucoma type",
      nextAriaLabel: "Next Glaucoma type",
    },
    slides: [
      {
        id: "Open-Angle Glaucoma",
        title: "Open-Angle Glaucoma",
        description:
          "The most common type of glaucoma. It usually develops slowly and may not cause noticeable symptoms in the early stage.",
        image: "/assets/Service/glaucoma/open-angle.png",
      },
      {
        id: "Normal-Tension Glaucoma",
        title: "Normal-Tension Glaucoma",
        description:
          "In this type, optic nerve damage happens even when eye pressure is not very high.",
        image: "/assets/Service/glaucoma/normal-tension.png",
      },
      {
        id: "Angle-Closure Glaucoma",
        title: "Angle-Closure Glaucoma",
        description:
          "This type can happen when the drainage angle of the eye becomes blocked.",
        image: "/assets/Service/glaucoma/angle-closure.png",
      },
    ],
  },

  diagnosis: {
    title: "How Glaucoma is diagnosed",
    paragraphs: [
      "A glaucoma evaluation includes more than just checking eye pressure. The doctor examines the optic nerve, drainage angle, vision field, and structural health of the eye.",
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
        title: "Eye Pressure Test (Tonometry)",
        description:
          "This test measures the pressure inside the eye. High eye pressure is an important risk factor for glaucoma.",
        image: "/assets/Service/glaucoma/eyepressure.png",
        alt: "Eye pressure test for glaucoma",
      },
      {
        number: "2.",
        title: "Visual Field Test",
        description:
          "This test checks side vision and helps detect vision loss that may not be noticed during daily activities.",
        image: "/assets/Service/glaucoma/visualfield.png",
        alt: "Visual field test for glaucoma",
      },
      {
        number: "3.",
        title: "Optic Nerve Examination",
        description:
          "The optic nerve is checked for signs of damage, thinning, or structural changes.",
        image: "/assets/Service/glaucoma/opticnerve.png",
        alt: "Optic nerve examination for glaucoma",
      },
      {
        number: "4.",
        title: "OCT Scan",
        description:
          "OCT helps assess the thickness of the optic nerve fiber layer and detect early glaucoma-related changes.",
        image: "/assets/Service/glaucoma/oct_scan1.png",
        sliderImage: "/assets/Service/glaucoma/oct_scan1_slider.png",
        alt: "OCT scan for glaucoma diagnosis",
        highlighted: true,
      },
    ],
  },

  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Glaucoma care at Pixel Eye Hospital is led by experienced ophthalmologists trained in advanced glaucoma diagnosis and management.",
    cardBg: "/assets/Service/cataract/clinicbg.png",
    cardBgAlt: "Pixel Eye clinic background",
    doctors: [
      {
        name: "Dr. Abdul Rasheed",
        description: "MD (AIIMS)\nCataract, Refractive &\nSquint Surgeon",
        image: "/assets/Service/pediatric/dr-abdul-rasheed.png",
        imageAlt: "Dr. Abdul Rasheed",
        href: "/doctors",
      },
      {
        name: "Dr. Krishna Poojita",
        description:
          "MBBS, DNB (Ophthalmology),\nMRCS (Edinburgh), FICO (UK),\nFPRS (Narayana Nethralaya)\nCataract & Refractive\nSurgeon",
        image: "/assets/Service/pediatric/dr-krishna-poojita.png",
        imageAlt: "Dr. Krishna Poojita",
        href: "/doctors",
      },
    ],
  },
};
