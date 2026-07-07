"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const VisionariesSection = () => {
  const { titleLines, subtitleLines, doctors } = ABOUT_CONTENT.visionaries;
  const sectionRef = useRef(null);
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const animateRows = ({ isMobile = false } = {}) => {
        const hasPassedStart = (node, startRatio) => {
          if (!node) return false;
          return (
            node.getBoundingClientRect().top <= window.innerHeight * startRatio
          );
        };

        const header = sectionRef.current.querySelector(
          "[data-visionaries-header]",
        );
        if (header) {
          if (hasPassedStart(header, 0.76)) {
            gsap.set(header, { y: 0, opacity: 1 });
          } else {
            gsap.set(header, { y: 42, opacity: 0 });

            const headerTimeline = gsap.timeline({ paused: true }).to(header, {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            });

            ScrollTrigger.create({
              trigger: sectionRef.current,
              start: "top 76%",
              once: true,
              onEnter: () => headerTimeline.play(0),
              onRefresh: (self) => {
                if (self.progress > 0) {
                  headerTimeline.progress(1);
                }
              },
            });
          }
        }

        gsap.utils.toArray("[data-visionary-row]").forEach((row) => {
          const media = row.querySelector("[data-visionary-media]");
          const image = row.querySelector("[data-visionary-image]");
          const info = row.querySelector("[data-visionary-info]");
          const content = row.querySelector("[data-visionary-content]");
          const paragraphs = Array.from(
            row.querySelectorAll("[data-visionary-content] p"),
          );
          const isReverse = row.dataset.visionaryReverse === "true";

          const revealTargets = [
            media,
            image,
            info,
            content,
            ...paragraphs,
          ].filter(Boolean);
          if (!revealTargets.length) return;

          if (hasPassedStart(row, 0.72)) {
            gsap.set(revealTargets, { x: 0, y: 0, opacity: 1 });
            return;
          }

          if (media) gsap.set(media, { y: isMobile ? 56 : 95, opacity: 0 });
          if (image) gsap.set(image, { y: isMobile ? 72 : 120, opacity: 0 });
          if (info) gsap.set(info, { y: 36, opacity: 0 });
          if (content) {
            gsap.set(content, {
              x: isMobile ? 0 : isReverse ? -70 : 70,
              y: isMobile ? 38 : 0,
              opacity: 0,
            });
          }
          if (paragraphs.length) gsap.set(paragraphs, { y: 18, opacity: 0 });

          const timeline = gsap
            .timeline({ paused: true })
            .to(media, {
              y: 0,
              opacity: 1,
              duration: isMobile ? 0.5 : 0.55,
              ease: "power3.out",
            })
            .to(
              image,
              {
                y: 0,
                opacity: 1,
                duration: isMobile ? 0.55 : 0.6,
                ease: "power3.out",
              },
              "-=0.45",
            )
            .to(
              info,
              {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
              },
              "-=0.4",
            )
            .to(
              content,
              {
                x: 0,
                y: 0,
                opacity: 1,
                duration: isMobile ? 0.45 : 0.5,
                ease: "power3.out",
              },
              "-=0.45",
            )
            .to(
              paragraphs,
              {
                y: 0,
                opacity: 1,
                duration: 0.35,
                stagger: 0.04,
                ease: "power2.out",
              },
              "-=0.3",
            );

          ScrollTrigger.create({
            trigger: row,
            start: "top 72%",
            once: true,
            onEnter: () => timeline.play(0),
            onRefresh: (self) => {
              if (self.progress > 0) {
                timeline.progress(1);
              }
            },
          });
        });
      };

      mm.add("(min-width: 768px)", () => animateRows({ isMobile: false }));
      mm.add("(max-width: 767px)", () => animateRows({ isMobile: true }));
    }, sectionRef);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => {
      cancelAnimationFrame(refreshFrame);
      window.removeEventListener("load", handleLoad);
      ctx.revert();
      mm.revert();
    };
  }, []);

  useEffect(() => {
    if (forceVisible || !sectionRef.current || typeof window === "undefined") {
      return undefined;
    }

    const node = sectionRef.current;
    let rafId = 0;

    const checkHiddenSafety = () => {
      const rect = node.getBoundingClientRect();
      const sectionWellInView =
        rect.top <= window.innerHeight * 0.45 &&
        rect.bottom >= window.innerHeight * 0.2;

      if (!sectionWellInView) return;

      const selectors = [
        "[data-visionaries-header]",
        "[data-visionary-media]",
        "[data-visionary-image]",
        "[data-visionary-info]",
        "[data-visionary-content]",
      ];

      const hasHiddenElement = selectors.some((selector) =>
        Array.from(node.querySelectorAll(selector)).some((element) => {
          const opacity = Number.parseFloat(
            window.getComputedStyle(element).opacity || "1",
          );
          return opacity < 0.1;
        }),
      );

      if (hasHiddenElement) {
        setForceVisible(true);
      }
    };

    const scheduleSafetyCheck = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkHiddenSafety);
    };

    const timerId = window.setTimeout(scheduleSafetyCheck, 1800);
    window.addEventListener("scroll", scheduleSafetyCheck, { passive: true });
    window.addEventListener("resize", scheduleSafetyCheck);

    return () => {
      window.clearTimeout(timerId);
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleSafetyCheck);
      window.removeEventListener("resize", scheduleSafetyCheck);
    };
  }, [forceVisible]);

  const renderLines = (lines) =>
    lines.map((line, index) => (
      <span key={`${line}-${index}`}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));

  const renderParagraph = (doctor, paragraph) => {
    if (!paragraph.startsWith(doctor.name)) {
      return paragraph;
    }

    return (
      <>
        <span className={styles.highlightName}>{doctor.name}</span>
        {paragraph.slice(doctor.name.length)}
      </>
    );
  };

  const visionSectionClass = styles.visionSection || styles.section || "";

  return (
    <section
      ref={sectionRef}
      id="visionaries"
      className={`${visionSectionClass} ${forceVisible ? styles.forceVisible : ""}`.trim()}
      aria-labelledby="visionaries-title"
    >
      <div className={styles.inner}>
        <header className={styles.header} data-visionaries-header>
          <h2 id="visionaries-title" className={styles.title}>
            {renderLines(titleLines)}
          </h2>
          <p className={styles.subtitle}>{subtitleLines.join(" ")}</p>
        </header>

        <div className={styles.cards}>
          {doctors.map((doctor, index) => {
            const isRightImage = doctor.imagePosition === "right";
            const rowClass = isRightImage
              ? `${styles.row} ${styles.rowReverse}`
              : styles.row;
            const infoClass = isRightImage
              ? `${styles.infoPanel} ${styles.infoPanelRight}`
              : styles.infoPanel;

            return (
              <div key={doctor.id} className={styles.cardBlock}>
                <article
                  className={rowClass}
                  data-visionary-row
                  data-visionary-reverse={isRightImage ? "true" : "false"}
                >
                  <div className={styles.mediaSection} data-visionary-media>
                    <div className={styles.imageBlock}>
                      <img
                        src={doctor.backgroundShape.src}
                        alt={doctor.backgroundShape.alt}
                        className={styles.bgShape}
                        aria-hidden="true"
                      />
                      <img
                        src={doctor.image.src}
                        alt={doctor.image.alt}
                        className={styles.image}
                        data-visionary-image
                      />
                    </div>

                    <div className={infoClass} data-visionary-info>
                      <h3 className={styles.name}>{doctor.name}</h3>
                      <p className={styles.degree}>{doctor.degree}</p>
                      {doctor.specialties.map((speciality) => (
                        <p
                          key={`${doctor.id}-${speciality}`}
                          className={styles.spec}
                        >
                          {speciality}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div
                    className={styles.contentSection}
                    data-visionary-content
                  >
                    {doctor.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={`${doctor.id}-p-${paragraphIndex}`}>
                        {renderParagraph(doctor, paragraph)}
                      </p>
                    ))}
                  </div>
                </article>

                {index < doctors.length - 1 && (
                  <div className={styles.divider} aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionariesSection;
