"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/Button";
import BlogFirstBanner from "@/component/Blog/BlogFirstBanner";
import { BLOG_BANNER_CONTENT } from "@/constant/blogBannerContent";
import { confirmNewsletterResubscription } from "@/lib/apiService";
import styles from "./styles.module.css";

export default function NewsletterResubscribePage() {
  const router = useRouter();
  const [state, setState] = useState("confirming");
  const requested = useRef(false);
  useEffect(() => {
    if (!router.isReady || requested.current) return;
    const { token } = router.query;
    if (!token || Array.isArray(token)) { queueMicrotask(() => setState("missing")); return; }
    requested.current = true;
    void confirmNewsletterResubscription(token).then((result) => {
      setState(result.ok ? "confirmed" : result.status === 404 || result.status === 422 ? "invalid" : "error");
      router.replace(router.pathname, undefined, { shallow: true });
    });
  }, [router]);
  return <>
    <BlogFirstBanner data={BLOG_BANNER_CONTENT} />
    <section className={styles.wrap} aria-live="polite"><div className={styles.card}>
      {state === "confirming" && <><h1 className={styles.title}>Confirming your subscription request…</h1><p className={styles.text}>Please wait a moment.</p></>}
      {state === "confirmed" && <><h1 className={styles.title}>Subscription request confirmed</h1><p className={styles.text}>You are subscribed again to Pixel Eye Blog updates.</p><Button href="/blog" label="Read Latest Articles" /></>}
      {state === "invalid" && <><h1 className={styles.title}>This link is no longer valid</h1><p className={styles.text}>Ask the Pixel Eye team to send a new resubscription request.</p></>}
      {state === "missing" && <><h1 className={styles.title}>Missing confirmation token</h1><p className={styles.text}>Use the complete link from your resubscription email.</p></>}
      {state === "error" && <><h1 className={styles.title}>Something went wrong</h1><p className={styles.text}>We could not confirm your request. Please try again later.</p></>}
    </div></section>
  </>;
}
