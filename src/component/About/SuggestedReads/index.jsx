"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/common/Button";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const ReadCard = ({ item, mobile = false }) => (
  <article className={styles.sideCard}>
    <div className={styles.sideMediaCol}>
      <div className={styles.sideMediaWrap}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={styles.mediaImage}
          sizes={mobile ? "82vw" : "(max-width: 768px) 100vw, 24vw"}
        />
      </div>
      <div className={styles.datePill}>{item.date}</div>
    </div>

    <div className={styles.sideContent}>
      <h3 className={styles.sideTitle}>{item.title}</h3>
      <p className={styles.sideDescription}>{item.description}</p>
      <Button
        label="Read More"
        href={item.href}
        variant="light"
        className={styles.readMore}
        ariaLabel={`Read more: ${item.title}`}
      />
    </div>
  </article>
);

const SuggestedReads = () => {
  const { heading, subtitle, reads } = ABOUT_CONTENT.suggestedReads;
  const featuredRead = reads.find((item) => item.featured);
  const sideReads = reads.filter((item) => !item.featured);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileVisibleReads = sideReads.length
    ? [
        sideReads[mobileActiveIndex],
        sideReads[(mobileActiveIndex + 1) % sideReads.length],
      ].filter(Boolean)
    : [];

  useEffect(() => {
    if (sideReads.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setMobileActiveIndex((current) => (current + 1) % sideReads.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [sideReads.length]);

  return (
    <section className={styles.section} aria-labelledby="suggested-reads-title">
      <RevealOnView className={styles.revealShell}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 id="suggested-reads-title" className={styles.title}>
              {heading}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </header>

          <div className={styles.layout}>
            {featuredRead ? (
              <article className={styles.featuredCard}>
                <div className={styles.featuredMediaWrap}>
                  <div className={styles.featuredMedia}>
                    <Image
                      src={featuredRead.image}
                      alt={featuredRead.title}
                      fill
                      className={styles.mediaImage}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                    />
                  </div>
                  <div className={styles.datePill}>{featuredRead.date}</div>
                </div>

                <div className={styles.featuredBody}>
                  <h3 className={styles.featuredTitle}>{featuredRead.title}</h3>
                  <p className={styles.featuredDescription}>
                    {featuredRead.description}
                  </p>
                  <Button
                    label="Read More"
                    href={featuredRead.href}
                    variant="light"
                    className={styles.readMore}
                    ariaLabel={`Read more: ${featuredRead.title}`}
                  />
                </div>
              </article>
            ) : null}

            <div className={styles.sideColumn}>
              {sideReads.map((item) => (
                <ReadCard key={item.id} item={item} />
              ))}
            </div>

            <div className={styles.mobileSliderWrap}>
              <div className={styles.mobileSlider} aria-live="polite">
                {mobileVisibleReads.map((item, index) => (
                  <div
                    key={`mobile-${item.id}-${mobileActiveIndex}-${index}`}
                    className={styles.mobileSlide}
                  >
                    <ReadCard item={item} mobile />
                  </div>
                ))}
              </div>
              <div className={styles.mobileDots} aria-label="Suggested reads slides">
                {sideReads.map((item, index) => (
                  <button
                    key={`mobile-dot-${item.id}`}
                    type="button"
                    className={`${styles.mobileDot} ${
                      mobileActiveIndex === index ? styles.mobileDotActive : ""
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                    aria-current={mobileActiveIndex === index ? "true" : undefined}
                    onClick={() => setMobileActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnView>
    </section>
  );
};

export default SuggestedReads;
