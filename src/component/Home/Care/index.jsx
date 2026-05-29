import Title from "@/common/Title";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const Care = () => {
  const { care } = HOME_CONTENT;
  const { titleLine1, titleLine2, featuredCareAreas, cta } = care;

  return (
    <section className={styles.careSection}>
      <div className={`container ${styles.careContainer}`}>
        <Title
          title_line={
            <>
              {titleLine1}
              <br />
              {titleLine2}
            </>
          }
        />
      </div>
      <div className={styles.careVisual}>
        <div className={styles.panelBg} />

        <div className={styles.cardsRow}>
          {featuredCareAreas.map((item, index) => {
            const isCenter = index === 1;
            const cardClass = isCenter ? styles.centerCard : styles.sideCard;
            const wrapClass = isCenter ? styles.centerWrap : styles.sideWrap;
            const titleClass = isCenter
              ? `${styles.cardTitle} ${styles.centerTitle}`
              : styles.cardTitle;

            return (
              <div key={item.id} className={`${styles.cardWrap} ${wrapClass}`}>
                <article className={`${styles.card} ${cardClass}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 992px) 100vw, 33vw"
                    loading={isCenter ? "eager" : "lazy"}
                    className={styles.cardImage}
                  />
                  <h4 className={titleClass}>{item.title}</h4>
                </article>
                {item.description && (
                  <p className={styles.cardDescription}>{item.description}</p>
                )}
              </div>
            );
          })}
        </div>

        <Link href={cta.href} className={styles.ctaButton}>
          <span className={styles.ctaLabel}>{cta.label}</span>
          <span className={styles.ctaArrow}>
            <ArrowUpRight className={styles.ctaArrowIcon} />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Care;
