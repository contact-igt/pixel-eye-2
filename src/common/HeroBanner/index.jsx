import BannerNav from "@/common/BannerNav";
import styles from "./styles.module.css";

/**
 * Shared inner-page hero banner — Appointment, Service, future pages.
 *
 * Props:
 *   image         — public path to background image
 *   title         — hero heading (optional)
 *   subtitle      — body text below title (optional)
 *   rightSlot     — "nabh" | "book"
 *   navTheme      — "dark" | "light"
 *   cardBg        — "white" | "transparent"  (logo card + right card background)
 *   height        — "medium" (default) | "short"
 *   showOverlay   — true (default) | false  (remove dark gradient for bright images)
 *   imagePosition — CSS object-position value, default "center 30%"
 */
export default function HeroBanner({
  image,
  title,
  subtitle,
  rightSlot = "nabh",
  navTheme = "light",
  cardBg = "white",
  height = "medium",
  showOverlay = true,
  imagePosition = "center 30%",
  variant = "default",
}) {
  const isAboutMasked = variant === "aboutMasked";

  return (
    <section
      className={`${styles.heroSection} ${isAboutMasked ? styles.aboutMaskedSection : ""}`}
    >
      <div
        className={`${styles.bannerFrame} ${height === "short" ? styles.frameShort : ""} ${
          isAboutMasked ? styles.aboutMaskedFrame : ""
        }`}
      >
        {/* Background image */}
        <img
          className={styles.image}
          src={image}
          alt=""
          aria-hidden="true"
          style={{ objectPosition: imagePosition }}
        />

        {/* Subtle gradient overlay — only when showOverlay is true */}
        {showOverlay && <div className={styles.overlay} aria-hidden="true" />}

        {/* Hero text (optional) */}
        {(title || subtitle) && (
          <div className={styles.copy}>
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
      </div>

      {/* Shared nav header — render outside the overflow:hidden frame so dropdowns won't be clipped */}
      <BannerNav
        rightSlot={rightSlot}
        navTheme={navTheme}
        cardBg={cardBg}
        variant={isAboutMasked ? "aboutMasked" : "default"}
      />
    </section>
  );
}
