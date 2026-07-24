import { blogs } from "@/constant/blogs";

export function getAllBlogs({ includeDrafts = false } = {}) {
  if (includeDrafts) return blogs;
  return blogs.filter((blog) => blog.status === "published");
}

export function getBlogSlugs() {
  return getAllBlogs().map((blog) => blog.slug);
}

export function getBlogBySlug(slug, { includeDrafts = false } = {}) {
  const source = includeDrafts ? blogs : getAllBlogs();
  return source.find((blog) => blog.slug === slug) || null;
}
