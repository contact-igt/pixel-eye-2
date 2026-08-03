"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { subscribeToNewsletter } from "@/lib/apiService";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function BlogNewsletter({ data = {}, settings = {} }) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [consentError, setConsentError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const heading = data.title || data.heading || settings.title || settings.heading || "Get Eye-Care Guidance";
  const description = data.description || settings.description || "Receive expert medical tips and news from our specialists directly in your inbox.";
  const emailPlaceholder = data.email_placeholder || data.emailPlaceholder || settings.email_placeholder || settings.emailPlaceholder || "Your Email Address";
  const buttonLabel = data.button_label || data.buttonLabel || settings.button_label || settings.buttonLabel || "Subscribe Now";

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting || isSuccess) return;

    const trimmedEmail = email.trim();
    const nextEmailError = !trimmedEmail || !EMAIL_RE.test(trimmedEmail) ? "Enter a valid email address." : "";
    const nextConsentError = !consent ? "Please agree to receive Blog email updates to subscribe." : "";

    setEmailError(nextEmailError);
    setConsentError(nextConsentError);
    if (nextEmailError || nextConsentError) return;

    setStatus("submitting");
    setErrorMessage("");

    const result = await subscribeToNewsletter({
      email: trimmedEmail,
      consent: true,
      consentVersion: "v1",
      source: "blog_detail",
    });

    if (result.ok) {
      setStatus("success");
      return;
    }

    if (result.networkError) {
      setErrorMessage("Unable to reach the server. Please check your connection and try again.");
    } else if (result.status === 429) {
      setErrorMessage(result.message || "Too many attempts. Please try again in a few minutes.");
    } else if (result.status >= 500) {
      setErrorMessage("Email delivery is temporarily unavailable. Please try again shortly.");
    } else {
      setErrorMessage(result.message || "Something went wrong. Please try again.");
    }
    setStatus("error");
  }

  if (isSuccess) {
    return (
      <section className={styles.card}>
        <h2>{heading}</h2>
        <p className={styles.successText}>Check your inbox to confirm your subscription.</p>
      </section>
    );
  }

  return (
    <section className={styles.card}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder={emailPlaceholder}
          aria-label="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isSubmitting}
        />
        {emailError ? <p className={styles.fieldError}>{emailError}</p> : null}

        <label className={styles.consentRow}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            disabled={isSubmitting}
          />
          <span>
            I agree to receive Blog email updates from Pixel Eye Hospitals. You can unsubscribe at any time.
          </span>
        </label>
        {consentError ? <p className={styles.fieldError}>{consentError}</p> : null}

        {status === "error" ? <p className={styles.errorText}>{errorMessage}</p> : null}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing…" : buttonLabel}
        </button>
      </form>
    </section>
  );
}
