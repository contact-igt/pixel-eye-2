import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";
import styles from "./styles.module.css";

const PediatricCauses = () => {
  const { causes } = SERVICE_PEDIATRIC_CONTENT;
  const cardsRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  useEffect(() => {
    const node = cardsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const renderCauseCard = (factor, index) => (
    <article
      className={styles["squint-cause-card"]}
      style={{ "--i": index }}
      key={factor.number}
    >
      <img src={factor.image} alt={factor.title} />
    </article>
  );

  return (
    <section
      className={styles["squint-causes"]}
      aria-labelledby="squint-causes-title"
    >
      <div className={styles["squint-causes__header"]}>
        <h2 id="squint-causes-title">{causes.title}</h2>
        <p>{causes.description}</p>
      </div>

      <div
        ref={cardsRef}
        className={`${styles["squint-causes__cards"]} ${
          isRevealed ? styles["is-revealed"] : ""
        }`.trim()}
      >
        {causes.items.map(renderCauseCard)}
      </div>

      <div className={styles["squint-causes__slider"]}>
        <Slider {...sliderSettings}>{causes.items.map(renderCauseCard)}</Slider>
      </div>
    </section>
  );
};

export default PediatricCauses;