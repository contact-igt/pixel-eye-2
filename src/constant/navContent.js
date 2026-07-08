export const NAV_CONTENT = {
  logo: {
    src: "/assets/Header/brandlogo.png",
    mobileSrc: "/assets/Header/brandlogomb.png",
    alt: "Pixel Eye Hospital",
    width: 606,
    height: 141,
  },
  nabhBadge: {
    src: "/assets/Header/brandlogo2.png",
    mobileSrc: "/assets/Header/branlogo2mb.png",
    alt: "NABH-Certified Eye Care Facility",
    width: 693,
    height: 182,
  },
  navItems: [
    { id: 0, label: "HOME", href: "/" },
    { id: 1, label: "ABOUT US", href: "/about" },
    { id: 2, label: "DOCTORS", href: "/doctors" },
    { id: 3, label: "TREATMENT", href: "/service" },
    { id: 4, label: "APPOINTMENT", href: "/appointment" },
  ],
  servicesDropdown: [
    {
      id: "service-cataract",
      label: "Cataract",
      href: "/service/cataract",
    },
    {
      id: "service-keratoconus",
      label: "Keratoconus",
      href: "/service/keratoconus",
    },
    {
      id: "service-squint",
      label: "Squint",
      href: "/service/squint",
    },
    {
      id: "service-pediatric",
      label: "Pediatric",
      href: "/service/pediatric",
    },
    {
      id: "service-lasik",
      label: "Lasik",
      href: "/service/lasik",
    },
    {
      id: "service-glaucoma",
      label: "Glaucoma",
      href: "/service/glaucoma",
    },
    {
      id: "service-retina",
      label: "Retina",
      href: "/service/retina",
    },
  ],
  bookAppointment: {
    label: "BOOK APPOINTMENT",
    href: "/appointment",
  },
};
