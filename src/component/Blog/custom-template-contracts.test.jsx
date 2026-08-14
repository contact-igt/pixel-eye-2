import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { COMPONENT_CAPABILITIES, COMPONENT_MAP } from "./ComponentMap";
import CustomTemplateGrid from "./CustomTemplateGrid";
import BlogDivider from "./BlogDivider";
import BlogSpacer from "./BlogSpacer";
import { resolveBlockData } from "@/lib/blogAdapter";
import { normalizeCustomTemplateSettings } from "./customTemplateSettings";

afterEach(cleanup);

describe("Website Custom Template contracts", () => {
  it("normalizes missing settings to documented defaults and preserves unsupported values", () => {
    const normalized = normalizeCustomTemplateSettings({
      schemaVersion: 1,
      layoutId: "legacy",
      sections: [{ id: "legacy-section", layout: "full_width", slots: [{ id: "legacy-slot", components: [
        { id: "legacy-spacer", componentKey: "spacer", settings: { height: "small" } }
      ] }] }]
    });
    expect(normalized.page).toEqual({ contentWidth: "full", background: "white", spacing: "normal", typography: "editorial" });
    expect(normalized.sections[0]).toMatchObject({ enabled: true, responsiveStrategy: "stack_on_mobile", background: "white" });
    expect(normalized.sections[0].slots[0].components[0]).toMatchObject({ enabled: true, settings: { size: "small" } });
    expect(normalizeCustomTemplateSettings({ page: { contentWidth: "unsupported" } }).page.contentWidth).toBe("unsupported");
  });

  it("maps custom Hero metadata while keeping article-level title and cover data separate", () => {
    const data = resolveBlockData({ custom_instances: { hero_instance: {
      componentKey: "hero", category: "Retina", breadcrumb: ["Home", "Blog", "Retina"],
      reviewer: { name: "Dr. Rao", credentials: "MD" }, reading_time_minutes: 8
    } } }, "hero_instance", "hero", "", {}, "retina-guide");
    expect(data).toMatchObject({ category: "Retina", reviewer: { name: "Dr. Rao", role: "MD" }, readTime: "8 min read", slug: "retina-guide" });
  });

  it("uses independent Feedback and Share renderers with explicit capabilities", () => {
    expect(COMPONENT_MAP.feedback).not.toBe(COMPONENT_MAP.share);
    expect(COMPONENT_CAPABILITIES.feedback).toMatchObject({ editableInBlog: true, requiresBlockId: true, websiteRendererKey: "feedback" });
    expect(COMPONENT_CAPABILITIES.spacer).toMatchObject({ editableInBlog: false, requiresBlockId: false });
  });

  it("resolves main Rich Article Content from contentHtml and repeated Rich Article Content from custom_instances", () => {
    const blocksJson = {
      custom_instances: {
        rich_extra: { componentKey: "rich_article_content", enabled: true, html: "<p>Second rich article content</p>" }
      }
    };
    const mainData = resolveBlockData(blocksJson, "article_content", "rich_article_content", "<p>Main article body</p>");
    expect(mainData).toMatchObject({ id: "article_content", type: "richHtml", html: "<p>Main article body</p>" });

    const extraData = resolveBlockData(blocksJson, "rich_extra", "rich_article_content", "<p>Main article body</p>");
    expect(extraData).toMatchObject({ id: "rich_extra", type: "richHtml", html: "<p>Second rich article content</p>" });
  });

  it("honors Spacer size and Divider style contracts", () => {
    const { container } = render(<><BlogSpacer settings={{ size: "large" }} /><BlogDivider settings={{ style: "dashed" }} /></>);
    expect(container.firstElementChild).toHaveStyle({ height: "64px" });
    expect(container.querySelector("hr")?.className).toContain("dashed");
  });


  it("supports historical Spacer height and Divider variant records", () => {
    const { container } = render(<><BlogSpacer settings={{ height: "small" }} /><BlogDivider settings={{ variant: "dots" }} /></>);
    expect(container.firstElementChild).toHaveStyle({ height: "16px" });
    expect(container.querySelector("hr")?.className).toContain("dots");
  });
  it("renders enabled independent placements once and reports unknown components neutrally", () => {

    const blog = {
      slug: "custom-article",
      contentHtml: "",
      rawBlocksJson: { custom_instances: {
        feedback_one: { componentKey: "feedback", enabled: true, prompt: "Helpful?" },
        share_one: { componentKey: "share", enabled: true }
      } },
      templateConfigJson: {
        schemaVersion: 1,
        layoutId: "contract-layout",
        page: { contentWidth: "narrow", background: "soft_gray", spacing: "compact", typography: "modern" },
        sections: [{ id: "enabled", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, background: "sky", slots: [{ id: "slot", name: "Full", components: [
          { id: "feedback", componentKey: "feedback", blockId: "feedback_one", enabled: true, settings: { showPrompt: true } },
          { id: "share", componentKey: "share", blockId: "share_one", enabled: true, settings: { alignment: "right" } },
          { id: "unknown", componentKey: "future_component", enabled: true, settings: {} }
        ] }] }]
      }
    };
    const { container } = render(<CustomTemplateGrid blog={blog} />);
    expect(screen.getByText("Helpful?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Share article" })).toBeInTheDocument();
    expect(screen.getByText("This content is currently unavailable.")).toBeInTheDocument();
    expect(container.querySelectorAll('[data-component-key="feedback"]')).toHaveLength(1);
    expect(container.querySelector('[data-template-layout="contract-layout"]')).toBeInTheDocument();
    expect(container.querySelector('[data-responsive-strategy="stack_on_mobile"]')).toBeInTheDocument();
  });

  it("renders a custom Hero and a Medical CTA in separate slots of the same section", () => {
    const blog = {
      slug: "hero-and-cta",
      hero: { title: "Custom article title", excerpt: "Article excerpt", author: { name: "Pixel Eye" } },
      rawBlocksJson: { custom_instances: {
        hero_one: { componentKey: "hero", category: "Retina", breadcrumb: ["Home", "Blog", "Retina"], reviewer: { name: "Dr. Rao", credentials: "MD" }, reading_time_minutes: 6 },
        cta_one: { componentKey: "medical_cta", enabled: true, heading: "Protect your sight", description: "Book an examination.", primary: { label: "Book now", url: "/appointment" }, secondary: { label: "", url: "" } }
      } },
      templateConfigJson: {
        schemaVersion: 1, layoutId: "hero-cta-layout",
        page: { contentWidth: "wide", background: "brand_tint", spacing: "spacious", typography: "clinical" },
        sections: [{ id: "hero-cta", layout: "two_column", responsiveStrategy: "equal_columns", enabled: true, background: "slate", slots: [
          { id: "hero-slot", name: "Hero", components: [{ id: "hero", componentKey: "hero", blockId: "hero_one", enabled: true, settings: { height: "compact", alignment: "left", overlay: "strong" } }] },
          { id: "cta-slot", name: "CTA", components: [{ id: "cta", componentKey: "medical_cta", blockId: "cta_one", enabled: true, settings: { style: "blue", buttonLayout: "stacked" } }] }
        ] }]
      }
    };
    const { container } = render(<CustomTemplateGrid blog={blog} />);
    expect(screen.getByRole("heading", { name: "Custom article title" })).toBeInTheDocument();
    expect(screen.getByText("Retina")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Protect your sight" })).toBeInTheDocument();
    expect(container.querySelectorAll('[data-component-key="hero"]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-component-key="medical_cta"]')).toHaveLength(1);
  });

  it("omits disabled placements while rendering a settings-only Newsletter runtime card", () => {
    const blog = {
      slug: "runtime-card",
      rawBlocksJson: { custom_instances: {
        hidden_takeaways: { componentKey: "key_takeaways", enabled: true, heading: "Hidden takeaways", items: ["One"] }
      } },
      templateConfigJson: {
        schemaVersion: 1, layoutId: "runtime-layout",
        page: { contentWidth: "standard", background: "white", spacing: "normal", typography: "editorial" },
        sections: [{ id: "runtime", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, slots: [{ id: "runtime-slot", name: "Runtime", components: [
          { id: "hidden", componentKey: "key_takeaways", blockId: "hidden_takeaways", enabled: false, settings: { variant: "soft", columns: "one" } },
          { id: "newsletter", componentKey: "newsletter_card", enabled: true, settings: { heading: "Runtime newsletter", description: "Settings-only content", buttonLabel: "Join" } }
        ] }] }]
      }
    };
    const { container } = render(<CustomTemplateGrid blog={blog} />);
    expect(screen.queryByText("Hidden takeaways")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Runtime newsletter" })).toBeInTheDocument();
    expect(container.querySelector('[data-component-key="newsletter_card"]')).toBeInTheDocument();
  });

  it("preserves every registered section layout and responsive strategy on the Website", () => {
    const pairs = [
      ["full_width", "stack_on_mobile"],
      ["content_sidebar", "sidebar_below_on_tablet"],
      ["two_column", "equal_columns"],
      ["three_column", "three_to_two_to_one"]
    ];
    const blog = {
      rawBlocksJson: {},
      templateConfigJson: {
        schemaVersion: 1, layoutId: "responsive-layout",
        page: { contentWidth: "narrow", background: "soft_gray", spacing: "compact", typography: "modern" },
        sections: pairs.map(([layout, responsiveStrategy], index) => ({
          id: `section-${index}`, layout, responsiveStrategy, enabled: true, background: "sky",
          slots: Array.from({ length: index + 1 }, (_, slotIndex) => ({ id: `slot-${index}-${slotIndex}`, name: `Slot ${slotIndex}`, components: [] }))
        }))
      }
    };
    const { container } = render(<CustomTemplateGrid blog={blog} />);
    for (const [layout, responsiveStrategy] of pairs) {
      expect(container.querySelector(`[data-section-layout="${layout}"][data-responsive-strategy="${responsiveStrategy}"]`)).toBeInTheDocument();
    }
    expect(container.firstElementChild?.className).toContain("pageWidth_narrow");
    expect(container.querySelector('[data-section-layout="full_width"]')?.className).toContain("sectionBackground_sky");
   });

  it("carries a Data & Comparison Table instance through the full custom_instances pipeline", () => {
    const blog = {
      slug: "table-article",
      rawBlocksJson: { custom_instances: {
        table_one: {
          componentKey: "table",
          enabled: true,
          heading: "LASIK Treatment Comparison",
          content: "Compare the available treatment options.",
          headers: ["Procedure", "Recovery Time", "Success Rate"],
          rows: [["LASIK", "24 hours", "99%"], ["PRK", "3-5 days", "98%"]]
        }
      } },
      templateConfigJson: {
        schemaVersion: 1, layoutId: "table-layout",
        page: { contentWidth: "full", background: "white", spacing: "normal", typography: "editorial" },
        sections: [{ id: "table-section", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, slots: [{ id: "table-slot", name: "Main", components: [
          { id: "table", componentKey: "table", blockId: "table_one", enabled: true, settings: { variant: "striped", headerStyle: "brand_sky", alignment: "left", maxRows: 4, maxColumns: 4 } }
        ] }] }]
      }
    };
    const { container } = render(<CustomTemplateGrid blog={blog} />);
    expect(screen.getByRole("heading", { name: "LASIK Treatment Comparison" })).toBeInTheDocument();
    expect(screen.getByText("Procedure")).toBeInTheDocument();
    expect(screen.getByText("PRK")).toBeInTheDocument();
    expect(container.querySelectorAll('[data-component-key="table"]')).toHaveLength(1);
    expect(container.querySelectorAll("table thead th")).toHaveLength(3);
    expect(container.querySelectorAll("table tbody tr")).toHaveLength(2);
    expect(screen.queryByText("This content is currently unavailable.")).not.toBeInTheDocument();
  });

  it("maps every Page-level option and omits disabled Sections", () => {
    const options = [
      ["narrow", "soft_gray", "compact", "modern"],
      ["standard", "brand_tint", "normal", "clinical"],
      ["wide", "white", "spacious", "editorial"],
      ["full", "white", "normal", "editorial"],
    ];
    for (const [contentWidth, background, spacing, typography] of options) {
      const blog = {
        rawBlocksJson: {},
        templateConfigJson: {
          schemaVersion: 1,
          layoutId: `page-${contentWidth}`,
          page: { contentWidth, background, spacing, typography },
          sections: [
            { id: "visible", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: true, slots: [{ id: "visible-slot", components: [] }] },
            { id: "hidden", layout: "full_width", responsiveStrategy: "stack_on_mobile", enabled: false, slots: [{ id: "hidden-slot", components: [] }] },
          ],
        },
      };
      const view = render(<CustomTemplateGrid blog={blog} />);
      const page = view.container.firstElementChild;
      expect(page.className).toContain(`pageWidth_${contentWidth}`);
      expect(page.className).toContain(`pageBackground_${background}`);
      expect(page.className).toContain(`pageSpacing_${spacing}`);
      expect(page.className).toContain(`pageTypography_${typography}`);
      expect(view.container.querySelector('[data-section-layout="full_width"]')).toBeInTheDocument();
      expect(view.container.querySelector('#hidden')).not.toBeInTheDocument();
      view.unmount();
    }
  });
});
