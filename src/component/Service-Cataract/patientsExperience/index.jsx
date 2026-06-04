import Image from "next/image";
import { SERVICE_CATARACT_CONTENT } from "@/constant/serviceCataractContent";
import styles from "./styles.module.css";

const PatientExperience = () => {
  const { titleLines, description, testimonials } = SERVICE_CATARACT_CONTENT.rememberRecommend;

  // Capitalize title line
  const displayTitle = titleLines && titleLines[0]
    ? titleLines[0].split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Patient Experiences";

  return (
    <section className={styles.section} aria-labelledby="remember-recommend-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="remember-recommend-title" className={styles.title}>
            {displayTitle}
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
              <div className={styles.cardContent}>
                <Image 
                  src="/assets/Service/cataract/quote.png"
                  alt="quote icon"
                  width={34}
                  height={24}
                  className={styles.quoteImg}
                  aria-hidden="true"
                />

                <p className={styles.cardText}>{item.text}</p>
              </div>

              <div className={styles.patientBlock}>
                <div className={styles.avatarWrap}>
                  <Image
                    src={item.profileImage.src}
                    alt={item.profileImage.alt}
                    width={48}
                    height={48}
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

export default PatientExperience;


