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
            className={styles.image}
            sizes="100vw"
            priority
            draggable={false}
          />

          <Link href={cta.href} className={styles.ctaButton}>
            <span className={styles.ctaLabel}>{cta.label}</span>
            <span className={styles.ctaIcon}>
              <ArrowUpRight width={18} height={18} strokeWidth={2.1} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionCta;
