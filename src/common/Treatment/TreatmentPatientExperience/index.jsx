"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";

const ReviewText = ({ text }) => (
  <div className={styles.cardTextWrap}>
    <p className={`${styles.cardText} ${styles.cardTextScrollable}`}>{text}</p>
  </div>
);

const TreatmentPatientExperience = ({ data, slug = "treatment" }) => {
  if (!data) return null;

  const { titleLines, description, testimonials = [] } = data;

  const displayTitle =
    titleLines && titleLines[0]
      ? titleLines[0]
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      : "Patient Experiences";

  const duplicated = [...testimonials, ...testimonials, ...testimonials];
  const [active, setActive] = useState(1);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    initialSlide: testimonials.length + 1,
    beforeChange: (_, next) => {
      setActive(next % testimonials.length);
    },
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 575, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const renderCard = (item, i, isActive) => (
    <article
      key={`${item.id}-${i}`}
      className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
      style={{ backgroundImage: `url('${item.backgroundImage}')` }}
      onClick={() => {
        setActive(i % testimonials.length);
        sliderRef.current?.slickGoTo(i);
      }}
    >
      <div className={styles.cardContent}>
        <Image
          src="/assets/Service/cataract/quote.png"
          alt="quote icon"
          width={34}
          height={24}
          style={{ width: "auto", height: "auto" }}
          className={styles.quoteImg}
          aria-hidden="true"
        />
        <ReviewText text={item.text} />
      </div>

      <div className={styles.patientBlock}>
        <div className={styles.avatarWrap}>
          <Image
            src={item.profileImage.src}
            alt={item.profileImage.alt}
            width={48}
            height={48}
            className={styles.avatar}
          />
        </div>
        <div className={styles.meta}>
          <h3 className={styles.name}>{item.name}</h3>
          <div className={styles.ratingRow}>
            <span className={styles.star} aria-hidden="true">
              &#9733;
            </span>
            <span className={styles.rating}>{item.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section
      className={styles.section}
      aria-labelledby={`${slug}-patient-experience-title`}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id={`${slug}-patient-experience-title`} className={styles.title}>
            {displayTitle}
          </h2>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.sliderWrap}>
          {mounted ? (
            <Slider ref={sliderRef} {...settings} className={styles.slider}>
              {duplicated.map((item, i) => {
                const isActive = i % testimonials.length === active;
                return (
                  <div key={`${item.id}-${i}`} className={styles.slideOuter}>
                    {renderCard(item, i, isActive)}
                  </div>
                );
              })}
            </Slider>
          ) : (
            <div className={styles.grid}>
              {testimonials.map((item, i) => renderCard(item, i, false))}
            </div>
          )}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
              onClick={() => {
                setActive(i);
                if (mounted) {
                  sliderRef.current?.slickGoTo(i + testimonials.length);
                }
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentPatientExperience;
