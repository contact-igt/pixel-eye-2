export const SERVICE_PEDIATRIC_CONTENT = {
  banner: {
    hero: {
      image: {
        src: "/assets/Service/pediatric/pediatric_banner_new.jpeg",
        alt: "Child receiving a pediatric eye examination",
      },
      mobileImage: "/assets/Service/pediatric/herobannermb_new.jpeg",
      mobileImageMedia: "(max-width: 767px)",
      showMobileNabhBadge: true,
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
      "Early signs of vision problems are often subtle. Watch for these common symptoms in your child.",
    note: "The child may rub their eyes often due to strain, dryness, allergy, or unclear vision.",
    image: {
      src: "/assets/Service/pediatric/symptoms.png",
      alt: "Child sitting too close to a screen",
    },
    items: [
      { number: "01", text: "Frequent Rubbing" },
      { number: "02", text: "Sitting too close to screen" },
      { number: "03", text: "Squinting or Squeezing Eyes" },
      { number: "04", text: "Frequent Headache" },
      { number: "05", text: "Frequent Blinking" },
      { number: "06", text: "Closing One Eye" },
      { number: "07", text: "Crossed or Wandering Eyes" },
    ],
  },

  causes: {
    title: "why do children develop eye problem?",
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
        id: "refractive-errors",
        title: "Refractive Errors",
        description:
          "This test helps detect whether the child has eye power such as myopia, hyperopia, or astigmatism.",
        image: "/assets/Service/pediatric/refractive-error.png",
      },
      {
        id: "lazy-eye",
        title: "Lazy eye (Amblyopia)",
        description:
          "Lazy eye, also called amblyopia, happens when one eye has weaker vision than the other.",
        image: "/assets/Service/pediatric/lazy-eye.png",
      },
      {
        id: "eye-allergies",
        title: "Eye Allergies",
        description:
          "Children with eye allergies may have redness, itching, watering, swelling, or frequent eye rubbing.",
        image: "/assets/Service/pediatric/eye-allergy.png",
      },
      {
        id: "strabismus",
        title: "Strabismus (Crossed or Wandering Eyes)",
        description:
          "A condition where the eyes do not align properly or look in the same direction. One eye may turn inward, outward, upward, or downward.",
        image: "/assets/Service/pediatric/STRABISMUS.jpg",
      },
      {
        id: "blocked-tear-duct",
        title: "Blocked Tear Duct (Nasolacrimal Duct Obstruction)",
        description:
          "Affects about 20% of newborns. It prevents tears from draining normally, leading to chronic watering, pooling, and crusty discharge.",
        image: "/assets/Service/pediatric/blocked-tear-duct.jpg",
      },
      {
        id: "conjunctivitis",
        title: "Conjunctivitis (Pink Eye)",
        description:
          "Inflammation of the clear membrane covering the eye, caused by bacteria, viruses, or allergies. It causes redness, itching, and discharge.",
        image: "/assets/Service/pediatric/pink-eye.jpg",
      },
      {
        id: "chalazion-and-stye",
        title: "Chalazion and Stye",
        description:
          "Swollen, painful bumps on the eyelid caused by blocked oil glands or localized infections.",
        image: "/assets/Service/pediatric/chalazion.jpg",
      },
      {
        id: "abnormal-pupil-reflex",
        title: "Abnormal Pupil Reflex",
        description:
          "A white, yellow, or cloudy area in the pupil, which can sometimes be distinctly spotted in photographs (Leukocoria).",
        image: "/assets/Service/pediatric/abnormal-pupil-reflew.jpg",
      },
      {
        id: "watery-or-discharging-eyes",
        title: "Watery or Discharging Eyes",
        description:
          "Persistent tearing, pus, crusty eyelashes, or red and swollen eyelids.",
        image: "/assets/Service/pediatric/watery-eyes.jpg",
      },
      {
        id: "bulging-eyes",
        title: "Bulging Eyes",
        description:
          "One or both eyes appearing unusually prominent or protruding.",
        image: "/assets/Service/pediatric/bulgy-eyes.jpg",
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
        title: "Child-Friendly Vision Test",
        image: "/assets/Service/squint/diagnosed_image1.png",
        alt: "Child-Friendly Vision Test",
      },
      {
        title: "Eye Alignment Check",
        image: "/assets/Service/squint/diagnosed_image2.png",
        alt: "Eye Alignment Check",
      },
      {
        title: "Eye Movement Evaluation",
        image: "/assets/Service/squint/diagnosed_image4.png",
        alt: "Eye Movement Evaluation",
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
      "Our pediatric ophthalmologists are experienced in diagnosing and treating eye conditions in infants, children, and teenagers using child-friendly examination techniques and advanced diagnostic technology.",
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
  faq: {
    title: "FAQs",
    image: "/assets/Service/cataract/faq.png",
    imageAlt: "Pediatric eye care FAQ consultation",
    note: "Every child has unique visual needs. If you have questions about your child's eye health, vision development, or treatment options, our pediatric eye specialists are here to help. Book an appointment for a comprehensive eye examination and personalised guidance.",
    items: [
      {
        id: "first-child-eye-examination",
        question: "When should my child have their first eye examination?",
        answer:
          "Children should have their eyes examined if parents notice any vision concerns or as advised by their pediatrician. Babies born prematurely, children with a family history of eye disease, or those with developmental concerns may require earlier eye examinations.",
      },
      {
        id: "signs-child-vision-problem",
        question: "What are the signs that my child may have a vision problem?",
        answer:
          "Common signs include squinting, sitting very close to screens, frequent eye rubbing, excessive tearing, poor eye contact, head tilting, headaches, difficulty reading, or one eye turning inward or outward. If you notice any of these symptoms, an eye examination is recommended.",
      },
      {
        id: "why-child-rubs-eyes",
        question: "Why does my child keep rubbing their eyes?",
        answer:
          "Frequent eye rubbing may be caused by allergies, dry eyes, eye strain, or uncorrected refractive errors. Persistent rubbing should not be ignored, as it may also contribute to conditions such as keratoconus in susceptible children.",
      },
      {
        id: "screen-time-child-eyes",
        question: "Can too much screen time damage my child's eyes?",
        answer:
          "Screen time does not permanently damage the eyes, but prolonged use may cause digital eye strain, dryness, headaches, and temporary blurred vision. Encouraging regular breaks, outdoor activities, and appropriate viewing distances can help reduce these symptoms.",
      },
      {
        id: "lazy-eye-amblyopia-treatment",
        question: "What is lazy eye (amblyopia), and can it be treated?",
        answer:
          "Lazy eye occurs when one eye does not develop normal vision during childhood. It can often be treated successfully with glasses, patching, vision therapy, or other treatments if diagnosed early.",
      },
      {
        id: "is-squint-in-children-normal",
        question: "Is squint in children normal?",
        answer:
          "Occasional eye misalignment may be seen in very young infants, but persistent squint after early infancy should always be evaluated. Early treatment can improve eye alignment and help prevent lazy eye.",
      },
      {
        id: "child-spectacle-power-increasing",
        question: "Why is my child's spectacle power increasing every year?",
        answer:
          "Increasing spectacle power is commonly associated with progressive myopia (short-sightedness). Regular eye examinations allow your ophthalmologist to monitor progression and discuss suitable myopia management options when appropriate.",
      },
      {
        id: "children-born-with-eye-problems",
        question: "Can children be born with eye problems?",
        answer:
          "Yes. Some children are born with conditions such as congenital cataract, glaucoma, blocked tear ducts, drooping eyelids, or retinal disorders. Early diagnosis is important to support healthy visual development.",
      },
      {
        id: "pediatric-eye-examination-tests",
        question: "What tests are performed during a pediatric eye examination?",
        answer:
          "A pediatric eye examination may include vision assessment, eye alignment evaluation, refraction (spectacle power testing), eye movement assessment, and examination of the front and back of the eye. Additional tests may be performed depending on the child's age and symptoms.",
      },
      {
        id: "when-consult-pediatric-ophthalmologist",
        question: "When should I consult a pediatric ophthalmologist?",
        answer:
          "Consult a pediatric ophthalmologist if your child has crossed eyes, poor vision, excessive tearing, white pupil, eye injury, frequent headaches, unusual eye movements, or any concerns about visual development. Early evaluation can help identify problems before they affect learning or long-term vision.",
      },
    ],
  },
};
