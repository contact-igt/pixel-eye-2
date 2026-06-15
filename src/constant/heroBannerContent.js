export const HERO_BANNER_CONTENT = {
  appointment: {
    image: "/assets/Appointment/Mask group (15).png",
    mobileImage: "/assets/Appointment/appoinment-mbv.png",
    title: "Schedule The Care Your Eyes Deserve",
    subtitle: "Tell us your concern or select your preferred specialist",
    rightSlot: "nabh",
    navTheme: "light",
    cardBg: "transparent",
    height: "medium",
    showOverlay: true,
    imagePosition: "right 40%",
    mobileOverlay: "rgba(0, 0, 0, 0.18)",
    mobileCta: {
      label: "BOOK APPOINTMENT",
      href: "/appointment",
      variant: "light",
    },
  },
  service: {
    image: "/assets/Service/Subtract (5).png",
    title: "",
    subtitle: "",
    rightSlot: "book",
    navTheme: "light", // dark nav text — service image is bright/light
    cardBg: "transparent", // transparent logo/right card background
    height: "medium", // was "short" — increased to match reference height
    showOverlay: false, // no overlay — service image is clean and bright
    imagePosition: "center center", // show the eye-frame equipment centered
  },
};
