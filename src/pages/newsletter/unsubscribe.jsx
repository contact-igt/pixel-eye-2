"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/Button";
import { unsubscribeNewsletter } from "@/lib/apiService";
import styles from "./styles.module.css";

export default function NewsletterUnsubscribePage() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  // confirming | missing_token | processing | unsubscribed | invalid | server_unavailable | general_error
  const [state, setState] = useState("confirming");

  useEffect(() => {
    if (!router.isReady) return;

    (() => {
      const { token: queryToken } = router.query;
      if (!queryToken || Array.isArray(queryToken)) {
        setState("missing_token");
        return;
      }

      setToken(queryToken);
      setState("confirming");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query.token]);

  async function handleUnsubscribe() {
    if (!token || state === "processing") return;

    setState("processing");
    const result = await unsubscribeNewsletter(token);

    // Remove the token from the visible URL once we have a terminal result.
    router.replace(router.pathname, undefined, { shallow: true });

    if (result.ok) {
      setState("unsubscribed");
    } else if (result.networkError || result.status === 0 || result.status === 503) {
      setState("server_unavailable");
    } else if (result.status === 404 || result.status === 422) {
      setState("invalid");
    } else {
      setState("general_error");
    }
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.card}>
        {state === "confirming" ? (
          <>
            <h1 className={styles.title}>Unsubscribe from Pixel Eye Blog?</h1>
            <p className={styles.text}>You will stop receiving future Blog update emails.</p>
            <div className={styles.actions}>
              <Button href="/" label="Keep Me Subscribed" variant="muted" />
              <Button label="Unsubscribe" onClick={handleUnsubscribe} />
            </div>
          </>
        ) : null}

        {state === "processing" ? (
          <>
            <h1 className={styles.title}>Unsubscribing…</h1>
            <p className={styles.text}>Please wait a moment.</p>
          </>
        ) : null}

        {state === "unsubscribed" ? (
          <>
            <h1 className={styles.title}>You have been unsubscribed</h1>
            <p className={styles.text}>You will no longer receive Pixel Eye Blog update emails.</p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "invalid" ? (
          <>
            <h1 className={styles.title}>Invalid unsubscribe link</h1>
            <p className={styles.text}>This unsubscribe link is invalid or has already been used.</p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "missing_token" ? (
          <>
            <h1 className={styles.title}>Missing unsubscribe token</h1>
            <p className={styles.text}>
              This link is missing its unsubscribe token. Please use the link from your email exactly as sent.
            </p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "server_unavailable" ? (
          <>
            <h1 className={styles.title}>Server unavailable</h1>
            <p className={styles.text}>We could not reach the server. Please try again shortly.</p>
            <div className={styles.actions}>
              <Button label="Try Again" onClick={handleUnsubscribe} />
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}

        {state === "general_error" ? (
          <>
            <h1 className={styles.title}>Something went wrong</h1>
            <p className={styles.text}>We could not process your request. Please try again later.</p>
            <div className={styles.actions}>
              <Button href="/" label="Return Home" variant="muted" />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
