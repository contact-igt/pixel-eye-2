import React from "react";
import styles from "./CustomTemplateGrid.module.css";
import { COMPONENT_MAP } from "./ComponentMap";
import BlogArticleHeader from "./BlogArticleHeader";
import { findFirstActiveHero, resolveBlockData } from "@/lib/blogAdapter";
import { planArticleHeader } from "@/lib/articleHeaderLayout";
import { normalizeCustomTemplateSettings, resolveSectionSettings } from "./customTemplateSettings";

function settingClass(prefix, value) {
  return value && styles[`${prefix}_${value}`] ? styles[`${prefix}_${value}`] : "";
}

export default function CustomTemplateGrid({ blog = {} }) {
  const templateConfig = normalizeCustomTemplateSettings(blog.templateConfigJson);
  const blocksJson = blog.rawBlocksJson || {};
  const contentHtml = blog.contentHtml || "";
  const featuredMedia = blog.featuredMedia || {};

  if (!templateConfig || !Array.isArray(templateConfig.sections)) return null;

  const enabledSections = templateConfig.sections.filter((section) => section.enabled !== false);
  // A page has a single Hero: extra Hero placements saved in older templates are ignored.
  const heroComponent = findFirstActiveHero(templateConfig);
  const primaryHeroId = heroComponent?.id;
  // "Article header" style: hero moves to the top of the first column of the first multi-column section.
  const articlePlan = blog.useArticleHeader ? planArticleHeader(enabledSections, heroComponent) : null;

  const ignoredHeroIds = new Set(
    enabledSections
      .flatMap((section) => (section.slots || []).flatMap((slot) => slot.components || []))
      .filter((component) => component.componentKey === "hero" && component.enabled !== false && component.id !== primaryHeroId)
      .map((component) => component.id)
  );
  const sectionIsOnlyIgnoredHeroes = (section) => {
    const active = (section.slots || []).flatMap((slot) => (slot.components || []).filter((component) => component.enabled !== false));
    return active.length > 0 && active.every((component) => ignoredHeroIds.has(component.id));
  };

  const allArticleBlocks = [];
  enabledSections.forEach((section) => {
    (section.slots || []).forEach((slot) => {
      (slot.components || []).filter((component) => component.enabled !== false).forEach((component) => {
        const blockData = resolveBlockData(blocksJson, component.blockId, component.componentKey, contentHtml, component.settings, blog.slug);
        if (blockData && blockData.enabled !== false) allArticleBlocks.push(blockData);
      });
    });
  });

  const page = templateConfig.page || {};
  const pageClassName = [
    styles.pageLayout,
    settingClass("pageWidth", page.contentWidth || page.width),
    settingClass("pageBackground", page.background || page.backgroundStyle),
    settingClass("pageSpacing", page.spacing),
    settingClass("pageTypography", page.typography)
  ].filter(Boolean).join(" ");

  function renderComponent(component, section, slot) {
    if (component.componentKey === "hero" && component.id !== primaryHeroId) return null;

    const Component = COMPONENT_MAP[component.componentKey];
    if (!Component) {
      if (process.env.NODE_ENV !== "production") console.warn(`[CustomTemplateGrid] Unknown component '${component.componentKey}' in ${section.id}/${slot.id}.`);
      return <div key={component.id} className={styles.unknownComponent} role="status">This content is currently unavailable.</div>;
    }

    const blockData = resolveBlockData(blocksJson, component.blockId, component.componentKey, contentHtml, component.settings, blog.slug);
    if (blockData?.enabled === false) return null;

    const data = component.componentKey === "hero"
      ? {
          ...blog.hero,
          ...(blockData || {}),
          title: blog.hero?.title || "",
          excerpt: blog.hero?.excerpt || "",
          coverImage: blog.hero?.coverImage,
          coverImageAlt: blog.hero?.coverImageAlt,
          author: blog.hero?.author,
          publishedAt: blog.hero?.publishedAt
        }
      : blockData;

    const Renderer = component.componentKey === "hero" && data?.headerStyle === "article" ? BlogArticleHeader : Component;

    return (
      <div key={component.id || component.blockId} className={`${styles.blockWrapper} ${component.componentKey === "hero" ? styles.heroBlock : ""}`} data-component-key={component.componentKey}>
        <Renderer
          data={data}
          featuredMedia={featuredMedia}
          settings={component.settings || {}}
          articleBlocks={allArticleBlocks}
          currentBlog={blog}
          suggestedBlogs={blog.suggestedBlogs || []}
          variant="template-2"
        />
      </div>
    );
  }

  return (
    <div className={pageClassName} data-template-layout={templateConfig.layoutId || "custom"}>
      {enabledSections.map((section) => {
        // Section that only contained the hero, which now lives in the article column.
        if (articlePlan?.emptiedSectionIds.has(section.id) || sectionIsOnlyIgnoredHeroes(section)) return null;

        const resolvedSettings = resolveSectionSettings(page, section.settings);

        const sectionClassName = [
          styles.contentContainer,
          styles[section.layout] || styles.full_width,
          styles[section.responsiveStrategy] || "",
          settingClass("sectionBackground", resolvedSettings.backgroundStyle),
          settingClass("pageWidth", resolvedSettings.width),
          settingClass("paddingTop", resolvedSettings.paddingTop),
          settingClass("paddingBottom", resolvedSettings.paddingBottom)
        ].filter(Boolean).join(" ");

        return (
          <section key={section.id} id={section.id} className={sectionClassName} data-section-layout={section.layout} data-responsive-strategy={section.responsiveStrategy}>
            {(section.slots || []).map((slot) => {
              const isArticleHost = Boolean(articlePlan) && section.id === articlePlan.hostSectionId && slot.id === articlePlan.hostSlotId;
              const components = (slot.components || [])
                .filter((component) => component.enabled !== false)
                .filter((component) => !(articlePlan && component.id === articlePlan.heroId));

              return (
                <div key={slot.id} className={styles.slot} data-template-slot={slot.name || slot.id}>
                  {isArticleHost ? renderComponent(heroComponent, section, slot) : null}
                  {components.map((component) => renderComponent(component, section, slot))}
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );
}
