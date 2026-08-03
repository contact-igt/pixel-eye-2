import React from "react";
import styles from "./CustomTemplateGrid.module.css";
import { COMPONENT_MAP } from "./ComponentMap";
import { resolveBlockData } from "@/lib/blogAdapter";
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
    settingClass("pageSpacing", page.spacing),
    settingClass("pageTypography", page.typography)
  ].filter(Boolean).join(" ");

  return (
    <div className={pageClassName} data-template-layout={templateConfig.layoutId || "custom"}>
      {enabledSections.map((section) => {
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
            {(section.slots || []).map((slot) => (
              <div key={slot.id} className={styles.slot} data-template-slot={slot.name || slot.id}>
                {(slot.components || []).filter((component) => component.enabled !== false).map((component) => {
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

                  return (
                    <div key={component.id || component.blockId} className={`${styles.blockWrapper} ${component.componentKey === "hero" ? styles.heroBlock : ""}`} data-component-key={component.componentKey}>
                      <Component
                        data={data}
                        featuredMedia={featuredMedia}
                        settings={component.settings || {}}
                        articleBlocks={allArticleBlocks}
                        variant="template-2"
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}
