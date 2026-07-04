import Image from "next/image";
import Slider from "react-slick";
import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";
import styles from "./styles.module.css";

const PlayIcon = () => (
  <span className={styles["squint-diagnosis__play"]} aria-hidden="true" />
);

const HowPediatricCareIsDiagnosed = () => {
  const { diagnosis } = SERVICE_PEDIATRIC_CONTENT;

  const treatmentSliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderTreatmentCard = (item, isSlider = false) => (
    <article
      className={`${styles["squint-diagnosis__treatment-card"]} ${
        item.highlighted
          ? styles["squint-diagnosis__treatment-card--highlight"]
          : ""
      }`}
      key={item.number}
    >
      <Image
        src={isSlider && item.sliderImage ? item.sliderImage : item.image}
        alt={item.alt}
        width={item.highlighted ? 3816 : 1755}
        height={item.highlighted ? 1569 : 1875}
        className={styles["squint-diagnosis__treatment-image"]}
      />
      <div className={styles["squint-diagnosis__treatment-content"]}>
        <h3>
          <span>{item.number}</span> {item.title}
        </h3>
        <p>{item.description}</p>
      </div>
    </article>
  );

  return (
    <section
      className={styles["squint-diagnosis"]}
      aria-labelledby="squint-diagnosis-title"
    >
      <div className={styles["squint-diagnosis__panel"]}>
        <div className={styles["squint-diagnosis__copy"]}>
          <h2 id="squint-diagnosis-title">{diagnosis.title}</h2>
          {diagnosis.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles["squint-diagnosis__media-list"]}>
          {diagnosis.media.map((item) => (
            <figure
              className={styles["squint-diagnosis__media-card"]}
              key={item.title}
            >
              <div className={styles["squint-diagnosis__media-frame"]}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1779}
                  height={792}
                  className={styles["squint-diagnosis__media-image"]}
                />
                {/* <PlayIcon /> */}
              </div>
              <figcaption className={styles["squint-diagnosis__media-label"]}>
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className={styles["squint-diagnosis__treatments"]}>
        {diagnosis.treatments.map((item) => renderTreatmentCard(item, false))}
      </div>

      <div className={styles["squint-diagnosis__treatment-slider"]}>
        <Slider {...treatmentSliderSettings}>
          {diagnosis.treatments.map((item) => renderTreatmentCard(item, true))}
        </Slider>
      </div>
    </section>
  );
};

export default HowPediatricCareIsDiagnosed;