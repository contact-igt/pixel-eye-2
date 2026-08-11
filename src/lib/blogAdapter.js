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
import { BLOG_BANNER_CONTENT } from "@/constant/blogBannerContent";
import { normalizeCustomTemplateSettings } from "@/component/Blog/customTemplateSettings";

const DEFAULT_BANNER = BLOG_BANNER_CONTENT;
function parseJsonObject(value, fallback = {}) {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
}

const DEFAULT_TEMPLATE_TWO_SIDEBAR = {
  appointment_cta: {
    heading: "Book an Appointment",
    description: "Get a precise diagnosis and a treatment plan from our eye care team.",
    book_appointment: { label: "Schedule Now", url: "/appointment" },
    call_now: { label: "Call Now", phone: "07075008561", url: "tel:07075008561" },
  },
  newsletter: {
    heading: "Get Eye-Care Guidance",
    description: "Receive expert medical tips and news from our specialists directly in your inbox.",
    email_placeholder: "Your Email Address",
    button_label: "Subscribe Now",
  },
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
function buildBlocks(blocksJson = {}, contentHtml = "", slug = "") {
  const blocks = [];

  // 1. Rich HTML content (Main article intro / body)
  if (contentHtml) {
    blocks.push({
      id: blockId("rich-html"),
      type: "richHtml",
      html: contentHtml,
    });
  }

  // 2. Key Takeaways
  const kt = blocksJson.key_takeaways;
  if (kt?.enabled === true && kt.items?.length) {
    blocks.push({
      id: blockId("key-takeaways"),
      type: "keyTakeaways",
      title: kt.heading || "Key Takeaways",
      items: kt.items,
    });
  }

  // 3. Image Comparison / Image Cards
  const ic = blocksJson.image_comparison;
  if (ic?.enabled === true && ic.items?.length) {
    blocks.push({
      id: blockId("image-comparison"),
      type: "imageCards",
      title: ic.heading || "How cataracts affect your vision",
      items: ic.items.map((item) => ({
        title: item.title || "",
        description: item.description || "",
        image: item.url || item.original_url || item.image || "/assets/blog/blog_banner.png",
      })),
    });
  }

  // 4. Numbered List (Common Early Symptoms)
  const nl = blocksJson.numbered_list;
  if (nl?.enabled === true && nl.items?.length) {
    blocks.push({
      id: blockId("numbered-list"),
      type: "numberedList",
      title: nl.heading || "",
      items: nl.items, // [{ title, description }]
    });
  }

  // 5. Expert Quote → maps to existing BlogDoctorQuote
  const eq = blocksJson.expert_quote;
  if (eq?.enabled === true && eq.quote) {
    blocks.push({
      id: blockId("doctor-quote"),
      type: "doctorQuote",
      quote: eq.quote,
      doctor: {
        name: eq.name || "",
        role: eq.role || "",
        image: eq.url || eq.original_url || eq.media?.original_url || eq.profile_url || null,
      },
    });
  }

  // 6. Medical CTA → maps to existing BlogEmergencyCta
  const cta = blocksJson.medical_cta;
  if (cta?.enabled === true && cta.heading) {
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

  // 7. FAQ
  const faq = blocksJson.faq;
  if (faq?.enabled === true && faq.items?.length) {
    blocks.push({
      id: blockId("faq"),
      type: "faq",
      title: faq.heading || "Frequently Asked Questions",
      items: faq.items, // [{ question, answer }]
    });
  }

  // 8. Feedback / Share
  const fb = blocksJson.feedback;
  const share = blocksJson.share;
  if (fb?.enabled === true || share?.enabled === true) {
    blocks.push({
      id: blockId("helpful"),
      type: "feedbackShare",
      slug,
    });
  }

  // 9. Disclaimer → maps to existing BlogDisclaimer
  const disc = blocksJson.disclaimer;
  if (disc?.enabled === true && disc.text) {
    blocks.push({
      id: blockId("disclaimer"),
      type: "disclaimer",
      content: disc.text,
    });
  }

  return blocks;
}

// ─── Assemble sidebar blocks for template_2 ──────────────────────────────────
function safeAppointmentUrl(value, fallback) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  if (/^\/(?!\/)/.test(trimmed) || /^https?:\/\//i.test(trimmed)) return trimmed;
  return fallback;
}

function safeCallUrl(value, fallback) {
  return typeof value === "string" && /^tel:\+?\d{7,15}$/.test(value.trim()) ? value.trim() : fallback;
}

function buildSidebarBlocks(config = {}) {
  const fallbackAppointment = DEFAULT_TEMPLATE_TWO_SIDEBAR.appointment_cta;
  const fallbackNewsletter = DEFAULT_TEMPLATE_TWO_SIDEBAR.newsletter;
  const appointment = config?.appointment_cta || fallbackAppointment;
  const book = appointment?.book_appointment || fallbackAppointment.book_appointment;
  const call = appointment?.call_now || fallbackAppointment.call_now;
  const newsletter = config?.newsletter || fallbackNewsletter;
  return [
    { id: "sidebar-toc", type: "toc", title: "In This Article" },
    {
      id: "sidebar-appointment",
      type: "appointmentCta",
      title: appointment.heading || fallbackAppointment.heading,
      description: appointment.description ?? fallbackAppointment.description,
      book_appointment: {
        label: book.label || fallbackAppointment.book_appointment.label,
        url: safeAppointmentUrl(book.url, fallbackAppointment.book_appointment.url),
      },
      call_now: {
        label: call.label || fallbackAppointment.call_now.label,
        phone: call.phone || fallbackAppointment.call_now.phone,
        url: safeCallUrl(call.url, fallbackAppointment.call_now.url),
      },
    },
    {
      id: "sidebar-newsletter",
      type: "newsletter",
      title: newsletter.heading || fallbackNewsletter.heading,
      description: newsletter.description || fallbackNewsletter.description,
      email_placeholder: newsletter.email_placeholder || fallbackNewsletter.email_placeholder,
      button_label: newsletter.button_label || fallbackNewsletter.button_label,
    },
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
  const rawBlocksJson = parseJsonObject(version.blocks_json || version.blocksJson);
  const blocksJson = rawBlocksJson.blocks || {};
  const heroMeta = blocksJson.hero || {};
  const featuredMedia = apiData.featured_media || {};
  const templateKey = normaliseTemplateKey(version.template_key || "template-1");

  const readingMinutes = heroMeta.reading_time_minutes;
  const readTime = readingMinutes ? `${readingMinutes} min read` : null;

  const blocks = buildBlocks(blocksJson, version.content_html || "", apiData.slug);
  const sidebarBlocks = templateKey === "template-2" ? buildSidebarBlocks(rawBlocksJson.sidebar) : [];

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

    // Custom Builder Template data
    templateConfigJson: normalizeCustomTemplateSettings(parseJsonObject(version.template_config_json || version.templateConfigJson, null)),
    rawBlocksJson,
    contentHtml: version.content_html || "",
    featuredMedia,
  };
}

/**
 * Helper to resolve block content data for a specific blockId and componentKey.
 * Used by CustomTemplateGrid to hydrate builder component instances.
 */
export function resolveBlockData(blocksJson = {}, blockId = "", componentKey = "", contentHtml = "", compSettings = {}, slug = "") {
  // 1. Rich Text Article Content:
  // Main article content sentinel ("article_content") uses global contentHtml.
  // Repeated placements (unique blockId) use custom_instances[blockId].html.
  if (componentKey === "rich_article_content" || componentKey === "article_content") {
    if (blockId === "article_content" || !blockId) {
      return { id: blockId || "article_content", type: "richHtml", html: contentHtml };
    }
    if (blocksJson?.custom_instances && blocksJson.custom_instances[blockId]) {
      const instance = blocksJson.custom_instances[blockId];
      const html = instance.html || instance.content_html || instance.contentHtml || contentHtml;
      return { id: blockId, type: "richHtml", html, enabled: instance.enabled !== false };
    }
    return { id: blockId, type: "richHtml", html: contentHtml };
  }

  // 2. Check if this is a custom instance created in the builder
  if (blocksJson?.custom_instances && blocksJson.custom_instances[blockId]) {
    const instance = blocksJson.custom_instances[blockId];
    return { ...normalizeCustomInstanceData(instance, componentKey, blockId, compSettings), enabled: instance.enabled !== false, slug };
  }

  // 3. Fallback to standard singleton blocks
  const standardBlocks = blocksJson?.blocks || {};
  if (standardBlocks[componentKey]) {
    const std = standardBlocks[componentKey];
    return { ...normalizeStandardBlockData(std, componentKey, blockId, compSettings), enabled: std.enabled !== false, slug };
  }

  // 4. Fallback for settings-based components like appointment_card / appointment_cta / medical_disclaimer / disclaimer
  if (componentKey === "appointment_card" || componentKey === "appointment_cta") {
    return {
      id: blockId,
      type: "appointmentCta",
      title: compSettings.heading || compSettings.title || "Book an Appointment",
      buttonLabel: compSettings.buttonLabel || compSettings.button_label || "Schedule Now",
      targetUrl: compSettings.targetUrl || compSettings.target_url || "/appointment",
      ...compSettings,
    };
  }

  if (componentKey === "newsletter_card" || componentKey === "newsletter") {
    return {
      id: blockId,
      type: "newsletter",
      title: compSettings.heading || compSettings.title || "Get Eye-Care Guidance",
      description: compSettings.description || "Receive expert medical tips and news from our specialists directly in your inbox.",
      email_placeholder: compSettings.emailPlaceholder || compSettings.email_placeholder || "Your Email Address",
      button_label: compSettings.buttonLabel || compSettings.button_label || "Subscribe Now",
      ...compSettings,
    };
  }
  if (componentKey === "medical_disclaimer" || componentKey === "disclaimer") {
    return {
      id: blockId,
      type: "disclaimer",
      content: compSettings.content || compSettings.text || "The information is for educational purposes and does not replace professional medical advice, diagnosis or treatment.",
      ...compSettings,
    };
  }

  if (componentKey === "spacer") {
    return {
      id: blockId,
      type: "spacer",
      ...compSettings,
    };
  }

  if (componentKey === "divider") {
    return {
      id: blockId,
      type: "divider",
      ...compSettings,
    };
  }

  if (componentKey === "feedback_share") {
    return { id: blockId, type: "feedbackShare", slug, ...compSettings };
  }
  if (componentKey === "feedback") {
    return { id: blockId, type: "feedback", slug, prompt: "Was this article helpful?", enabled: true, ...compSettings };
  }
  if (componentKey === "share") {
    return { id: blockId, type: "share", slug, enabled: true, ...compSettings };
  }

  return { id: blockId, ...compSettings };
}

function normalizeCustomInstanceData(instance = {}, componentKey = "", blockId = "") {
  if (componentKey === "rich_article_content") {
    return {
      id: blockId,
      type: "richHtml",
      html: instance.html || instance.content_html || instance.contentHtml || "",
      enabled: instance.enabled !== false,
    };
  }

  if (componentKey === "hero") {
    return {
      id: blockId,
      type: "hero",
      category: instance.category || "",
      breadcrumb: instance.breadcrumb || [],
      reviewer: {
        name: instance.reviewer?.name || "",
        role: instance.reviewer?.credentials || instance.reviewer?.role || "",
      },
      readTime: instance.reading_time_minutes ? `${instance.reading_time_minutes} min read` : "",
    };
  }

  if (componentKey === "feedback") {
    return { id: blockId, type: "feedback", prompt: instance.prompt || "Was this article helpful?" };
  }

  if (componentKey === "share") {
    return { id: blockId, type: "share" };
  }
  if (componentKey === "expert_quote") {
    return {
      id: blockId,
      type: "doctorQuote",
      quote: instance.quote || "",
      doctor: {
        name: instance.name || "",
        role: instance.role || "",
        image: instance.url || instance.original_url || instance.media?.original_url || instance.profile_url || null,
      },
    };
  }

  if (componentKey === "image_comparison") {
    return {
      id: blockId,
      type: "imageCards",
      title: instance.heading || "How cataracts affect your vision",
      items: (instance.items || []).map((item) => ({
        title: item.title || "",
        description: item.description || "",
        image: item.url || item.original_url || item.image || "/assets/blog/blog_banner.png",
      })),
    };
  }

  if (componentKey === "key_takeaways") {
    return {
      id: blockId,
      type: "keyTakeaways",
      title: instance.heading || "Key Takeaways",
      items: instance.items || [],
    };
  }

  if (componentKey === "numbered_list") {
    return {
      id: blockId,
      type: "numberedList",
      title: instance.heading || "",
      items: instance.items || [],
    };
  }

  if (componentKey === "medical_cta") {
    return {
      id: blockId,
      type: "emergencyCta",
      title: instance.heading || "",
      description: instance.description || "",
      primaryCta: instance.primary?.label
        ? { label: instance.primary.label, href: instance.primary.url || "#" }
        : null,
      secondaryCta: instance.secondary?.label
        ? { label: instance.secondary.label, href: instance.secondary.url || "#" }
        : null,
    };
  }

  if (componentKey === "faq") {
    return {
      id: blockId,
      type: "faq",
      title: instance.heading || "Frequently Asked Questions",
      items: instance.items || [],
    };
  }

  if (componentKey === "medical_disclaimer") {
    return {
      id: blockId,
      type: "disclaimer",
      content: instance.text || instance.content || "",
    };
  }

  return { id: blockId, ...instance };
}

function normalizeStandardBlockData(std = {}, componentKey = "", blockId = "") {
  if (componentKey === "key_takeaways") {
    return {
      id: blockId || "key-takeaways",
      type: "keyTakeaways",
      title: std.heading || "Key Takeaways",
      items: std.items || [],
    };
  }

  if (componentKey === "image_comparison") {
    return {
      id: blockId || "image-comparison",
      type: "imageCards",
      title: std.heading || "How cataracts affect your vision",
      items: (std.items || []).map((item) => ({
        title: item.title || "",
        description: item.description || "",
        image: item.url || item.original_url || item.image || "/assets/blog/blog_banner.png",
      })),
    };
  }

  if (componentKey === "numbered_list") {
    return {
      id: blockId || "numbered-list",
      type: "numberedList",
      title: std.heading || "",
      items: std.items || [],
    };
  }

  if (componentKey === "expert_quote") {
    return {
      id: blockId || "doctor-quote",
      type: "doctorQuote",
      quote: std.quote || "",
      doctor: {
        name: std.name || "",
        role: std.role || "",
        image: std.url || std.original_url || std.media?.original_url || std.profile_url || null,
      },
    };
  }

  if (componentKey === "medical_cta") {
    return {
      id: blockId || "emergency-cta",
      type: "emergencyCta",
      title: std.heading || "",
      description: std.description || "",
      primaryCta: std.primary?.label
        ? { label: std.primary.label, href: std.primary.url || "#" }
        : null,
      secondaryCta: std.secondary?.label
        ? { label: std.secondary.label, href: std.secondary.url || "#" }
        : null,
    };
  }

  if (componentKey === "faq") {
    return {
      id: blockId || "faq",
      type: "faq",
      title: std.heading || "Frequently Asked Questions",
      items: std.items || [],
    };
  }

  if (componentKey === "medical_disclaimer") {
    return {
      id: blockId || "disclaimer",
      type: "disclaimer",
      content: std.text || std.content || "",
    };
  }

  return { id: blockId, ...std };
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
