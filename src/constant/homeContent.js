export const HOME_CONTENT = {
  stats: [
    { id: 1, number: "99%", label: "Cataract\nSuccess Rate" },
    { id: 2, number: "8,000+", label: "Successful\nEye Surgeries" },
    { id: 3, number: "1,200+", label: "Squint & Pediatric\nCases Treated" },
    { id: 4, number: "25,000+", label: "Patients\nTreated" },
  ],

  banner: {
    navItems: [
      { id: 1, label: "ABOUT US", href: "#" },
      { id: 2, label: "DOCTORS", href: "/doctors" },
      { id: 3, label: "TREATMENTS", href: "#" },
    ],
    leftLogo: {
      src: "/assets/Header/brandlogo.png",
      alt: "Pixel Eye Hospital",
      width: 606,
      height: 141,
    },
    rightLogo: {
      src: "/assets/Header/brandlogo2.png",
      alt: "NABH-Certified Eye Care Facility",
      width: 693,
      height: 182,
    },
    slides: [
      {
        image: {
          src: "/assets/Home/hero-banner-new.jpeg",
          mobileSrc: "/assets/Home/home-banner-mb-new.jpeg",
          alt: "Pixel Eye Hospital home banner",
          width: 1920,
          height: 1080,
        },
        heroTitle: ["Pixel Eye", "See Life, Fully."],
        heroText:
          "Modern diagnostics, experienced specialists, and evidence based treatments for every stage of eye health.",
      },
      {
        image: {
          src: "/assets/Home/home-banner2-new.jpeg",
          mobileSrc: "/assets/Home/home-banner2-mb-new.jpeg",
          alt: "Pixel Eye Hospital diabetic retinopathy banner",
          width: 1920,
          height: 1080,
        },
        heroTitle: ["When diabetes blurs your world"],
        heroText:
          "Diabetes can quietly damage the retina, affecting how you read, drive, and recognize faces. Our retina specialists use advanced diagnostics and targeted treatments to protect your sight before it",
      },
    ],
    cta: {
      label: "Meet Our Specialists",
      href: "/doctors",
    },
    bookAppointment: {
      label: "BOOK APPOINTMENT",
      href: "/appointment",
    },
    sliderDotCount: 2,
  },

  care: {
    titleLine1: "Featured",
    titleLine2: "Care Areas",
    cta: {
      label: "View All Services",
      href: "/service",
    },
    featuredCareAreas: [
      {
        id: 1,
        number: "01",
        title: "Cataract Care & Lens Surgery",
        image: "/assets/Home/care1.png",
        imageHover: "/assets/Home/care1_hover.png",
        image_mb: "/assets/Home/care1-mb.png",
        imageHover_mb: "/assets/Home/care1-hover-mb.png",

        description:
          "Advanced micro-incision cataract surgery (MICS) and premium lens implants (IOL) to restore clear, sharp vision.",
        href: "#",
      },
      {
        id: 2,
        number: "02",
        title: "LASIK & Refractive Surgery",
        image: "/assets/Home/caree2.png",
        imageHover: "/assets/Home/care2-hover.png",
        image_mb: "/assets/Home/care2-mb.png",
        imageHover_mb: "/assets/Home/care2-hover-mb.png",
        description:
          "Laser vision correction including LASIK, SMILE, and PRK for myopia, hyperopia, and astigmatism with high-precision platforms.",
        href: "#",
      },
      {
        id: 3,
        number: "03",
        title: "Retina & Glaucoma Services",
        image: "/assets/Home/care3.png",
        imageHover: "/assets/Home/care3-hover.png",
        image_mb: "/assets/Home/caree3-mb.png",
        imageHover_mb: "/assets/Home/care3-hover-mb.png",
        description:
          "Diagnostic imaging, laser procedures, and VEGF therapy, and surgical management for retinal and glaucoma conditions.",
        href: "#",
      },
    ],
  },

  protect: {
    cta: {
      label: "Meet Our Specialists",
      href: "/doctors",
    },
    title: "Every eye has a story, we're here to protect yours.",
    beforeImage: {
      src: "/assets/Home/protextbanner11.png",
      alt: "Red inflamed eye",
    },
    afterImage: {
      src: "/assets/Home/protectbanner2.png",
      alt: "Healthy clear eye",
    },

    beforembImage: {
      src: "/assets/Home/protextbanner11mb.png",
      alt: "Red inflamed eye",
    },
    aftermbImage: {
      src: "/assets/Home/protectbanner2mb.png",
      alt: "Healthy clear eye",
    },
    handleImage: {
      src: "/assets/Home/protectbanner3.png",
      alt: "Swipe handle",
    },
  },

  whyChoose: {
    title: "Why Choose Us",
    cta: {
      label: "View All Services",
      href: "/service",
    },
    cards: [
      {
        id: 1,
        title: "Expertise & Precision",
        description:
          "Our experienced specialists use the latest diagnostic tools and surgical technology for precise, effective outcomes.",
        image: "/assets/Home/choose1.png",
        href: "/appointment",
        buttonLabel: "Read More",
      },
      {
        id: 2,
        title: "Patient First Care",
        description:
          "We treat you, not just your eyes. Every treatment is tailored to your needs.",
        image: "/assets/Home/choose2.png",
        href: "/appointment",
        buttonLabel: "Read More",
      },
      {
        id: 3,
        title: "Transparent & Comfortable",
        description:
          "We believe in open, honest communication  clear pricing, informed consent, and a relaxed environment at every step.",
        image: "/assets/Home/choose3.png",
        href: "/appointment",
        buttonLabel: "Read More",
      },
    ],
  },

  careExperience: {
    title: "A Care Experience That Sees You First",
    paragraphs: [
      "At Pixel Eye, we believe great vision care starts with understanding you.",
      "We take the time to listen, explain, and guide. Blending human warmth with advanced diagnostics and modern treatment protocols.",
      "Whether it's a routine exam or a complex surgery, our team ensures you feel comfortable, informed, and supported. Every plan is personalised, every decision is transparent, and every step is designed to help you see life with clarity and confidence.",
    ],
    image: {
      src: "/assets/Home/care-experience1.png",
      alt: "Patient receiving eye exam",
    },
    mobileImage: {
      src: "/assets/Home/care-experience1-mb.png",
      alt: "Patient receiving eye exam",
    },
  },

  specialist: {
    title: "Our Specialists",
    background: {
      src: "/assets/Home/specialistbg.png",
      alt: "Specialists background",
    },
    doctors: [
      {
        id: 1,
        name: "Dr. Abdul Rasheed",
        image: "/assets/Home/specialist1.png",
      },
      {
        id: 2,
        name: "Dr. Krishna Poojita",
        image: "/assets/Home/specialist2.png",
      },
    ],
  },

  testimonials: {
    title: "Patient Stories",
    subtitle: "Stories of clearer vision, directly from our clients",
    clients: [
      { src: "/assets/Home/person2_2.png", alt: "Patient photo 1" },
      { src: "/assets/Home/person13.png", alt: "Patient photo 2" },
      { src: "/assets/Home/person6_6.png", alt: "Patient photo 3" },
      { src: "/assets/Home/person5_5.png", alt: "Patient photo 4" },
      { src: "/assets/Home/person1_1.png", alt: "Patient photo 5" },
      { src: "/assets/Home/person3_3.png", alt: "Patient photo 6" },
      { src: "/assets/Home/person14_14.png", alt: "Patient photo 7" },
      { src: "/assets/Home/person12.png", alt: "Patient photo 8" },
      { src: "/assets/Home/person9.png", alt: "Patient photo 9" },
      { src: "/assets/Home/person10_10.png", alt: "Patient photo 10" },
      { src: "/assets/Home/person11.png", alt: "Patient photo 11" },
      { src: "/assets/Home/person8.png", alt: "Patient photo 12" },
      { src: "/assets/Home/person4_4.png", alt: "Patient photo 13" },
      { src: "/assets/Home/person7_7.png", alt: "Patient photo 14" },
    ],
    items: [
      {
        id: 1,
        name: "Amit. Y",
        rating: 5,
        text: "My cataract surgery was smooth from start to finish. The clarity I regained has been life changing.",
      },
      {
        id: 2,
        name: "Anjali. C",
        rating: 5,
        text: "My cataract surgery was smooth from start to finish. The clarity I regained has been life changing.",
      },
      {
        id: 3,
        name: "S. Ramesh",
        rating: 5,
        text: "The LASIK procedure was quick, safe, and well explained. Truly professional care",
      },
      {
        id: 4,
        name: "Meera .k",
        rating: 5,
        text: "My cataract surgery was smooth from start to finish. The clarity I regained has been life changing.",
      },
      {
        id: 5,
        name: "Sonam .P",
        rating: 5,
        text: "My cataract surgery was smooth from start to finish. The clarity I regained has been life changing.",
      },
    ],
    cta: {
      label: "Read All Testimonials",
      href: "/appointment",
    },
  },

  blogsVideos: {
    title: "Blogs & Videos",
    subtitle:
      "Stay informed with the latest insights in eye care, tips for maintaining healthy vision, and real patient stories.",
    items: [
      {
        id: 1,
        type: "blog",
        badge: "Blog",
        image: "/assets/Home/blog1.png",
        title: "Understanding Glaucoma and Its Early Signs",
      },
      {
        id: 2,
        type: "blog",
        badge: "Blog",
        image: "/assets/Home/blog2.png",
        title: "LASIK VS SMILE Choosing the Right Vision Correction",
      },
      {
        id: 3,
        type: "video",
        badge: "Video",
        image: "/assets/Home/blog3.png",
        title: "Patient Experience Cataract Surgery at Pixel Eye",
      },
      {
        id: 4,
        type: "video",
        badge: "Video",
        image: "/assets/Home/blog4.png",
        title: "Dry Eye Management Tips and Treatments",
      },
    ],
    cta: {
      label: "Explore More",
      href: "/appointment",
    },
  },

  visionCta: {
    title: "Your journey to better vision starts",
    cta: {
      label: "Book Appointment",
      href: "/appointment",
    },
    image: {
      src: "/assets/Home/vision.png",
      alt: "Doctor performing eye exam",
    },
  },
};
