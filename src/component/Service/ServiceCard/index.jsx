import Image from "next/image";
import Link from "next/link";
import Button from "@/common/Button";
import styles from "./styles.module.css";

const ServiceCard = ({ section }) => {
  const titleLines = section.title.split(" ");
  const midpoint = Math.ceil(titleLines.length / 2);
  const firstLine = titleLines.slice(0, midpoint).join(" ");
  const secondLine = titleLines.slice(midpoint).join(" ");

  return (
    <section
      className={styles.section}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
    >
      <div className={styles.card}>
        <h2 id={`${section.id}-title`} className={styles.title}>
          {firstLine}
          {secondLine ? (
            <>
              <br />
              {secondLine}
            </>
          ) : null}
        </h2>

        <div className={styles.details}>
          <p>{section.description}</p>
          <div className={styles.ctaWrap}>
            {section.ctaStyle === "outline" ? (
              <Button
                label="Explore More"
                href={section.href}
                variant="muted"
                className={styles.linkCta}
              />
            ) : (
              <Button
                label="Explore More"
                href={section.href}
                variant="muted"
              />
            )}
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src={section.image}
            alt={section.imageAlt}
            width={406}
            height={203}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
