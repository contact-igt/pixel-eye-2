import Image from "next/image";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const Specialist = () => {
  const { specialist } = HOME_CONTENT;
  const { title, background, doctors } = specialist;

  return (
    <section className={styles.specialistSection}>
      <div className={styles.frame}>
        <div className={styles.bgWrap}>
          <Image
            src={background.src}
            alt={background.alt}
            fill
            className={styles.bgImage}
            sizes="(max-width: 640px) 220px, (max-width: 991px) 420px, 520px"
            priority
            draggable={false}
          />
        </div>

        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.doctorsWrap}>
            {doctors.map((doc, idx) => (
              <div
                key={doc.id}
                className={`${styles.doctor}  ${idx === 0 ? styles.left : styles.right}`}
              >
                <Image
                  src={doc.image}
                  alt={doc.name}
                  width={320}
                  height={480}
                  className={styles.doctorImage}
                  priority={idx === 0}
                  draggable={false}
                />

                <div className={styles.doctorName}>{doc.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
