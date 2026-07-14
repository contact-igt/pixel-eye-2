export const SERVICE_KERATOCONUS_CONTENT = {
  banner: {
    hero: {
      titleLines: ["Keratoconus: Protect your cornea, preserve your vision"],
      description:
        "Keratoconus can slowly change the shape of your cornea and cause distorted or blurred vision. Early diagnosis and timely treatment can help control progression and improve visual quality.",
      image: {
        src: "/assets/Service/keratoconus/keratoconus-banner.jpeg",
        alt: "Close view of an eye showing keratoconus banner artwork",
      },
      mobileImage: "/assets/Service/keratoconus/keratoconus-banner-mb.jpeg",
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
      { number: "01", text: "Frequent glass prescription changes" },
      { number: "02", text: "Blurred and distorted vision", active: true },
      { number: "03", text: "Increased light sensitivity" },
      { number: "04", text: "Night vision issues" },
      { number: "05", text: "Eye rubbing" },
      { number: "06", text: "Corneal thinning" },
      { number: "07", text: "Dry, itchy eyes" },
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
        image: "/assets/Service/keratoconus/Frame1_new.png",
      },
      {
        number: "02",
        title: "Eye allergies",
        image: "/assets/Service/keratoconus/Frame2.png",
      },
      {
        number: "03",
        title: "Family history",
        image: "/assets/Service/keratoconus/Frame3.png",
      },
      {
        number: "04",
        title: "Rapid power changes",
        image: "/assets/Service/keratoconus/Frame4.png",
      },
      {
        number: "05",
        title: "Poor contact lens tolerance",
        image: "/assets/Service/keratoconus/Frame5.png",
      },
      {
        number: "06",
        title: "Delayed diagnosis",
        image: "/assets/Service/keratoconus/Frame6.png",
      },
    ],
  },
  treatmentApproach: {
    title: "How Keratoconus is diagnosed",
    paragraphs: [
      "A normal eye power check may not be enough to detect keratoconus. Diagnosis usually requires a detailed corneal evaluation to study the shape, thickness, and curvature of the cornea.",
    ],
    image: {
      src: "/assets/Service/keratoconus/Subtract (1).png",
      mobileSrc: "/assets/Service/keratoconus/diagnosed_mobile.png",
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
        image: "/assets/Service/keratoconus/corneal_thickness_new.png",
        imageAlt: "Corneal thickness check",
      },
      {
        id: "corneal-topography-tomography",
        title: "Corneal Topography / Tomography",
        description:
          "Creates a detailed map of the cornea and helps detect early irregularity.",
        image: "/assets/Service/keratoconus/corneal_topography_new.png",
        imageAlt: "Corneal topography tomography",
      },
      {
        id: "refraction-test",
        title: "Refraction Test",
        description: "Checks spectacle power and irregular astigmatism.",
        image: "/assets/Service/keratoconus/refraction_test_new.png",
        imageAlt: "Refraction test",
      },
    ],
  },
  keratoconusApproach: {
    titleLines: ["Our Keratoconus", "treatment approach"],
    descriptionLines: [
      "At Pixel Eye Hospitals, keratoconus care starts with a detailed corneal evaluation.",
      "The goal is to understand whether the condition is mild, moderate, advanced, or actively progressing.",
      "Treatment is planned with two priorities: first, to slow or stop further progression of the disease; second, to improve vision quality using the right glasses, contact lenses, or surgical options where required.",
    ],
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
    ],
  },
  diagnosis: {
    title: "Our Keratoconus treatment approach",
    paragraphs: [
      "At Pixel Eye Hospitals, keratoconus care starts with a detailed corneal evaluation.",
      "The goal is to understand whether the condition is mild, moderate, advanced, or actively progressing.",
      "Treatment is planned with two priorities: first, to slow or stop further progression of the disease; second, to improve vision quality using the right glasses, contact lenses, or surgical options where required.",
    ],
    media: [
      {
        title: "Early Detection & Mapping",
        image: "/assets/Service/squint/diagnosed_image1.png",
        alt: "Early Detection & Mapping",
      },
      {
        title: "Customized Treatment Planning",
        image: "/assets/Service/squint/diagnosed_image2.png",
        alt: "Customized Treatment Planning",
      },
      {
        title: "Continuous Monitoring",
        image: "/assets/Service/squint/diagnosed_image4.png",
        alt: "Continuous Monitoring",
      },
    ],
    bgImage: "/assets/Service/keratoconus/Subtract (2).png",
    treatments: [
      {
        number: "1.",
        title: "Glasses & Soft Contact Lenses",
        description:
          "Glasses or soft contact lenses may help in early or mild keratoconus when vision can still be corrected comfortably.",
        image: "/assets/Service/keratoconus/glasses.png",
        alt: "Glasses and soft contact lenses for keratoconus",
      },
      {
        number: "2.",
        title: "RGP, Hybrid & Scleral Lenses",
        description:
          "Special contact lenses may be recommended when regular glasses do not provide clear vision because of corneal irregularity.",
        image: "/assets/Service/keratoconus/hybrid_lens.png",
        alt: "RGP hybrid and scleral lenses for keratoconus",
      },
      {
        number: "3.",
        title: "Corneal Collagen Cross-Linking / C3R",
        description:
          "C3R helps strengthen the cornea and is commonly advised when keratoconus shows signs of progression.",
        image: "/assets/Service/keratoconus/corneal_cologen.png",
        alt: "Corneal collagen cross-linking for keratoconus",
      },
      {
        number: "4.",
        title: "Intracorneal Ring Segments",
        description:
          "Small ring segments may be placed inside the cornea in selected mild to moderate cases to help flatten the cornea and improve vision.",
        image: "/assets/Service/keratoconus/k4.png",
        sliderImage: "/assets/Service/keratoconus/k4_mobile.png",
        alt: "Intracorneal ring segments treatment for keratoconus",
      },
    ],
  },
  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Keratoconus FAQ consultation",
    note: "For detailed and personalised guidance on keratoconus diagnosis, corneal cross-linking, specialty contact lenses, or advanced treatment options, schedule a consultation with our cornea specialists. Early diagnosis and timely treatment can help preserve your vision and reduce the progression of keratoconus.",
    items: [
      {
        id: "what-is-keratoconus",
        question: "What is keratoconus?",
        answer:
          "Keratoconus is an eye condition in which the normally round cornea gradually becomes thinner and bulges into a cone-like shape. This irregular shape causes blurred and distorted vision that usually worsens over time if left untreated.",
      },
      {
        id: "early-signs-of-keratoconus",
        question: "What are the early signs of keratoconus?",
        answer:
          "Early symptoms may include blurred vision, frequent changes in spectacle power, increased sensitivity to light, glare while driving at night, ghost images, and difficulty seeing clearly even with glasses.",
      },
      {
        id: "can-keratoconus-be-cured",
        question: "Can keratoconus be cured?",
        answer:
          "Keratoconus cannot be completely cured, but its progression can often be slowed or stopped with treatments such as Corneal Collagen Cross-Linking (C3R/CXL). Vision can also be improved using specialised contact lenses or surgical options when required.",
      },
      {
        id: "keratoconus-age-of-development",
        question: "At what age does keratoconus usually develop?",
        answer:
          "Keratoconus commonly develops during the teenage years or early twenties and may continue progressing until the thirties if not treated.",
      },
      {
        id: "does-eye-rubbing-worsen-keratoconus",
        question: "Does rubbing the eyes make keratoconus worse?",
        answer:
          "Yes. Frequent or vigorous eye rubbing is considered a significant risk factor and may contribute to faster progression of keratoconus. Avoid rubbing your eyes, especially if you have allergies or itchy eyes.",
      },
      {
        id: "how-is-keratoconus-diagnosed",
        question: "How is keratoconus diagnosed?",
        answer:
          "Keratoconus is diagnosed using advanced eye examinations such as corneal topography, corneal tomography, pachymetry (corneal thickness measurement), and a comprehensive eye examination performed by an ophthalmologist.",
      },
      {
        id: "lasik-with-keratoconus",
        question: "Can I undergo LASIK if I have keratoconus?",
        answer:
          "In most cases, LASIK is not recommended for patients with keratoconus because it may weaken the cornea further. Your ophthalmologist will recommend safer alternatives based on your eye condition.",
      },
      {
        id: "when-is-cxl-recommended",
        question: "When is Corneal Cross-Linking (CXL) recommended?",
        answer:
          "Corneal Cross-Linking is generally recommended when keratoconus shows signs of progression. It helps strengthen the cornea and reduces the likelihood of further deterioration.",
      },
    ],
  },
  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Keratoconus care at Pixel Eye Hospital is led by experienced ophthalmologists trained in advanced",
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
