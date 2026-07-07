import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import styles from "./styles.module.css";

const WhyChoose = () => {
  const HOVER_LOCK_MS = 700;
  const GHOST_CLICK_GUARD_MS = 500;
  const { whyChoose } = HOME_CONTENT;
  const { title, cards, cta } = whyChoose;
  // start with the middle card active
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHoverLocked, setIsHoverLocked] = useState(false);
  const [isMobileLayout, setIsMobileLayout] = useState(false);
  const hoverLockTimeoutRef = useRef(null);
  const lastTouchTimeRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(max-width: 991px)");

    const updateMobileLayout = () => {
      setIsMobileLayout(mediaQuery.matches);
    };

    updateMobileLayout();
    mediaQuery.addEventListener("change", updateMobileLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileLayout);
    };
  }, []);

  const activateCard = useCallback(
    (index, { lockHover = false } = {}) => {
      if (index === activeIndex) return;
      if (lockHover && isHoverLocked) return;

      setActiveIndex(index);

      if (lockHover) {
        setIsHoverLocked(true);
        if (hoverLockTimeoutRef.current) {
          clearTimeout(hoverLockTimeoutRef.current);
        }
        hoverLockTimeoutRef.current = setTimeout(() => {
          setIsHoverLocked(false);
        }, HOVER_LOCK_MS);
      }
    },
    [activeIndex, isHoverLocked],
  );

  useEffect(() => {
    return () => {
      if (hoverLockTimeoutRef.current) {
        clearTimeout(hoverLockTimeoutRef.current);
      }
    };
  }, []);

  const sideIndices = cards
    .map((_, index) => index)
    .filter((index) => index !== activeIndex);

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        <div className={styles.cardsFrame}>
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            // Dynamically assign left/right slots to the two non-active cards
            // so whichever card is active, the others always have a valid position
            const positionClass = isActive
              ? ""
              : sideIndices[0] === index
                ? styles.leftCard
                : styles.rightCard;

            const cardClass = isActive ? styles.centerCard : styles.sideCard;

            return (
              <article
                key={card.id}
                className={`${styles.card} ${cardClass} ${positionClass} ${isActive ? styles.activeCard : ""}`}
                onMouseEnter={() => {
                  if (!isMobileLayout) {
                    activateCard(index, { lockHover: true });
                  }
                }}
                onFocus={() => activateCard(index)}
                onTouchStart={() => {
                  lastTouchTimeRef.current = Date.now();
                  activateCard(index);
                }}
                onClick={() => {
                  if (
                    Date.now() - lastTouchTimeRef.current <
                    GHOST_CLICK_GUARD_MS
                  ) {
                    return;
                  }

                  activateCard(index);
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    activateCard(index);
                  }
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 991px) 100vw, 480px"
                  className={styles.cardImage}
                  priority={isActive}
                  draggable={false}
                />
                <div
                  className={
                    isActive ? styles.centerOverlay : styles.sideOverlay
                  }
                />

                <div
                  className={
                    isActive ? styles.centerContent : styles.sideContent
                  }
                >
                  <h3
                    className={isActive ? styles.centerTitle : styles.sideTitle}
                  >
                    {card.title}
                  </h3>
                  {isActive && card.description ? (
                    <p className={styles.centerDescription}>
                      {card.description}
                    </p>
                  ) : null}
                  {isActive && card.buttonLabel ? (
                    <Button
                      label={card.buttonLabel}
                      href={card.href || "#"}
                      variant="light"
                    />
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.ctaRow}>
          <Button label={cta.label} href={cta.href} variant="muted" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
