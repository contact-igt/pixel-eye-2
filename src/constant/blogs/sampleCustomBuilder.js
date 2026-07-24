import { baseBlogMeta, sharedArticleBlocks } from "./shared";

export const sampleCustomBuilderBlog = {
  id: "blog-custom-builder-cataract",
  slug: "early-signs-of-cataracts-custom-builder",
  status: "published",
  template: "custom-builder",
  heroVariant: "template-1",
  layoutVariant: "with-sidebar",
  banner: baseBlogMeta.banner,
  hero: {
    ...baseBlogMeta.hero,
    title: "Custom Builder Cataract Guide",
    excerpt:
      "A preview of how the admin builder can control article blocks and sidebar modules independently.",
  },
  seo: {
    ...baseBlogMeta.seo,
    title: "Custom Builder Cataract Guide",
    canonicalUrl: "/blog/early-signs-of-cataracts-custom-builder",
  },
  blocks: [
    sharedArticleBlocks[1],
    sharedArticleBlocks[0],
    sharedArticleBlocks[2],
    sharedArticleBlocks[5],
    sharedArticleBlocks[6],
    sharedArticleBlocks[7],
  ],
  sidebarBlocks: [
    { id: "sidebar-toc-custom", type: "toc", title: "Article Index" },
    { id: "sidebar-newsletter-custom", type: "newsletter", title: "Get Eye-Care Guidance" },
  ],
};
