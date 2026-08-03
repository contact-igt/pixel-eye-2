"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/Button";
import BlogFirstBanner from "@/component/Blog/BlogFirstBanner";
import { BLOG_BANNER_CONTENT } from "@/constant/blogBannerContent";
import { verifyNewsletterSubscription } from "@/lib/apiService";
import styles from "./styles.module.css";

// The backend's verify endpoint returns one undifferentiated error for an
// invalid token, an expired token, and an already-used token (it does not
// distinguish them), so those three cases share a single UI state here.
export default function NewsletterVerifyPage() {
  const router = useRouter();
  const [state, setState] = useState("verifying"); // verifying | confirmed | invalid | missing_token | server_unavailable | general_error
  const hasRequested = useRef(false);

  useEffect(() => {
    if (!router.isReady) return;
    if (hasRequested.current) return;

    (async () => {
      const { token } = router.query;

      if (!token || Array.isArray(token)) {
        setState("missing_token");
        return;
      }

      hasRequested.current = true;
      const result = await verifyNewsletterSubscription(token);

      if (result.ok) {
        setState("confirmed");
      } else if (result.networkError || result.status === 0 || result.status === 503) {
        setState("server_unavailable");
      } else if (result.status === 404 || result.status === 422) {
        setState("invalid");
      } else {
        setState("general_error");
      }

      // Remove the token from the visible URL once we have a terminal result.
      router.replace(router.pathname, undefined, { shallow: true });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query.token]);

  return (
    <>
      <BlogFirstBanner data={BLOG_BANNER_CONTENT} />
      <section className={styles.wrap} aria-live="polite">
        <div className={styles.card}>
        {state === "verifying" ? (
          <>
            <h1 className={styles.title}>Verifying your subscription…</h1>
            <p className={styles.text}>Please wait a moment.</p>
          </>
        ) : null}

        {state === "confirmed" ? (
          <>
            <h1 className={styles.title}>Email subscription confirmed</h1>
            <p className={styles.text}>You are now subscribed to Pixel Eye Blog updates.</p>
            <div className={styles.actions}>
              <Button href="/blog" label="Read Latest Articles" />
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "invalid" ? (
          <>
            <h1 className={styles.title}>This link is no longer valid</h1>
            <p className={styles.text}>
              This confirmation link is invalid, has expired, or has already been used.
            </p>
            <div className={styles.actions}>
              <Button href="/blog" label="Subscribe Again" />
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "missing_token" ? (
          <>
            <h1 className={styles.title}>Missing confirmation token</h1>
            <p className={styles.text}>
              This link is missing its confirmation token. Please use the link from your email exactly as sent.
            </p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "server_unavailable" ? (
          <>
            <h1 className={styles.title}>Server unavailable</h1>
            <p className={styles.text}>
              We could not reach the server to confirm your subscription. Please try again shortly.
            </p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "general_error" ? (
          <>
            <h1 className={styles.title}>Something went wrong</h1>
            <p className={styles.text}>We could not confirm your subscription. Please try again later.</p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}
        </div>
      </section>
    </>
  );
}
