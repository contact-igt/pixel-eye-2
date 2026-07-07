import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HOME_CONTENT } from "@/constant/homeContent";
import { DOCTORS_CONTENT } from "@/constant/doctorsContent";
import styles from "./styles.module.css";

const Specialist = () => {
  const { specialist } = HOME_CONTENT;
  const { title, background, doctors } = specialist;
  const [activeDoctorId, setActiveDoctorId] = useState(doctors[0]?.id ?? null);
  const doctorRefs = useRef(new Map());
  const visibilityRatiosRef = useRef(new Map());
  const doctorDetailsByName = new Map(
    DOCTORS_CONTENT.doctors.map((doctor) => [doctor.name, doctor]),
  );

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    let observer;

    const disconnectObserver = () => {
      if (observer) {
        observer.disconnect();
        observer = undefined;
      }
      visibilityRatiosRef.current.clear();
    };

    const connectObserver = () => {
      if (!mediaQuery.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const doctorId = Number(
              entry.target.getAttribute("data-doctor-id"),
            );
            if (Number.isNaN(doctorId)) return;

            visibilityRatiosRef.current.set(
              doctorId,
              entry.isIntersecting ? entry.intersectionRatio : 0,
            );
          });

          let nextDoctorId = null;
          let maxRatio = 0;

          visibilityRatiosRef.current.forEach((ratio, doctorId) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              nextDoctorId = doctorId;
            }
          });

          if (nextDoctorId !== null && maxRatio > 0) {
            setActiveDoctorId((currentId) =>
              currentId === nextDoctorId ? currentId : nextDoctorId,
            );
          }
        },
        {
          threshold: [0.2, 0.4, 0.6, 0.8],
          rootMargin: "0px 0px -12% 0px",
        },
      );

      doctorRefs.current.forEach((doctorElement, doctorId) => {
        visibilityRatiosRef.current.set(doctorId, 0);
        observer.observe(doctorElement);
      });
    };

    const handleViewportChange = () => {
      disconnectObserver();
      connectObserver();
    };

    handleViewportChange();
    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      disconnectObserver();
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, [doctors]);

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
        <div className={styles.inner}>
          <div className={styles.doctorsWrap}>
            {doctors.map((doc, idx) => {
              const isActive = doc.id === activeDoctorId;

              return (
                <div
                  key={doc.id}
                  ref={(element) => {
                    if (element) {
                      doctorRefs.current.set(doc.id, element);
                      return;
                    }
                    doctorRefs.current.delete(doc.id);
                  }}
                  data-doctor-id={doc.id}
                  className={`${styles.doctor} ${idx === 0 ? styles.left : styles.right} ${isActive ? styles.doctorActive : ""}`}
                >
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={320}
                    height={480}
                    className={styles.doctorImage}
                    priority={idx === 0}
                    draggable={false}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    aria-label={`Show ${doc.name} details`}
                    onMouseEnter={() => setActiveDoctorId(doc.id)}
                    onFocus={() => setActiveDoctorId(doc.id)}
                    onTouchStart={() => setActiveDoctorId(doc.id)}
                    onClick={() => setActiveDoctorId(doc.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveDoctorId(doc.id);
                      }
                    }}
                  />

                  <div
                    className={
                      idx === 0
                        ? styles.doctorHoverCard
                        : styles.doctorHoverCard2
                    }
                  >
                    <div className={styles.doctorHoverName}>{doc.name}</div>
                    <div className={styles.doctorHoverContent}>
                      {[
                        doctorDetailsByName.get(doc.name)?.degree,
                        ...(doctorDetailsByName.get(doc.name)?.specialties ||
                          []),
                      ]
                        .filter(Boolean)
                        .join(" • ")}
                    </div>
                  </div>

                  <div className={styles.doctorName}>{doc.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
