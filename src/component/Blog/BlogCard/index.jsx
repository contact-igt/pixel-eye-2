import Link from "next/link";
import Image from "next/image";
import { CalendarDays, UserRound } from "lucide-react";
import styles from "./styles.module.css";

export default function BlogCard({ blog }) {
  const imageSrc = blog?.hero?.coverImage || '/assets/blog/blog_banner.png';
  const publishedDate = formatDate(blog?.hero?.publishedAt);
  const author = blog?.hero?.author?.name || "Pixel Eye Hospitals";
  return (
    <article className={styles.card}>
      <Link href={`/blog/${blog.slug}`} className={styles.media}>
        <Image
          src={imageSrc}
          alt={blog.hero.title}
          fill
          sizes="(max-width: 767px) 100vw, 380px"
          className={styles.image}
        />
      </Link>
      <div className={styles.body}>
        <h2>
          <Link href={`/blog/${blog.slug}`}>{blog.hero.title}</Link>
        </h2>
        <p>{blog.hero.excerpt}</p>
        <div className={styles.footer}>
          <div className={styles.meta}>
            {publishedDate && <span><CalendarDays size={15} />{publishedDate}</span>}
            <span><UserRound size={15} />By {author}</span>
            {blog.hero.category && <span>{blog.hero.category}</span>}
          </div>
          <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

function formatDate(value) {
  const date = value && new Date(value);
  return date && !Number.isNaN(date.valueOf())
    ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date)
    : "";
}
