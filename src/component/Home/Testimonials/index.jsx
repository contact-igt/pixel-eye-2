import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles.module.css";
import TestimonialCard from "@/component/Home/TestimonialCard";

const Testimonials = () => {
  const { testimonials } = HOME_CONTENT;
  const { title, subtitle, mosaic, items, cta } = testimonials;
  const duplicatedItems = [...items, ...items, ...items];
  const [active, setActive] = useState(2);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Settings for auto-scroll loop (2 second pause, scrolls right-to-left)
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    initialSlide: 7,
    beforeChange: (current, next) => {
      setActive(next % items.length);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.frame}>

          <h2 className={styles.title}>{title}</h2>

          <div className={styles.mosaicWrap} aria-hidden>
            <Image
              src={mosaic.src}
              alt={mosaic.alt}
              fill
              className={styles.mosaic}
              sizes="100vw"
              priority
              draggable={false}
            />
          </div>

          <div className={styles.lowerContent}>
           <div className="d-flex justify-content-center w-100">
             <p className={styles.subtitle}>{subtitle}</p>
           </div>

            <div className={styles.cardsWrap}>
              {mounted ? (
                <Slider ref={sliderRef} {...settings} className={styles.cards}>
                  {duplicatedItems.map((t, i) => (
                    <div key={`${t.id}-${i}`} style={{ padding: "10px 14px" }}>
                      <TestimonialCard
                        name={t.name}
                        rating={t.rating}
                        text={t.text}
                        active={i % items.length === active}
                        onClick={() => {
                          setActive(i % items.length);
                          sliderRef.current?.slickGoTo(i);
                        }}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className={styles.cards} style={{ display: "flex", gap: "28px", overflow: "hidden" }}>
                  {items.map((t, i) =>{ console.log("i",i); return(
                    <div key={t.id} style={{ flex: "0 0 20%", padding: "10px 14px" }}>
                      <TestimonialCard
                        name={t.name}
                        rating={t.rating}
                        text={t.text}
                        active={i === active}
                      />
                    </div>
                  )})}
                </div>
              )}
            </div>

            <div className={styles.dots}>
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
                  onClick={() => {
                    setActive(i);
                    if (mounted) {
                      sliderRef.current?.slickGoTo(i + items.length);
                    }
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href={cta.href} className={styles.ctaButton}>
                <span className={styles.ctaLabel}>{cta.label}</span>
                <span className={styles.ctaArrow}>
                  <ArrowUpRight width={18} height={18} strokeWidth={2.1} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
