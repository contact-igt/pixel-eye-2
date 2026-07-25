import Image from "next/image";
import styles from "./styles.module.css";

export default function BlogDoctorInsight({ data }) {
  const doctor = data.doctor || data;

  return (
    <section id={data.id} className={styles.card}>
      <div className={styles.header}>
        {doctor.image ? (
          <div className={styles.avatar}>
            <Image src={doctor.image} alt={doctor.name || "Doctor"} fill sizes="52px" className={styles.avatarImage} />
          </div>
        ) : null}
        <div>
          <h2>{data.title || doctor.name || "Doctor's Insight"}</h2>
          {doctor.role ? <p>{doctor.role}</p> : null}
        </div>
      </div>
      {data.description ? <p className={styles.description}>{data.description}</p> : null}
      <a href="/doctors" className={styles.link}>View Doctor Profile</a>
    </section>
  );
}
