/**
 * blogAdapter.js
 * ──────────────
 * Converts the raw API payload from pixeleye-blog-admin-backend
 * into the flat `blog` object shape consumed by all existing components.
 *
 * Existing component contracts (DO NOT change these shapes):
 *   BlogHero        → blog.hero.{ title, excerpt, coverImage, category, author, reviewer, readTime, publishedAt }
 *   BlogSeo         → blog.seo.{ title, description, ogImage, canonicalUrl, noIndex }
 *   BlogRenderer    → blog.template ("template-1" | "template-2")
 *   TemplateOne     → blog.blocks[] (array of block objects)
 *   TemplateTwo     → blog.blocks[] + blog.sidebarBlocks[]
 *   BlogBlockRenderer → each block has { id, type, ...blockSpecificFields }
 */

// ─── Default fallback banner (BlogFirstBanner uses this) ─────────────────────
const DEFAULT_BANNER = {
  title: "Our Blog",
  subtitle:
    "Expert eye care guidance, medical insights, and patient stories from Pixel Eye Hospitals.",
  image: "/assets/blog/blog_banner.png",
  mobileImage: "/assets/blog/blog_banner.png",
  mobileImageMedia: "(max-width: 767px)",
  cta: { label: "Read More", href: "/blog" },
  nav: { rightSlot: "book", navTheme: "light", cardBg: "transparent" },
  showOverlay: false,
  imagePosition: "center center",
};

// ─── Template key normalisation (API uses underscores) ───────────────────────
function normaliseTemplateKey(key = "") {
  // "template_1" → "template-1", "template_2" → "template-2"
  return key.replace(/_/g, "-");
}

// ─── Helper: build a safe block id ───────────────────────────────────────────
function blockId(prefix) {
  return `block-${prefix}-api`;
}

// ─── Assemble main article blocks from blocks_json.blocks ────────────────────
function buildBlocks(blocksJson = {}, contentHtml = "") {
  const blocks = [];

  // 1. Key Takeaways
  const kt = blocksJson.key_takeaways;
  if (kt?.enabled && kt.items?.length) {
    blocks.push({
      id: blockId("key-takeaways"),
      type: "keyTakeaways",
      title: kt.heading || "Key Takeaways",
      items: kt.items,
    });
  }

  // 2. Numbered List
  const nl = blocksJson.numbered_list;
  if (nl?.enabled && nl.items?.length) {
    blocks.push({
      id: blockId("numbered-list"),
      type: "numberedList",
      title: nl.heading || "",
      items: nl.items, // [{ title, description }]
    });
  }

  // 3. Rich HTML content (always added when present)
  if (contentHtml) {
    blocks.push({
      id: blockId("rich-html"),
      type: "richHtml",
      html: contentHtml,
    });
  }

  // 4. Expert Quote → maps to existing BlogDoctorQuote
  const eq = blocksJson.expert_quote;
  if (eq?.enabled && eq.quote) {
    blocks.push({
      id: blockId("doctor-quote"),
      type: "doctorQuote",
      quote: eq.quote,
      doctor: {
        name: eq.name || "",
        role: eq.role || "",
        image: null, // API provides profile_url, not a local image path
      },
    });
  }

  // 5. Medical CTA → maps to existing BlogEmergencyCta
  const cta = blocksJson.medical_cta;
  if (cta?.enabled && cta.heading) {
    blocks.push({
      id: blockId("emergency-cta"),
      type: "emergencyCta",
      title: cta.heading,
      description: cta.description || "",
      primaryCta: cta.primary?.label
        ? { label: cta.primary.label, href: cta.primary.url || "#" }
        : null,
      secondaryCta: cta.secondary?.label
        ? { label: cta.secondary.label, href: cta.secondary.url || "#" }
        : null,
    });
  }

  // 6. FAQ
  const faq = blocksJson.faq;
  if (faq?.enabled && faq.items?.length) {
    blocks.push({
      id: blockId("faq"),
      type: "faq",
      title: faq.heading || "Frequently Asked Questions",
      items: faq.items, // [{ question, answer }]
    });
  }

  // 7. Feedback / Share
  const fb = blocksJson.feedback;
  if (fb?.enabled) {
    blocks.push({
      id: blockId("helpful"),
      type: "feedbackShare",
    });
  }

  // 8. Disclaimer → maps to existing BlogDisclaimer
  const disc = blocksJson.disclaimer;
  if (disc?.enabled && disc.text) {
    blocks.push({
      id: blockId("disclaimer"),
      type: "disclaimer",
      content: disc.text,
    });
  }

  return blocks;
}

