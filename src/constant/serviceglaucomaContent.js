export const SERVICE_GLAUCOMA_CONTENT = {
  banner: {
    hero: {
      titleLines: ["Glaucoma"],
      description:
        "Glaucoma is a silent eye condition that can gradually damage vision if not detected and treated early.",
      image: {
        src: "/assets/Service/glaucoma/glaucoma_banner.jpeg",
        alt: "",
      },
      mobileImage: "/assets/Service/glaucoma/glaucoma_banner_mb.jpeg",
      mobileImageMedia: "(max-width: 767px)",
      showMobileNabhBadge: true,
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "transparent",
      },
      imagePosition: "center center",
      showOverlay: true,
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
      { number: "01", text: "Frequent changing in glass power" },
      { number: "02", text: "Tunnel vision" },
      { number: "03", text: "Vague eye pain" },
      { number: "04", text: "Tripping or bumping into things" },
      { number: "05", text: "Needing much brighter light to see" },
      { number: "06", text: "Blurred or hazy vision" },
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
        image: "/assets/Service/glaucoma/lead1.png",
      },
      {
        number: "02",
        title: "Family History",
        image: "/assets/Service/glaucoma/lead2.png",
      },
      {
        number: "03",
        title: "Age above 40",
        image: "/assets/Service/glaucoma/lead3.png",
      },
      {
        number: "04",
        title: "Diabetes or High BP",
        image: "/assets/Service/glaucoma/lead4.png",
      },
      {
        number: "05",
        title: "Long-term Steroid use",
        image: "/assets/Service/glaucoma/lead5.png",
      },
      {
        number: "06",
        title: "Previous Eye Injury",
        image: "/assets/Service/glaucoma/lead6.png",
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
        id: "primary-open-angle-glaucoma",
        title: "Primary Open Angle glaucoma (POAG)",
        description:
          "The most common type of glaucoma. It usually develops slowly and may not cause noticeable symptoms in the early stage.",
        image: "/assets/Service/glaucoma/openangle_glaucoma.png",
      },
      {
        id: "normal-tension-glaucoma",
        title: "Normal-Tension Glaucoma",
        description:
          "In this type, optic nerve damage happens even when eye pressure is not very high.",
        image: "/assets/Service/glaucoma/normaltension_glaucoma.png",
      },
      {
        id: "acute-angle-closure-glaucoma",
        title: "Acute Angle-Closure Glaucoma",
        description:
          "A sudden, total blockage that causes internal pressure to spike rapidly in a matter of hours. It presents with severe eye pain, blurred vision, rainbow halos, and vomiting.",
        image: "/assets/Service/glaucoma/angleclosure_glaucoma.png",
      },
      {
        id: "chronic-angle-closure-glaucoma",
        title: "Chronic Angle-Closure Glaucoma",
        description:
          "The drainage angle closes over a long period rather than all at once. Because the fluid exit is obstructed slowly, the pressure rises gradually, meaning it is often completely painless and produces no warning signs until late-stage damage occurs.",
        image: "/assets/Service/glaucoma/angleclosure_glaucoma.png",
      },
      {
        id: "neovascular-glaucoma",
        title: "Neovascular Glaucoma",
        description:
          "Triggered by severe conditions like advanced diabetic retinopathy, where abnormal new blood vessels grow over the eye's natural drain.",
        image: "/assets/Service/glaucoma/openangle_glaucoma.png",
      },
      {
        id: "pigmentary-glaucoma",
        title: "Pigmentary Glaucoma",
        description:
          "Tiny flakes of pigment rub off the back of the iris and physically clog the drainage meshwork.",
        image: "/assets/Service/glaucoma/normaltension_glaucoma.png",
      },
      {
        id: "traumatic-glaucoma",
        title: "Traumatic Glaucoma",
        description:
          "Occurs after a severe, blunt force blow or penetrating injury to the eye, which can permanently damage the internal drainage structure immediately or years down the line.",
        image: "/assets/Service/glaucoma/angleclosure_glaucoma.png",
      },
      {
        id: "steroid-induced-glaucoma",
        title: "Steroid-Induced Glaucoma",
        description:
          "A complication caused by prolonged use of corticosteroid medications, such as eye drops, pills, or inhalers, which alters fluid mechanics.",
        image: "/assets/Service/glaucoma/openangle_glaucoma.png",
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

  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Glaucoma FAQ consultation",
    note: "If you have concerns about glaucoma, increased eye pressure, or gradual vision loss, our glaucoma specialists are here to help. Early diagnosis, regular monitoring, and timely treatment can help protect your optic nerve and preserve your vision for the future. Schedule a comprehensive glaucoma evaluation with our team.",
    items: [
      {
        id: "what-is-glaucoma",
        question: "What is glaucoma?",
        answer:
          "Glaucoma is a group of eye conditions that damage the optic nerve, often due to increased eye pressure. It usually develops gradually and may not cause noticeable symptoms in its early stages, making regular eye examinations essential for early detection.",
      },
      {
        id: "why-silent-thief-of-sight",
        question: "Why is glaucoma called the \"silent thief of sight\"?",
        answer:
          "Glaucoma is often called the \"silent thief of sight\" because it can slowly damage peripheral vision without causing pain or obvious symptoms. Many people are unaware they have glaucoma until significant vision loss has already occurred.",
      },
      {
        id: "early-symptoms-of-glaucoma",
        question: "What are the early symptoms of glaucoma?",
        answer:
          "Most people with open-angle glaucoma experience no symptoms in the early stages. As the condition progresses, peripheral vision gradually decreases. Some forms of glaucoma, such as angle-closure glaucoma, may cause sudden eye pain, blurred vision, headache, halos around lights, nausea, and vomiting, requiring immediate medical attention.",
      },
      {
        id: "higher-risk-of-glaucoma",
        question: "Who is at higher risk of developing glaucoma?",
        answer:
          "People over 40 years of age, those with a family history of glaucoma, diabetes, high eye pressure, high myopia, prolonged steroid use, or previous eye injuries have a higher risk of developing glaucoma and should undergo regular eye examinations.",
      },
      {
        id: "normal-eye-pressure-glaucoma",
        question: "Can glaucoma occur even if my eye pressure is normal?",
        answer:
          "Yes. Some people develop normal-tension glaucoma, where optic nerve damage occurs despite eye pressure being within the normal range. A comprehensive glaucoma evaluation involves more than just measuring eye pressure.",
      },
      {
        id: "how-is-glaucoma-diagnosed",
        question: "How is glaucoma diagnosed?",
        answer:
          "Glaucoma is diagnosed through a comprehensive eye examination that may include eye pressure measurement (tonometry), optic nerve evaluation, visual field testing, gonioscopy, corneal thickness measurement, and OCT imaging to assess optic nerve health.",
      },
      {
        id: "glaucoma-treatments",
        question: "What treatments are available for glaucoma?",
        answer:
          "Treatment depends on the type and severity of glaucoma and may include prescription eye drops, laser procedures, minimally invasive glaucoma surgery (MIGS), or conventional glaucoma surgery. Your ophthalmologist will recommend the most appropriate treatment based on your condition.",
      },
      {
        id: "glaucoma-follow-up-frequency",
        question: "How often should glaucoma patients have follow-up eye examinations?",
        answer:
          "The frequency of follow-up depends on the type and severity of glaucoma and how well it is controlled. Your ophthalmologist will recommend a personalised follow-up schedule to monitor eye pressure, optic nerve health, and visual field changes.",
      },
      {
        id: "when-consult-glaucoma-specialist",
        question: "When should I consult a glaucoma specialist?",
        answer:
          "You should consult a glaucoma specialist if you have elevated eye pressure, a family history of glaucoma, gradual peripheral vision loss, or have been advised that you are at risk. Immediate medical attention is required if you experience sudden severe eye pain, blurred vision, halos around lights, or nausea associated with eye symptoms.",
      },
    ],
  },

  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Glaucoma care at Pixel Eye Hospital is provided by experienced ophthalmologists using advanced diagnostic technology and evidence-based treatment plans to help preserve vision and prevent further damage.",
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
