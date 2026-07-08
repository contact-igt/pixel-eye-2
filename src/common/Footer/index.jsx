import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTENT } from "@/constant/footerContent";
import styles from "./styles.module.css";

const YouTubeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.8Z"
      fill="currentColor"
    />
    <path d="m10 15.4 5.2-3.4L10 8.6v6.8Z" fill="#293B77" />
  </svg>
);
export default function Footer() {
  const { brand, sections, links, contacts, social, plainLogo, copyright } =
    FOOTER_CONTENT;

  return (
    <footer className={`${styles.footerWrap}`}>
      <div className={styles.footer}>
        <div className={styles.col}>
          <Image
            src={brand.logo}
            alt={brand.alt}
            width={558}
            height={131}
            className={styles.logo}
            priority
          />
          <p className={styles.about}>{brand.about}</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>{sections.linksTitle}</h4>
          <ul className={styles.linkList}>
            {links.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.linkItem}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>{sections.contactTitle}</h4>
          <ul className={styles.contactList}>
            {contacts.map((item) => (
              <li
                key={`${item.text}-${item.icon}`}
                className={styles.contactItem}
              >
                <span className={styles.iconCircle}>
                  <Image
                    src={item.icon}
                    alt="contact icon"
                    width={10}
                    height={10}
                    className={styles.iconImage}
                  />
                </span>
                <Link href={item.href} className={styles.contactText}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>{sections.socialTitle}</h4>
          <div className={styles.socialRow}>
            {social.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={styles.socialIcon}
                aria-label={item.label}
              >
                {item.iconType === "youtube" ? (
                  <YouTubeIcon className={styles.socialSvg} />
                ) : (
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={10}
                    height={10}
                    className={styles.socialImage}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        <Image
          src={plainLogo}
          alt="Pixel watermark"
          width={1110}
          height={770}
          loading="eager"
          className={styles.plainLogoBg}
          aria-hidden
        />

        <div className={styles.copyBar}>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

