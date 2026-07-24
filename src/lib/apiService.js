/**
 * apiService.js
 * ─────────────
 * Low-level fetch helpers for the pixeleye-blog-admin-backend public API.
 * All functions return plain data objects or null on failure — no throwing.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

/**
 * Fetch a single published blog by slug.
 * @param {string} slug
 * @returns {Promise<object|null>} raw API `data` payload or null
 */
export async function fetchBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/public/blogs/${slug}`, {
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
    const res = await fetch(`${API_BASE}/public/blogs?page=1&limit=200`);
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
    const res = await fetch(`${API_BASE}/public/blogs?page=${page}&limit=${limit}`);
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
