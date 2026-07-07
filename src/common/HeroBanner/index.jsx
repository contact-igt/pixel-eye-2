import { useEffect, useState } from "react";
import BannerNav from "@/common/BannerNav";
import Button from "@/common/Button";
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
 *   mobileImage   — optional image used for narrow screens
 *   mobileImageMedia — media query for the mobile image source
 *   showMobileNabhBadge — show the NABH badge in the right card only on mobile
 */
export default function HeroBanner({
  image,
  mobileImage,
  mobileImageMedia = "(max-width: 767px)",
  mobileOverlay,
  title,
  subtitle,
  rightSlot = "nabh",
  navTheme = "light",
  cardBg = "white",
  height = "medium",
  showOverlay = true,
  imagePosition = "center 30%",
  mobileCta,
  showMobileNabhBadge = false,
  variant = "default",
  className = "",
  frameClassName = "",
  imageClassName = "",
  copyClassName = "",
}) {
  const [mounted, setMounted] = useState(false);
  const isAboutMasked = variant === "aboutMasked";
  const isdoctorMasked = variant === "doctorMasked";
  const isserviceMasked = variant === "serviceMasked";
  const iscontactMasked = variant === "contactMasked";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={`${styles.heroSection} ${isAboutMasked ? styles.aboutMaskedSection : ""} ${className}`.trim()}
    >
      <div
        className={`${styles.bannerFrame} ${height === "short" ? styles.frameShort : ""} ${
          isAboutMasked ? styles.aboutMaskedFrame : ""
        } ${frameClassName}`.trim()}
      >
        {/* Background image */}
        {mobileImage ? (
          <picture>
            <source media={mobileImageMedia} srcSet={mobileImage} />
            <img
              className={`${styles.image} ${imageClassName}`.trim()}
              src={image}
              alt=""
              aria-hidden="true"
              style={{ objectPosition: imagePosition }}
            />
          </picture>
        ) : (
          <img
            className={`${styles.image} ${imageClassName}`.trim()}
            src={image}
            alt=""
            aria-hidden="true"
            style={{ objectPosition: imagePosition }}
          />
        )}

        {/* Subtle gradient overlay — only when showOverlay is true */}
        {showOverlay && <div className={styles.overlay} aria-hidden="true" />}
        {mobileOverlay && (
          <div
            className={styles.mobileOverlay}
            aria-hidden="true"
            style={{ ["--mobile-overlay-bg"]: mobileOverlay }}
          />
        )}

        {/* Hero text (optional) */}
        {(title || subtitle) && (
          <div
            className={`${styles.copy} ${mounted ? styles.copyVisible : ""} ${copyClassName}`.trim()}
          >
            {title && <h1 className={styles.title}>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {mobileCta && (
              <div className={styles.mobileCtaWrap}>
                <Button
                  label={mobileCta.label}
                  href={mobileCta.href}
                  variant={mobileCta.variant || "light"}
                  className={styles.mobileCta}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Shared nav header — render outside the overflow:hidden frame so dropdowns won't be clipped */}
      <BannerNav
        rightSlot={rightSlot}
        navTheme={navTheme}
        cardBg={cardBg}
        showMobileNabhBadge={showMobileNabhBadge}
        variant={
          isAboutMasked
            ? "aboutMasked"
            : isdoctorMasked
              ? "doctorMasked"
              : isserviceMasked
                ? "serviceMasked"
                : iscontactMasked
                  ? "contactMasked"
                  : "default"
        }
      />
    </section>
  );
}
