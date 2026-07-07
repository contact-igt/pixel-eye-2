import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const VisionCta = () => {
  const { visionCta } = HOME_CONTENT;
  const { title, cta, image } = visionCta;

  return (
    <section className={styles.visionSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.frame}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`${styles.image} ${styles.imageDesktop}`}
            sizes="(max-width: 767px) 1px, (max-width: 1200px) 100vw, 1200px"
            priority
            draggable={false}
          />
          <Image
            src="/assets/Home/substract-mb.png"
            alt={image.alt}
            fill
            className={`${styles.image} ${styles.imageMobile}`}
            sizes="(max-width: 767px) 100vw, 1px"
            priority
            draggable={false}
          />

          <Link href={cta.href} className={styles.ctaButton}>
            <span className={styles.ctaLabel}>{cta.label}</span>
            <span className={styles.ctaArrow}>
              <ArrowUpRight className={styles.ctaArrowIcon} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionCta;
