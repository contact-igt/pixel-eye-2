import styles from "./styles.module.css";

const ABDUL_PROFILE = {
  id: "abdul-rasheed",
  name: "Dr. Abdul Rasheed",
  degree: "MD (AIIMS)",
  specialty: "Cataract, Refractive & Squint Surgeon",
  image: "/assets/Doctor/Dr. Abdul Rasheed.png",
  imageAlt: "Dr. Abdul Rasheed",
  background: "/assets/Doctor/doctorbg_left.png",
  paragraphs: [
    "Dr. Abdul Rasheed is an ophthalmic surgeon with a strong academic and surgical foundation.",
    "He completed his postgraduate training at AIIMS, New Delhi, gaining a rigorous grounding in clinical medicine. His experience includes advanced cataract and LASIK procedures, including complex cases, refined during his tenure at ASG Eye Hospitals. He also brings focused expertise in diagnosing and managing squint across age groups.",
    "Beyond clinical practice, Dr. Rasheed places strong emphasis on patient understanding. He believes that clarity is a key part of care, especially in a space where patients are often faced with multiple options. This approach extends into his educational work, where he actively shares insights on eye health through his YouTube platform.",
    "His interests outside medicine reflect a broader engagement with learning and innovation. He is a co-founder of ONCOTRIBES, India's largest platform for oncologists, and has a keen interest in technology, child psychology, and emerging fields such as cryptocurrency. He is also an avid reader and enjoys long-distance driving.",
  ],
};

const KRISHNA_PROFILE = {
  id: "krishna-poojita",
  name: "Dr. Krishna Poojita Vunnava",
  role: "Director, Pixel Eye Hospital",
  credentials:
    "MBBS, DNB (Ophthalmology), MRCS (Edinburgh), FICO (UK), FPRS (Narayana Nethralaya)",
  specialty:
    "Cataract & Refractive Surgeon  |  Keratoconus, Cornea & Dry Eye Specialist",
  image: "/assets/Doctor/Dr. Krishna Poojita.png",
  imageAlt: "Dr. Krishna Poojita Vunnava",
  background: "/assets/Doctor/doctorbg_right.png",
  qualification:
    "Dr. Krishna Poojita holds a Fellowship of the International Council of Ophthalmology (FICO, UK), and Membership of the Royal College of Surgeons, Edinburgh (MRCS Ed) research fellowship at Johann Wolfgang Goethe Universitatsklinikum, Frankfurt, Germany, and a clinical fellowship at Narayana Netralaya, Bangalore - placing her among a select group of Indian ophthalmologists with internationally recognised surgical and clinical credentials.",
  experience: [
    "Years of Experience: 14 years in clinical ophthalmology",
    "Surgeries Performed: 5,000+ cataract, LASIK, and corneal procedures",
    "Surgical Success Rate: Outstanding surgical safety record with consistently high patient-reported outcomes",
    "Subspecialty Focus: Cataract surgery, Complex cataract surgeries, refractive procedures like SMILE, LASIK, PRK, ICL/IPCL Dry eye management, keratoconus treatment, and other corneal conditions",
  ],
  publications:
    "Dr. Krishna Poojita has authored and co-authored peer-reviewed publications in the Indian Journal of Ophthalmology, American Journal of Ophthalmology, Cornea, Translational Vision Science & Technology, and Canadian Journal of Ophthalmology, and has contributed a chapter to a Jaypee Brothers Medical Publishers textbook.",
  drive:
    "My greatest motivation is giving people the gift of glass-free vision. For Dr. Krishna Poojita, ophthalmology is about giving patients back their freedom - whether it is a young professional finally free of spectacles after LASIK, or an elderly patient rediscovering colour and clarity after cataract surgery. She believes vision is not merely about sight but about experiencing the world in full colour, with the sharpest possible clarity, unencumbered by glasses or contact lenses. That conviction drives every surgical decision, every research endeavour, and every patient interaction at Pixel Eye Hospital.",
};


