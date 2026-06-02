import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_CONTENT } from "@/constant/navContent";
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

/**
 * rightSlot — "nabh" | "book"
 * navTheme  — "dark" | "light"
 * cardBg    — "white" | "transparent"
 */
export default function BannerNav({
  rightSlot = "nabh",
  navTheme = "dark",
  cardBg = "transparent",
  variant = "default",
}) {
  const {
    logo,
    nabhBadge,
    navItems,
    servicesDropdown = [],
    bookAppointment,
  } = NAV_CONTENT;
  const isLight = navTheme === "light";
  const cardBackground = cardBg === "white" ? "#ffffff" : "transparent";

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((s) => !s);
  const toggleServices = (e) => {
    e?.preventDefault();
    setIsServicesExpanded((s) => !s);
  };

  return (
    <>
      <div
        className={`${styles.bannerNav} ${variant === "aboutMasked" ? styles.aboutMaskedNav : ""}`}
        aria-label="Site navigation"
      >
        <div className={styles.inner}>
          {/* ── Left: logo card ── */}
          <div
            className={styles.logoCard}
            style={{ background: cardBackground }}
          >
            <Link href="/" aria-label={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                priority
              />
            </Link>
          </div>

          {/* ── Center: nav links + search ── */}
          <nav
            className={`${styles.nav} ${isLight ? styles.navLight : ""}`}
            aria-label="Primary navigation"
          >
            {navItems.map((item) =>
              item.label === "SERVICES" && servicesDropdown.length > 0 ? (
                <div key={item.id} className={styles.navItemWithMenu}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${styles.navLinkTrigger}`}
                  >
                    {item.label}
                  </Link>
                  <div
                    className={styles.dropdownMenu}
                    role="menu"
                    aria-label="Services submenu"
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

          {/* ── Right: NABH badge or Book Appointment ── */}
          <div
            className={styles.rightCard}
            style={{ background: cardBackground }}
          >
            {rightSlot === "nabh" ? (
              <Image
                src={nabhBadge.src}
                alt={nabhBadge.alt}
                width={nabhBadge.width}
                height={nabhBadge.height}
                className={styles.nabhBadge}
                priority
              />
            ) : (
              <Link href={bookAppointment.href} className={styles.bookBtn}>
                {bookAppointment.label}
              </Link>
            )}

            {/* ── Mobile menu trigger button (three bars) ── */}
            <button
              type="button"
              className={`${styles.menuBtn} ${isLight ? styles.menuBtnLight : ""}`}
              onClick={toggleSidebar}
              aria-label="Open mobile menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Sidebar Drawer overlay and panel ── */}
      <div
        className={`${styles.sidebarOverlay} ${isSidebarOpen ? styles.sidebarOverlayOpen : ""}`}
        onClick={toggleSidebar}
      />
      <div
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""} ${isLight ? styles.sidebarLight : ""}`}
      >
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

        <nav
          className={`${styles.sidebarNav} ${isLight ? styles.navLight : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) =>
            item.label === "SERVICES" && servicesDropdown.length > 0 ? (
              <div key={item.id} className={styles.sidebarNavItemWithMenu}>
                <button
                  type="button"
                  onClick={toggleServices}
                  className={`${styles.sidebarNavLink} ${styles.sidebarNavLinkTrigger}`}
                >
                  {item.label}
                  <span
                    className={`${styles.arrow} ${isServicesExpanded ? styles.arrowExpanded : ""}`}
                  >
                    ▾
                  </span>
                </button>
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
                {item.label}
              </Link>
            ),
          )}

          <div className={styles.sidebarDivider} />

          <Link
            href={bookAppointment.href}
            className={styles.sidebarBookBtn}
            onClick={toggleSidebar}
          >
            {bookAppointment.label}
          </Link>
        </nav>
      </div>
    </>
  );
}
