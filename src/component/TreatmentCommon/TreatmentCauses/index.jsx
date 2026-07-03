import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";

const TreatmentCauses = ({ data, slug = "treatment" }) => {
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
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 576, settings: { slidesToShow: 4 } },
      { breakpoint: 390, settings: { slidesToShow: 3 } },
    ],
  };

  useEffect(() => {
    const node = cardsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsRevealed(true); observer.disconnect(); }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const renderCauseCard = (item, index) => (
    <article
      className={styles["treatment-cause-card"]}
      style={{ "--i": index }}
      key={item.number}
    >
      <img src={item.image} alt={item.title} />
    </article>
  );

  return (
    <section
      className={styles["treatment-causes"]}
      aria-labelledby={`${slug}-causes-title`}
    >
      <div className={styles["treatment-causes__header"]}>
        <h2 id={`${slug}-causes-title`}>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div
        ref={cardsRef}
        className={`${styles["treatment-causes__cards"]} ${
          isRevealed ? styles["is-revealed"] : ""
        }`.trim()}
      >
        {data.items.map(renderCauseCard)}
      </div>

      <div className={styles["treatment-causes__slider"]}>
        <Slider {...sliderSettings}>{data.items.map(renderCauseCard)}</Slider>
      </div>
    </section>
  );
};

export default TreatmentCauses;
