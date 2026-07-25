import { Facebook, Link as LinkIcon, Share2 } from "lucide-react";
import styles from "./styles.module.css";

export default function BlogShareBar() {
  return (
    <div className={styles.shareBar} aria-label="Share article">
      <span>Share</span>
      <button type="button" aria-label="Share article">
        <Share2 size={16} />
      </button>
      <button type="button" aria-label="Share on Facebook">
        <Facebook size={16} />
      </button>
      <button type="button" aria-label="Copy article link">
        <LinkIcon size={16} />
      </button>
    </div>
  );
}
