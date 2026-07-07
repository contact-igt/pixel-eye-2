import Slider from "react-slick";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const Stats = () => {
  const { stats } = HOME_CONTENT;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6500,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchMove: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },

    ],
  };

  const statCard = (stat) => (
    <div className={styles.slideItem}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>{stat.number}</span>
        <span className={styles.statLabel}>
          {stat.label.split("\n").map((line, i, lines) => (
            <span key={`${stat.id}-${i}`}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>
    </div>
  );

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsFrame}>
        <Slider className={styles.slider} {...settings}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.slideWrap}>
              <div className={styles.statGroup}>{statCard(stat)}</div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Stats;