const NIHARIKA_PROFILE = {
  id: "niharika-tupuda",
  name: "Dr. Niharika Tupuda",
  degree: "MBBS, MS (Ophthalmology)",
  image: "/assets/Doctor/Dr. niharika.png",
  imageAlt: "Dr. Niharika Tupuda",
  background: "/assets/Doctor/niharika_shape.png",
  intro:
    "Dr. Niharika Tupuda is a dedicated and compassionate ophthalmologist committed to delivering comprehensive eye care with a patient-first approach. She completed her MBBS from Gandhi Medical College, Hyderabad, followed by M.S. Ophthalmology from Kakatiya Medical College, Warangal, and completed her Senior Residency at Sarojini Devi Eye Hospital, Hyderabad.",
  specialization:
    "She specializes in the diagnosis and management of a wide range of eye conditions, including cataracts, glaucoma, refractive errors, corneal diseases, dry eye disorders, retinal diseases, pediatric eye conditions, and ocular surface disorders.",
  academic:
    "An enthusiastic academician, she has presented numerous scientific papers, clinical case reports, and posters at state and national ophthalmology conferences. She was the Runner-up in the Telangana State Ophthalmological Conference (TOSCON) Quiz and the Winner of the Dr. Ranga Reddy Annual CME Ophthalmology Quiz, reflecting her commitment to academic excellence and continuous learning.",
  practice:
    "With a strong clinical foundation and a focus on evidence-based practice, Dr. Niharika strives to provide accurate diagnosis, personalized treatment plans, and the latest advances in ophthalmic care. She believes in educating patients about their eye health and ensuring they feel informed and comfortable throughout their treatment journey.",
  closing:
    "Known for her approachable nature, attention to detail, and commitment to excellence, Dr. Niharika is passionate about teaching and mentoring junior doctors and medical students. Outside of work, she enjoys travelling, exploring nature, photography, and staying updated with the latest advances in ophthalmology. She is dedicated to helping patients achieve and maintain the best possible vision and quality of life.",
};
const ROMA_PROFILE = {
  id: "roma-johri",
  name: "Dr. Roma Johri",
  role: "Senior Ophthalmologist | Glaucoma Specialist",
  image: "/assets/Doctor/Dr.roma.png",
  imageAlt: "Dr. Roma Johri",
  background: "/assets/Doctor/doctorbg_right.png",
  intro:
    "Dr. Roma Johri is a distinguished ophthalmologist with over 15 years of experience in delivering comprehensive and patient-centric eye care.",
  education: [
    "MBBS - Kasturba Medical College, Mangalore",
    "DOMS - Bangalore Medical College",
    "MS (Ophthalmology) - CMC Vellore (Gold Medalist)",
    "Fellowship in Glaucoma - HV Desai Eye Hospital, Pune",
  ],
  expertise:
    "Dr. Johri specializes in advanced glaucoma care, with a focus on early diagnosis, precise monitoring, and individualized management. Her expertise spans medical therapy, laser procedures, and surgical interventions aimed at preserving vision and improving long-term outcomes. She is also proficient in cataract surgery and the management of anterior segment disorders.",
  highlights: [
    "Former Senior Clinical Assistant - PD Hinduja Hospital, Mumbai",
    "Recipient of the PJ Memorial Award",
    "Active member of AIOS, GSI, BOS, and WOS",
    "Organizing Committee Member - YOSI iRock",
  ],
  approach:
    "Known for her meticulous clinical approach and emphasis on patient education, Dr. Johri is committed to long-term care and excellence in outcomes, especially in chronic conditions like glaucoma.",
  interests:
    "Beyond her professional achievements, Dr. Johri has a passion for music and painting, bringing creativity and balance to her medical career.",
};
const DoctorSpecialistsSection = () => {
  return (
    <section className={styles.section} aria-label="Doctor specialist profiles">
      <div className={styles.inner}>
        <article className={styles.profile}>
          <div className={styles.band} aria-hidden="true" />

          <div className={styles.mediaPanel}>
            <img
              src={ABDUL_PROFILE.background}
              alt=""
              className={styles.shape}
              aria-hidden="true"
            />
            <img
              src={ABDUL_PROFILE.image}
              alt={ABDUL_PROFILE.imageAlt}
              className={styles.doctorImage}
            />
          </div>

          <div className={styles.infoPanel}>
            <header className={styles.headingBlock}>
              <h2 className={styles.name}>{ABDUL_PROFILE.name}</h2>
              <p className={styles.degree}>{ABDUL_PROFILE.degree}</p>
              <p className={styles.specialty}>{ABDUL_PROFILE.specialty}</p>
            </header>

            <div className={styles.bioCard}>
              {ABDUL_PROFILE.paragraphs.map((paragraph, index) => (
                <p key={`${ABDUL_PROFILE.id}-${index}`}>
                  {index === 0 ? (
                    <>
                      <strong>{ABDUL_PROFILE.name}</strong>
                      {paragraph.slice(ABDUL_PROFILE.name.length)}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </div>
        </article>

        <div className={styles.profileDivider} aria-hidden="true" />

        <article className={styles.krishnaProfile}>
          <div className={styles.krishnaBand} aria-hidden="true" />

          <div className={styles.krishnaIntro}>
            <header className={styles.krishnaHeader}>
              <h2 className={styles.krishnaName}>{KRISHNA_PROFILE.name}</h2>
              <p className={styles.krishnaRole}>{KRISHNA_PROFILE.role}</p>
              <p className={styles.krishnaCredentials}>{KRISHNA_PROFILE.credentials}</p>
              <p className={styles.krishnaSpecialty}>{KRISHNA_PROFILE.specialty}</p>
            </header>

            <section className={`${styles.detailCard} ${styles.qualificationCard}`}>
              <h3>Qualifications & Training</h3>
              <p>{KRISHNA_PROFILE.qualification}</p>
            </section>
          </div>

          <div className={styles.krishnaAside}>
            <div className={styles.krishnaMedia}>
              <img
                src={KRISHNA_PROFILE.background}
                alt=""
                className={styles.krishnaShape}
                aria-hidden="true"
              />
              <img
                src={KRISHNA_PROFILE.image}
                alt={KRISHNA_PROFILE.imageAlt}
                className={styles.krishnaImage}
              />
            </div>

            <aside className={`${styles.detailCard} ${styles.publicationCard}`}>
              <h3>Research Publications & Textbook Contributions</h3>
              <p>{KRISHNA_PROFILE.publications}</p>
              <a href="#" className={styles.publicationButton}>View Publications</a>
              <p className={styles.publicationNote}>Full publication profile: PubMed | ResearchGate</p>
            </aside>
          </div>

          <section className={`${styles.detailCard} ${styles.experienceCard}`}>
            <h3>Track Record & Clinical Experience</h3>
            <ul>
              {KRISHNA_PROFILE.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={`${styles.detailCard} ${styles.driveCard}`}>
            <h3>What Drives Me</h3>
            <p>"{KRISHNA_PROFILE.drive}"</p>
          </section>
        </article>

        <div className={styles.profileDivider} aria-hidden="true" />

        <article className={styles.niharikaProfile}>
          <div className={styles.niharikaBand} aria-hidden="true" />

          <div className={styles.niharikaMedia}>
            <img
              src={NIHARIKA_PROFILE.background}
              alt=""
              className={styles.niharikaShape}
              aria-hidden="true"
            />
            <img
              src={NIHARIKA_PROFILE.image}
              alt={NIHARIKA_PROFILE.imageAlt}
              className={styles.niharikaImage}
            />
          </div>

          <header className={styles.niharikaHeader}>
            <h2 className={styles.niharikaName}>{NIHARIKA_PROFILE.name}</h2>
            <p className={styles.niharikaDegree}>{NIHARIKA_PROFILE.degree}</p>
          </header>

          <section className={`${styles.detailCard} ${styles.niharikaIntroCard}`}>
            <p>{NIHARIKA_PROFILE.intro}</p>
          </section>

          <p className={styles.niharikaSpecialization}>{NIHARIKA_PROFILE.specialization}</p>

          <section className={`${styles.detailCard} ${styles.niharikaPracticeCard}`}>
            <p>{NIHARIKA_PROFILE.practice}</p>
          </section>

          <section className={`${styles.detailCard} ${styles.niharikaAcademicCard}`}>
            <p>{NIHARIKA_PROFILE.academic}</p>
          </section>

          <section className={`${styles.detailCard} ${styles.niharikaClosingCard}`}>
            <p>{NIHARIKA_PROFILE.closing}</p>
          </section>
        </article>
        <div className={styles.profileDivider} aria-hidden="true" />

        <article className={styles.romaProfile}>
          <div className={styles.romaBand} aria-hidden="true" />

          <header className={styles.romaHeader}>
            <h2 className={styles.romaName}>{ROMA_PROFILE.name}</h2>
            <p className={styles.romaRole}>{ROMA_PROFILE.role}</p>
            <p className={styles.romaIntro}>{ROMA_PROFILE.intro}</p>
          </header>

          <div className={styles.romaMedia}>
            <img
              src={ROMA_PROFILE.background}
              alt=""
              className={styles.romaShape}
              aria-hidden="true"
            />
            <img
              src={ROMA_PROFILE.image}
              alt={ROMA_PROFILE.imageAlt}
              className={styles.romaImage}
            />
          </div>

          <section className={`${styles.detailCard} ${styles.romaEducationCard}`}>
            <h3>Education & Training</h3>
            {ROMA_PROFILE.education.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </section>

          <section className={`${styles.detailCard} ${styles.romaExpertiseCard}`}>
            <h3>Clinical Expertise</h3>
            <p>{ROMA_PROFILE.expertise}</p>
          </section>

          <section className={`${styles.detailCard} ${styles.romaHighlightsCard}`}>
            <h3>Professional Highlights</h3>
            <ul>
              {ROMA_PROFILE.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={`${styles.detailCard} ${styles.romaApproachCard}`}>
            <h3>Approach to Care</h3>
            <p>{ROMA_PROFILE.approach}</p>
          </section>

          <section className={`${styles.detailCard} ${styles.romaInterestsCard}`}>
            <h3>Personal Interests</h3>
            <p>{ROMA_PROFILE.interests}</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default DoctorSpecialistsSection;





