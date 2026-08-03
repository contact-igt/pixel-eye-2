import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./styles.module.css";

const DEFAULT_AVATAR = "/assets/user.png";

export default function BlogDoctorQuote({ data = {}, variant = "template-1", settings = {} }) {
  const doctor = data.doctor || {};
  const isTemplateTwo = variant === "template-2";
  const appearance = `${styles[`orientation_${settings.orientation || "horizontal"}`] || ""} ${styles[`background_${settings.background || "soft"}`] || ""}`;

  const initialImage =
    doctor.image && typeof doctor.image === "string" && doctor.image.trim() !== ""
      ? doctor.image
      : DEFAULT_AVATAR;

  const [imgSrc, setImgSrc] = useState(initialImage);

  // Template 2 Card UI (Figma # Blog Sample 2)
  if (isTemplateTwo) {
    return (
      <section id={data.id} className={`${styles.quoteCardTwo} ${appearance}`}>
        <div className={styles.quoteWatermark} aria-hidden>
          &rdquo;&rdquo;
        </div>

        <div className={styles.cardContentTwo}>
          <div className={styles.avatarTwo}>
            <Image
              src={imgSrc}
              alt={doctor.name || "Doctor"}
              fill
              sizes="80px"
              className={styles.avatarImage}
              onError={() => setImgSrc(DEFAULT_AVATAR)}
              unoptimized={typeof imgSrc === "string" && imgSrc.startsWith("http")}
            />
          </div>

          <div className={styles.bodyTwo}>
            <blockquote className={styles.quoteTextTwo}>
              &ldquo;{data.quote}&rdquo;
            </blockquote>

            {doctor.name ? (
              <div className={styles.doctorFooterTwo}>
                <div className={styles.doctorMetaTwo}>
                  <strong className={styles.doctorNameTwo}>{doctor.name}</strong>
                  {doctor.role ? (
                    <span className={styles.doctorRoleTwo}>{doctor.role}</span>
                  ) : null}
                </div>

                <Link
                  href={doctor.profileUrl || doctor.url || "/doctors"}
                  className={styles.profileLinkTwo}
                >
                  <span>View Doctor Profile</span>
                  <ArrowRight size={16} strokeWidth={2.4} />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  // Template 1 Line UI (No changes to Template 1 UI)
  return (
    <section id={data?.id} className={`${styles.quoteBlock} ${appearance}`}>
      <Image
        src="/assets/blog/quote.png"
        alt=""
        width={18}
        height={18}
        className={styles.mark}
        aria-hidden
      />
      <blockquote>{data?.quote}</blockquote>
      {doctor.name ? (
        <div className={styles.doctor}>
          <div className={styles.avatar}>
            <Image
              src={imgSrc}
              alt={doctor.name || "Doctor"}
              fill
              sizes="44px"
              className={styles.avatarImage}
              onError={() => setImgSrc(DEFAULT_AVATAR)}
              unoptimized={typeof imgSrc === "string" && imgSrc.startsWith("http")}
            />
          </div>
          <div className={styles.doctorInfo}>
            <strong>{doctor.name}</strong>
            {doctor.role ? <span>{doctor.role}</span> : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
