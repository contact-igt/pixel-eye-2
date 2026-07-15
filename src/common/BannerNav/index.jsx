import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import RevealOnView from "@/common/RevealOnView";
import { NAV_CONTENT } from "@/constant/navContent";
import { FOOTER_CONTENT } from "@/constant/footerContent";
import styles from "./styles.module.css";

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 5 5" />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const HomeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const DoctorIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M4 22a8 8 0 0 1 16 0" />
  </svg>
);

const BoxIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const getNavIcon = (label) => {
  switch (label.toUpperCase()) {
    case "HOME":
      return <HomeIcon />;
    case "ABOUT US":
      return <InfoIcon />;
    case "DOCTORS":
      return <DoctorIcon />;
    case "SERVICES":
    case "TREATMENT":
      return <BoxIcon />;
    case "APPOINTMENT":
      return <CalendarIcon />;
    default:
      return null;
  }
};

export default function BannerNav({
  rightSlot = "nabh",
  navTheme = "dark",
  cardBg = "transparent",
  variant = "default",
  showMobileNabhBadge = false,
}) {
  const {
    logo,
    nabhBadge,
    navItems,
    servicesDropdown = [],
    bookAppointment,
  } = NAV_CONTENT;
  const isLight = navTheme === "light";
  const isAboutMasked = variant === "aboutMasked";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", isSidebarOpen);

    return () => {
      document.body.classList.remove("mobile-nav-open");
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 992px)");
    const closeSidebarOnDesktop = (event) => {
      if (event.matches) {
        setIsSidebarOpen(false);
        setIsServicesExpanded(false);
      }
    };

    closeSidebarOnDesktop(desktopQuery);
    desktopQuery.addEventListener("change", closeSidebarOnDesktop);

    return () => {
      desktopQuery.removeEventListener("change", closeSidebarOnDesktop);
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);
  const toggleServices = (e) => {
    e?.preventDefault();
    setIsServicesExpanded((s) => !s);
  };
  const isServiceMenuItem = (label) =>
    label === "SERVICES" || label === "TREATMENT";

  return (
    <>
      <div
        className={`${styles.bannerNav} ${variant === "aboutMasked" ? styles.aboutMaskedNav : ""}`}
        aria-label="Site navigation"
      >
        <div className={styles.inner}>
          <RevealOnView className={styles.cardRevealLeft}>
            <div
              className={`${styles.logoCard} ${cardBg === "white" ? styles.cardWhite : ""}`.trim()}
            >
              <Link href="/" aria-label={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${styles.logo} ${styles.logoDesktop}`}
                  priority
                />
                <Image
                  src={logo.mobileSrc}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`${styles.logo} ${styles.logoMobile}`}
                  priority
                />
              </Link>
            </div>
          </RevealOnView>

          <nav
            className={`${styles.nav} ${isLight ? styles.navLight : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) =>
              (item.label === "SERVICES" || item.label === "TREATMENT") &&
              servicesDropdown.length > 0 ? (
                <div
                  key={item.id}
                  className={styles.navItemWithMenu}
                  data-open={isServicesExpanded ? "true" : "false"}
                >
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${styles.navLinkTrigger}`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    onClick={toggleServices}
                    aria-label={`Toggle ${item.label.toLowerCase()} menu`}
                    aria-expanded={isServicesExpanded}
                  >
                    <ChevronIcon
                      className={`${styles.dropdownIcon} ${isServicesExpanded ? styles.dropdownIconOpen : ""}`}
                    />
                  </button>
                  <div
                    className={styles.dropdownMenu}
                    role="menu"
                    aria-label="Treatment submenu"
                  >
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className={styles.dropdownLink}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.id} href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              ),
            )}
            <button
              type="button"
              className={styles.searchBtn}
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </nav>

          <RevealOnView className={styles.cardRevealRight}>
            <div
              className={`${styles.rightCard} ${cardBg === "white" ? styles.cardWhite : ""}`.trim()}
            >
              {showMobileNabhBadge && (
                <div className={styles.aboutMobileBadge} aria-hidden="true">
                  <Image
                    src={nabhBadge.mobileSrc}
                    alt={nabhBadge.alt}
                    width={nabhBadge.width}
                    height={nabhBadge.height}
                    className={styles.nabhBadge}
                    priority
                  />
                </div>
              )}
              {rightSlot === "nabh" ? (
                <>
                  <Image
                    src={nabhBadge.src}
                    alt={nabhBadge.alt}
                    width={nabhBadge.width}
                    height={nabhBadge.height}
                    className={`${styles.nabhBadge} ${styles.nabhBadgeDesktop}`}
                    priority
                  />
                  <Image
                    src={nabhBadge.mobileSrc}
                    alt={nabhBadge.alt}
                    width={nabhBadge.width}
                    height={nabhBadge.height}
                    className={`${styles.nabhBadge} ${styles.nabhBadgeMobile}`}
                    priority
                  />
                </>
              ) : (
                <Link href={bookAppointment.href} className={styles.bookBtn}>
                  {bookAppointment.label}
                </Link>
              )}
            </div>
          </RevealOnView>
        </div>

        <button
          type="button"
          className={`${styles.menuBtn} ${isLight ? styles.menuBtnLight : ""}`}
          onClick={toggleSidebar}
          aria-label="Open mobile menu"
        >
          <HamburgerIcon />
        </button>
      </div>

      <div
        className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.sidebarOverlayOpen : ""}`}
        onClick={toggleSidebar}
      />
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""} ${isLight ? styles.sidebarLight : ""}`}
      >
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarHeader}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={28}
              className={styles.sidebarLogo}
            />
            <button
              type="button"
              className={styles.closeBtn}
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className={styles.sidebarNav} aria-label="Mobile navigation">
            <div className={styles.navGrid}>
              {navItems.map((item) =>
                (item.label === "SERVICES" || item.label === "TREATMENT") &&
                servicesDropdown.length > 0 ? (
                  <div key={item.id} className={styles.sidebarNavItemWithMenu}>
                    <div
                      className={`${styles.sidebarNavLink} ${styles.sidebarNavLinkTrigger} ${isServicesExpanded ? styles.activeItem : ""}`}
                    >
                      <Link
                        href={item.href}
                        className={styles.navLinkMain}
                        onClick={toggleSidebar}
                      >
                        <span className={styles.navLinkInfo}>
                          <span className={styles.navIcon}>
                            {getNavIcon(item.label)}
                          </span>
                          {item.label}
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={toggleServices}
                        className={styles.toggleBtn}
                        aria-label="Toggle submenu"
                      >
                        <ChevronIcon
                          className={`${styles.arrow} ${isServicesExpanded ? styles.arrowExpanded : ""}`}
                        />
                      </button>
                    </div>
                    <div
                      className={`${styles.sidebarSubmenu} ${isServicesExpanded ? styles.sidebarSubmenuExpanded : ""}`}
                    >
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className={styles.sidebarSubmenuLink}
                          onClick={toggleSidebar}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={styles.sidebarNavLink}
                    onClick={toggleSidebar}
                  >
                    <span className={styles.navLinkMain}>
                      <span className={styles.navLinkInfo}>
                        <span className={styles.navIcon}>
                          {getNavIcon(item.label)}
                        </span>
                        {item.label}
                      </span>
                    </span>
                  </Link>
                ),
              )}
            </div>

            <div className={styles.sidebarDivider} />

            <div className={styles.sidebarAction}>
              <Link
                href={bookAppointment.href}
                className={styles.sidebarBookBtn}
                onClick={toggleSidebar}
              >
                {bookAppointment.label}
              </Link>
            </div>

            <div className={styles.sidebarFooter}>
              <div className={styles.sidebarContactCard}>
                <h4 className={styles.sidebarFooterTitle}>Get in Touch</h4>
                <div className={styles.contactList}>
                  {FOOTER_CONTENT.contacts.slice(0, 3).map((contact, idx) => (
                    <a
                      key={idx}
                      href={contact.href}
                      className={styles.sidebarContactLink}
                    >
                      <div className={styles.iconCircle}>
                        <Image
                          src={contact.icon}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </div>
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className={styles.sidebarSocialSection}>
                <div className={styles.sidebarSocialIcons}>
                  {FOOTER_CONTENT.social.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className={styles.sidebarSocialIcon}
                      aria-label={item.label}
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={18}
                        height={18}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

