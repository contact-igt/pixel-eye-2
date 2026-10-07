import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import BlogsVideos from "./index";
import { blogMatchesService, pickBlogsForService, SERVICE_BLOG_CATEGORIES } from "@/lib/serviceBlogCategories";
import * as apiService from "@/lib/apiService";

vi.mock("@/lib/apiService", () => ({ fetchPublishedBlogs: vi.fn() }));

// Raw API shape: category lives in blocks_json.blocks.hero (template 1/2) or a custom hero instance.
const apiBlog = (id, title, category, publishedAt, custom = false) => ({
  id,
  slug: `blog-${id}`,
  status: "published",
  published_at: publishedAt,
  featured_media: { original_url: "/assets/blog/blog_banner.png" },
  published_version: {
    title,
    template_key: custom ? "custom_template" : "template_1",
    blocks_json: custom
      ? { custom_instances: { hero_1: { componentKey: "hero", category, breadcrumb: [], reviewer: { name: "", credentials: "" }, reading_time_minutes: null } } }
      : { schema_version: 1, blocks: { hero: { category, breadcrumb: [], reviewer: { name: "", credentials: "" }, reading_time_minutes: null } } },
  },
});

const blogs = [
  apiBlog(1, "Cataract guide A", "Cataract", "2026-01-01T00:00:00Z"),
  apiBlog(2, "Glaucoma guide", "Glaucoma", "2026-09-01T00:00:00Z"),
  apiBlog(3, "Cataract guide B", "Understanding Cataracts", "2026-03-01T00:00:00Z", true),
  apiBlog(4, "Cataract guide C", "cataract care", "2026-05-01T00:00:00Z"),
  apiBlog(5, "Cataract guide D", "CATARACT", "2026-06-01T00:00:00Z"),
  apiBlog(6, "Cataract guide E", "Cataract surgery", "2026-07-01T00:00:00Z"),
  apiBlog(7, "Uncategorised", "", "2026-08-01T00:00:00Z"),
];

beforeEach(() => apiService.fetchPublishedBlogs.mockResolvedValue(blogs));
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("service -> blog category matching", () => {
  const blog = (category) => ({ slug: "x", hero: { category } });

  it("ignores case, spaces, hyphens and punctuation and only needs the keyword to be contained", () => {
    expect(blogMatchesService(blog("Dry-Eye Care"), "dryeye")).toBe(true);
    expect(blogMatchesService(blog("dry eye"), "dryeye")).toBe(true);
    expect(blogMatchesService(blog("DRYEYE"), "dryeye")).toBe(true);
    expect(blogMatchesService(blog("Understanding Cataracts"), "cataract")).toBe(true);
    expect(blogMatchesService(blog("Paediatric Eye Care"), "pediatric")).toBe(true);
    expect(blogMatchesService(blog("Pediatric"), "pediatric")).toBe(true);
    expect(blogMatchesService(blog("Retinal Disease"), "retina")).toBe(true);
    expect(blogMatchesService(blog("Strabismus"), "squint")).toBe(true);
  });

  it("does not match other services, empty categories or unknown services", () => {
    expect(blogMatchesService(blog("Glaucoma"), "cataract")).toBe(false);
    expect(blogMatchesService(blog(""), "cataract")).toBe(false);
    expect(blogMatchesService(blog("Cataract"), "unknown-service")).toBe(false);
  });

  it("every service page has a configured category", () => {
    expect(Object.keys(SERVICE_BLOG_CATEGORIES).sort()).toEqual(["cataract", "dryeye", "glaucoma", "keratoconus", "lasik", "pediatric", "retina", "squint"]);
  });

  it("uses the category label for custom-template blogs too", () => {
    expect(blogMatchesService({ slug: "x", categoryLabel: "Cataract", hero: { category: "" } }, "cataract")).toBe(true);
  });

  it("picks the newest matching blogs, capped at 4", () => {
    const list = [
      { slug: "a", hero: { category: "Cataract", publishedAt: "2026-01-01" } },
      { slug: "b", hero: { category: "Cataract", publishedAt: "2026-05-01" } },
      { slug: "c", hero: { category: "Cataract", publishedAt: "2026-03-01" } },
      { slug: "d", hero: { category: "Cataract", publishedAt: "2026-04-01" } },
      { slug: "e", hero: { category: "Cataract", publishedAt: "2026-02-01" } },
      { slug: "f", hero: { category: "Glaucoma", publishedAt: "2026-12-01" } },
    ];
    expect(pickBlogsForService(list, "cataract").map((b) => b.slug)).toEqual(["b", "d", "c", "e"]);
  });
});

describe("BlogsVideos on a service page", () => {
  it("shows the latest 4 blogs of that service's category, newest first, in the home blog card layout", async () => {
    render(<BlogsVideos serviceSlug="cataract" />);
    expect(await screen.findByRole("heading", { level: 2, name: "Related Cataract Blogs" })).toBeInTheDocument();
    const titles = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(titles).toEqual(["Cataract guide E", "Cataract guide D", "Cataract guide C", "Cataract guide B"]);
    expect(screen.queryByText("Glaucoma guide")).toBeNull();
    expect(screen.queryByText("Cataract guide A")).toBeNull(); // 5th match is cut off
    expect(screen.getAllByText("Blog")).toHaveLength(4);
    expect(screen.getAllByRole("link", { name: /Cataract guide/ })[0]).toHaveAttribute("href", "/blog/blog-6#blog-detail");
    expect(apiService.fetchPublishedBlogs).toHaveBeenCalledWith(1, 100);
  });

  it("renders no section at all when the service has no blog in its category", async () => {
    const { container } = render(<BlogsVideos serviceSlug="lasik" />);
    await waitFor(() => expect(apiService.fetchPublishedBlogs).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });

  it("renders no section when the blog list cannot be loaded", async () => {
    apiService.fetchPublishedBlogs.mockResolvedValueOnce([]);
    const { container } = render(<BlogsVideos serviceSlug="cataract" />);
    await waitFor(() => expect(apiService.fetchPublishedBlogs).toHaveBeenCalled());
    expect(container).toBeEmptyDOMElement();
  });
});

describe("BlogsVideos on the home page (unchanged)", () => {
  it("still shows the original heading and the latest blogs regardless of category", async () => {
    render(<BlogsVideos />);
    expect(screen.getByRole("heading", { level: 2, name: "Blogs & Videos" })).toBeInTheDocument();
    await waitFor(() => expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(blogs.length));
    expect(apiService.fetchPublishedBlogs).toHaveBeenCalledWith(1, 4);
  });
});
