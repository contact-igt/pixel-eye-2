import Image from "next/image";
import Link from "next/link";
import { NAV_CONTENT } from "@/constant/navContent";
import styles from "./styles.module.css";

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 5 5" />
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
  const { logo, nabhBadge, navItems, servicesDropdown = [], bookAppointment } =
    NAV_CONTENT;
  const isLight = navTheme === "light";
  const cardBackground = cardBg === "white" ? "#ffffff" : "transparent";

  return (
    <div
      className={`${styles.bannerNav} ${variant === "aboutMasked" ? styles.aboutMaskedNav : ""}`}
      aria-label="Site navigation"
    >

      {/* ── Left: logo card ── */}
      <div className={styles.logoCard} style={{ background: cardBackground }}>
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
        {variant === "aboutMasked" && (
          <Link href="/" className={styles.navLink}>
            HOME
          </Link>
        )}
        {navItems.map((item) =>
          item.label === "SERVICES" && servicesDropdown.length > 0 ? (
            <div key={item.id} className={styles.navItemWithMenu}>
              <Link href={item.href} className={`${styles.navLink} ${styles.navLinkTrigger}`}>
                {item.label}
              </Link>
              <div className={styles.dropdownMenu} role="menu" aria-label="Services submenu">
                {servicesDropdown.map((service) => (
                  <Link key={service.id} href={service.href} className={styles.dropdownLink}>
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
        <button type="button" className={styles.searchBtn} aria-label="Search">
          <SearchIcon />
        </button>
      </nav>

      {/* ── Right: NABH badge or Book Appointment ── */}
      <div className={styles.rightCard} style={{ background: cardBackground }}>
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
      </div>

    </div>
  );
}
