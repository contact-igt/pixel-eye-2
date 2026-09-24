"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Slider from "react-slick";
import styles from "./styles.module.css";

const PARTNERS = [
  { name: "HDFC ERGO", logo: "/assets/Insurance/hdfc-ergo.png" },
  { name: "Star Health", logo: "/assets/Insurance/star-health.svg" },
  { name: "TATA AIG", logo: "/assets/Insurance/tata-aig.png", scale: 1.2  },
  { name: "Niva Bupa", logo: "/assets/Insurance/niva-bupa.png", scale: 1.2  },
  { name: "Bajaj Allianz", logo: "/assets/Insurance/bajaj-allianz.png" },
  { name: "ICICI Lombard", logo: "/assets/Insurance/icici-lombard.jpg", scale: 3.5 },
  { name: "Paramount TPA", logo: "/assets/Insurance/paramount-tpa.png", scale: 1.45 },
  { name: "Medi Assist", logo: "/assets/Insurance/medi-assist.jpg", scale: 2.2 },
  { name: "Universal Sompo", logo: "/assets/Insurance/universal-sompo.svg" },
  { name: "SBI General", logo: "/assets/Insurance/sbi-general.jpg", scale: 2.2  },
  { name: "ManipalCigna", logo: "/assets/Insurance/manipal-cigna.png", scale: 2.2 },
  { name: "IFFCO Tokio", logo: "/assets/Insurance/iffco-tokio.jpg" },
  { name: "Central TPA", logo: "/assets/Insurance/central.png" },
  { name: "Family Health Plan", logo: "/assets/Insurance/fhpl.png", scale: 1.8 },
  { name: "Digit Insurance", logo: "/assets/Insurance/digit.png" },
  { name: "Aditya Birla Health", logo: "/assets/Insurance/aditya-birla.png", scale: 2.4 },
];

const carouselSettings = {
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 7000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

const BENEFITS = [
  "Cashless support for eligible treatment",
  "Guidance for approval and paperwork",
  "Dedicated on-site assistance",
];

const Insurance = () => (
  <section className={styles.section} aria-labelledby="insurance-heading">
    <div className={styles.inner}>
      <header className={styles.header}>
        <h2 id="insurance-heading">Insurance &amp; Cashless Care</h2>
        <p className={styles.intro}>
          We support eligible cashless and reimbursement claims with clear guidance from our team at every step.
        </p>
        <ul className={styles.benefits}>
          {BENEFITS.map((benefit) => (
            <li key={benefit}>
              <span className={styles.benefitIcon}>
                <CheckCircle2 aria-hidden="true" />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className={styles.directory}>
        <div className={styles.directoryHeader}>
          <h3>Empanelled Insurers &amp; TPAs</h3>
          <span>30+ partners</span>
        </div>
        <div className={styles.logoRows}>
          <Slider {...carouselSettings} className={styles.logoSlider} aria-label="Insurance partners">
            {PARTNERS.slice(0, 8).map((partner) => (
              <div key={partner.name} className={styles.logoSlide}>
                <div className={styles.logoTile}>
                  <Image src={partner.logo} alt={`${partner.name} logo`} width={180} height={80} className={styles.logo} style={{ transform: `scale(${partner.scale || 1})` }} />
                </div>
              </div>
            ))}
          </Slider>
          <Slider {...carouselSettings} rtl className={styles.logoSlider} aria-label="More insurance partners">
            {PARTNERS.slice(8).map((partner) => (
              <div key={partner.name} className={styles.logoSlide}>
                <div className={styles.logoTile}>
                  <Image src={partner.logo} alt={`${partner.name} logo`} width={180} height={80} className={styles.logo} style={{ transform: `scale(${partner.scale || 1})` }} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p className={styles.disclaimer}>
          Cashless availability depends on your policy, insurer or TPA approval, and current empanelment. Please confirm coverage before admission.
        </p>
      </div>
    </div>
  </section>
);

export default Insurance;
