import Image from "next/image";
import { CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import styles from "./styles.module.css";

const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
);

const desktopActions = [
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/917075008561",
    image: "/assets/cta1.png",
  },
  {
    label: "Visit YouTube",
    href: "https://www.youtube.com/@pixeleyehospitaleducation",
    image: "/assets/cta2.png",
  },
  {
    label: "Call Pixel Eye Hospital",
    href: "tel:+917075008561",
    image: "/assets/cta3.png",
  },
];

const mobileActions = [
  {
    label: "Phone",
    href: "tel:+917075008561",
    icon: Phone,
    iconType: "phone",
  },
  {
    label: "WA",
    href: "https://wa.me/917075008561",
    icon: MessageCircle,
    iconType: "whatsapp",
  },
  {
    label: "Insta",
    href: "https://www.instagram.com/pixeleyehospital?igsh=aDVxYm9tNXFwMm9i",
    iconType: "instagram",
  },
  {
    label: "Book",
    href: "/appointment",
    icon: CalendarDays,
    iconType: "book",
  },
  {
    label: "Address",
    href: "https://maps.app.goo.gl/CXDMTLygtXTCMnn79",
    icon: MapPin,
    iconType: "address",
  },
];

export default function FloatingCta() {
  return (
    <>
      <aside className={styles.floatingCta} aria-label="Quick contact links">
        {desktopActions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={styles.action}
            aria-label={action.label}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Image
              src={action.image}
              alt=""
              width={188}
              height={172}
              className={styles.actionImage}
            />
          </a>
        ))}
      </aside>

      <nav className={styles.mobileBar} aria-label="Mobile quick actions">
        {mobileActions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href={action.href}
              className={`${styles.mobileAction} ${styles[`mobileAction${action.iconType.charAt(0).toUpperCase()}${action.iconType.slice(1)}`] || ""}`}
              aria-label={action.label}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {action.iconType === "instagram" ? (
                <InstagramIcon className={styles.mobileIcon} />
              ) : (
                Icon ? <Icon className={styles.mobileIcon} strokeWidth={2.1} /> : null
              )}
              <span className={styles.mobileLabel}>{action.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
