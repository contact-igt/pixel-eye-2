import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css";

const TreatmentCauses = ({ data, slug = "treatment" }) => {
  const cardsRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const itemCount = data?.items?.length ?? 0;
  const [cardsPerSlideLimit, setCardsPerSlideLimit] = useState(3);
  const cardsPerSlide = Math.max(1, Math.min(cardsPerSlideLimit, itemCount || 1));
  const groupedItems = [];

  for (let index = 0; index < itemCount; index += cardsPerSlide) {
    groupedItems.push(data.items.slice(index, index + cardsPerSlide));
  }

  const canLoop = groupedItems.length > 1;

  const sliderSettings = {
    dots: groupedItems.length > 1,
    arrows: false,
    infinite: canLoop,
    autoplay: canLoop,
    autoplaySpeed: 2800,
    speed: 650,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: canLoop,
          autoplay: canLoop,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: canLoop,
          autoplay: canLoop,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: canLoop,
          autoplay: canLoop,
        },
      },
    ],
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (max-width: 991px)");
    const updateCardsPerSlide = (event) => {
      setCardsPerSlideLimit(event.matches ? 4 : 3);
    };

    updateCardsPerSlide(mediaQuery);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateCardsPerSlide);
      return () => mediaQuery.removeEventListener("change", updateCardsPerSlide);
    }

    mediaQuery.addListener(updateCardsPerSlide);
    return () => mediaQuery.removeListener(updateCardsPerSlide);
  }, []);
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

  const renderCauseCard = (item, index) => (
    <article
      className={styles["treatment-cause-card"]}
      style={{ "--i": index }}
      key={`${item.number || item.title || "cause"}-${index}`}
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
        style={{ "--count": data.items.length }}
      >
        {data.items.map(renderCauseCard)}
      </div>

      <div className={styles["treatment-causes__slider"]}>
        <Slider {...sliderSettings}>
          {groupedItems.map((group, groupIndex) => (
            <div key={`cause-group-${groupIndex}`}>
              <div className={styles["treatment-causes__slide-group"]}>
                {group.map((item, itemIndex) =>
                  renderCauseCard(item, groupIndex * cardsPerSlide + itemIndex),
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TreatmentCauses;
