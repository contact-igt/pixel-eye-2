"use client";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import RevealOnView from "@/common/RevealOnView";
import Button from "@/common/Button";
import styles from "./styles.module.css";

const ProcessVideos = () => {
  const { titleLines, description, videos, exploreMore } =
    ABOUT_CONTENT.processVideos;
  const duplicated = [...videos, ...videos, ...videos];
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    arrows: false,
    initialSlide: videos.length,
    beforeChange: (_, next) => {
      setActive(next % videos.length);
    },
    responsive: [
      {
        breakpoint: 991,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.5, centerMode: false },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <section className={styles.section} aria-labelledby="about-process-title">
      <RevealOnView className={styles.revealShell}>
        <div className={styles.panel}>
          <header className={styles.header}>
            <h2 id="about-process-title" className={styles.title}>
              {titleLines[0]}
              <br />
              {titleLines[1]}
            </h2>
            <p className={styles.description}>{description}</p>
          </header>

          <div className={styles.sliderWrap}>
            {mounted ? (
              <Slider ref={sliderRef} {...settings} className={styles.slider}>
                {duplicated.map((video, i) => {
                  const isActive = i % videos.length === active;
                  return (
                    <div key={`${video.id}-${i}`} className={styles.slideOuter}>
                      <article
                        className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                        onClick={() => {
                          setActive(i % videos.length);
                          sliderRef.current?.slickGoTo(i);
                        }}
                      >
                        <div className={styles.thumbWrap}>
                          <img
                            src={video.image}
                            alt={video.title}
                            className={styles.thumb}
                          />
                        </div>
                        <div className={styles.cardBody}>
                          <h3 className={styles.cardTitle}>{video.title}</h3>
                          <p className={styles.cardText}>{video.description}</p>
                          <Button
                            label="Watch Video"
                            href={video.link}
                            className={styles.watchBtn}
                            variant="light"
                        target={video.target_blank ? "_blank" : undefined}
                          />
                        </div>
                      </article>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <div className={styles.grid}>
                {videos.map((video, index) => (
                  <article
                    key={video.id}
                    className={styles.card}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className={styles.thumbWrap}>
                      <img
                        src={video.image}
                        alt={video.title}
                        className={styles.thumb}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{video.title}</h3>
                      <p className={styles.cardText}>{video.description}</p>
                      <Button
                        label="Watch Video"
                        href={video.link}
                        className={styles.watchBtn}
                        variant="light"
                            target={video.target_blank ? "_blank" : undefined}
                      />
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <div className={styles.dots}>
            {videos.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
                onClick={() => {
                  setActive(i);
                  if (mounted) sliderRef.current?.slickGoTo(i + videos.length);
                }}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>

          <div className={styles.exploreWrap}>
            <Button
              label={exploreMore.label}
              href={exploreMore.href}
              variant="muted"
              className={styles.exploreBtn}
              target={exploreMore.target_blank ? "_blank" : undefined}
            />
          </div>
        </div>
      </RevealOnView>
    </section>
  );
};

export default ProcessVideos;
