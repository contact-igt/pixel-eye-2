import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import Button from "@/common/Button";
import styles from "./styles.module.css";
import Title from "@/common/Title";

const WhyChoose = () => {
  const { whyChoose } = HOME_CONTENT;
  const { title, cards, cta } = whyChoose;
  // start with the middle card active
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        <Title title_line={<>{title}</>} />

        <div className={styles.cardsFrame}>
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            // Dynamically assign left/right slots to the two non-active cards
            // so whichever card is active, the others always have a valid position
            const others = cards
              .map((_, i) => i)
              .filter((i) => i !== activeIndex);
            const positionClass = isActive
              ? ""
              : others[0] === index
                ? styles.leftCard
                : styles.rightCard;

            const cardClass = isActive ? styles.centerCard : styles.sideCard;

            return (
              <article
                key={card.id}
                className={`${styles.card} ${cardClass} ${positionClass} ${isActive ? styles.activeCard : ""}`}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveIndex(index);
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 991px) 100vw, 480px"
                  className={styles.cardImage}
                  priority={isActive}
                  draggable={false}
                />
                <div
                  className={
                    isActive ? styles.centerOverlay : styles.sideOverlay
                  }
                />

                <div
                  className={
                    isActive ? styles.centerContent : styles.sideContent
                  }
                >
                  <h3
                    className={isActive ? styles.centerTitle : styles.sideTitle}
                  >
                    {card.title}
                  </h3>
                  {isActive && card.description ? (
                    <p className={styles.centerDescription}>
                      {card.description}
                    </p>
                  ) : null}
                  {isActive && card.buttonLabel ? (
                    <Button
                      label={card.buttonLabel}
                      href={card.href || "#"}
                      variant="light"
                    />
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.ctaRow}>
          <Button label={cta.label} href={cta.href} variant="muted" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
