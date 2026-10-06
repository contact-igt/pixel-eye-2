import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  FileText,
  Quote,
  Star,
} from "lucide-react";
import styles from "./styles.module.css";

const pubmedPublications = [
  { year: "2023", title: "Automatic segmentation and quantified analysis of meibomian glands from infrared images", journal: "Indian Journal of Ophthalmology", date: "Apr 2023", type: "Observational Study", tags: ["Dry Eye", "Meibomian Glands", "Image Analysis"], description: "Automated quantification of meibomian glands from infrared images.", href: "https://pubmed.ncbi.nlm.nih.gov/37026276/" },
  { year: "2020", title: "A review of meibography for a refractive surgeon", journal: "Indian Journal of Ophthalmology", date: "Dec 2020", type: "Review", tags: ["Meibography", "Dry Eye", "Refractive Surgery"], description: "A review of meibomian-gland imaging for refractive surgery assessment.", href: "https://pubmed.ncbi.nlm.nih.gov/33229641/" },
  { year: "2020", title: "Simplifying and understanding various topographic indices for keratoconus using Scheimpflug based topographers", journal: "Indian Journal of Ophthalmology", date: "Dec 2020", type: "Review", tags: ["Keratoconus", "Topography", "Cornea"], description: "A practical review of Scheimpflug-based indices used in keratoconus evaluation.", href: "https://pubmed.ncbi.nlm.nih.gov/33229649/" },
  { year: "2019", title: "Characterization of Corneal Epithelial Cells in Keratoconus", journal: "Translational Vision Science & Technology", date: "Jan 2019", type: "Journal Article", tags: ["Keratoconus", "Corneal Epithelium", "Cell Biology"], description: "Study of corneal epithelial-cell characteristics in keratoconus.", href: "https://pubmed.ncbi.nlm.nih.gov/30627477/" },
  { year: "2019", title: "Anterior Chamber Angle, Volume, and Depth in a Normative Cohort-A Retrospective Cross-Sectional Study", journal: "Current Eye Research", date: "Jun 2019", type: "Journal Article", tags: ["Anterior Chamber", "Biometry", "Cataract"], description: "A normative analysis of anterior-chamber measurements and related biometric factors.", href: "https://pubmed.ncbi.nlm.nih.gov/30747543/" },
  { year: "2018", title: "Topography-Based Removal of Corneal Epithelium for Keratoconus: A Novel and Customized Technique", journal: "Cornea", date: "Jul 2018", type: "Case Report", tags: ["Keratoconus", "Cross-Linking", "Topography"], description: "A customised epithelial-removal technique used alongside corneal cross-linking.", href: "https://pubmed.ncbi.nlm.nih.gov/29847491/" },
  { year: "2018", title: "Outcomes of Corneal Cross-Linking Correlate With Cone-Specific Lysyl Oxidase Expression in Patients With Keratoconus", journal: "Cornea", date: "Mar 2018", type: "Journal Article", tags: ["Keratoconus", "Cross-Linking", "Cornea"], description: "Corneal cross-linking outcomes studied alongside cone-specific lysyl oxidase expression.", href: "https://pubmed.ncbi.nlm.nih.gov/29215396/" },
  { year: "2017", title: "Keratoconus Screening Indices and Their Diagnostic Ability to Distinguish Normal From Ectatic Corneas", journal: "American Journal of Ophthalmology", date: "Sep 2017", type: "Comparative Study", tags: ["Keratoconus", "Screening", "Corneal Topography"], description: "Comparison of screening indices used to distinguish normal from ectatic corneas.", href: "https://pubmed.ncbi.nlm.nih.gov/28687218/" },
  { year: "2017", title: "Impact of lens densitometry on phacoemulsification parameters and usage of ultrasound energy in femtosecond laser-assisted lens surgery", journal: "Canadian Journal of Ophthalmology", date: "Aug 2017", type: "Journal Article", tags: ["Cataract", "Lens Densitometry", "Femtosecond Laser"], description: "Assessment of lens densitometry and ultrasound energy in femtosecond laser-assisted lens surgery.", href: "https://pubmed.ncbi.nlm.nih.gov/28774512/" },
];

const years = [...new Set(pubmedPublications.map(({ year }) => year))];