// ─── Assemble sidebar blocks for template_2 ──────────────────────────────────
function buildSidebarBlocks() {
  return [
    { id: "sidebar-toc", type: "toc", title: "In This Article" },
    { id: "sidebar-appointment", type: "appointmentCta", title: "Book Appointment" },
    { id: "sidebar-newsletter", type: "newsletter", title: "Get Eye-Care Guidance" },
  ];
}

// ─── Main adapter ─────────────────────────────────────────────────────────────
/**
 * Convert a raw API blog payload into the local `blog` object shape.
 * @param {object} apiData — the `data` field from the API response
 * @returns {object} normalized blog object for existing components
 */
export function adaptApiBlogToLocal(apiData) {
  if (!apiData) return null;

  const version = apiData.published_version || {};
  const blocksJson = version.blocks_json?.blocks || {};
  const heroMeta = blocksJson.hero || {};
  const featuredMedia = apiData.featured_media || {};
  const templateKey = normaliseTemplateKey(version.template_key || "template-1");

  const readingMinutes = heroMeta.reading_time_minutes;
  const readTime = readingMinutes ? `${readingMinutes} min read` : undefined;

  const blocks = buildBlocks(blocksJson, version.content_html || "");
  const sidebarBlocks = templateKey === "template-2" ? buildSidebarBlocks() : [];

  return {
    // Identifiers
    id: apiData.id,
    slug: apiData.slug,
    status: apiData.status,

    // Template routing
    template: templateKey, // "template-1" | "template-2"
    heroVariant: templateKey,
    layoutVariant: templateKey === "template-2" ? "with-sidebar" : "article",

    // BlogFirstBanner (keep as static default — not in API)
    banner: DEFAULT_BANNER,

    // BlogHero data
    hero: {
      title: version.title || "",
      excerpt: version.excerpt || "",
      coverImage: featuredMedia.original_url || featuredMedia.url || "/assets/blog/blog_banner.png",
      coverImageAlt: featuredMedia.alt_text || version.title || "Blog image",
      category: heroMeta.category || "",
      breadcrumb: heroMeta.breadcrumb || [],
      author: {
        name: apiData.author?.name || "Pixel Eye Hospitals",
        role: "Eye Care Team",
      },
      reviewer: {
        name: heroMeta.reviewer?.name || "",
        role: heroMeta.reviewer?.credentials || "",
        image: null,
      },
      readTime,
      publishedAt: apiData.published_at,
    },

    // BlogSeo data
    seo: {
      title: version.seo_title || version.title || "Pixel Eye Blog",
      description: version.seo_description || version.excerpt || "",
      ogImage: featuredMedia.original_url || featuredMedia.url || "",
      canonicalUrl: version.canonical_url || `/blog/${apiData.slug}`,
      noIndex: false,
    },

    // Content blocks
    blocks,
    sidebarBlocks,
  };
}

/**
 * Adapt an array of API blog list items (from GET /public/blogs).
 * The listing API may return lighter objects without full blocks_json.
 * @param {object[]} apiList
 * @returns {object[]}
 */
export function adaptApiBlogListToLocal(apiList = []) {
  return apiList.map(adaptApiBlogToLocal).filter(Boolean);
}
