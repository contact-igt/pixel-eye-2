import Link from "next/link";
import BannerNav from "@/common/BannerNav";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import styles from "./styles.module.css";

export default function Banner() {
  const { banner } = HOME_CONTENT;

  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerFrame}>

        {/* Background image — absolute fill so it covers the entire frame */}
        <img
          src={banner.image.src}
          alt={banner.image.alt}
          className={styles.bannerImage}
        />

        {/* Nav header — overlaid at top; logo card left, NABH badge right */}
        <BannerNav rightSlot="nabh" navTheme="light" />

        {/* Hero copy — left side, vertically centered */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {banner.heroTitle[0]}
            <br />
            {banner.heroTitle[1]}
          </h1>
          <p className={styles.heroText}>{banner.heroText}</p>
          <div className={styles.ctaWrap}>
            <Button label={banner.cta.label} href={banner.cta.href} variant="light" />
          </div>
        </div>

        {/* Slider dots — above the booking panel */}
        <div className={styles.sliderDots} aria-hidden>
          {Array.from({ length: banner.sliderDotCount }).map((_, i) => (
            <span key={i} />
          ))}
        </div>

        {/* Booking panel — white notched card at bottom-right */}
        <div className={styles.bookArea}>
          <Link href={banner.bookAppointment.href} className={styles.bookButton}>
            {banner.bookAppointment.label}
          </Link>
        </div>

      </div>
    </section>
  );
}
