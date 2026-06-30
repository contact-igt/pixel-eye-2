"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const ExperienceSection = () => {
  const { titleLines, subtitleLines, image, paragraphs } = ABOUT_CONTENT.experience;
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const copyRef = useRef(null);
  const accentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {

      mm.add("(min-width: 992px)", () => {
        gsap.set(accentRef.current, { x: -40, opacity: 0 });
        gsap.set(imageRef.current, { x: -90, opacity: 0 });
        gsap.set(copyRef.current, { x: 90, opacity: 0 });

        const timeline = gsap
          .timeline({ paused: true })
          .to(accentRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          })
          .to(
            imageRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 1.05,
              ease: "power3.out",
            },
            "-=0.72"
          )
          .to(
            copyRef.current,
            {
              x: 0,
              opacity: 1,
              duration: 1.05,
              ease: "power3.out",
            },
            "-=0.82"
          );

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
          onEnter: () => timeline.play(0),
        });
      });

      mm.add("(max-width: 991px)", () => {
        const items = [copyRef.current, imageRef.current];
        gsap.set(items, { y: 48, opacity: 0 });

        const timeline = gsap.timeline({ paused: true }).to(items, {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
          onEnter: () => timeline.play(0),
        });
      });
    }, sectionRef);

    const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshFrame);
      ctx.revert();
      mm.revert();
    };
  }, []);

  const renderTitleLines = (lines) =>
    lines.map((line, index) => (
      <span key={`${line}-${index}`}>
        {line}
        {index < lines.length - 1 && <br />}
      </span>
    ));

  const renderText = (lines) => lines.join(" ");

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="about-experience-title"
    >
      <div className={styles.careContainer}>
        <div className={styles.header}>
          <h2 id="about-experience-title" className={styles.title}>
            {renderTitleLines(titleLines)}
          </h2>
          <p className={styles.subtitle}>{renderText(subtitleLines)}</p>
        </div>

        <div className={styles.content}>
          <div ref={imageRef} className={styles.imageWrap}>
            <div ref={accentRef} className={styles.backAccent} aria-hidden="true" />
            <Image
              src={image.src}
              alt={image.alt}
              width={975}
              height={1194}
              className={styles.image}
            />
            <div className={styles.frontAccent} aria-hidden="true" />
          </div>

          <div ref={copyRef} className={styles.copy}>
            {paragraphs.map((paragraphLines, index) => (
              <p key={`paragraph-${index}`}>{renderText(paragraphLines)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;