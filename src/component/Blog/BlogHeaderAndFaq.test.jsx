import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import BlogArticleHeader from "./BlogArticleHeader";
import BlogFaq from "./BlogFaq";
import CustomTemplateGrid from "./CustomTemplateGrid";
import { adaptApiBlogToLocal } from "@/lib/blogAdapter";

vi.mock("@/component/Blog/BlogFirstBanner", () => ({ default: () => <div data-testid="top-banner" /> }));
vi.mock("@/common/Blog/BlogSeo", () => ({ default: () => null }));
vi.mock("@/common/Blog/BlogRenderer", () => ({ default: () => <div data-testid="renderer" /> }));

import BlogDetailPage from "@/pagecomponent/Blog/BlogDetailPage";

afterEach(cleanup);

const faqData = {
  id: "faq_1",
  title: "Frequently Asked Questions",
  items: [
    { question: "Can acid reflux happen without heartburn?", answer: "Yes, some people have regurgitation instead." },
    { question: "Q.2. Can GERD go away permanently?", answer: "Symptoms may improve with treatment." },
  ],
};

function apiBlog({ headerStyle, withHero = true }) {
  return {
    id: 1,
    slug: "heartburn",
    status: "published",
    published_at: "2026-09-30T08:00:00Z",
    author: { name: "Admin" },
    featured_media: { original_url: "/assets/blog/blog_banner.png", alt_text: "Stomach" },
    published_version: {
      title: "Heartburn vs. Acid Reflux vs. GERD",
      template_key: "custom_template",
      blocks_json: {
        custom_instances: {
          hero_1: {
            componentKey: "hero",
            category: "Gastroenterology",
            breadcrumb: [],
            reviewer: { name: "", credentials: "" },
            reading_time_minutes: null,
            ...(headerStyle ? { header_style: headerStyle } : {}),
          },
          faq_1: { componentKey: "faq", enabled: true, heading: "Frequently Asked Questions", items: faqData.items },
        },
      },
      template_config_json: {
        schemaVersion: 1,
        layoutId: "two-col",
        page: { contentWidth: "wide", background: "white", spacing: "normal", typography: "modern" },
        sections: [{
          id: "body", layout: "content_sidebar", responsiveStrategy: "sidebar_below_on_tablet", enabled: true,
          slots: [
            { id: "main", name: "Main", components: [
              ...(withHero ? [{ id: "hero", componentKey: "hero", blockId: "hero_1", enabled: true, settings: { height: "standard", alignment: "left", overlay: "medium" } }] : []),
              { id: "faq", componentKey: "faq", blockId: "faq_1", enabled: true, settings: { layout: "qa_list", defaultOpen: "none" } },
            ] },
            { id: "side", name: "Sidebar", components: [] },
          ],
        }],
      },
    },
  };
}

describe("BlogArticleHeader", () => {
  it("shows the image, date badge, title, author and category", () => {
    const { container } = render(
      <BlogArticleHeader data={{ title: "Heartburn vs. GERD", coverImage: "/assets/blog/blog_banner.png", coverImageAlt: "Stomach", publishedAt: "2026-09-30T08:00:00Z", author: { name: "Admin" }, category: "Gastroenterology" }} />
    );
    expect(screen.getByRole("heading", { level: 1, name: "Heartburn vs. GERD" })).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("SEP")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(screen.getByText("Gastroenterology")).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("alt", "Stomach");
  });

  it("omits the date badge and image gracefully when data is missing", () => {
    const { container } = render(<BlogArticleHeader data={{ title: "Only a title" }} />);
    expect(screen.getByRole("heading", { name: "Only a title" })).toBeInTheDocument();
    expect(container.querySelector("time")).toBeNull();
    expect(container.querySelector("img")).toBeNull();
  });
});

