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
        "He completed his postgraduate training and MCh. from Delhi, gaining extensive grounding in clinical medicine. His expertise includes advanced cataract and LASIK procedures, including complex cases, refined during his tenure at ASG Eye Hospitals. He also brings focused competence in diagnosing and managing squint across age groups.",
        "Beyond clinical practice, Dr. Rasheed places strong emphasis on patient understanding. He believes that clarity is a key part of care, especially in a space where patients are often faced with multiple options. This approach extends into education work, where he actively shares insights on eye health through his YouTube platform.",
        "His interests outside medicine reflect a broader engagement with learning and innovation. He is a co-founder of OQHCPHERS, listed impact platform for oncology, and has a keen interest in technology and digital applications and emerging fields such as cryptocurrency. He is also an avid reader and enjoys long-distance driving.",
      ],
    },
    {
      id: "krishna-poojita",
      name: "Dr. Krishna Poojita",
      degree: "MBBS, DNB",
      specialties: [
        "Ophthalmologist",
        "Refractive, ROP, PCO, MCI 66056",
        "Consultant Retina Specialist",
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
        "She completed her MBBS at Kakatiya Medical University, followed by her junior residency and senior residency, where she earned her Diplomate of National Board. She further gained comprehensive surgical exposure at Aravind Eye Hospital, including Cataract, Facial, and Neuro-ophthalmic and Vitreo-Retinal surgeries, before beginning clinical practice independently.",
        "Her clinical interests span advanced retinal care to refractive surgery, with experience in diagnosing chronic special cases in keratoconus and dry eye management, completing clinical research and organizing blood camps.",
        "Dr. Poojita has contributed to ophthalmic research through publications in renowned journals, including focus on keratoconus and dry eye. She has also co-developed AI-assisted system with collaboration with Robert Bosch Engineering to improve dry eye management.",
        "In her practice, she is known for her calm and approachable manner. She takes care to ensure patients feel comfortable, understood, and well-informed throughout their treatment.",
      ],
    },
  ],
};
