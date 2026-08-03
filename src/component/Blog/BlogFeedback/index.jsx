"use client";

import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import styles from "./styles.module.css";
import { submitBlogFeedback } from "@/lib/apiService";

export default function BlogFeedback({ data = {}, settings = {} }) {
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const slug = data.slug;

  async function vote(value) {
    if (!slug || status === "submitting") return;
    setStatus("submitting");
    setError("");
    const result = await submitBlogFeedback(slug, value);
    if (result.ok) {
      setSelected(value);
      setStatus("success");
    } else {
      setStatus("error");
      setError(result.status === 403 ? "Feedback is not available for this article." : "Could not submit your feedback. Please try again.");
    }
  }

  if (data.enabled === false) return null;
  return (
    <section id={data.id || "blog-feedback"} className={styles.feedback} aria-label="Article feedback">
      {settings.showPrompt !== false ? <p>{data.prompt || "Was this article helpful?"}</p> : null}
      <div className={styles.actions}>
        <button type="button" aria-pressed={selected === "yes"} disabled={!slug || status === "submitting"} onClick={() => vote("yes")}><ThumbsUp size={16} />Yes</button>
        <button type="button" aria-pressed={selected === "no"} disabled={!slug || status === "submitting"} onClick={() => vote("no")}><ThumbsDown size={16} />No</button>
      </div>
      {status === "success" ? <span className={styles.success}>Thanks for your feedback!</span> : null}
      {status === "error" ? <span className={styles.error}>{error}</span> : null}
    </section>
  );
}