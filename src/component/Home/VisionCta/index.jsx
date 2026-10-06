import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, HeartHandshake, Phone, ShieldCheck, Stethoscope, UsersRound, MessageCircle } from "lucide-react";
import { HOME_CONTENT } from "@/constant/homeContent";
import styles from "./styles.module.css";

const BENEFITS = [
  { icon: Stethoscope, title: "Consult Experienced Specialists", text: "Get guidance from our ophthalmologists.", tone: "blue" },
  { icon: HeartHandshake, title: "Personalised Treatment Options", text: "Based on your condition and lifestyle.", tone: "rose" },
  { icon: ShieldCheck, title: "Clear Next Steps", text: "Understand the best treatment and follow-up plan for you.", tone: "gold" },
];

const VisionCta = () => {
  const { image } = HOME_CONTENT.visionCta;
  return <section className={styles.visionSection} aria-labelledby="specialist-cta-title"><div className={styles.panel}>
    <div className={styles.copy}>
      <p className={styles.eyebrow}><UsersRound aria-hidden="true" /> Need personalised advice?</p>
      <h2 id="specialist-cta-title">Talk with our <span>eye specialists.</span></h2>
      <p className={styles.intro}>Get expert guidance on treatment options, suitability and next steps based on your eye condition.</p>
      <div className={styles.actions}>
        <Link href="/appointment" className={`${styles.action} ${styles.primary}`}><CalendarDays aria-hidden="true" />Book Appointment <ArrowRight aria-hidden="true" /></Link>
        <a href="tel:+917075008561" className={`${styles.action} ${styles.call}`}><Phone aria-hidden="true" />Call Hospital</a>
        <a href="https://wa.me/917075008561" className={`${styles.action} ${styles.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />Chat on WhatsApp</a>
      </div>
      <ul className={styles.benefits}>{BENEFITS.map(({ icon: Icon, title, text, tone }) => <li key={title}><span className={`${styles.benefitIcon} ${styles[tone]}`}><Icon aria-hidden="true" /></span><span><strong>{title}</strong><small>{text}</small></span></li>)}</ul>
    </div>
    <div className={styles.visual}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 43vw" className={styles.image} /><span className={styles.curve} aria-hidden="true" /><div className={styles.trust}><span><UsersRound aria-hidden="true" /></span><p>Trusted by<br />thousands of patients</p><ArrowRight aria-hidden="true" /></div></div>
  </div></section>;
};

export default VisionCta;
