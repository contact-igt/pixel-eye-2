const baseBanner = {
  title: "Suggested Reads",
  subtitle:
    "Relief for dry, irritated and tired eyes begins with understanding the cause. Get a detailed evaluation and a personalised treatment plan at Pixel Eye Hospitals.",
  image: "/assets/Service/dryeye/Subtract (9).jpg",
  mobileImage: "/assets/Service/dryeye/homebannersm.jpg",
  mobileImageMedia: "(max-width: 767px)",
  cta: { label: "Read More", href: "/blog" },
  nav: { rightSlot: "book", navTheme: "light", cardBg: "transparent" },
  showOverlay: false,
  imagePosition: "center center",
};

const baseHero = {
  category: "Eye Health",
  coverImage: "/assets/blog/blog_banner.png",
  author: {
    name: "Pixel Eye Hospitals",
    role: "Eye Care Team",
  },
  reviewer: {
    name: "Dr. Sarah Chen",
    role: "Consultant Ophthalmologist",
    image: "/assets/Service/Dr. Abdul Rasheed.png",
  },
  publishedAt: "2026-07-24",
  readTime: "8 min read",
};

export const sharedArticleBlocks = [
  {
    id: "block-key-takeaways-1",
    type: "keyTakeaways",
    title: "Key Takeaways",
    items: [
      "Cataracts are not just for seniors; they can start as early as your 40s.",
      "Increased glare at night is often the first sign people notice.",
      "Modern surgery is quick, painless, and provides permanent vision restoration.",
    ],
    settings: { background: "soft-blue", maxWidth: "article" },
  },
  {
    id: "block-understanding-1",
    type: "richText",
    title: "Understanding Cataracts",
    content:
      "A cataract is a clouding of the normally clear lens of your eye. For many people, changes build slowly and feel like looking through a frosted window. Clouded vision can make reading, night driving, and recognizing faces more difficult.",
  },
  {
    id: "block-vision-cards-1",
    type: "imageCards",
    title: "How cataracts affect your vision",
    items: [
      {
        title: "Normal Vision",
        description: "Crisp, clear clarity.",
        image: "/assets/blog/affect1.png",
      },
      {
        title: "Early Stage",
        description: "Slight haziness, glare.",
        image: "/assets/blog/affect2.png",
      },
      {
        title: "Advanced",
        description: "Significant clouding.",
        image: "/assets/blog/affect3.png",
      },
    ],
  },
  {
    id: "block-symptoms-1",
    type: "symptoms",
    title: "Common Early Symptoms",
    items: [
      {
        title: "Cloudy or Blurry Vision",
        description: "The most common symptom. It often starts small and affects only part of the eye lens.",
      },
      {
        title: "Increasing Difficulty with Night Vision",
        description: "When cataracts darken or yellow, the eyes struggle to process light in dim environments.",
      },
      {
        title: "Sensitivity to Light and Glare",
        description: "Bright sunlight or indoor lamps can feel overpowering. Halos around lights may appear.",
      },
    ],
  },
  {
    id: "block-quote-1",
    type: "doctorQuote",
    quote:
      "Many patients wait too long because they assume vision decline is just a normal part of aging. Early detection allows better planning and significantly easier outcomes.",
    doctor: {
      name: "Dr. Sarah Chen",
      role: "Consultant Ophthalmologist",
      image: "/assets/Service/Dr. Abdul Rasheed.png",
    },
  },
  {
    id: "block-emergency-1",
    type: "emergencyCta",
    title: "When to seek medical attention",
    description:
      "If you notice sudden vision changes, flashes, double vision, or eye pain, schedule an eye exam immediately.",
    primaryCta: { label: "Book Urgent Screen", href: "/appointment" },
    secondaryCta: { label: "Emergency Contacts", href: "/appointment" },
  },
  {
    id: "block-faq-1",
    type: "faq",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can cataracts go away on their own?",
        answer:
          "No. Cataracts are a physical change in the eye lens. They cannot be cleared with eye drops, exercises, or diet once they have formed.",
      },
      {
        question: "Are cataracts hereditary?",
        answer:
          "Family history can increase risk, but age, eye injury, diabetes, and sun exposure also matter.",
      },
      {
        question: "How long is cataract surgery?",
        answer:
          "Most cataract procedures are short outpatient surgeries, but your doctor will guide timing based on your eyes.",
      },
    ],
  },
  {
    id: "block-helpful-1",
    type: "feedbackShare",
  },
  {
    id: "block-disclaimer-1",
    type: "disclaimer",
    content:
      "Medical disclaimer: This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.",
  },
  {
    id: "block-suggested-reads-1",
    type: "suggestedReads",
    title: "Suggested reads",
  },
];

export const baseBlogMeta = {
  banner: baseBanner,
  hero: baseHero,
  seo: {
    title: "Early Signs of Cataracts You Should Never Ignore",
    description:
      "Learn the early cataract symptoms, warning signs, and when to schedule an eye screening.",
    ogImage: "/assets/blog/blog_banner.png",
    noIndex: false,
  },
};







