"use client";

import { useState } from "react";
import { Check, Link as LinkIcon, Printer, Share2 } from "lucide-react";
import styles from "./styles.module.css";

export default function BlogShareControls({ data = {}, settings = {} }) {
  const [copied, setCopied] = useState(false);
  const alignment = settings.alignment || "left";
  const getUrl = () => typeof window === "undefined" ? "" : window.location.href;

  async function share() {
    const url = getUrl();
    if (!url) return;
    if (navigator.share) await navigator.share({ title: document.title, url });
    else await copy();
  }

  async function copy() {
    const url = getUrl();
    if (!url) return;
    await navigator.clipboard?.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  if (data.enabled === false) return null;
  return (
    <section id={data.id || "blog-share"} className={`${styles.share} ${styles[alignment] || styles.left}`} aria-label="Share article" data-share-slug={data.slug || ""}>
      <span>Share:</span>
      <button type="button" onClick={share} aria-label="Share article"><Share2 size={17} /></button>
      <button type="button" onClick={copy} aria-label="Copy article link">{copied ? <Check size={17} /> : <LinkIcon size={17} />}</button>
      <button type="button" onClick={() => window.print()} aria-label="Print article"><Printer size={17} /></button>
    </section>
  );
}