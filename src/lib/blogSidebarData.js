/**
 * Pure helpers that derive sidebar data (categories, recent, related) from the
 * already-fetched list of published blogs. No extra API calls are needed.
 */

export function getBlogCategory(blog) {
  return (blog?.categoryLabel || blog?.hero?.category || "").trim();
}

function publishedTime(blog) {
  const time = new Date(blog?.hero?.publishedAt || 0).valueOf();
  return Number.isNaN(time) ? 0 : time;
}

function uniqueBySlug(blogs) {
  const seen = new Set();
  return blogs.filter((blog) => {
    if (!blog?.slug || seen.has(blog.slug)) return false;
    seen.add(blog.slug);
    return true;
  });
}

/** All published blogs, including the one being viewed. */
export function collectPublishedBlogs(currentBlog, suggestedBlogs = []) {
  const others = Array.isArray(suggestedBlogs) ? suggestedBlogs : [];
  return uniqueBySlug([currentBlog, ...others].filter(Boolean));
}

export function buildCategoryList(blogs, maxItems = 8) {
  const counts = new Map();
  blogs.forEach((blog) => {
    const name = getBlogCategory(blog);
    if (!name) return;
    const key = name.toLowerCase();
    const entry = counts.get(key) || { name, count: 0 };
    entry.count += 1;
    counts.set(key, entry);
  });
  return [...counts.values()]
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
    .slice(0, Math.max(1, maxItems));
}

export function buildRecentBlogs(currentBlog, suggestedBlogs = [], maxItems = 6) {
  const others = Array.isArray(suggestedBlogs) ? suggestedBlogs : [];
  return uniqueBySlug(others.filter((blog) => blog?.slug && blog.slug !== currentBlog?.slug))
    .sort((a, b) => publishedTime(b) - publishedTime(a))
    .slice(0, Math.max(1, maxItems));
}

/** Blogs the author hand-picked in the admin panel, in the order they were picked. Unpublished/missing ones are skipped. */
export function buildPickedRelatedBlogs(currentBlog, suggestedBlogs = [], maxItems = 4) {
  const picked = Array.isArray(currentBlog?.relatedBlogIds) ? currentBlog.relatedBlogIds : [];
  if (!picked.length) return [];
  const others = Array.isArray(suggestedBlogs) ? suggestedBlogs : [];
  const byId = new Map(others.filter((blog) => blog?.slug && blog.slug !== currentBlog?.slug).map((blog) => [String(blog.id), blog]));
  return picked.map((id) => byId.get(String(id))).filter(Boolean).slice(0, Math.max(1, maxItems));
}

/** Same-category blogs, newest first. */
export function buildSameCategoryBlogs(currentBlog, suggestedBlogs = [], maxItems = 4) {
  const category = getBlogCategory(currentBlog).toLowerCase();
  if (!category) return [];
  return buildRecentBlogs(currentBlog, suggestedBlogs, Number.MAX_SAFE_INTEGER)
    .filter((blog) => getBlogCategory(blog).toLowerCase() === category)
    .slice(0, Math.max(1, maxItems));
}

/** Related = the author's picks; when none are usable, fall back to blogs in the same category. */
export function buildRelatedBlogs(currentBlog, suggestedBlogs = [], maxItems = 4) {
  const picked = buildPickedRelatedBlogs(currentBlog, suggestedBlogs, maxItems);
  return picked.length ? picked : buildSameCategoryBlogs(currentBlog, suggestedBlogs, maxItems);
}

export function formatBlogDate(value) {
  const date = value && new Date(value);
  return date && !Number.isNaN(date.valueOf())
    ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(date)
    : "";
}
