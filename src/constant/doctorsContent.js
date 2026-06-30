export const DOCTORS_CONTENT = {
  hero: {
    image: "/assets/Doctor/Subtract (3).png",
    titleLines: ["Experts Behind Your", "Vision"],
    subtitle:
      "Our team of specialists brings precision, experience, and care to every eye condition so you can see clearly, every day.",
    rightSlot: "book",
    navTheme: "light",
    cardBg: "transparent",
    height: "medium",
    showOverlay: true,
    imagePosition: "center center",
    mobileCta: {
      label: "BOOK APPOINTMENT",
      href: "/appointment",
      variant: "light",
    },
  },
  list: {
    titleLines: ["Our doctors", "and specialists"],
    subtitleLines: [
      "Meet the team guiding patients through diagnosis, treatment,",
      "surgery, and recovery with clarity and care.",
    ],
  },
  doctors: [
    {
      id: "abdul-rasheed",
      name: "Dr. Abdul Rasheed",
      degree: "MD (AIIMS)",
      specialties: ["Cataract, Refractive &", "Squint Surgeon"],
      image: {
        src: "/assets/Home/specialist1.png",
        alt: "Dr. Abdul Rasheed",
      },
      backgroundShape: {
        src: "/assets/About/visionbg.png",
        alt: "",
      },
      imagePosition: "left",
      paragraphs: [
        "Dr. Abdul Rasheed is an ophthalmic surgeon with a strong academic and surgical foundation.",
        "He completed his postgraduate training at AIIMS, New Delhi, gaining a rigorous grounding in clinical medicine. His experience includes advanced cataract and LASIK procedures, including complex cases, refined during his tenure at ASG Eye Hospitals. He also brings focused expertise in diagnosing and managing squint across age groups.",
        "Beyond clinical practice, Dr. Rasheed places strong emphasis on patient understanding. He believes that clarity is a key part of care, especially in a space where patients are often faced with multiple options. This approach extends into his educational work, where he actively shares insights on eye health through his YouTube platform.",
        "His interests outside medicine reflect a broader engagement with learning and innovation. He is a co-founder of ONCOTRIBES, India's largest platform for oncologists, and has a keen interest in technology, child psychology, and emerging fields such as cryptocurrency. He is also an avid reader and enjoys long-distance driving.",
      ],
    },
    {
      id: "krishna-poojita",
      name: "Dr. Krishna Poojita",
      degree: "MBBS, DNB",
      specialties: [
        "Ophthalmologist",
        "MRCS (Edinburgh), FICO (UK), FPRS (Narayana Nethralaya)",
        "Cataract & Refractive Surgeon",
      ],
      image: {
        src: "/assets/Home/specialist2.png",
        alt: "Dr. Krishna Poojita",
      },
      backgroundShape: {
        src: "/assets/About/visionbg2.png",
        alt: "",
      },
      imagePosition: "right",
      paragraphs: [
        "Dr. Krishna Poojita is an ophthalmologist known for her balanced focus on clinical care, research, innovation, and patient comfort.",
        "She completed her MBBS at Mahatma Gandhi Mission Hospital, Mumbai, followed by her post-graduation at Sankara Eye Hospital, where she earned her Diplomate of the National Board. She further gained international research exposure at Johann Wolfgang Goethe Uniklinik, Frankfurt. Her qualifications also include FICO (UK) and MRCS (Edinburgh), reflecting globally informed training.",
        "Her clinical training was strengthened through a fellowship at Narayana Nethralaya, Bangalore. She specialises in keratoconus and dry eye management, combining clinical precision with ongoing research.",
        "Dr. Poojita has contributed to ophthalmic research through publications in renowned journals, with particular focus on keratoconus and dry eye. She has also co-developed a patented device in collaboration with Robert Bosch Engineering to improve dry eye management.",
        "In her practice, she is known for her calm and approachable manner. She takes care to ensure patients feel comfortable, understood, and well-informed throughout their treatment.",
      ],
    },
  ],
};
