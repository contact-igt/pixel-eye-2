import { baseBlogMeta, sharedArticleBlocks } from "./shared";

export const sampleTemplateOneBlog = {
  id: "blog-template-one-cataract",
  slug: "early-signs-of-cataracts-template-one",
  status: "published",
  template: "template-1",
  heroVariant: "template-1",
  layoutVariant: "article",
  banner: baseBlogMeta.banner,
  hero: {
    ...baseBlogMeta.hero,
    title: "Early Signs of Cataracts You Should Never Ignore",
    excerpt:
      "Cataracts develop slowly and painlessly, often without obvious symptoms until they begin to cloud your vision.",
  },
  seo: {
    ...baseBlogMeta.seo,
    canonicalUrl: "/blog/early-signs-of-cataracts-template-one",
  },
  blocks: sharedArticleBlocks,
  sidebarBlocks: [],
};