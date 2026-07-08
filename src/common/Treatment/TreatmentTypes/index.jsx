import { useEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import styles from "./styles.module.css";

const ArrowIcon = ({ direction }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direction === "left" ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

const TreatmentTypes = ({ data, slug = "treatment" }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const mobileScrollRef = useRef(null);
  const mobileCardsRef = useRef([]);

  const mobileSlides = data.slides;

  const getSlide = (offset) =>
    data.slides[
      (activeIndex + offset + data.slides.length) % data.slides.length
    ];

  const previousSlide = () =>
    setActiveIndex((c) => (c - 1 + data.slides.length) % data.slides.length);

  const nextSlide = () =>
    setActiveIndex((c) => (c + 1) % data.slides.length);

  const leftSlide = getSlide(-1);
  const activeSlide = getSlide(0);
  const rightSlide = getSlide(1);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    // Use rAF to guarantee the DOM refs are populated after React's commit phase.
    // This is the correct approach for Next.js SSR/hydration â€” refs are not
    // reliably populated synchronously on first render after hydration.
    let rafId;
    let cleanupFn;

    const init = () => {
      const stackNode = mobileScrollRef.current;
      const cards = mobileCardsRef.current.filter(Boolean);

      // Need at least 2 cards for the stack effect to make sense
      if (!stackNode || cards.length < 2) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();

      media.add("(max-width: 768px)", () => {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        );
        if (reduceMotion.matches) return undefined;

        // â”€â”€ Initial state â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        // Card 0 sits at yPercent:0 (fully visible in the clipped container).
        // Cards 1..n are pushed 100% below â€” clipped by overflow:hidden on
        // .mobile-list â€” so they're invisible until GSAP animates them in.
        gsap.set(cards, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          yPercent: (i) => (i === 0 ? 0 : 100),
          scale: 1,
          opacity: 1,
          // Later cards have higher z-index so they slide ON TOP of earlier ones
          zIndex: (i) => i + 1,
          transformOrigin: "center center",
        });

        // â”€â”€ Build the scrub timeline â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        // For each card transition (card i-1 â†’ card i):
        //   â€¢ card i-1: scales down + fades slightly (depth/stacking feel)
        //   â€¢ card i:   slides up from yPercent:100 â†’ 0
        // Both tweens share the same start position so they run simultaneously
        // (no blank-frame gap between transitions).
        const timeline = gsap.timeline({ defaults: { ease: "none" } });

        cards.forEach((card, i) => {
          if (i === 0) return;

          // Outgoing card: shrink + dim
          timeline.to(
            cards[i - 1],
            { scale: 0.93, opacity: 0.55, duration: 1 },
            i - 1
          );

          // Incoming card: slide up into view
          timeline.to(card, { yPercent: 0, duration: 1 }, i - 1);
        });

        // â”€â”€ ScrollTrigger pin â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        // • start:"bottom bottom" -> pin starts when the first card is fully visible
        //   and its bottom touches the viewport bottom.
        // â€¢ end: (n-1) Ã— 65vh â†’ gives each card ~0.65 viewport-heights of scroll
        //   distance, which feels deliberate without being too long.
        // â€¢ scrub:0.35       â†’ slightly lag-behind feel; feels smooth on touch.
        const trigger = ScrollTrigger.create({
          trigger: stackNode,
          animation: timeline,
          start: "bottom bottom",
          end: () =>
            `+=${
              Math.max(1, cards.length - 1) *
              Math.round(window.innerHeight * 0.65)
            }`,
          scrub: 0.35,
          pin: stackNode,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        // Refresh once after init so GSAP has correct element positions
        const refreshRaf = requestAnimationFrame(() =>
          ScrollTrigger.refresh()
        );

        return () => {
          cancelAnimationFrame(refreshRaf);
          trigger.kill();
          timeline.kill();
          gsap.set(cards, { clearProps: "all" });
        };
      });

      cleanupFn = () => {
        media.revert();
      };
    };

    // Defer init by one rAF so all card refs are committed to the DOM
    rafId = requestAnimationFrame(init);

    return () => {
      cancelAnimationFrame(rafId);
      if (cleanupFn) cleanupFn();
    };
    // Re-init whenever the slide data changes (different page / slug)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileSlides.length]);

  return (
    <section
      className={styles["treatment-types"]}
      data-treatment-slug={slug}
      aria-labelledby={`${slug}-types-title`}
    >
      <div className={styles["treatment-types__hero"]}>
        {data.image && (
          <>
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={4083}
              height={1233}
              className={`${styles["treatment-types__image"]} ${styles["treatment-types__image--desktop"]}`}
            />
            {data.image.mobileSrc && (
              <Image
                src={data.image.mobileSrc}
                alt={data.image.alt}
                width={1119}
                height={338}
                className={`${styles["treatment-types__image"]} ${styles["treatment-types__image--mobile"]}`}
              />
            )}
          </>
        )}
        <div className={styles["treatment-types__copy"]}>
          <h2 id={`${slug}-types-title`}>{data.title}</h2>
          {data.description && <p>{data.description}</p>}
        </div>
      </div>

      <div
        className={styles["treatment-types__stage"]}
        aria-label={`${data.title} carousel`}
      >
        {/* Desktop / tablet 3-card carousel */}
        <div className={styles["treatment-types__cards-wrapper"]}>
          <button
            className={`${styles["treatment-types__arrow"]} ${styles["treatment-types__arrow--left"]}`}
            type="button"
            aria-label={data.controls?.previousAriaLabel ?? "Previous"}
            onClick={previousSlide}
          >
            <ArrowIcon direction="left" />
          </button>

          {[
            { slide: leftSlide, variant: "side" },
            { slide: activeSlide, variant: "main" },
            { slide: rightSlide, variant: "side" },
          ].map(({ slide, variant }) => (
            <article
              key={`${variant}-${slide.id ?? slide.title}`}
              className={`${styles["treatment-types__card"]} ${
                styles[`treatment-types__card--${variant}`]
              }`}
              aria-live={variant === "main" ? "polite" : undefined}
            >
              {slide.image && (
                <div className={styles["treatment-types__card-image"]}>
                  <Image
                    src={slide.image}
                    alt={slide.alt ?? slide.imageAlt ?? slide.title}
                    width={variant === "main" ? 500 : 300}
                    height={variant === "main" ? 500 : 300}
                  />
                </div>
              )}
              <div className={styles["treatment-types__card-content"]}>
                <h3>{slide.title}</h3>
                {slide.description && <p>{slide.description}</p>}
              </div>
            </article>
          ))}

          <button
            className={`${styles["treatment-types__arrow"]} ${styles["treatment-types__arrow--right"]}`}
            type="button"
            aria-label={data.controls?.nextAriaLabel ?? "Next"}
            onClick={nextSlide}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        {/* Mobile GSAP card stack */}
        <div
          ref={mobileScrollRef}
          className={styles["treatment-types__mobile-scroll"]}
          style={{ "--mobile-card-count": mobileSlides.length }}
        >
          <div className={styles["treatment-types__mobile-sticky"]}>
            {/*
              overflow:hidden on .mobile-list clips cards waiting below
              (at yPercent:100). They become visible only as GSAP animates them up.
            */}
            <div className={styles["treatment-types__mobile-list"]}>
              {mobileSlides.map((slide, index) => (
                <article
                  ref={(node) => {
                    mobileCardsRef.current[index] = node;
                  }}
                  key={`mobile-${slide.id ?? slide.title}`}
                  className={`${styles["treatment-types__card"]} ${styles["treatment-types__mobile-card"]}`}
                  style={{ "--card-index": index }}
                >
                  {slide.image && (
                    <div className={styles["treatment-types__card-image"]}>
                      <Image
                        src={slide.image}
                        alt={slide.alt ?? slide.imageAlt ?? slide.title}
                        width={500}
                        height={500}
                      />
                    </div>
                  )}
                  <div className={styles["treatment-types__card-content"]}>
                    <h3>{slide.title}</h3>
                    {slide.description && <p>{slide.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentTypes;

