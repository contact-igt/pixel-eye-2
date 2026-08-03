import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import BlogSidebarBlockRenderer from "@/common/Blog/BlogSidebarBlockRenderer";
import { adaptApiBlogToLocal } from "./blogAdapter";

function apiBlog(templateKey = "template_2", sidebar) {
  return {
    id: "1",
    slug: "eye-care",
    status: "published",
    featured_media: {},
    author: { name: "Doctor" },
    published_version: {
      template_key: templateKey,
      title: "Eye care",
      excerpt: "Summary",
      content_html: "<p>Article</p>",
      blocks_json: { blocks: {}, ...(sidebar ? { sidebar } : {}) },
    },
  };
}

describe("Template 2 sidebar adapter", () => {
  afterEach(cleanup);

  it("renders the saved Appointment and Newsletter snapshot exactly once", () => {
    const sidebar = {
      appointment_cta: {
        heading: "Saved appointment",
        description: "Saved appointment description",
        book_appointment: { label: "Book saved visit", url: "/saved-appointment" },
        call_now: { label: "Call saved clinic", phone: "+919876543210", url: "tel:+919876543210" },
      },
      newsletter: {
        heading: "Saved newsletter",
        description: "Saved newsletter description",
        email_placeholder: "reader@example.com",
        button_label: "Join saved list",
      },
    };
    const blog = adaptApiBlogToLocal(apiBlog("template_2", sidebar));
    expect(blog.sidebarBlocks.map((block) => block.type)).toEqual(["toc", "appointmentCta", "newsletter"]);
    render(<BlogSidebarBlockRenderer blocks={blog.sidebarBlocks} articleBlocks={blog.blocks} />);
    expect(screen.getAllByText("Saved appointment")).toHaveLength(1);
    expect(screen.getByRole("link", { name: /Book saved visit/ })).toHaveAttribute("href", "/saved-appointment");
    expect(screen.getByRole("link", { name: /Call saved clinic/ })).toHaveAttribute("href", "tel:+919876543210");
    expect(screen.getAllByText("Saved newsletter")).toHaveLength(1);
    expect(screen.getByPlaceholderText("reader@example.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Join saved list" })).toBeInTheDocument();
  });

  it("uses safe fallback content for old Template 2 versions", () => {
    const blog = adaptApiBlogToLocal(apiBlog("template_2"));
    const appointment = blog.sidebarBlocks.find((block) => block.type === "appointmentCta");
    const newsletter = blog.sidebarBlocks.find((block) => block.type === "newsletter");
    expect(appointment.book_appointment.url).toBe("/appointment");
    expect(appointment.call_now.url).toBe("tel:07075008561");
    expect(newsletter.button_label).toBe("Subscribe Now");
  });

  it("does not expose system sidebar blocks under Template 1", () => {
    expect(adaptApiBlogToLocal(apiBlog("template_1")).sidebarBlocks).toEqual([]);
  });
});
