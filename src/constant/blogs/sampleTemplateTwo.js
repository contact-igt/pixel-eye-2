import { baseBlogMeta, sharedArticleBlocks } from "./shared";

export const sampleTemplateTwoBlog = {
  id: "blog-template-two-cataract",
  slug: "early-signs-of-cataracts-template-two",
  status: "published",
  template: "template-2",
  heroVariant: "template-2",
  layoutVariant: "with-sidebar",
  banner: baseBlogMeta.banner,
  hero: {
    ...baseBlogMeta.hero,
    title: "Early Signs of Cataracts You Should Never Ignore",
    excerpt:
      "Understand the subtle shifts in your eyesight and the warning signs that deserve an expert checkup.",
  },
  seo: {
    ...baseBlogMeta.seo,
    canonicalUrl: "/blog/early-signs-of-cataracts-template-two",
  },
  blocks: sharedArticleBlocks.filter((block) => block.type !== "suggestedReads"),
  sidebarBlocks: [
    { id: "sidebar-toc", type: "toc", title: "In This Article" },
    { id: "sidebar-appointment", type: "appointmentCta", title: "Book Appointment" },
    { id: "sidebar-newsletter", type: "newsletter", title: "Get Eye-Care Guidance" },
  ],
};
