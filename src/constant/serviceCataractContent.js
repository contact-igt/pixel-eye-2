export const SERVICE_CATARACT_CONTENT = {
  banner: {
    hero: {
      titleLines: ["Cataract: The first", "sign of fading clarity"],
      description:
        "At Pixel Eye Hospital, we look at cataracts as more than a condition, something to understand clearly and treat with precision.",
      image: {
        src: "/assets/Service/cataract/cataract-banner.jpeg",
        alt: "",
      },
      mobileImage: "/assets/Service/cataract/cataract-banner-mb.jpeg",
      mobileImageMedia: "(max-width: 767px)",
      showMobileNabhBadge: true,
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "white",
      },
    },
    explainer: {
      variant: "cataract",
      title: "What is cataract?",
      paragraphs: [
        "A cataract occurs when the eye's natural lens turns cloudy.",
        "In a healthy eye, the lens is clear and allows light to pass through, helping you see sharply. With cataract, proteins in the lens begin to clump together, reducing clarity. Light scatters, and vision becomes blurred. It may affect one or both eyes and usually develops gradually.",
        "While ageing is the most common cause, it can also result from injury, certain medications, or conditions like diabetes.",
      ],
      image: {
        src: "/assets/Service/cataract/Frame 95.png",
        alt: "Normal eye and cataract lens comparison",
      },
    },
  },

  risks: {
    titleLines: ["What leads to cataract", "and its risk factors"],
    descriptionLines: [
      "Cataracts are most commonly linked to age-related",
      "changes in the eye",
    ],
    items: [
      {
        number: "01",
        title: "Genetics or family history",
        image: "/assets/Service/cataract/Frame1.png",
      },
      {
        number: "02",
        title: "Diabetes and high blood pressure",
        image: "/assets/Service/cataract/Frame2.png",
      },
      {
        number: "03",
        title: "Eye injury or trauma",
        image: "/assets/Service/cataract/Frame3.png",
      },
      {
        number: "04",
        title: "Long-term steroid use",
        image: "/assets/Service/cataract/Frame4.png",
      },
      {
        number: "05",
        title: "Exposure to ultraviolet (UV) radiation",
        image: "/assets/Service/cataract/Frame5.png",
      },
      {
        number: "06",
        title: "Smoking and alcohol consumption",
        image: "/assets/Service/cataract/Frame6.png",
      },
      {
        number: "07",
        title: "Obesity",
        image: "/assets/Service/cataract/Frame7.png",
      },
    ],
  },

  types: {
    title: "Types of cataract",
    description:
      "Each type affects vision differently and requires careful evaluation.",
    controls: {
      previousAriaLabel: "Previous cataract type",
      nextAriaLabel: "Next cataract type",
    },
    items: [
      {
        id: "nuclear-sclerotic-cataract",
        title: "Nuclear sclerotic cataract",
        image: "/assets/Service/cataract/nuclear_sclerotic.png",
        alt: "Nuclear sclerotic cataract eye",
      },
      {
        id: "cortical-cataract",
        title: "Cortical cataract",
        image: "/assets/Service/cataract/cortical.png",
        alt: "Cortical cataract eye",
      },
      {
        id: "posterior-subcapsular-cataract",
        title: "Posterior subcapsular cataract",
        image: "/assets/Service/cataract/posterior_subcapsular.png",
        alt: "Posterior subcapsular cataract eye",
      },
      {
        id: "age-related-cataract",
        title: "Age-related cataract",
        image: "/assets/Service/cataract/age_related.png",
        alt: "Age-related cataract eye",
      },
      {
        id: "congenital-pediatric-cataract",
        title: "Congenital / pediatric cataract",
        image: "/assets/Service/cataract/congential_pediatric.png",
        alt: "Congenital pediatric cataract eye",
      },
      {
        id: "traumatic-cataract",
        title: "Traumatic cataract",
        image:
          "/assets/Service/cataract/traumatic-cataract-v2.png",
        alt: "Traumatic cataract eye",
      },
      {
        id: "secondary-complicated-cataract",
        title: "Secondary / complicated cataract",
        image: "/assets/Service/cataract/secondary_complicated.png",
        alt: "Secondary complicated cataract eye",
      },
      {
        id: "radiation-induced-cataract",
        title: "Radiation-induced cataract",
        image: "/assets/Service/cataract/radiation_induced.png",
        alt: "Radiation-induced cataract eye",
      },
      {
        id: "metabolic-cataract",
        title: "Metabolic cataract",
        image: "/assets/Service/cataract/metabolic.png",
        alt: "Metabolic cataract eye",
      },
    ],
  },

  signs: {
    title: "Signs you may notice",
    description:
      "These changes are gradual, but they begin to interfere with everyday tasks like reading, driving, and recognising faces.",
    image: {
      src: "/assets/Service/cataract/Rectangle 10.png",
      alt: "Eye examination with a handheld lens",
    },
    items: [
      { number: "01", text: "Blurry or foggy vision" },
      {
        number: "02",
        text: "Difficulty seeing in low light or at night",
        active: true,
      },
      { number: "03", text: "Sensitivity to light and glare" },
      { number: "04", text: "Visualizing halos around lights" },
      { number: "05", text: "Fading or yellowish vision of colors" },
      { number: "06", text: "Double vision in one eye" },
      { number: "07", text: "Frequent changes in vision prescription" },
    ],
  },

  treatmentApproach: {
    title: "Treatment approach",
    paragraphs: [
      "Cataract does not improve with medication. Surgery is the only effective treatment.",
      "The procedure involves removing the cloudy lens and replacing it with an artificial Intraocular Lens (IOL). This lens stays in place permanently and restores clarity of vision.",
    ],
    image: "/assets/Service/cataract/treatment.png",
    mobileImage: "/assets/Service/cataract/treatementmb.png",
    imageAlt: "Cataract treatment approach",
  },

  surgicalOptions: {
    titleLines: ["Surgical options for", "cataract"],
    description:
      "There are multiple surgical approaches available. We only recommend a procedure after a careful evaluation of your condition.",
    options: [
      {
        id: "phacoemulsification",
        title: "Phacoemulsification",
        image: "/assets/Service/cataract/option1.png",
        imageAlt: "Phacoemulsification cataract surgery",
      },
      {
        id: "laser-cataract-surgery",
        title: "Laser cataract surgery",
        image: "/assets/Service/cataract/option2.png",
        imageAlt: "Laser cataract surgery",
      },
      {
        id: "micro-incision-cataract-surgery",
        title: "Micro incision cataract surgery",
        image: "/assets/Service/cataract/option3.png",
        imageAlt: "Micro incision cataract surgery",
      },
    ],
  },

  cataractApproach: {
    titleLines: ["How do we approach", "cataract at Pixel Eye Hospital"],
    image: "/assets/Service/cataract/approch.png",
    imageAlt: "Cataract approach at Pixel Eye Hospital",
    paragraphs: [
      "Precision matters here. We use ARGOS, one of the most accurate IOL calculation systems available today. It allows detailed measurement of the eye and helps determine lens requirements with high accuracy, including the need for toric and advanced lenses.",
      "This leads to:",
      "The procedure is performed under local anaesthesia. A small incision is made, the cloudy lens is removed using ultrasound or laser technology, and an artificial lens is placed in position.",
      "It is a routine procedure, handled with care.",
    ],
    outcomes: [
      "Better visual outcomes",
      "Reduced dependence on glasses after surgery",
      "Greater predictability in results",
    ],
  },

  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Cataract care at Pixel Eye Hospital is led by experienced ophthalmologists trained in advanced cataract surgery, lens planning, and patient-focused recovery.",
    cardBg: "/assets/Service/cataract/clinicbg.png",
    cardBgAlt: "Pixel Eye clinic background",
    doctorName: "Dr. Abdul Rasheed",
    doctorImage: "/assets/Service/Dr. Abdul Rasheed.png",
    doctorImageAlt: "Dr. Abdul Rasheed",
    doctorDescription:
      "An ophthalmic surgeon trained at AIIMS New Delhi, with experience in cataract and LASIK, including complex cases. He also works closely with patients across age groups for squint diagnosis and management, with a clear, patient-focused approach.",
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

  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Cataract FAQ consultation",
    note: "For more detailed and personalised information on the cost of the best cataract surgery in Hyderabad, it is highly recommended that you contact us via email or phone to book your appointment as soon as possible.",
    items: [
      {
        id: "when-is-cataract-surgery-necessary",
        question: "When is cataract surgery necessary?",
        answer:
          "Surgery is recommended when cataracts significantly interfere with daily activities such as reading, driving, or recognising faces, or when vision cannot be corrected with glasses. Your ophthalmologist will assess lens opacity, visual acuity, and overall eye health to determine timing.",
      },
      {
        id: "is-cataract-surgery-painful",
        question: "Is cataract surgery painful?",
        answer:
          "Most cataract procedures use local or topical anaesthesia so you should feel little to no pain during the operation. Mild pressure or discomfort can occur. Any post-operative pain is uncommon and usually controlled with simple medications.",
      },
      {
        id: "recovery-time-after-cataract-surgery",
        question: "How long does it take to recover from cataract surgery?",
        answer:
          "Many patients notice clearer vision within a few days, but full healing and visual stability can take 4–6 weeks. Follow-up visits ensure proper recovery and help manage any temporary visual fluctuations.",
      },
      {
        id: "rest-after-cataract-surgery",
        question: "How much rest is required after cataract surgery?",
        answer:
          "Plan to rest on the day of surgery and avoid heavy lifting, bending, and strenuous exercise for 1–2 weeks. Light activities are usually fine as advised by your surgeon.",
      },
      {
        id: "post-operative-care",
        question: "What is post-operative care for cataract surgery?",
        answer:
          "Use prescribed eye drops (antibiotic and anti-inflammatory), avoid rubbing the eye, wear protective eyewear if instructed, attend follow-up appointments, and report any sudden pain or loss of vision immediately.",
      },
      {
        id: "watch-tv-after-cataract-surgery",
        question: "Can I watch TV after cataract surgery?",
        answer:
          "Short periods of TV are generally fine soon after surgery, but avoid prolonged screen time in the first 24–48 hours and follow your surgeon’s guidance to reduce eye strain.",
      },
      {
        id: "use-mobile-after-cataract-surgery",
        question: "Can I use a mobile after cataract surgery?",
        answer:
          "Using a mobile for short periods is usually permitted, but limit extended near work during the initial recovery period and keep screens at a comfortable distance.",
      },
      {
        id: "success-rate-of-cataract-surgery",
        question: "What is the success rate of cataract surgery?",
        answer:
          "Modern cataract surgery has a very high success rate; most patients experience significant visual improvement. Final outcomes depend on eye health and any co-existing conditions.",
      },
      {
        id: "candidate-for-cataract-surgery",
        question: "Who is a good candidate for cataract surgery?",
        answer:
          "Anyone whose daily life is affected by cataract-related vision loss may be a candidate. A comprehensive eye exam determines suitability and the most appropriate intraocular lens option.",
      },
      {
        id: "when-should-you-see-an-ophthalmologist",
        question: "When should you see an ophthalmologist?",
        answer:
          "See an ophthalmologist if you notice progressive blurring, increased glare or halos, difficulty with night driving, sudden changes in vision, or after an eye injury. Early assessment enables timely treatment.",
      },
      {
        id: "cataract-surgery-cost-in-hyderabad",
        question: "How much does a cataract surgery cost in Hyderabad, India?",
        answer:
          "Costs vary depending on the hospital, surgeon, surgical technique, and lens choice (standard vs premium). Contact Pixel Eye Hospital for a personalised quote that includes pre-op tests, the procedure, and follow-ups.",
      },
    ],
  },

  patientsExperience: {
    title: "Patient experiences",
    description:
      "From patients who have already taken their first step toward clearer vision.",
    testimonials: [
      {
        id: "patient-experience-1",
        text: "The LASIK procedure was quick, safe, and well-explained. Truly professional care.",
        name: "S. Ramesh",
        rating: "4.5",
        backgroundImage: "/assets/About/remembercard.png",
        profileImage: {
          src: "/assets/About/cardimg1.png",
          alt: "Patient profile image 1",
        },
      },
      {
        id: "patient-experience-2",
        text: "The LASIK procedure was quick, safe, and well-explained. Truly professional care.",
        name: "S. Ramesh",
        rating: "4.5",
        backgroundImage: "/assets/About/remembercard.png",
        profileImage: {
          src: "/assets/About/cardimg2.png",
          alt: "Patient profile image 2",
        },
      },
      {
        id: "patient-experience-3",
        text: "The LASIK procedure was quick, safe, and well-explained. Truly professional care.",
        name: "S. Ramesh",
        rating: "4.5",
        backgroundImage: "/assets/About/remembercard.png",
        profileImage: {
          src: "/assets/About/cardimg3.png",
          alt: "Patient profile image 3",
        },
      },
    ],
  },

  rememberRecommend: {
    titleLines: ["patient experiences"],
    description:
      "From patients who have already taken their first step forward clearer vision.",
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
};
