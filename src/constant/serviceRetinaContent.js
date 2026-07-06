export const SERVICE_RETINA_CONTENT = {
  banner: {
    hero: {
      titleLines: ["Retina Care"],
      description:
        "The retina plays a vital role in clear vision. Early diagnosis and timely treatment can help protect your sight.",
      image: {
        src: "/assets/Service/Retina/retina-banner.png",
        alt: "",
      },
      mobileImage: "/assets/Service/Retina/herobannermb.png",
      mobileImageMedia: "(max-width: 767px)",
      showMobileNabhBadge: true,
      nav: {
        rightSlot: "book",
        navTheme: "light",
        cardBg: "white",
      },
    },
    explainer: {
      title: "What is Retina Care?",
      paragraphs: [
        "Retina care focuses on diagnosing and treating diseases that affect the retina, macula, and blood vessels at the back of the eye.",
        "The retina receives light and sends visual signals to the brain.",
        "When the retina is affected by diabetes, aging, injury, inflammation, or other eye conditions, vision may become blurred, distorted, or reduced.",
      ],

      image: {
        src: "/assets/Service/Retina/retinahero.png",
        alt: "Normal eye alignment and retina eye comparison",
      },
    },
  },

  symptoms: {
    title: "Symptoms you may notice",
    description:
      "Retina problems may not always cause pain, but they can affect vision in different ways. Do not ignore sudden or repeated vision changes.",
    note: "Vision may become unclear in one or both eyes, either gradually or suddenly.",
    image: {
      src: "/assets/Service/Retina/Rectangle 10.png",
      alt: "Retina eye examination",
    },
    items: [
      { number: "01", text: "Sudden blurred Vision" },
      { number: "02", text: "Floaters in vision" },
      { number: "03", text: "Flashes of light" },
    ],
  },

  causes: {
    title: "What can lead to Retina Problems?",
    description:
      "Retinal diseases can develop due to medical conditions, aging, eye power, injury, or changes in the eye’s blood vessels.",
    items: [
      {
        number: "01",
        title: "Diabetes (Diabetic Retinopathy)",
        image: "/assets/Service/Retina/lead11.png",
      },
      {
        number: "02",
        title: "High Blood Pressure",
        image: "/assets/Service/Retina/lead22.png",
      },
      {
        number: "03",
        title: "Aging",
        image: "/assets/Service/Retina/lead33.png",
      },
      {
        number: "04",
        title: "High Myopia",
        image: "/assets/Service/Retina/lead44.png",
      },
      {
        number: "05",
        title: "Eye Injury",
        image: "/assets/Service/Retina/lead55.png",
      },
      {
        number: "06",
        title: "Family History",
        image: "/assets/Service/Retina/lead66.png",
      },
    ],
  },

  types: {
    title: "Common Retina Conditions",
    description:
      "Retinal conditions can affect different parts of the retina. Identifying the exact problem helps plan the right treatment.",
    image: {
      src: "/assets/Service/Retina/typesofretina.png",
      mobileSrc: "/assets/Service/Retina/typesofretina_mobile.png",
      alt: "Eye drops being applied during retina care",
    },
    controls: {
      previousAriaLabel: "Previous retina type",
      nextAriaLabel: "Next retina type",
    },
    slides: [
      {
        id: "age-related-macular-degeneration",
        title: "Age-Related Macular Degeneration (AMD)",
        description:
          "This condition breaks down the macula, which is the center of the retina responsible for sharp, straight-ahead vision.",
        image: "/assets/Service/Retina/Rectangle 102.png",
      },
      {
        id: "diabetic-retinopathy",
        title: "Diabetic Retinopathy",
        description:
          "A complication of diabetes where chronically high blood sugar damages the delicate blood vessels inside the retina. They can swell, leak fluid, or bleed into the eye.",
        image: "/assets/Service/Retina/diabetic.png",
      },
      {
        id: "retinal-tear",
        title: "Retinal Tear",
        description:
          "Occurs when the gel-like fluid inside the eye pulls away too harshly from the back wall, ripping a small hole in the retinal tissue. It causes sudden flashes of light and floaters.",
        image: "/assets/Service/Retina/tear.png",
      },
      {
        id: "retinal-detachment",
        title: "Retinal Detachment",
        description:
          "A critical medical emergency where fluid seeps through a tear, lifting or separating the retina entirely from its underlying layer of blood vessels. This causes a dark shadow or curtain to fall over your vision field.",
        image: "/assets/Service/Retina/retinal.png",
      },
      {
        id: "retinal-vein-or-artery-occlusion",
        title: "Retinal Vein or Artery Occlusion",
        description:
          "Often called an \"eye stroke,\" this happens when a blood clot blocks a major blood vessel supplying the retina, causing sudden, painless vision loss.",
        image: "/assets/Service/Retina/Rectangle 103.png",
      },
      {
        id: "macular-hole-or-pucker",
        title: "Macular Hole or Pucker",
        description:
          "These are structural flaws in the central retina. A pucker involves scar tissue wrinkling the macula, while a hole is an actual tear or gap in it. Both distort your central vision, making straight lines look wavy.",
        image: "/assets/Service/Retina/Rectangle 103 (1).png",
      },
    ],
  },

  diagnosis: {
    title: "How Retina Problems Are Diagnosed",
    paragraphs: [
      "A retina evaluation includes a detailed examination of the back of the eye, supported by advanced imaging tests when needed.",
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
        title: "Dilated Retina Examination",
        description:
          "This test measures the pressure inside the eye. High eye pressure is an important risk factor for glaucoma.",
        image: "/assets/Service/Retina/dilated.png",
        alt: "Dilated retina examination for retina diagnosis",
      },
      {
        number: "2.",
        title: "Visual Acuity Test",
        description:
          "This test checks side vision and helps detect vision loss that may not be noticed during daily activities.",
        image: "/assets/Service/Retina/visual.png",
        alt: "Visual acuity test for retina diagnosis",
      },
      {
        number: "3.",
        title: "Fundus Photography",
        description:
          "The optic nerve is checked for signs of damage, thinning, or structural changes.",
        image: "/assets/Service/Retina/fundus.png",
        alt: "Fundus Photography test for retina diagnosis",
      },
      {
        number: "4.",
        title: "OCT Scan",
        description:
          "OCT helps assess the thickness of the optic nerve fiber layer and detect early glaucoma-related changes.",
        image: "/assets/Service/Retina/Union.png",
        sliderImage: "/assets/Service/glaucoma/oct_scan1_slider.png",
        alt: "OCT Scan test for retina diagnosis",
        highlighted: true,
      },
    ],
  },
  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Retina care at Pixel Eye Hospital is provided by experienced retina specialists using advanced retinal imaging, laser treatments, and microsurgical expertise to preserve vision.",
    cardBg: "/assets/Service/cataract/clinicbg.png",
    cardBgAlt: "Pixel Eye clinic background",
    doctors: [
      {
        name: "Dr. Abdul Rasheed",
        description: "MD (AIIMS)\nCataract, Refractive & Squint Surgeon",
        image: "/assets/Service/pediatric/dr-abdul-rasheed.png",
        imageAlt: "Dr. Abdul Rasheed",
        buttonText: "View Doctor Profiles",
        buttonLink: "/doctors",
        imagePosition: "left",
      },
      {
        name: "Dr. Krishna Poojita",
        description:
          "MBBS, DNB (Ophthalmology), MRCS (Edinburgh), FICO (UK), FPRS (Narayana Nethralaya), Cataract & Refractive Surgeon",
        image: "/assets/Service/Retina/dr-krishna-poojita 1.png",
        imageAlt: "Dr. Krishna Poojita",
        buttonText: "View Doctor Profiles",
        buttonLink: "/doctors",
        imagePosition: "right",
      },
    ],
  },
  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Retina FAQ consultation",
    note: "Retina care at Pixel Eye Hospital is provided by experienced retina specialists using advanced retinal imaging, laser treatments, and microsurgical expertise to preserve vision.",
    items: [
      {
        id: "early-signs-of-retina-problems",
        question: "What are the early signs of retina problems?",
        answer:
          "Early retina problems may cause blurred vision, floaters, flashes of light, distorted vision, dark spots, or a curtain-like shadow over your vision. Some retinal diseases develop without noticeable symptoms, making regular eye examinations important for early detection.",
      },
      {
        id: "when-see-retina-specialist",
        question: "When should I see a retina specialist?",
        answer:
          "You should consult a retina specialist immediately if you notice sudden vision loss, flashes of light, a sudden increase in floaters, distorted vision, or a shadow covering part of your vision. Early diagnosis can prevent permanent vision loss in many retinal conditions.",
      },
      {
        id: "can-diabetes-affect-retina",
        question: "Can diabetes affect the retina?",
        answer:
          "Yes. Diabetes can damage the tiny blood vessels in the retina, leading to diabetic retinopathy. If left untreated, it may cause bleeding, swelling of the retina, and permanent vision loss. Regular diabetic retina screening is strongly recommended.",
      },
      {
        id: "what-causes-retinal-detachment",
        question: "What causes retinal detachment?",
        answer:
          "Retinal detachment can occur due to retinal tears, ageing-related changes, high myopia, eye injuries, previous eye surgery, or certain retinal diseases. It is a medical emergency and requires prompt treatment to preserve vision.",
      },
      {
        id: "floaters-and-flashes-in-vision",
        question: "What are floaters and flashes in vision?",
        answer:
          "Floaters appear as tiny dark spots or cobweb-like shadows, while flashes look like brief streaks of light. Although they can occur naturally with ageing, a sudden increase may indicate a retinal tear or retinal detachment and should be evaluated immediately.",
      },
      {
        id: "how-retina-diseases-diagnosed",
        question: "How are retina diseases diagnosed?",
        answer:
          "Retina diseases are diagnosed through a comprehensive retinal examination that may include dilated fundus examination, OCT (Optical Coherence Tomography), retinal photography, fluorescein angiography, and retinal scans to evaluate the health of the retina and optic nerve.",
      },
      {
        id: "can-retina-diseases-be-treated",
        question: "Can retina diseases be treated?",
        answer:
          "Yes. Many retinal diseases can be effectively managed with early diagnosis. Treatment options may include retinal laser treatment, intravitreal injections, vitrectomy surgery, or medical management depending on the specific retinal condition.",
      },
      {
        id: "higher-risk-of-retinal-diseases",
        question: "Who is at higher risk of retinal diseases?",
        answer:
          "People with diabetes, high blood pressure, high myopia, increasing age, previous eye injuries, family history of retinal disease, or previous eye surgery have a higher risk of developing retinal problems and should undergo regular retina examinations.",
      },
      {
        id: "can-retinal-damage-be-reversed",
        question: "Can retinal damage be reversed?",
        answer:
          "Some retinal conditions can be stabilised or improved if treated early, while others may cause permanent vision loss if diagnosis is delayed. Regular eye check-ups and timely treatment offer the best chance of preserving vision.",
      },
      {
        id: "retina-examination-frequency",
        question: "How often should I get a retina examination?",
        answer:
          "Individuals with diabetes, high myopia, hypertension, or a family history of retinal disease should have regular retina examinations as advised by their ophthalmologist. Healthy adults should also undergo routine comprehensive eye examinations to detect retinal diseases before symptoms develop.",
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
        text: "The Retina procedure was quick, safe, and well-explained. Truly professional care.",
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
        text: "The Retina procedure was quick, safe, and well-explained. Truly professional care.",
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
        text: "The Retina procedure was quick, safe, and well-explained. Truly professional care.",
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
