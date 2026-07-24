import Image from "next/image";
import styles from "./styles.module.css";

const ACTIONS = [
  { label: "Yes", icon: "/assets/blog/like.png" },
  { label: "No", icon: "/assets/blog/dislike.png" },
];

const SHARE_ACTIONS = [
  { label: "Share", icon: "/assets/blog/share.png" },
  { label: "Print", icon: "/assets/blog/print.png" },
];

export default function BlogFeedbackShare({ data }) {
  return (
    <section id={data.id} className={styles.wrap}>
      <div className={styles.helpful}>
        <span>Was this helpful?</span>
        {ACTIONS.map((action) => (
          <button key={action.label} type="button" className={styles.action}>
            <Image src={action.icon} alt="" width={14} height={14} aria-hidden />
            {action.label}
          </button>
        ))}
      </div>
      <div className={styles.share}>
        <span>Share:</span>
        {SHARE_ACTIONS.map((action) => (
          <button key={action.label} type="button" aria-label={action.label}>
            <Image src={action.icon} alt="" width={15} height={15} aria-hidden />
          </button>
        ))}
      </div>
    </section>
  );
}
