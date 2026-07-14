import { useEffect, useState } from "react";
import Link from "next/link";
import BannerNav from "@/common/BannerNav";
import RevealOnView from "@/common/RevealOnView";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function Banner() {
  const { banner } = HOME_CONTENT;
  const slides = banner.slides?.filter(Boolean) || [];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlideIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 8500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[activeSlideIndex] || slides[0] || null;

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerFrame}>
        <div className={styles.bannerImageViewport} aria-hidden="true">
          <div
            className={styles.bannerImageTrack}
            style={{ transform: `translateX(-${activeSlideIndex * 50}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={`${slide.image.src}-${index}`}
                className={styles.bannerImageSlide}
              >
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={slide.image.mobileSrc || slide.image.src}
                  />
                  <img
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className={styles.bannerImage}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>

        {/* Hero copy — left side, vertically centered */}
        <div className={styles.heroContent}>
          <RevealOnView
            className={styles.heroReveal}
            threshold={0.1}
            rootMargin="0px 0px -6% 0px"
          >
            <div key={activeSlideIndex} className={styles.heroSlide}>
              <h1 className={styles.heroTitle}>
                {activeSlide?.heroTitle?.map((line, index) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < activeSlide.heroTitle.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h1>
              <p className={styles.heroText}>{activeSlide?.heroText}</p>
              <div className={styles.ctaWrap}>
                <Button
                  label="Book Appointment"
                  href="/appointment"
                  variant="light"
                  className={styles.heroCta}
                />
              </div>
            </div>
          </RevealOnView>
        </div>

        {/* Slider dots — above the booking panel */}
        <div className={styles.sliderDots} aria-hidden>
          {slides.map((slide, index) => (
            <span
              key={`${slide.image.src}-${index}`}
              className={
                index === activeSlideIndex ? styles.sliderDotActive : ""
              }
            />
          ))}
        </div>

        {/* Booking panel — white notched card at bottom-right */}
        <div className={styles.bookArea}>
          <Link
            href={banner.bookAppointment.href}
            className={styles.bookButton}
          >
            {banner.bookAppointment.label}
          </Link>
        </div>
      </div>

      {/* Nav header — render outside the overflow:hidden frame so dropdowns aren't clipped */}
      <BannerNav rightSlot="nabh" navTheme="light" />
    </section>
  );
}
