import Link from "next/link";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </svg>
);

const ProcessVideos = () => {
  const { titleLines, description, videos, exploreMore } = ABOUT_CONTENT.processVideos;

  return (
    <section className={styles.section} aria-labelledby="about-process-title">
      <div className={styles.panel}>
        <header className={styles.header}>
          <h2 id="about-process-title" className={styles.title}>
            {titleLines[0]}
            <br />
            {titleLines[1]}
          </h2>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.grid}>
          {videos.map((video) => (
            <article key={video.id} className={styles.card}>
              <img src={video.image} alt={video.title} className={styles.thumb} />

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{video.title}</h3>
                <p className={styles.cardText}>{video.description}</p>

                <Link href={video.link} className={styles.watchBtn}>
                  <span className={styles.watchLabel}>Watch Video</span>
                  <span className={styles.watchIcon}>
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.exploreWrap}>
          <Link href={exploreMore.href} className={styles.exploreBtn}>
            <span className={styles.exploreLabel}>{exploreMore.label}</span>
            <span className={styles.exploreIcon}>
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessVideos;
