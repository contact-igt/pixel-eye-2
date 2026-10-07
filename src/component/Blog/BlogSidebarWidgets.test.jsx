import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import BlogCategories from "./BlogCategories";
import BlogRecentRelated from "./BlogRecentRelated";
import CustomTemplateGrid from "./CustomTemplateGrid";
import { adaptApiBlogToLocal } from "@/lib/blogAdapter";
import { buildCategoryList, buildRecentBlogs, buildRelatedBlogs } from "@/lib/blogSidebarData";

afterEach(cleanup);

const post = (slug, category, publishedAt, title = `Title ${slug}`) => ({
  id: slug,
  slug,
  categoryLabel: category,
  hero: { title, category, publishedAt, coverImage: "/assets/blog/blog_banner.png" },
});

const current = post("current", "Cataract Care", "2026-05-01T00:00:00Z", "Current article");
const suggested = [
  post("old-cataract", "Cataract Care", "2026-01-01T00:00:00Z", "Old cataract"),
  post("new-glaucoma", "Glaucoma", "2026-09-01T00:00:00Z", "New glaucoma"),
  post("mid-cataract", "cataract care", "2026-06-01T00:00:00Z", "Mid cataract"),
  post("lasik", "Lasik", "2026-03-01T00:00:00Z", "Lasik post"),
];

describe("sidebar data helpers", () => {
  it("counts categories case-insensitively, including the current blog, and caps the list", () => {
    const list = buildCategoryList([current, ...suggested], 2);
    expect(list).toHaveLength(2);
    expect(list[0]).toMatchObject({ name: "Cataract Care", count: 3 });
  });

  it("orders recent newest-first and excludes the current blog", () => {
    expect(buildRecentBlogs(current, [current, ...suggested], 3).map((b) => b.slug)).toEqual(["new-glaucoma", "mid-cataract", "lasik"]);
  });

  it("related only returns same-category posts and is empty without a category", () => {
    expect(buildRelatedBlogs(current, suggested, 5).map((b) => b.slug)).toEqual(["mid-cataract", "old-cataract"]);
    expect(buildRelatedBlogs({ slug: "x" }, suggested, 5)).toEqual([]);
  });
});

