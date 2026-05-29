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
 *             white       → logo card + right card have white background (appointment, service)
 *             transparent → no card background (home page)
 */
export default function BannerNav({ rightSlot = "nabh", navTheme = "dark", cardBg = "white" }) {
  const { logo, nabhBadge, navItems, bookAppointment } = NAV_CONTENT;
  const isLight = navTheme === "light";
  const bg = cardBg === "white" ? "#ffffff" : "transparent";

  return (
    <div className={styles.bannerNav} aria-label="Site navigation">

      {/* ── Left: logo card ── */}
      <div className={styles.logoCard} >
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
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        ))}
        <button type="button" className={styles.searchBtn} aria-label="Search">
          <SearchIcon />
        </button>
      </nav>

      {/* ── Right: NABH badge or Book Appointment ── */}
      <div className={styles.rightCard} >
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
