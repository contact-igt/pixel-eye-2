import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_CONTENT } from "@/constant/aboutContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const SuggestedReads = () => {
  const { heading, subtitle, reads } = ABOUT_CONTENT.suggestedReads;
  const featuredRead = reads.find((item) => item.featured);
  const sideReads = reads.filter((item) => !item.featured);

  return (
    <section className={styles.section} aria-labelledby="suggested-reads-title">
      <RevealOnView className={styles.revealShell}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2 id="suggested-reads-title" className={styles.title}>
              {heading}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </header>

          <div className={styles.layout}>
            {featuredRead ? (
              <article className={styles.featuredCard}>
                <div className={styles.featuredMediaWrap}>
                  <div className={styles.featuredMedia}>
                    <Image
                      src={featuredRead.image}
                      alt={featuredRead.title}
                      fill
                      className={styles.mediaImage}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                    />
                  </div>
                  <div className={styles.datePill}>{featuredRead.date}</div>
                </div>

                <div className={styles.featuredBody}>
                  <h3 className={styles.featuredTitle}>{featuredRead.title}</h3>
                  <p className={styles.featuredDescription}>{featuredRead.description}</p>
                  <Link
                    href={featuredRead.href}
                    className={styles.readMore}
                    aria-label={`Read more: ${featuredRead.title}`}
                  >
                    <span className={styles.readLabel}>Read More</span>
                    <span className={styles.readIcon}>
                      <ArrowUpRight size={20} strokeWidth={2.1} />
                    </span>
                  </Link>
                </div>
              </article>
            ) : null}

            <div className={styles.sideColumn}>
              {sideReads.map((item) => (
                <article key={item.id} className={styles.sideCard}>
                  <div className={styles.sideMediaCol}>
                    <div className={styles.sideMediaWrap}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className={styles.mediaImage}
                        sizes="(max-width: 768px) 100vw, 24vw"
                      />
                    </div>
                    <div className={styles.datePill}>{item.date}</div>
                  </div>

                  <div className={styles.sideContent}>
                    <h3 className={styles.sideTitle}>{item.title}</h3>
                    <p className={styles.sideDescription}>{item.description}</p>
                    <Link
                      href={item.href}
                      className={styles.readMore}
                      aria-label={`Read more: ${item.title}`}
                    >
                      <span className={styles.readLabel}>Read More</span>
                      <span className={styles.readIcon}>
                        <ArrowUpRight size={20} strokeWidth={2.1} />
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </RevealOnView>
    </section>
  );
};

export default SuggestedReads;
