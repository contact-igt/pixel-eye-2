/**
 * Maps each service page to the blog "Category" values that belong to it.
 *
 * Blog authors type the category as free text (Hero Details -> Category in the admin panel), so matching is
 * tolerant: case, spaces, hyphens and punctuation are ignored and a keyword only has to be CONTAINED in the
 * category. e.g. "Cataract", "Cataract Care" and "Understanding Cataracts" all belong to the Cataract page,
 * and "Dry Eye", "Dry-Eye Care" and "dryeye" all belong to the Dry Eye page.
 */
export const SERVICE_BLOG_CATEGORIES = {
  cataract: { label: "Cataract", keywords: ["cataract"] },
  dryeye: { label: "Dry Eye", keywords: ["dry eye", "dryeye"] },
  glaucoma: { label: "Glaucoma", keywords: ["glaucoma"] },
  keratoconus: { label: "Keratoconus", keywords: ["keratoconus"] },
  lasik: { label: "LASIK", keywords: ["lasik"] },
  pediatric: { label: "Paediatric Eye Care", keywords: ["pediatric", "paediatric"] },
  retina: { label: "Retina", keywords: ["retina", "retinal"] },
  squint: { label: "Squint", keywords: ["squint", "strabismus"] },
};

const letters = (value = "") => String(value).toLowerCase().replace(/[^a-z0-9]/g, "");

function publishedTime(blog) {
  const time = new Date(blog?.hero?.publishedAt || 0).valueOf();
  return Number.isNaN(time) ? 0 : time;
}

export function getServiceBlogConfig(serviceSlug) {
  return SERVICE_BLOG_CATEGORIES[serviceSlug] || null;
}

export function blogMatchesService(blog, serviceSlug) {
  const config = getServiceBlogConfig(serviceSlug);
  const category = letters(blog?.categoryLabel || blog?.hero?.category);
  if (!config || !category) return false;
  return config.keywords.some((keyword) => category.includes(letters(keyword)));
}

/** Newest published blogs whose category belongs to the service, at most `limit` (default 4). */
export function pickBlogsForService(blogs = [], serviceSlug, limit = 4) {
  return (Array.isArray(blogs) ? blogs : [])
    .filter((blog) => blog?.slug && blogMatchesService(blog, serviceSlug))
    .sort((a, b) => publishedTime(b) - publishedTime(a))
    .slice(0, Math.max(1, limit));
}
