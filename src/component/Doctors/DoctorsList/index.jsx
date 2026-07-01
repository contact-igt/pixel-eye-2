"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RevealOnView from "@/common/RevealOnView";
import { DOCTORS_CONTENT } from "@/constant/doctorsContent";
import styles from "./styles.module.css";

const DoctorsList = () => {
  const { titleLines, subtitleLines } = DOCTORS_CONTENT.list;
  const { doctors } = DOCTORS_CONTENT;
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const animateRows = ({ isMobile = false } = {}) => {
        const header = sectionRef.current.querySelector("[data-doctors-header]");
        gsap.set(header, { y: 42, opacity: 0 });

        const headerTimeline = gsap.timeline({ paused: true }).to(header, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 76%",
          once: true,
          onEnter: () => headerTimeline.play(0),
        });

        gsap.utils.toArray("[data-doctor-row]").forEach((row) => {
          const media = row.querySelector("[data-doctor-media]");
          const image = row.querySelector("[data-doctor-image]");
          const info = row.querySelector("[data-doctor-info]");
          const content = row.querySelector("[data-doctor-content]");
          const paragraphs = row.querySelectorAll("[data-doctor-content] p");
          const isReverse = row.dataset.doctorReverse === "true";

          gsap.set(media, { y: isMobile ? 56 : 95, opacity: 0 });
          gsap.set(image, { y: isMobile ? 72 : 120, opacity: 0 });
          gsap.set(info, { y: 36, opacity: 0 });
          gsap.set(content, {
            x: isMobile ? 0 : isReverse ? -70 : 70,
            y: isMobile ? 38 : 0,
            opacity: 0,
          });
          gsap.set(paragraphs, { y: 18, opacity: 0 });

          const timeline = gsap
            .timeline({ paused: true })
            .to(media, {
              y: 0,
              opacity: 1,
              duration: isMobile ? 0.85 : 1,
              ease: "power3.out",
            })
            .to(
              image,
              {
                y: 0,
                opacity: 1,
                duration: isMobile ? 0.9 : 1.1,
                ease: "power3.out",
              },
              "-=0.8"
            )
            .to(
              info,
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                ease: "power3.out",
              },
              "-=0.65"
            )
            .to(
              content,
              {
                x: 0,
                y: 0,
                opacity: 1,
                duration: isMobile ? 0.8 : 0.95,
                ease: "power3.out",
              },
              "-=0.75"
            )
            .to(
              paragraphs,
              {
                y: 0,
                opacity: 1,
                duration: 0.55,
                stagger: 0.06,
                ease: "power2.out",
              },
              "-=0.42"
            );

          ScrollTrigger.create({
            trigger: row,
            start: "top 72%",
            once: true,
            onEnter: () => timeline.play(0),
          });
        });
      };

      mm.add("(min-width: 768px)", () => animateRows({ isMobile: false }));
      mm.add("(max-width: 767px)", () => animateRows({ isMobile: true }));
    }, sectionRef);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
      mm.revert();
    };
  }, []);

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

  return (
    <section
      ref={sectionRef}
      id="doctors-list"
      className={styles.section}
      aria-labelledby="doctors-list-title"
    >
      <RevealOnView className={styles.revealShell}>
        <div className={styles.inner}>
          <header className={styles.header} data-doctors-header>
            <h2 id="doctors-list-title" className={styles.title}>
              {renderLines(titleLines)}
            </h2>
            <p className={styles.subtitle}>{renderLines(subtitleLines)}</p>
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
                    data-doctor-row
                    data-doctor-reverse={isRightImage ? "true" : "false"}
                  >
                    <div className={styles.mediaSection} data-doctor-media>
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
                          data-doctor-image
                        />
                      </div>

                      <div className={infoClass} data-doctor-info>
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

                    <div className={styles.contentSection} data-doctor-content>
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
      </RevealOnView>
    </section>
  );
};

export default DoctorsList;

