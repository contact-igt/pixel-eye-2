import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const Care = () => {
  const { care } = HOME_CONTENT;
  const { titleLine1, titleLine2, featuredCareAreas, cta } = care;
  const [activeId, setActiveId] = useState(2); // Card 2 (center) active by default
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <section className={styles.careSection}>
      <div className={`container ${styles.careContainer}`}>
        <h2 className={styles.title}>
          {titleLine1}
          <br />
          {titleLine2}
        </h2>
      </div>
      <div className={styles.careVisual}>
        <div className={styles.panelBg} />

        <div
          className={`${styles.cardsRow} ${styles[`activeRow${activeId}`]}`}
          onMouseLeave={() => setActiveId(2)}
        >
          {featuredCareAreas.map((item, index) => {
            const isActive = activeId === item.id;
            const cardClass = isActive ? styles.centerCard : styles.sideCard;
            const wrapClass = isActive ? styles.centerWrap : styles.sideWrap;
            const titleClass = isActive
              ? `${styles.cardTitle} ${styles.centerTitle}`
              : styles.cardTitle;
            const cardImage = isMobile
              ? item.image_mb || item.image
              : item.image;
            const cardHoverImage = isMobile
              ? item.imageHover_mb || item.imageHover
              : item.imageHover;

            return (
              <div
                key={item.id}
                className={`${styles.cardWrap} ${wrapClass}`}
                onMouseEnter={() => setActiveId(item.id)}
              >
                <article className={`${styles.card} ${cardClass}`}>
                  <Image
                    src={cardImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 33vw"
                    loading="lazy"
                    className={`${styles.cardImage} ${styles.defaultImage} ${isActive ? styles.fadeOut : ""}`}
                  />
                  <Image
                    src={cardHoverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 33vw"
                    loading="lazy"
                    className={`${styles.cardImage} ${styles.hoverImage} ${isActive ? styles.fadeIn : ""}`}
                  />
                  <h4 className={titleClass}>{item.title}</h4>
                </article>
                {item.description && (
                  <p
                    className={`${styles.cardDescription} ${isActive ? styles.descriptionVisible : ""}`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <Link href={cta.href} className={styles.ctaButton}>
          <span className={styles.ctaLabel}>{cta.label}</span>
          <span className={styles.ctaArrow}>
            <ArrowUpRight className={styles.ctaArrowIcon} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Care;
