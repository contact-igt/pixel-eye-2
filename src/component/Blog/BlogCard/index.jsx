import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogCard({ blog }) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${blog.slug}`} className={styles.media}>
        <Image
          src={blog.hero.coverImage}
          alt={blog.hero.title}
          fill
          sizes="(max-width: 767px) 100vw, 380px"
          className={styles.image}
        />
      </Link>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{blog.hero.category}</span>
          <span>{blog.hero.readTime}</span>
        </div>
        <h2>
          <Link href={`/blog/${blog.slug}`}>{blog.hero.title}</Link>
        </h2>
        <p>{blog.hero.excerpt}</p>
        <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </article>
  );
}
