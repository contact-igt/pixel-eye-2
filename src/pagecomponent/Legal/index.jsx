import HeroBanner from "@/common/HeroBanner";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const homeHero = HOME_CONTENT.banner.slides[0];

export default function LegalPage({ content }) {
  return (
    <>
      <HeroBanner
        image={homeHero.image.src}
        mobileImage={homeHero.image.mobileSrc}
        title={content.title}
        rightSlot="nabh"
        navTheme="light"
        cardBg="white"
        showOverlay={false}
        imagePosition="center center"
        className={styles.legalHero}
        copyClassName={styles.legalHeroCopy}
      />

      <article className={styles.legalContent}>
        <h1 className={styles.legalTitle}>{content.title}</h1>
        <div className={styles.legalIntro}>
          <p>{content.intro}</p>
        </div>
        {content.slug === "privacy-policy" ? (
          <>
            <section className={`${styles.legalSection} ${styles.privacyCombinedCard}`}>
              {content.sections.slice(0, 5).map((section) => (
                <div className={styles.privacySubsection} key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </section>
            {content.sections.slice(5).map((section) => (
              <section className={styles.legalSection} key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </>
        ) : (
          content.sections.map((section) => (
            <section className={styles.legalSection} key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))
        )}
      </article>
    </>
  );
}
