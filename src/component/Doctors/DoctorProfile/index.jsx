import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Award,
  BookOpen,
  BriefcaseMedical,
  CalendarDays,
  CheckCircle2,
  Eye,
  GraduationCap,
  HeartHandshake,
  Quote,
  Stethoscope,
} from "lucide-react";
import Button from "@/common/Button";
import HeroBanner from "@/common/HeroBanner";
import { DOCTORS_CONTENT } from "@/constant/doctorsContent";
import styles from "./styles.module.css";
import PublicationArchive from "@/component/Doctors/PublicationArchive";

const ICONS = {
  education: GraduationCap,
  experience: CalendarDays,
  surgeries: Activity,
  expertise: Eye,
  care: HeartHandshake,
  award: Award,
  research: BookOpen,
};

export default function DoctorProfile({ doctor }) {
  return (
    <>
      <HeroBanner
        image={DOCTORS_CONTENT.hero.image}
        mobileImage={DOCTORS_CONTENT.hero.mobileImage}
        title={doctor.name}
        subtitle={doctor.role}
        rightSlot="book"
        navTheme={DOCTORS_CONTENT.hero.navTheme}
        cardBg={DOCTORS_CONTENT.hero.cardBg}
        height="short"
        showOverlay={DOCTORS_CONTENT.hero.showOverlay}
        imagePosition={DOCTORS_CONTENT.hero.imagePosition}
        cta={{ label: "Book Appointment", href: "/appointment" }}
        variant="doctorMasked"
      />
      <section
        id="doctor-profile"
        className={styles.section}
        aria-labelledby="doctor-profile-title"
      >
        <div className={styles.inner}>
          <Link href="/doctors" className={styles.backLink}>
            <ArrowLeft aria-hidden="true" />
            All doctors
          </Link>

        <article className={styles.profileHero} data-doctor={doctor.id}>
          <div className={styles.portrait}>
            <Image
              src={doctor.background}
              alt=""
              width={1197}
              height={1326}
              className={styles.portraitShape}
              aria-hidden="true"
              priority
            />
            <Image
              src={doctor.image}
              alt={doctor.imageAlt}
              width={1200}
              height={1650}
              sizes="(max-width: 767px) 100vw, 42vw"
              className={styles.portraitImage}
              priority
              unoptimized
            />
          </div>

          <div className={styles.profileIntro}>
            <p className={styles.eyebrow}>{doctor.role}</p>
            <h1 id="doctor-profile-title" className={styles.name}>
              {doctor.name}
            </h1>
            <p className={styles.credentials}>{doctor.credentials}</p>
            <p className={styles.specialty}>{doctor.specialty}</p>

            <div className={styles.stats} aria-label="Profile highlights">
              {doctor.stats.map(({ icon, value, label }) => {
                const Icon = ICONS[icon];

                return (
                  <div key={label} className={styles.stat}>
                    <Icon aria-hidden="true" />
                    <div>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className={styles.summary}>{doctor.summary}</p>
            <Button
              label="Book an Appointment"
              href="/appointment"
              variant="dark"
              className={styles.appointmentButton}
            />
          </div>
        </article>

        <div className={styles.summaryGrid}>
          {doctor.sections.map(({ icon, title, text }) => {
            const Icon = ICONS[icon];

            return (
              <section key={title} className={styles.summaryCard}>
                <span className={styles.summaryIcon}>
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </section>
            );
          })}
        </div>

        <section className={styles.journey} aria-labelledby="journey-title">
          <header className={styles.sectionHeader}>
            <p>Professional journey</p>
            <h2 id="journey-title">A foundation built on specialised training</h2>
          </header>

          <ol className={styles.journeyList}>
            {doctor.journey.map((item, index) => (
              <li key={`${item.title}-${item.text}`}>
                <span className={styles.journeyMarker}>
                  {index === doctor.journey.length - 1 ? (
                    <BriefcaseMedical aria-hidden="true" />
                  ) : (
                    <GraduationCap aria-hidden="true" />
                  )}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {doctor.publications?.length > 0 && <PublicationArchive publications={doctor.publications} />}

        {/* Previous publication-card UI retained for reference.
        {doctor.publications?.length > 0 && (() => {
          const [featuredPublication, ...otherPublications] = doctor.publications;

          return (
          <section className={styles.publications} aria-labelledby="publications-title">
            <header className={styles.sectionHeader}>
              <div>
                <p>Research</p>
                <h2 id="publications-title">Published Research</h2>
                <span>Peer-reviewed publications, international journals, clinical research and academic contributions.</span>
              </div>
              <a href="#publication-list" className={styles.allPublications}>
                <BookOpen aria-hidden="true" /> View All Publications <ArrowUpRight aria-hidden="true" />
              </a>
            </header>

            <article className={styles.featuredPublication}>
              <div className={styles.featuredMedia}>
                <Image
                  src={featuredPublication.image}
                  alt={featuredPublication.imageAlt}
                  width={760}
                  height={480}
                  sizes="(max-width: 991px) 100vw, 46vw"
                  className={styles.featuredImage}
                />
                <span className={styles.featuredBadge}>Featured Publication</span>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.publicationMeta}>
                  <p className={styles.journal}>{featuredPublication.journal}</p>
                  <span className={styles.year}><CalendarDays aria-hidden="true" />{featuredPublication.year}</span>
                </div>
                <h3>{featuredPublication.title}</h3>
                <ul className={styles.tags} aria-label="Publication topics">
                  {featuredPublication.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <p>{featuredPublication.description}</p>
                <div className={styles.featuredActions}>
                  <a href={featuredPublication.href} target="_blank" rel="noopener noreferrer" className={styles.primaryPublicationLink}>
                    View Publication <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a href={featuredPublication.href} target="_blank" rel="noopener noreferrer" className={styles.abstractLink}>
                    <FileText aria-hidden="true" /> Read Abstract
                  </a>
                </div>
              </div>
            </article>

            <div id="publication-list" className={styles.publicationList}>
              {otherPublications.map((publication) => (
                <article key={publication.href} className={styles.publicationCard}>
                  <div className={styles.cardMedia}>
                    <Image src={publication.image} alt={publication.imageAlt} width={640} height={420} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 32vw" className={styles.publicationImage} />
                    <span className={styles.year}><CalendarDays aria-hidden="true" />{publication.year}</span>
                  </div>
                  <div className={styles.publicationContent}>
                    <p className={styles.journal}>{publication.journal}</p>
                    <h3>{publication.title}</h3>
                    <p>{publication.description}</p>
                    <div className={styles.publicationFooter}>
                      <a
                        href={publication.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.publicationLink}
                      >
                        <FileText aria-hidden="true" /> View Publication <ArrowUpRight aria-hidden="true" />
                      </a>
                      <span className={styles.publicationType}>{publication.type}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          );
        })()} */}

        <div className={styles.closingGrid}>
          <section className={styles.expertise} aria-labelledby="expertise-title">
            <header className={styles.sectionHeader}>
              <p>Specialist care</p>
              <h2 id="expertise-title">Areas of expertise</h2>
            </header>

            <ul className={styles.expertiseList}>
              {doctor.expertise.map((item) => (
                <li key={item}>
                  <span>
                    <CheckCircle2 aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <blockquote className={styles.philosophy}>
            <Quote aria-hidden="true" />
            <p>{doctor.philosophy}</p>
            <footer>
              <Stethoscope aria-hidden="true" />
              {doctor.name}
            </footer>
          </blockquote>
        </div>
      </div>
      </section>
    </>
  );
}
