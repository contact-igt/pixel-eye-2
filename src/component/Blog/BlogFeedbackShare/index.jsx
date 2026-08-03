"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { submitBlogFeedback } from "@/lib/apiService";

const SHARE_ACTIONS = [
  { label: "Share", icon: "/assets/blog/share.png" },
  { label: "Print", icon: "/assets/blog/print.png" },
];

export default function BlogFeedbackShare({ data = {} }) {
  const slug = data?.slug;
  const [selected, setSelected] = useState(null); // "yes" | "no" | null
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [pendingValue, setPendingValue] = useState(null);
  const [lastAttempted, setLastAttempted] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleVote(value) {
    if (status === "submitting" || !slug) return;

    setStatus("submitting");
    setPendingValue(value);
    setLastAttempted(value);
    setErrorMessage("");

    const result = await submitBlogFeedback(slug, value);

    if (result.ok) {
      setSelected(value);
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(
        result.status === 403
          ? "Feedback is not available for this article."
          : "Could not submit your feedback. Please try again."
      );
    }
    setPendingValue(null);
  }

  return (
    <section id={data?.id || "block-feedback-share"} className={styles.wrap}>
      <div className={styles.helpfulGroup}>
        <div className={styles.helpful}>
          <span>Was this helpful?</span>
          <button
            key="Yes"
            type="button"
            className={`${styles.action} ${selected === "yes" ? styles.actionSelected : ""}`}
            aria-pressed={selected === "yes"}
            disabled={status === "submitting"}
            onClick={() => handleVote("yes")}
          >
            <Image src="/assets/blog/like.png" alt="" width={14} height={14} aria-hidden />
            {pendingValue === "yes" ? "…" : "Yes"}
          </button>
          <button
            key="No"
            type="button"
            className={`${styles.action} ${selected === "no" ? styles.actionSelected : ""}`}
            aria-pressed={selected === "no"}
            disabled={status === "submitting"}
            onClick={() => handleVote("no")}
          >
            <Image src="/assets/blog/dislike.png" alt="" width={14} height={14} aria-hidden />
            {pendingValue === "no" ? "…" : "No"}
          </button>
        </div>
        {status === "success" ? <p className={styles.feedbackMessage}>Thanks for your feedback!</p> : null}
        {status === "error" ? (
          <p className={styles.feedbackError}>
            {errorMessage}{" "}
            <button type="button" className={styles.retryLink} onClick={() => handleVote(lastAttempted)}>
              Retry
            </button>
          </p>
        ) : null}
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