export default function PublicationArchive({ publications }) {
  const featured = publications[0];
  const [openYear, setOpenYear] = useState("2023");
  const publicationCount = pubmedPublications.length;
  return (
    <section className={styles.archive} aria-labelledby="publications-title">
      <header className={styles.top}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}><span /> Research &amp; Academics</p>
          <h2 id="publications-title">Publications</h2>
          <p>Peer-reviewed publications, international journals, clinical research<br className={styles.desktopOnly} /> and academic contributions in the field of ophthalmology.</p>
        </div>
        <div className={styles.metrics} aria-label="Publication statistics">
          {[{ icon: FileText, value: publicationCount, label: "Research publications" }, { icon: Quote, value: "390+", label: "Citations" }, { icon: BookOpen, value: "6", label: "Journals" }, { icon: CalendarDays, value: "2017 – 2023", label: "Research years" }].map(({ icon: Icon, value, label }) => <div className={styles.metric} key={label}><span><Icon /></span><strong>{value}</strong><small>{label}</small></div>)}
        </div>
      </header>

      <article className={styles.featured}>
        <div className={styles.featuredMedia}>
          <Image src={featured.image} alt={featured.imageAlt} fill sizes="(max-width: 800px) 100vw, 40vw" className={styles.featuredImage} />
          <span className={styles.featuredBadge}><Star /> Featured Publication</span>
        </div>
        <div className={styles.featuredCopy}>
          <div className={styles.featuredMeta}><b>{featured.journal.replace(/, \d{4}/, "")}</b><span>2023</span><em>✓&nbsp; Peer Reviewed</em></div>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
          <div className={styles.tags}>{["Dry Eye", "Meibomian Glands", "Image Analysis", "Clinical Research"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className={styles.featuredActions}><a href={featured.href} target="_blank" rel="noreferrer"><FileText /> View Publication <ArrowRight /></a><a href={featured.href} target="_blank" rel="noreferrer"><FileText /> Read Abstract</a></div>
        </div>
      </article>

      <div className={styles.filters}><nav aria-label="Publication categories"><button className={styles.selected}>All Publications ({publicationCount})</button><a href="https://pubmed.ncbi.nlm.nih.gov/?term=Vunnava" target="_blank" rel="noreferrer">View on PubMed <ArrowRight /></a></nav></div>

      <div className={styles.contentGrid}>
        <aside className={styles.timeline}><div className={styles.allYears}><CalendarDays /> Research Publications <b>{publicationCount}</b></div>{years.map((year) => { const count = pubmedPublications.filter((item) => item.year === year).length; return <button type="button" key={year} onClick={() => setOpenYear(year)} className={openYear === year ? styles.activeYear : ""}><i /> {year}<b>{count}</b></button>; })}</aside>
        <div className={styles.yearList}>
          {years.map((year) => { const items = pubmedPublications.filter((item) => item.year === year); const isOpen = openYear === year; return <section className={styles.yearSection} id={`year-${year}`} key={year}><button type="button" className={styles.yearToggle} onClick={() => setOpenYear(isOpen ? null : year)} aria-expanded={isOpen} aria-controls={`publications-${year}`}><h3>{year}</h3><span>{items.length} Publication{items.length > 1 ? "s" : ""}</span><b>{isOpen ? "−" : "+"}</b></button>{isOpen && <div id={`publications-${year}`}>{items.map((item, index) => <article className={styles.paper} key={`${item.href}-${index}`}><span className={styles.number}>{index + 1}</span><div className={styles.paperMain}><a href={item.href} target="_blank" rel="noreferrer"><h4>{item.title}</h4></a><p className={styles.paperMeta}>{item.journal} <i /> {item.date} <i /> {item.type}</p><p className={styles.description}>{item.description}</p><div className={styles.tags}>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className={styles.paperActions}><a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} on PubMed`}><FileText /><small>View</small></a><a href={item.href} target="_blank" rel="noreferrer" aria-label={`View citation for ${item.title} on PubMed`}><Quote /><small>Cite</small></a><a href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} on PubMed`}><ChevronRight /><small>PubMed</small></a></div></article>)}</div>}</section>; })}
        </div>
      </div>
    </section>
  );
}
