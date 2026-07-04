export const SERVICE_PEDIATRIC_CONTENT = {
  banner: {
    hero: {
      image: {
        src: "/assets/Service/pediatric/home_banner.png",
        alt: "Child receiving a pediatric eye examination",
      },
      title: "Pediatric Eye Care",
      description:
        "Healthy eyes are important for every child's learning, growth, confidence, and daily activities.",
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "white",
      },
    },
    explainer: {
      title: "What is Pediatric Eye Care?",
      paragraphs: [
        "Pediatric eye care is a specialized branch of eye care that focuses on the diagnosis and treatment of vision and eye-related problems in infants, children, and teenagers.",
        "Unlike adults, children may not always complain about blurred vision, eye strain, or difficulty seeing.",
        "They may adjust to poor vision without realizing something is wrong.",
        "That is why regular eye screening and timely consultation are important.",
      ],
      loader: {
        src: "/assets/Service/squint/squint_loader.png",
        alt: "",
      },
      image: {
        src: "/assets/Service/pediatric/pediatric1.png",
        mobileSrc: "/assets/Service/pediatric/pediatric_mobile.png",
        alt: "What is pediatric eyecare overview",
      },
    },
  },

  symptoms: {
    title: "Symptoms you may notice",
    description:
      "Parents should observe small changes in their child's eyes, vision, behavior, and learning habits.",
    note: "The child may rub their eyes often due to strain, dryness, allergy, or unclear vision.",
    image: {
      src: "/assets/Service/pediatric/symptoms.png",
      alt: "Child sitting too close to a screen",
    },
    items: [
      { number: "01", text: "Frequent rubbing of eyes" },
      { number: "02", text: "Sitting too close to screens" },
      { number: "03", text: "Headache or eye strain" },
    ],
  },

  causes: {
    title: "What Can Lead to Pediatric Eye Problems?",
    description:
      "Children can develop eye problems due to multiple reasons. Some may be present from birth, while others may develop gradually as the child grows.",
    items: [
      {
        number: "01",
        title: "Refractive Errors",
        image: "/assets/Service/pediatric/problem1.png",
      },
      {
        number: "02",
        title: "Family History",
        image: "/assets/Service/pediatric/problem2.png",
      },
      {
        number: "03",
        title: "Excessive Screen Time",
        image: "/assets/Service/pediatric/problem3.png",
      },
      {
        number: "04",
        title: "Premature Birth",
        image: "/assets/Service/pediatric/problem4.png",
      },
      {
        number: "05",
        title: "Eye Allergies",
        image: "/assets/Service/pediatric/problem5.png",
      },
      {
        number: "06",
        title: "Delayed Eye Check-ups",
        image: "/assets/Service/pediatric/problem6.png",
      },
    ],
  },

  types: {
    title: "Common Pediatric Eye Conditions",
    description:
      "Children may develop different types of eye and vision problems. Early diagnosis helps protect long-term vision.",
    image: {
      src: "/assets/Service/pediatric/conditions_banner.png",
      mobileSrc: "/assets/Service/pediatric/conditions_banner_mobile.png",
      alt: "Common pediatric eye conditions",
    },
    controls: {
      previousAriaLabel: "Previous pediatric eye condition",
      nextAriaLabel: "Next pediatric eye condition",
    },
    slides: [
      {
        id: "lazy-eye",
        title: "Lazy Eye",
        description:
          "Lazy eye, also called amblyopia, happens when one eye has weaker vision than the other.",
        image: "/assets/Service/pediatric/conditions1.png",
      },
      {
        id: "refractive-errors",
        title: "Refractive Errors",
        description:
          "This test helps detect whether the child has eye power such as myopia, hyperopia, or astigmatism.",
        image: "/assets/Service/pediatric/conditions2.png",
      },
      {
        id: "eye-allergies",
        title: "Eye Allergies",
        description:
          "Children with eye allergies may have redness, itching, watering, swelling, or frequent eye rubbing.",
        image: "/assets/Service/pediatric/conditions3.png",
      },
    ],
  },

  diagnosis: {
    title: "How Pediatric Eye Problems Are Diagnosed",
    paragraphs: [
      "A pediatric eye examination is done in a child-friendly way. The doctor checks the child's vision, eye power, eye alignment, eye movements, and overall eye health.",
    ],
    media: [
      {
        title: "Cover Test",
        image: "/assets/Service/squint/diagnosed_image4.png",
        alt: "Cover test for pediatric eye diagnosis",
      },
      {
        title: "Corneal Light Reflex Test",
        image: "/assets/Service/squint/diagnosed_image1.png",
        alt: "Corneal light reflex test for pediatric eye diagnosis",
      },
      {
        title: "Visual Acuity Test",
        image: "/assets/Service/squint/diagnosed_image2.png",
        alt: "Visual acuity test for pediatric eye diagnosis",
      },
    ],
    treatments: [
      {
        number: "1.",
        title: "Refraction Test",
        description:
          "This test helps detect whether the child has eye power such as myopia, hyperopia, or astigmatism.",
        image: "/assets/Service/pediatric/diagnosed1.png",
        alt: "Child undergoing a refraction test",
      },
      {
        number: "2.",
        title: "Eye Alignment Test",
        description:
          "The doctor checks whether both eyes are working together and whether there is any squint or eye movement issue.",
        image: "/assets/Service/pediatric/diagnosed2.png",
        alt: "Child undergoing an eye alignment test",
      },
      {
        number: "3.",
        title: "Visual Acuity Test",
        description:
          "You read letters on a standard eye chart to measure how clearly each eye can see independently.",
        image: "/assets/Service/pediatric/diagnosed3.png",
        alt: "Child reading an eye chart for a visual acuity test",
      },
      {
        number: "4.",
        title: "Slit Lamp Examination",
        description:
          "This helps examine the front part of the eye, including the cornea, lens, and eye surface.",
        image: "/assets/Service/pediatric/diagnosed4.png",
        sliderImage: "/assets/Service/pediatric/diagnosed4_slider.png",
        alt: "Child receiving a slit lamp examination",
        highlighted: true,
      },
    ],
  },
  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Cataract care at Pixel Eye Hospital is led by experienced ophthalmologists trained in advanced",
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
