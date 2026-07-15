export const SERVICE_DRYEYE_CONTENT = {
  banner: {
    hero: {
      title: "Dry Eye Care",
      description:
        "Relief for dry, irritated and tired eyes begins with understanding the cause. Get a detailed evaluation and a personalised treatment plan at Pixel Eye Hospitals.",
      image: {
        src: "/assets/Service/dryeye/Subtract (9).jpg",
        alt: "Patient receiving care for dry eye symptoms",
      },
      mobileImage: "/assets/Service/dryeye/homebannersm.jpg",
      mobileImageMedia: "(max-width: 767px)",
      imagePosition: "center center",
      showOverlay: false,
      nav: { rightSlot: "book", navTheme: "light", cardBg: "transparent" },
    },
    explainer: {
      title: "What Is Dry Eye?",
      paragraphs: [
        "Dry eye occurs when your eyes do not produce enough tears or when the tears evaporate too quickly.",
        "It can also happen when the natural tear film does not have the right balance of water, oil and mucus.",
        "Dry eye may be temporary, but persistent symptoms often require professional evaluation and ongoing care.",
        "Without a stable tear film, the surface of the eye may become irritated, inflamed and uncomfortable. Some people may also experience fluctuating or blurred vision.",
      ],
      image: {
        src: "/assets/Service/dryeye/Rectangle 99 (1).png",
        alt: "Patient experiencing dry eye symptoms",
      },
    },
  },
  symptoms: {
    title: "Symptoms you may notice",
    description:
      "Dry eye symptoms can affect one or both eyes and may become worse during screen use, reading, driving or exposure to air conditioning.",
    note: "Feeling as though dust, sand or a foreign object is inside the eye.",
    image: {
      src: "/assets/Service/dryeye/Rectangle 10.png",
      alt: "Dry eye examination",
    },
    items: [
      { number: "01", text: "Burning or Stinging" },
      { number: "02", text: "Gritty or Sandy Feeling" },
      { number: "03", text: "Blurred or Fluctuating Vision" },
    ],
  },
  causes: {
    title: "What Can Lead to Dry Eyes?",
    description:
      "Dry eye can develop due to medical conditions, aging, eye power, injury, or changes in the eye's blood vessels.",
    items: [
      { number: "01", title: "Prolonged Screen Time", image: "/assets/Service/dryeye/Frame1.png" },
      { number: "02", title: "Dry Environments", image: "/assets/Service/dryeye/Frame2.png" },
      { number: "03", title: "Eyelid Gland Problems", image: "/assets/Service/dryeye/Frame3.png" },
      { number: "04", title: "Medicines and Health Conditions", image: "/assets/Service/dryeye/Frame4.png" },
      { number: "05", title: "Age and Hormonal Changes", image: "/assets/Service/dryeye/Frame5.png" },
      { number: "06", title: "Contact Lens Use", image: "/assets/Service/dryeye/Frame6.png" },
    ],
  },
  types: {
    title: "Common Types of Dry Eye",
    description:
      "Identifying the type of dry eye helps your ophthalmologist recommend the right treatment.",
    image: {
      src: "/assets/Service/dryeye/Subtract (10).png",
      mobileSrc: "/assets/Service/dryeye/Subtract (11).png",
      alt: "Common types of dry eye",
    },
    controls: {
      previousAriaLabel: "Previous dry eye type",
      nextAriaLabel: "Next dry eye type",
    },
    slides: [
      {
        id: "mixed-dry-eye",
        title: "Mixed Dry Eye",
        description:
          "Tears evaporate too quickly, commonly due to meibomian gland dysfunction or an unstable oil layer.",
        image: "/assets/Service/dryeye/left.png",
      },
      {
        id: "aqueous-deficient-dry-eye",
        title: "Aqueous-Deficient Dry Eye",
        description:
          "The eyes do not produce enough watery tears to keep the surface adequately lubricated.",
        image: "/assets/Service/dryeye/center.png",
      },
      {
        id: "evaporative-dry-eye",
        title: "Evaporative Dry Eye",
        description:
          "A combination of reduced tear production and increased tear evaporation.",
        image: "/assets/Service/dryeye/rights.png",
      },
    ],
  },
  diagnosis: {
    title: "How Dry Eye Is Diagnosed",
    mobileBgImage: "/assets/Service/dryeye/Subtract (11).png",
    paragraphs: [
      "Dry eye can have more than one underlying cause. A detailed eye examination helps assess your tear production, tear stability, eyelids and ocular surface.",
    ],
    media: [
      { title: "Meibomian Gland Evaluation", image: "/assets/Service/cataract/option1.png", alt: "Meibomian gland evaluation" },
      { title: "Tear Film Assessment", image: "/assets/Service/cataract/option2.png", alt: "Tear film assessment" },
      { title: "Lubricating Eye Drops", image: "/assets/Service/cataract/option3.png", alt: "Lubricating eye drops" },
    ],
    treatments: [
      { number: "1.", title: "Slit-Lamp Examination", description: "Examines the eyelids, tear film and eye surface for signs of dry eye.", image: "/assets/Service/dryeye/card1.png", alt: "Slit-lamp examination for dry eye" },
      { number: "2.", title: "Tear Film Break-Up Time Test", description: "Measures how quickly the tear film becomes unstable after blinking.", image: "/assets/Service/dryeye/card2.png", alt: "Tear film break-up time test" },
      { number: "3.", title: "Schirmer Test", description: "Measures the amount of tears produced by the eyes.", image: "/assets/Service/dryeye/card3.png", alt: "Schirmer test for dry eye" },
      { number: "4.", title: "Meibomian Gland Assessment", description: "Checks the oil glands in the eyelids that help prevent tears from evaporating.", image: "/assets/Service/dryeye/card4.png", alt: "Meibomian gland assessment for dry eye" },
    ],
  },
  clinicalExpertise: {
    title: "Clinical expertise",
    intro:
      "Dry eye care at Pixel Eye Hospital is provided by experienced ophthalmologists using advanced diagnostics and personalised treatment plans to improve comfort and protect the ocular surface.",
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
      },
      {
        name: "Dr. Krishna Poojita",
        description: "MBBS, DNB (Ophthalmology), MRCS (Edinburgh), FICO (UK), FPRS (Narayana Nethralaya), Cataract & Refractive Surgeon",
        image: "/assets/Service/Retina/dr-krishna-poojita 1.png",
        imageAlt: "Dr. Krishna Poojita",
        buttonText: "View Doctor Profiles",
        buttonLink: "/doctors",
      },
    ],
  },
  faq: {
    title: "FAQ",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Eye care consultation",
    note:
      "For personalised information about dry eye symptoms, diagnosis, treatment options, or ongoing care, book an appointment with our eye care specialists. Early evaluation can help identify the cause and protect your comfort and vision.",
    items: [
      { id: "watery-eyes-when-dry", question: "Why do my eyes water when they are dry?", answer: "Dryness can irritate the eye and trigger reflex tearing. However, these watery tears may not contain the right balance of oil, water and mucus needed for lasting lubrication." },
      { id: "screen-time-dry-eye", question: "Can excessive screen time cause dry eye?", answer: "Yes. People tend to blink less frequently while using phones, computers and other digital devices. This allows tears to evaporate faster, leading to dryness, irritation and eye fatigue." },
      { id: "permanent-dry-eye", question: "Is dry eye a permanent condition?", answer: "Dry eye may be temporary or long-term, depending on its cause. Persistent dry eye can usually be managed effectively with proper diagnosis, treatment and lifestyle changes." },
      { id: "contact-lenses-dry-eye", question: "Can contact lenses make dry eye worse?", answer: "Yes. Contact lenses may increase dryness and discomfort, especially when worn for long hours or in air-conditioned, dusty or windy environments. Your ophthalmologist may recommend changing the lens type or reducing wearing time." },
      { id: "lubricating-eye-drops", question: "Can I use any lubricating eye drop?", answer: "No. Different eye drops are formulated for different types and severities of dry eye. Some contain preservatives that may irritate the eyes when used frequently. Consult an ophthalmologist before using any eye drop regularly." },
      { id: "meibomian-gland-dysfunction", question: "What is meibomian gland dysfunction?", answer: "Meibomian gland dysfunction occurs when the tiny oil-producing glands along the eyelids become blocked or do not function properly. Without enough oil, tears evaporate too quickly, causing evaporative dry eye." },
      { id: "dry-eye-vision", question: "Can dry eye affect my vision?", answer: "Yes. An unstable tear film can cause blurred or fluctuating vision, particularly while reading, driving or using screens. Vision may temporarily become clearer after blinking." },
      { id: "when-see-ophthalmologist", question: "When should I consult an ophthalmologist?", answer: "Consult an ophthalmologist if dryness, burning, redness, pain, light sensitivity or blurred vision persists, worsens or interferes with everyday activities. Sudden pain, injury or significant vision changes require prompt medical attention." },
      { id: "habits-reduce-symptoms", question: "What simple habits can help reduce dry eye symptoms?", answer: "Take regular screen breaks, blink frequently, stay hydrated and get adequate sleep. Avoid direct air from fans or air conditioners, use a humidifier in dry environments and wear protective sunglasses outdoors." },
      { id: "watery-eyes-dry-eye-sign", question: "Can watery eyes still be a sign of dry eye?", answer: "Yes. When the eye's surface becomes dry and irritated, it may produce excessive reflex tears. These tears drain quickly and may not adequately lubricate the eye, so watering and dryness can occur together." },
      { id: "screens-feel-dry", question: "Why do screens make your eyes feel dry?", answer: "Screen use reduces the frequency and completeness of blinking. This prevents tears from spreading evenly across the eye and causes them to evaporate faster, resulting in dryness, burning and tired eyes." },
    ],
  },
};




