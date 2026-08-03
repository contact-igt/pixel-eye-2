import Image from "next/image";
import { Clock3, PencilLine, ShieldCheck } from "lucide-react";
import styles from "./styles.module.css";

export default function BlogHero({ variant = "template-1", data = {}, settings = {} }) {
  const isTemplateTwo = variant === "template-2";
  const height = settings.height || "standard";
  const alignment = settings.alignment || (isTemplateTwo ? "left" : "center");
  const overlay = settings.overlay || "medium";
  const breadcrumb = Array.isArray(data.breadcrumb) && data.breadcrumb.length
    ? data.breadcrumb.join(" > ")
    : `Home > Blog${data.category ? ` > ${data.category}` : ""}`;

  return (
    <section className={`${styles.hero} ${isTemplateTwo ? styles.templateTwo : styles.templateOne} ${styles[`height_${height}`] || ""} ${styles[`alignment_${alignment}`] || ""}`} data-hero-height={height} data-hero-alignment={alignment} data-hero-overlay={overlay}>
      <div className={styles.media}>
        {data.coverImage ? (
          <Image src={data.coverImage} alt={data.coverImageAlt || data.title || "Blog hero image"} fill priority sizes="(max-width: 767px) 100vw, 1180px" className={styles.image} />
        ) : null}
        <div className={`${styles.overlay} ${styles[`overlay_${overlay}`] || ""}`} />
      </div>

      <div className={styles.content}>
        <div className={styles.breadcrumb}>{breadcrumb}</div>
        {data.category ? <span className={styles.category}>{data.category}</span> : null}
        <h1 className={styles.title}>{data.title}</h1>
        {data.excerpt ? <p className={styles.excerpt}>{data.excerpt}</p> : null}
        <div className={styles.metaRule} aria-hidden="true" />
        <div className={styles.meta}>
          {data.author?.name ? <span><PencilLine size={15} strokeWidth={2.4} />Written by {data.author.name}</span> : null}
          {data.reviewer?.name ? <span><ShieldCheck size={17} strokeWidth={2.3} />Medically reviewed by {data.reviewer.name}{data.reviewer.role ? `, ${data.reviewer.role}` : ""}</span> : null}
          {data.readTime ? <span><Clock3 size={17} strokeWidth={2.4} />{data.readTime}</span> : null}
        </div>
      </div>
    </section>
  );
}