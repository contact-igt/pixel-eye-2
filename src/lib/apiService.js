/**
 * apiService.js
 * ─────────────
 * Low-level fetch helpers for the pixeleye-blog-admin-backend public API.
 * All functions return plain data objects or null on failure — no throwing.
 */

import config from "./config.js";

const configuredApiBase = typeof config.api.base === 'string' ? config.api.base.trim() : '';
const API_BASE = configuredApiBase.startsWith('http://') || configuredApiBase.startsWith('https://') ? (configuredApiBase.endsWith('/') ? configuredApiBase.slice(0, -1) : configuredApiBase) : 'http://localhost:5000/api/v1';

function apiUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : '/' + path;
  return API_BASE + normalizedPath;
}

if (!API_BASE) {
  console.error("[apiService] ⚠️ API_BASE is undefined!");
  console.error("[apiService] ENV:", process.env.NEXT_PUBLIC_ENV);
  console.error("[apiService] config:", config);
}

/**
 * Fetch a single published blog by slug.
 * @param {string} slug
 * @returns {Promise<object|null>} raw API `data` payload or null
 */
export async function fetchBlogBySlug(slug) {
  try {
    const res = await fetch(apiUrl(`/public/blogs/${encodeURIComponent(slug)}`), {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.success || !json.data) return null;
    return json.data;
  } catch (err) {
    console.error(`[apiService] fetchBlogBySlug(${slug}) failed:`, err);
    return null;
  }
}

/**
 * Fetch all published blog slugs (used for getStaticPaths).
 * @returns {Promise<string[]>} array of slug strings
 */
export async function fetchPublishedBlogSlugs() {
  try {
    const res = await fetch(apiUrl("/public/blogs?page=1&limit=200"));
    if (!res.ok) return [];
    const json = await res.json();
    if (!json.success || !json.data) return [];
    const items = Array.isArray(json.data) ? json.data : (json.data.items || []);
    return items.map((blog) => blog.slug).filter(Boolean);
  } catch (err) {
    console.error("[apiService] fetchPublishedBlogSlugs failed:", err);
    return [];
  }
}

/**
 * Fetch a paginated list of published blogs (used for the listing page).
 * @param {number} page
 * @param {number} limit
 * @returns {Promise<object[]>} array of raw blog objects
 */
export async function fetchPublishedBlogs(page = 1, limit = 20) {
  try {
    const res = await fetch(apiUrl(`/public/blogs?page=${page}&limit=${limit}`));
    if (!res.ok) return [];
    const json = await res.json();
    if (!json.success || !json.data) return [];
    const items = Array.isArray(json.data) ? json.data : (json.data.items || []);
    return items;
  } catch (err) {
    console.error("[apiService] fetchPublishedBlogs failed:", err);
    return [];
  }
}

/**
 * Low-level POST helper shared by the newsletter and feedback endpoints below.
 * Never throws — network failures are surfaced via `networkError: true` so
 * callers can render a controlled "server unavailable" state.
 * @param {string} path — path relative to API_BASE, e.g. "/public/newsletter/subscribe"
 * @param {object} body
 * @param {{ credentials?: boolean }} [options]
 * @returns {Promise<{ ok: boolean, status: number, message: string|null, data: any, networkError?: boolean }>}
 */
async function postJson(path, body, { credentials = false } = {}) {
  try {
    const res = await fetch(apiUrl(path), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      ...(credentials ? { credentials: "include" } : {}),
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => null);
    return {
      ok: res.ok,
      status: res.status,
      message: (json && json.message) || null,
      data: (json && json.data) ?? null,
    };
  } catch (err) {
    console.error(`[apiService] POST ${path} failed:`, err);
    return { ok: false, status: 0, message: null, data: null, networkError: true };
  }
}

/**
 * Subscribe an email address to the newsletter. Never marks the reader as
 * subscribed here — the backend only sends a confirmation email; the reader
 * becomes "subscribed" after clicking the verification link.
 * @param {{ email: string, consent: boolean, consentVersion?: string, source?: string }} payload
 */
export async function subscribeToNewsletter({ email, consent, consentVersion = "v1", source = "blog_detail" }) {
  return postJson("/public/newsletter/subscribe", {
    email,
    consent,
    consent_version: consentVersion,
    source,
  });
}

/**
 * Confirm a newsletter subscription using the token from the verification email link.
 * @param {string} token — raw token, never logged
 */
export async function verifyNewsletterSubscription(token) {
  return postJson("/public/newsletter/verify", { token });
}

export async function confirmNewsletterResubscription(token) {
  return postJson("/public/newsletter/resubscribe/confirm", { token });
}

/**
 * Unsubscribe using the token from an unsubscribe link. Only call this after
 * explicit reader confirmation — never automatically on page load.
 * @param {string} token — raw token, never logged
 */
export async function unsubscribeNewsletter(token) {
  return postJson("/public/newsletter/unsubscribe", { token });
}

/**
 * Submit Yes/No feedback for a published blog post. Sent with credentials so
 * the backend's anonymous visitor cookie is set/read correctly.
 * @param {string} slug
 * @param {"yes"|"no"} responseValue
 */
export async function submitBlogFeedback(slug, responseValue) {
  return postJson(`/public/blogs/${encodeURIComponent(slug)}/feedback`, { response: responseValue }, { credentials: true });
}
