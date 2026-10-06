import Image from "next/image";
import { FolderOpen, User } from "lucide-react";
import styles from "./styles.module.css";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function getDateParts(value) {
  const date = value && new Date(value);
  if (!date || Number.isNaN(date.valueOf())) return null;
  return {
    iso: date.toISOString(),
    day: String(date.getDate()).padStart(2, "0"),
    month: MONTHS[date.getMonth()],
  };
}

/**
 * Article-style header: large rounded featured image, date badge + title, author / category line.
 * Selected per blog via the Hero "Header style" option in the admin panel.
 */
export default function BlogArticleHeader({ data = {} }) {
  const date = getDateParts(data.publishedAt);
  const imageUrl = data.coverImage;

  return (
    <header className={styles.header} data-header-style="article">
      {imageUrl ? (
        <div className={styles.media}>
          <Image
            src={imageUrl}
            alt={data.coverImageAlt || data.title || "Blog image"}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 900px"
            className={styles.image}
            unoptimized={typeof imageUrl === "string" && (imageUrl.startsWith("http://") || imageUrl.startsWith("blob:"))}
          />
        </div>
      ) : null}

      <div className={styles.titleRow}>
        {date ? (
          <time className={styles.dateBadge} dateTime={date.iso}>
            <span className={styles.day}>{date.day}</span>
            <span className={styles.month}>{date.month}</span>
          </time>
        ) : null}
        <h1 className={styles.title}>{data.title}</h1>
      </div>

      <div className={styles.meta}>
        {data.author?.name ? (
          <span>
            <User size={16} strokeWidth={2} aria-hidden="true" />
            By <strong>{data.author.name}</strong>
          </span>
        ) : null}
        {data.category ? (
          <span>
            <FolderOpen size={16} strokeWidth={2} aria-hidden="true" />
            <strong>{data.category}</strong>
          </span>
        ) : null}
        {data.readTime ? <span>{data.readTime}</span> : null}
      </div>
    </header>
  );
}
