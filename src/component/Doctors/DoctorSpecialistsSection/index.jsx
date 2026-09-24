import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Eye,
  GraduationCap,
  HandHeart,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { DOCTOR_PROFILES } from "@/constant/doctorProfiles";
import styles from "./styles.module.css";

const DETAIL_ICONS = {
  "abdul-rasheed": [GraduationCap, Briefcase, Star, Users],
  "krishna-poojita": [GraduationCap, BarChart3, BookOpen],
  "niharika-tupuda": [Eye, Award, HandHeart],
  "roma-johri": [GraduationCap, Eye, Star, Users],
  "udaya-sree": [GraduationCap, Eye, HandHeart],
  "asha-samdani": [GraduationCap, Eye, BookOpen, HandHeart],
};

const CARD_DETAIL_TEXT = {
  "abdul-rasheed": [
    "MD (AIIMS), New Delhi",
    "Extensive clinical experience",
    "Cataract, LASIK, Squint Surgery",
    "Patient understanding & long-term care",
  ],
  "krishna-poojita": [
    "Fellowship with FICO UK & Royal College of Surgeons, Edinburgh",
    "14+ years in ophthalmology · 5,000+ procedures performed",
    "Author of peer-reviewed publications and ophthalmology textbooks",
  ],
  "niharika-tupuda": [
    "MBBS, MS Ophthalmology & Senior Residency",
    "Comprehensive diagnosis and evidence-based eye care",
    "Scientific presentations at state and national conferences",
  ],
  "roma-johri": [
    "MBBS, MS Ophthalmology & Fellowship in Glaucoma",
    "Glaucoma care, cataract surgery & anterior segment disorders",
    "PJ Memorial Award recipient & professional association member",
    "Long-term care, patient education & personalised treatment",
  ],
  "udaya-sree": [
    "Qualifications to be added",
    "Specific specialties to be added",
    "Personalised consultations and follow-up",
  ],
  "asha-samdani": [
    "Trained at AIIMS, New Delhi",
    "Squint, strabismus, pediatric ophthalmology & oculoplasty",
    "Multiple case reports, peer-reviewed publications & book chapters",
    "Compassionate, evidence-based individualised care",
  ],
};

const CARD_DETAIL_TITLES = {
  "abdul-rasheed": ["Education", "Experience", "Expertise", "Focus"],
  "krishna-poojita": [
    "Qualifications & Training",
    "Experience",
    "Research & Publications",
  ],
  "niharika-tupuda": ["Expertise", "Academic Excellence", "Patient Care"],
  "roma-johri": [
    "Education",
    "Clinical Expertise",
    "Professional Highlights",
    "Approach",
  ],
  "udaya-sree": ["Background", "Clinical Expertise", "Patient Care"],
  "asha-samdani": [
    "Education & Training",
    "Clinical Expertise",
    "Research & Publications",
    "Patient Approach",
  ],
};

const DoctorSpecialistsSection = () => (
  <section className={styles.section} aria-labelledby="doctor-profiles-title">
    <h2 id="doctor-profiles-title" className={styles.visuallyHidden}>
      Our doctors
    </h2>

    <div className={styles.inner}>
      <div className={styles.cards}>
        {/* Temporarily hide Dr. Udaya Sree's card until her bio is ready. */}
        {DOCTOR_PROFILES.map((doctor, doctorIndex) => {
          if (doctor.id === "udaya-sree") return null;

          return (
          <Link
            key={doctor.id}
            href={`/doctors/${doctor.id}#doctor-profile`}
            className={`${styles.card} ${doctorIndex % 2 === 1 ? styles.imageRight : ""}`.trim()}
            data-doctor={doctor.id}
            aria-label={`View ${doctor.name}'s profile`}
          >
            <div className={styles.media}>
              <Image
                src={doctor.background}
                alt=""
                width={1197}
                height={1326}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 34vw, 490px"
                className={styles.backgroundShape}
                aria-hidden="true"
              />
              <Image
                src={doctor.image}
                alt={doctor.imageAlt}
                width={1200}
                height={1650}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 34vw, 490px"
                className={styles.doctorImage}
              />
            </div>

            <div className={styles.content}>
              <header className={styles.header}>
                <h3 className={styles.name}>{doctor.name}</h3>
                <p className={styles.role}>{doctor.role}</p>
                <p className={styles.specialty}>{doctor.credentials}</p>
                <p className={styles.specialty}>{doctor.specialty}</p>
                <p className={styles.intro}>{doctor.summary}</p>
              </header>

              <div className={styles.details}>
                {CARD_DETAIL_TITLES[doctor.id].map((title, index) => {
                  const Icon = DETAIL_ICONS[doctor.id][index];

                  return (
                    <div key={title} className={styles.detail}>
                      <Icon className={styles.detailIcon} aria-hidden="true" />
                      <div>
                        <h4>{title}</h4>
                        <p>{CARD_DETAIL_TEXT[doctor.id][index]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.cardFooter}>
                <blockquote className={styles.quote}>
                  <Quote className={styles.quoteIcon} aria-hidden="true" />
                  <p>{doctor.philosophy}</p>
                </blockquote>

                <span className={styles.viewProfile}>
                  View Profile
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default DoctorSpecialistsSection;
