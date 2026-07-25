import Link from "next/link";
import Image from "next/image";
import { getAllBlogs } from "@/lib/blogService";
import styles from "./styles.module.css";

export default function BlogSuggestedReads({ data }) {
  const reads = getAllBlogs().slice(0, 3);

  return (
    <section id={data.id} className={styles.block}>
      <div className={styles.header}>
        <h2>{data.title || "Suggested reads"}</h2>
        <Link href="/blog">View all articles</Link>
      </div>
      <div className={styles.grid}>
        {reads.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className={styles.card}>
            <div className={styles.media}>
              <Image src={blog.hero.coverImage} alt={blog.hero.title} fill sizes="(max-width: 767px) 100vw, 320px" className={styles.image} />
            </div>
            <div className={styles.body}>
              <span>{blog.hero.category}</span>
              <h3>{blog.hero.title}</h3>
              <p>{blog.hero.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
