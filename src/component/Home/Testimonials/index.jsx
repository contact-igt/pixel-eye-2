import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";
import TestimonialCard from "@/component/Home/TestimonialCard";

const Testimonials = () => {
  const { testimonials } = HOME_CONTENT;
  const { title, subtitle, mosaic, items, cta } = testimonials;
  const mid = Math.floor(items.length / 2);
  const [active, setActive] = useState(mid);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items.length]);

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
              <div className={styles.cards}>
                {items.map((t, i) => (
                  <TestimonialCard
                    key={t.id}
                    name={t.name}
                    rating={t.rating}
                    text={t.text}
                    active={i === active}
                    onClick={() => setActive(i)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.dots}>
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
                  onClick={() => setActive(i)}
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