describe("BlogFaq qa_list layout", () => {
  it("renders numbered questions with always-visible answers and no accordion buttons", () => {
    render(<BlogFaq data={faqData} settings={{ layout: "qa_list" }} />);
    expect(screen.getByRole("heading", { level: 2, name: "Frequently Asked Questions" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Q.1. Can acid reflux happen without heartburn?" })).toBeInTheDocument();
    // An already-numbered question is not numbered twice.
    expect(screen.getByRole("heading", { level: 3, name: "Q.2. Can GERD go away permanently?" })).toBeInTheDocument();
    expect(screen.getByText("Yes, some people have regurgitation instead.")).toBeInTheDocument();
    expect(screen.getByText("Symptoms may improve with treatment.")).toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("keeps the accordion for existing layouts", () => {
    render(<BlogFaq data={faqData} settings={{ layout: "accordion", defaultOpen: "none" }} />);
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});

describe("Article header selection", () => {
  it("adapter turns it on only when the placed hero component selected 'article'", () => {
    expect(adaptApiBlogToLocal(apiBlog({ headerStyle: "article" })).useArticleHeader).toBe(true);
    expect(adaptApiBlogToLocal(apiBlog({ headerStyle: "standard" })).useArticleHeader).toBe(false);
    expect(adaptApiBlogToLocal(apiBlog({})).useArticleHeader).toBe(false);
    expect(adaptApiBlogToLocal(apiBlog({ headerStyle: "article", withHero: false })).useArticleHeader).toBe(false);
  });

  it("renders the new header inside the template when selected, and the original hero otherwise", () => {
    const article = { ...adaptApiBlogToLocal(apiBlog({ headerStyle: "article" })), suggestedBlogs: [] };
    const { container, unmount } = render(<CustomTemplateGrid blog={article} />);
    expect(container.querySelector('[data-header-style="article"]')).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: "Heartburn vs. Acid Reflux vs. GERD" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: /Q\.1\./ })).toBeInTheDocument();
    unmount();

    const standard = { ...adaptApiBlogToLocal(apiBlog({ headerStyle: "standard" })), suggestedBlogs: [] };
    const second = render(<CustomTemplateGrid blog={standard} />);
    expect(second.container.querySelector('[data-header-style="article"]')).toBeNull();
    expect(second.container.querySelector('[data-hero-height]')).toBeInTheDocument();
  });

  it("always keeps the static website banner on top, with or without the article header", () => {
    const { rerender } = render(<BlogDetailPage blog={{ banner: {}, useArticleHeader: true }} />);
    expect(screen.getByTestId("top-banner")).toBeInTheDocument();
    rerender(<BlogDetailPage blog={{ banner: {}, useArticleHeader: false }} />);
    expect(screen.getByTestId("top-banner")).toBeInTheDocument();
    expect(within(document.body).getByTestId("renderer")).toBeInTheDocument();
  });
});

describe("Templates saved earlier with two Hero placements", () => {
  it("renders a single hero and bases the article-header choice on the first one", () => {
    const api = apiBlog({ headerStyle: "article" });
    api.published_version.blocks_json.custom_instances.hero_2 = {
      componentKey: "hero", category: "Other", breadcrumb: [], reviewer: { name: "", credentials: "" }, reading_time_minutes: null, header_style: "standard",
    };
    api.published_version.template_config_json.sections[0].slots[0].components.push(
      { id: "hero-2", componentKey: "hero", blockId: "hero_2", enabled: true, settings: { height: "standard", alignment: "left", overlay: "medium" } }
    );
    const blog = { ...adaptApiBlogToLocal(api), suggestedBlogs: [] };
    expect(blog.useArticleHeader).toBe(true);

    const { container } = render(<CustomTemplateGrid blog={blog} />);
    expect(container.querySelectorAll('[data-component-key="hero"]')).toHaveLength(1);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
  });
});

describe("Article header placement in a two-column template", () => {
  // Hero sits in its own full-width section at the top; the body is Content + Sidebar.
  function topHeroTemplate({ headerStyle, withBodySection = true }) {
    const api = apiBlog({ headerStyle });
    const hero = { id: "hero", componentKey: "hero", blockId: "hero_1", enabled: true, settings: { height: "standard", alignment: "left", overlay: "medium" } };
    const sections = [{ id: "top", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, slots: [{ id: "top-slot", name: "Top", components: [hero] }] }];
    if (withBodySection) {
      sections.push({
        id: "body", layout: "content_sidebar", responsiveStrategy: "sidebar_below_on_tablet", enabled: true,
        slots: [
          { id: "main", name: "Main", components: [{ id: "faq", componentKey: "faq", blockId: "faq_1", enabled: true, settings: { layout: "qa_list", defaultOpen: "none" } }] },
          { id: "side", name: "Sidebar", components: [{ id: "cats", componentKey: "blog_categories", enabled: true, settings: { heading: "Categories", maxItems: 8, showCount: false } }] },
        ],
      });
    }
    api.published_version.template_config_json.sections = sections;
    return { ...adaptApiBlogToLocal(api), suggestedBlogs: [] };
  }

  it("moves the article header into the top of the left column and drops the empty full-width hero section", () => {
    const { container } = render(<CustomTemplateGrid blog={topHeroTemplate({ headerStyle: "article" })} />);
    expect(container.querySelector('[data-section-layout="full_width"]')).toBeNull();
    const [leftSlot, rightSlot] = container.querySelectorAll("[data-template-slot]");
    const firstBlock = leftSlot.firstElementChild;
    expect(firstBlock).toHaveAttribute("data-component-key", "hero");
    expect(firstBlock.querySelector('[data-header-style="article"]')).toBeInTheDocument();
    expect(within(leftSlot).getByRole("heading", { level: 3, name: /Q\.1\./ })).toBeInTheDocument();
    expect(within(rightSlot).queryByRole("heading", { level: 1 })).toBeNull();
    expect(container.querySelectorAll("h1")).toHaveLength(1);
  });

  it("leaves the standard hero exactly where the template placed it", () => {
    const { container } = render(<CustomTemplateGrid blog={topHeroTemplate({ headerStyle: "standard" })} />);
    expect(container.querySelector('[data-section-layout="full_width"] [data-component-key="hero"]')).toBeInTheDocument();
    expect(container.querySelector('[data-header-style="article"]')).toBeNull();
  });

  it("renders the article header in place when the template has no multi-column section", () => {
    const { container } = render(<CustomTemplateGrid blog={topHeroTemplate({ headerStyle: "article", withBodySection: false })} />);
    expect(container.querySelector('[data-section-layout="full_width"] [data-header-style="article"]')).toBeInTheDocument();
  });
});

describe("Template saved with several Hero placements", () => {
  function legacyBlog(headerStyle) {
    const api = apiBlog({ headerStyle });
    const settings = { height: "standard", alignment: "left", overlay: "medium" };
    api.published_version.blocks_json.custom_instances.hero_2 = { componentKey: "hero", category: "Eye", breadcrumb: [], reviewer: { name: "", credentials: "" }, reading_time_minutes: null };
    api.published_version.blocks_json.custom_instances.hero_3 = { componentKey: "hero", category: "Eye", breadcrumb: [], reviewer: { name: "", credentials: "" }, reading_time_minutes: null };
    api.published_version.template_config_json.sections = [
      { id: "top", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, slots: [{ id: "top-slot", name: "Top", components: [{ id: "hero-1", componentKey: "hero", blockId: "hero_1", enabled: true, settings }] }] },
      { id: "body", layout: "content_sidebar", responsiveStrategy: "sidebar_below_on_tablet", enabled: true, slots: [
        { id: "main", name: "Main", components: [
          { id: "hero-2", componentKey: "hero", blockId: "hero_2", enabled: true, settings },
          { id: "faq", componentKey: "faq", blockId: "faq_1", enabled: true, settings: { layout: "qa_list", defaultOpen: "none" } },
        ] },
        { id: "side", name: "Sidebar", components: [] },
      ] },
      { id: "extra", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, slots: [{ id: "extra-slot", name: "Extra", components: [{ id: "hero-3", componentKey: "hero", blockId: "hero_3", enabled: true, settings }] }] },
    ];
    return { ...adaptApiBlogToLocal(api), suggestedBlogs: [] };
  }

  it("with the article header: one banner only, at the top of the left column", () => {
    const { container } = render(<CustomTemplateGrid blog={legacyBlog("article")} />);
    expect(container.querySelectorAll('[data-component-key="hero"]')).toHaveLength(1);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelector('[data-section-layout="full_width"]')).toBeNull();
    expect(container.querySelector("[data-template-slot]").firstElementChild).toHaveAttribute("data-component-key", "hero");
  });

  it("with the standard style: one hero only and no empty leftover sections", () => {
    const { container } = render(<CustomTemplateGrid blog={legacyBlog("standard")} />);
    expect(container.querySelectorAll('[data-component-key="hero"]')).toHaveLength(1);
    expect(container.querySelector('#extra')).toBeNull();
  });
});

describe("FAQ in a custom template saved with the legacy accordion layout", () => {
  it("renders the numbered Q&A list, not the accordion", () => {
    const api = apiBlog({});
    api.published_version.template_config_json.sections[0].slots[0].components.find((c) => c.componentKey === "faq").settings = { layout: "accordion", defaultOpen: "first" };
    const blog = { ...adaptApiBlogToLocal(api), suggestedBlogs: [] };
    render(<CustomTemplateGrid blog={blog} />);
    expect(screen.getByRole("heading", { level: 3, name: /^Q\.1\./ })).toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeNull();
  });
});