describe("BlogCategories", () => {
  it("renders the configured heading, counts, and highlights the current category", () => {
    render(<BlogCategories settings={{ heading: "Categories", maxItems: 8, showCount: true }} currentBlog={current} suggestedBlogs={suggested} />);
    expect(screen.getByRole("heading", { name: "Categories" })).toBeInTheDocument();
    expect(screen.getByText("(3)")).toBeInTheDocument();
    expect(screen.getByText("Cataract Care").closest("li")).toHaveAttribute("aria-current", "true");
    expect(screen.getByRole("link", { name: "All Blogs" })).toHaveAttribute("href", "/blog");
    expect(screen.getByRole("link", { name: "Lasik" })).toHaveAttribute("href", "/blog?category=Lasik");
  });

  it("renders nothing when no blog has a category", () => {
    const { container } = render(<BlogCategories settings={{}} currentBlog={{ slug: "a", hero: {} }} suggestedBlogs={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe("BlogRecentRelated", () => {
  it("shows Related / Recent tabs and switches lists", () => {
    render(<BlogRecentRelated settings={{ mode: "tabs", maxItems: 4, showImage: true, showDate: true }} currentBlog={current} suggestedBlogs={suggested} />);
    const panel = () => screen.getByRole("tabpanel");
    expect(screen.getByRole("tab", { name: "Related" })).toHaveAttribute("aria-selected", "true");
    expect(within(panel()).getByText("Mid cataract")).toBeInTheDocument();
    expect(within(panel()).queryByText("New glaucoma")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("tab", { name: "Recent" }));
    expect(within(panel()).getByText("New glaucoma")).toBeInTheDocument();
  });

  it("falls back to recent when the blog has no related posts", () => {
    render(<BlogRecentRelated settings={{ mode: "related", maxItems: 4 }} currentBlog={post("solo", "Unique", "2026-05-01")} suggestedBlogs={suggested} />);
    expect(screen.getByRole("heading", { name: "Recent Blogs" })).toBeInTheDocument();
    expect(screen.getByText("New glaucoma")).toBeInTheDocument();
  });

  it("honours maxItems, hidden images and hidden dates", () => {
    const { container } = render(<BlogRecentRelated settings={{ mode: "recent", maxItems: 2, showImage: false, showDate: false }} currentBlog={current} suggestedBlogs={suggested} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelector("img")).toBeNull();
    expect(container.querySelector("time")).toBeNull();
  });

  it("links every post to its public blog URL", () => {
    render(<BlogRecentRelated settings={{ mode: "recent", maxItems: 1 }} currentBlog={current} suggestedBlogs={suggested} />);
    expect(screen.getByRole("link", { name: /New glaucoma/ })).toHaveAttribute("href", "/blog/new-glaucoma");
  });
});

describe("two-column Custom Template with category + recent/related", () => {
  it("renders content on the left and categories + related/recent in the right slot", () => {
    const apiBlog = {
      id: 1,
      slug: "current",
      status: "published",
      published_at: "2026-05-01T00:00:00Z",
      published_version: {
        title: "Current article",
        template_key: "custom_template",
        blocks_json: {
          custom_instances: {
            hero_1: { componentKey: "hero", category: "Cataract Care", breadcrumb: [], reviewer: { name: "", credentials: "" }, reading_time_minutes: null },
            rich_2: { componentKey: "rich_article_content", enabled: true, html: "<p>Left column body</p>" },
          },
        },
        template_config_json: {
          schemaVersion: 1,
          layoutId: "two-col",
          page: { contentWidth: "wide", background: "white", spacing: "normal", typography: "modern" },
          sections: [{
            id: "body", layout: "content_sidebar", responsiveStrategy: "sidebar_below_on_tablet", enabled: true,
            slots: [
              { id: "main", name: "Main", components: [{ id: "rich", componentKey: "rich_article_content", blockId: "rich_2", enabled: true, settings: {} }] },
              { id: "side", name: "Sidebar", components: [
                { id: "cats", componentKey: "blog_categories", enabled: true, settings: { heading: "Categories", maxItems: 8, showCount: false } },
                { id: "rr", componentKey: "recent_related_blogs", enabled: true, settings: { heading: "", mode: "tabs", maxItems: 4, showImage: true, showDate: true } },
              ] },
            ],
          }],
        },
      },
    };
    const blog = { ...adaptApiBlogToLocal(apiBlog), suggestedBlogs: suggested };
    expect(blog.categoryLabel).toBe("Cataract Care");
    expect(blog.hero.category).toBe("Cataract Care");

    const { container } = render(<CustomTemplateGrid blog={blog} />);
    const [mainSlot, sideSlot] = container.querySelectorAll("[data-template-slot]");
    expect(within(mainSlot).getByText("Left column body")).toBeInTheDocument();
    expect(within(sideSlot).getByRole("heading", { name: "Categories" })).toBeInTheDocument();
    expect(within(sideSlot).getByRole("tab", { name: "Related" })).toBeInTheDocument();
    expect(within(sideSlot).getByText("Mid cataract")).toBeInTheDocument();
    expect(screen.queryByText("This content is currently unavailable.")).not.toBeInTheDocument();
  });
});

describe("Related / Recent tabs with hand-picked related blogs", () => {
  const withIds = (relatedBlogIds, base = current) => ({ ...base, relatedBlogIds });

  it("always shows both tabs, even when the blog has no category and nothing related", () => {
    render(<BlogRecentRelated settings={{ mode: "tabs", maxItems: 4 }} currentBlog={post("solo", "", "2026-05-01")} suggestedBlogs={suggested} />);
    expect(screen.getByRole("tab", { name: "Related" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Recent" })).toBeInTheDocument();
    // Starts on the first tab that has posts, newest first.
    expect(screen.getByRole("tab", { name: "Recent" })).toHaveAttribute("aria-selected", "true");
    expect(within(screen.getByRole("tabpanel")).getAllByRole("link")[0]).toHaveAttribute("href", "/blog/new-glaucoma");
    fireEvent.click(screen.getByRole("tab", { name: "Related" }));
    expect(screen.getByText("No related blogs for this article yet.")).toBeInTheDocument();
  });

  it("lists the author's picks in the order they were picked, ahead of same-category posts", () => {
    const blog = withIds(["4", "2"]);
    const pool = [
      { ...suggested[0], id: "2" },
      { ...suggested[1], id: "3" },
      { ...suggested[2], id: "5" },
      { ...suggested[3], id: "4" },
    ];
    render(<BlogRecentRelated settings={{ mode: "tabs", maxItems: 4 }} currentBlog={blog} suggestedBlogs={pool} />);
    const links = within(screen.getByRole("tabpanel")).getAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual(["/blog/lasik", "/blog/old-cataract"]);
  });

  it("skips picks that are no longer published and falls back to the same category when none remain", () => {
    expect(buildRelatedBlogs(withIds(["999"]), suggested, 4).map((b) => b.slug)).toEqual(["mid-cataract", "old-cataract"]);
  });

  it("caps the picks at the component's maximum and never lists the current blog", () => {
    const pool = [{ ...current, id: "1" }, { ...suggested[0], id: "2" }, { ...suggested[1], id: "3" }, { ...suggested[2], id: "4" }];
    const blog = withIds(["1", "2", "3", "4"]);
    expect(buildRelatedBlogs(blog, pool, 2).map((b) => b.id)).toEqual(["2", "3"]);
  });

  it("the related-only mode shows the picks with a Related heading", () => {
    const pool = [{ ...suggested[1], id: "3" }];
    render(<BlogRecentRelated settings={{ mode: "related", maxItems: 4 }} currentBlog={withIds(["3"])} suggestedBlogs={pool} />);
    expect(screen.getByRole("heading", { name: "Related Blogs" })).toBeInTheDocument();
    expect(screen.getByText("New glaucoma")).toBeInTheDocument();
  });

  it("the adapter carries the picked ids from blocks_json", () => {
    const blog = adaptApiBlogToLocal({
      id: 9, slug: "x", status: "published",
      published_version: { title: "X", template_key: "custom_template", blocks_json: { related_blog_ids: ["4", 7], custom_instances: {} }, template_config_json: null },
    });
    expect(blog.relatedBlogIds).toEqual(["4", "7"]);
  });
});
