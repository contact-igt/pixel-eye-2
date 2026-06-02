import Image from "next/image";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const RememberRecommend = () => {
  const { titleLines, description, testimonials } = ABOUT_CONTENT.rememberRecommend;

  return (
    <section className={styles.section} aria-labelledby="remember-recommend-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="remember-recommend-title" className={styles.title}>
            {titleLines[0]}
            <br />
            {titleLines[1]}
          </h2>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>

              <p className={styles.cardText}>{item.text}</p>

              <div className={styles.patientBlock}>
                <div className={styles.avatarWrap}>
                  <Image
                    src={item.profileImage.src}
                    alt={item.profileImage.alt}
                    width={72}
                    height={72}
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.name}>{item.name}</h3>
                  <div className={styles.ratingRow}>
                    <span className={styles.star} aria-hidden="true">
                      &#9733;
                    </span>
                    <span className={styles.rating}>{item.rating}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RememberRecommend;


