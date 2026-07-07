"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const ExperienceSection = () => {
  const { titleLines, subtitleLines, image, paragraphs } =
    ABOUT_CONTENT.experience;
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const copyRef = useRef(null);
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
      const hasPassedStart = (node, startRatio) => {
        if (!node) return false;
        return (
          node.getBoundingClientRect().top <= window.innerHeight * startRatio
        );
      };

      mm.add("(min-width: 992px)", () => {
        const header = headerRef.current;
        const image = imageRef.current;
        const copy = copyRef.current;
        const targets = [header, image, copy].filter(Boolean);
        if (!targets.length) return;

        if (hasPassedStart(sectionRef.current, 0.84)) {
          gsap.set(targets, { x: 0, y: 0, opacity: 1 });
          return;
        }

        if (header) gsap.set(header, { y: 34, opacity: 0 });
        if (image) gsap.set(image, { x: -72, opacity: 0 });
        if (copy) gsap.set(copy, { y: 42, opacity: 0 });

        const timeline = gsap
          .timeline({ paused: true })
          .to(header, {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          })
          .to(
            image,
            {
              x: 0,
              opacity: 1,
              duration: 1.05,
              ease: "power3.out",
            },
            "-=0.55",
          )
          .to(
            copy,
            {
              y: 0,
              opacity: 1,
              duration: 1.05,
              ease: "power3.out",
            },
            "-=0.86",
          );

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 84%",
          once: true,
          onEnter: () => timeline.play(0),
          onRefresh: (self) => {
            if (self.progress > 0) {
              timeline.progress(1);
            }
          },
        });
      });

      mm.add("(max-width: 991px)", () => {
        const items = [
          headerRef.current,
          imageRef.current,
          copyRef.current,
        ].filter(Boolean);
        if (!items.length) return;

        if (hasPassedStart(sectionRef.current, 0.86)) {
          gsap.set(items, { y: 0, opacity: 1 });
          return;
        }

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
          start: "top 86%",
          once: true,
          onEnter: () => timeline.play(0),
          onRefresh: (self) => {
            if (self.progress > 0) {
              timeline.progress(1);
            }
          },
        });
      });
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
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.2;

      if (!sectionWellInView) return;

      const targets = [
        headerRef.current,
        imageRef.current,
        copyRef.current,
      ].filter(Boolean);
      const hasHiddenTarget = targets.some((target) => {
        const opacity = Number.parseFloat(
          window.getComputedStyle(target).opacity || "1",
        );
        return opacity < 0.1;
      });

      if (hasHiddenTarget) {
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
      className={`${styles.section} ${forceVisible ? styles.forceVisible : ""}`.trim()}
      aria-labelledby="about-experience-title"
    >
      <div className={styles.careContainer}>
        <div ref={headerRef} className={styles.header}>
          <h2 id="about-experience-title" className={styles.title}>
            {renderTitleLines(titleLines)}
          </h2>
          <p className={styles.subtitle}>{renderText(subtitleLines)}</p>
        </div>

        <div className={styles.content}>
          <div ref={imageRef} className={styles.imageWrap}>
            <div className={styles.backAccent} aria-hidden="true" />
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
