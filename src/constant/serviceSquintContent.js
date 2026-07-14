export const SERVICE_SQUINT_CONTENT = {
  banner: {
    hero: {
      titleLines: [
        "Squint: When eyes don’t align vision needs attention",
      ],
      description:
        "Squint can appear in childhood or adulthood and may cause eye strain, double vision, or lazy eye if left untreated. A detailed eye check-up can help identify the cause and guide proper correction.",
      image: {
        src: "/assets/Service/squint/squint_banner-new.jpeg",
        alt: "",
      },
      mobileImage: "/assets/Service/squint/herobannermb-new.jpeg",
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
      { number: "01", text: "Closing or Covering One Eye" },
      { number: "02", text: "Eye turning inward and outward" },
      { number: "03", text: "Sitting Too Close to Screens" },
      { number: "04", text: "Frequent Blinking or Eye Rubbing" },
      { number: "05", text: "Double Vision" },
      { number: "06", text: "Eye Strain and Fatigue" },
      { number: "07", text: "Frequent Headaches" },
      { number: "08", text: "Poor depth judgment" },
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
        image: "/assets/Service/squint/lead1_new.png",
      },
      {
        number: "02",
        title: "Weak eye muscle coordination",
        image: "/assets/Service/squint/lead2_new.png",
      },
      {
        number: "03",
        title: "Lazy eye",
        image: "/assets/Service/squint/lead3_new.png",
      },
      {
        number: "04",
        title: "Family history",
        image: "/assets/Service/squint/lead4_new.png",
      },
      {
        number: "05",
        title: "Neurological or nerve-related causes",
        image: "/assets/Service/squint/lead5_new.png",
      },
      {
        number: "06",
        title: "Eye injury or poor vision in one eye",
        image: "/assets/Service/squint/lead6_new.png",
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
      {
        id: "hypotropia",
        title: "Hypotropia",
        description: "One eye turns downward compared to the other eye.",
        image: "/assets/Service/squint/hypotropia.png",
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
        title: "Assessing clarity of vision",
        image: "/assets/Service/squint/diagnosed_image1.png",
        alt: "Assessing clarity of vision",
      },
      {
        title: "Eye Movement Evaluation",
        image: "/assets/Service/squint/diagnosed_image2.png",
        alt: "Eye Movement Evaluation",
      },
      {
        title: "Binocular Vision Testing",
        image: "/assets/Service/squint/diagnosed_image4.png",
        alt: "Binocular Vision Testing",
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
      "Squint care at Pixel Eye Hospital is provided by experienced ophthalmologists with expertise in pediatric eye care and eye muscle disorders.",
    cardBg: "/assets/Service/cataract/clinicbg.png",
    doctorName: "Dr. Abdul Rasheed",
    doctorImage: "/assets/Service/Dr. Abdul Rasheed.png",
    doctorImageAlt: "Dr. Abdul Rasheed",
    doctorDescription:
      "An ophthalmic surgeon trained at AIIMS New Delhi, with experience in squint diagnosis and management across age groups. He also works closely with patients for cataract and LASIK care, with a clear, patient-focused approach.",
    doctors: [
      {
        name: "Dr. Abdul Rasheed",
        image: "/assets/Service/Dr. Abdul Rasheed.png",
        imageAlt: "Dr. Abdul Rasheed",
        description:
          "An ophthalmic surgeon trained at AIIMS New Delhi, with experience in squint diagnosis and management across age groups. He also works closely with patients for cataract and LASIK care, with a clear, patient-focused approach.",
        href: "/doctors",
      },
    ],
  },
  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Squint FAQ consultation",
    note: "For personalised guidance on squint diagnosis, treatment options, and vision development, schedule a consultation with our squint specialists. Early diagnosis and timely treatment can improve eye alignment, support healthy vision, and help prevent long-term complications such as lazy eye or loss of binocular vision.",
    items: [
      {
        id: "what-is-squint-strabismus",
        question: "What is squint (strabismus)?",
        answer:
          "Squint, also known as strabismus, is a condition in which the eyes do not align properly. One eye may look straight while the other turns inward, outward, upward, or downward. It can affect both children and adults.",
      },
      {
        id: "what-causes-squint",
        question: "What causes squint?",
        answer:
          "Squint can result from uncorrected refractive errors, poor coordination of the eye muscles, neurological conditions, reduced vision in one eye, family history, or congenital eye alignment problems. A comprehensive eye examination helps identify the underlying cause.",
      },
      {
        id: "is-squint-common-in-children",
        question: "Is squint common in children?",
        answer:
          "Yes. Squint commonly develops during infancy or early childhood. Early diagnosis is important because untreated squint may affect normal visual development and increase the risk of lazy eye (amblyopia).",
      },
      {
        id: "can-adults-develop-squint",
        question: "Can adults develop squint?",
        answer:
          "Yes. Adults can develop squint due to nerve disorders, eye muscle problems, trauma, thyroid eye disease, stroke, or other medical conditions. Sudden onset of squint should always be evaluated promptly by an ophthalmologist.",
      },
      {
        id: "does-squint-affect-vision",
        question: "Does squint affect vision?",
        answer:
          "It can. Some people experience double vision, poor depth perception, or eye strain. In children, untreated squint may lead to lazy eye if the brain begins to ignore the image from one eye.",
      },
      {
        id: "when-is-squint-surgery-recommended",
        question: "When is squint surgery recommended?",
        answer:
          "Squint surgery may be recommended when glasses or other treatments cannot adequately align the eyes. The procedure aims to improve eye alignment, binocular vision, and appearance, depending on the individual's condition.",
      },
      {
        id: "is-squint-surgery-safe",
        question: "Is squint surgery safe?",
        answer:
          "Squint surgery is a commonly performed and generally safe procedure when carried out by experienced ophthalmic surgeons. Your doctor will discuss the expected benefits, possible risks, and whether surgery is appropriate for your condition.",
      },
      {
        id: "will-squint-return-after-treatment",
        question: "Will squint return after treatment?",
        answer:
          "Some patients maintain good eye alignment after treatment, while others may require ongoing monitoring or additional treatment over time. Regular follow-up visits help ensure the best long-term outcome.",
      },
      {
        id: "age-to-treat-squint",
        question: "At what age should squint be treated?",
        answer:
          "There is no single ideal age. Children with suspected squint should be evaluated as early as possible because timely treatment supports healthy vision development. Adults with new or longstanding squint can also benefit from appropriate treatment.",
      },
      {
        id: "when-to-consult-squint-specialist",
        question: "When should I consult a squint specialist?",
        answer:
          "Consult an ophthalmologist if you notice one eye turning in a different direction, persistent double vision, frequent head tilting, poor depth perception, or any concern about your child's eye alignment. Early evaluation allows for timely diagnosis and appropriate treatment.",
      },
    ],
  },
};
