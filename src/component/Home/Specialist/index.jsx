import Image from "next/image";
import { HOME_CONTENT } from "@/constant/homeContent";
import { DOCTORS_CONTENT } from "@/constant/doctorsContent";
import styles from "./styles.module.css";
import Title from "@/common/Title";

const Specialist = () => {
  const { specialist } = HOME_CONTENT;
  const { title, background, doctors } = specialist;
  const doctorDetailsByName = new Map(
    DOCTORS_CONTENT.doctors.map((doctor) => [doctor.name, doctor]),
  );

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

        <h2 className={styles.title}>{title}</h2>
        {/* <Title title_line={title} /> */}
        <div className={styles.inner}>
          <div className={styles.doctorsWrap}>
            {doctors.map((doc, idx) => (
              <div
                key={doc.id}
                className={`${styles.doctor}  ${idx === 0 ? styles.left : styles.right}`}
                tabIndex={0}
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

                <div
                  className={
                    idx == 0 ? styles.doctorHoverCard : styles.doctorHoverCard2
                  }
                >
                  <div className={styles.doctorHoverName}>{doc.name}</div>
                  <div className={styles.doctorHoverContent}>
                    {[
                      doctorDetailsByName.get(doc.name)?.degree,
                      ...(doctorDetailsByName.get(doc.name)?.specialties || []),
                    ]
                      .filter(Boolean)
                      .join(" • ")}
                  </div>
                </div>

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
