import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogDoctorQuote({ data }) {
  const doctor = data.doctor || {};

  return (
    <section id={data.id} className={styles.quoteBlock}>
      <Image
        src="/assets/blog/quote.png"
        alt=""
        width={18}
        height={18}
        className={styles.mark}
        aria-hidden
      />
      <blockquote>{data.quote}</blockquote>
      {doctor.name ? (
        <div className={styles.doctor}>
          {doctor.image ? (
            <div className={styles.avatar}>
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                sizes="44px"
                className={styles.avatarImage}
              />
            </div>
          ) : null}
          <div>
            <strong>{doctor.name}</strong>
            <span>{doctor.role}</span>
          </div>
        </div>
      ) : null}
    </section>
  );
}
