import React from "react";
import styles from "./CustomTemplateGrid.module.css";
import { COMPONENT_MAP } from "./ComponentMap";
import { resolveBlockData } from "@/lib/blogAdapter";

export default function CustomTemplateGrid({ blog = {} }) {
  const templateConfig = blog.templateConfigJson;
  const blocksJson = blog.rawBlocksJson || {};
  const contentHtml = blog.contentHtml || "";
  const featuredMedia = blog.featuredMedia || {};

  if (!templateConfig || !Array.isArray(templateConfig.sections)) {
    return null;
  }

  // Collect all resolved blocks across sections for TOC / Sidebar navigation
  const allArticleBlocks = [];
  templateConfig.sections.forEach((sec) => {
    (sec.slots || []).forEach((slot) => {
      (slot.components || []).forEach((comp) => {
        const bData = resolveBlockData(blocksJson, comp.blockId, comp.componentKey, contentHtml, comp.settings);
        if (bData && bData.enabled !== false) {
          allArticleBlocks.push(bData);
        }
      });
    });
  });

  return (
    <div className={styles.pageLayout}>
      {templateConfig.sections
        .filter((section) => section.enabled !== false)
        .map((section) => {
          // Check if this section contains the Hero Banner component
          const isHeroSection = (section.slots || []).some((slot) =>
            (slot.components || []).some((comp) => comp.componentKey === "hero")
          );

          // Apply heroSection for Hero, or contentContainer for standard sections
          const sectionWrapperClass = isHeroSection
            ? styles.heroSection
            : `${styles.contentContainer} ${styles[section.layout] || styles.full_width} ${styles[section.responsiveStrategy] || ""}`;

          return (
            <section key={section.id} className={sectionWrapperClass}>
              {(section.slots || []).map((slot) => (
                <div key={slot.id} className={styles.slot}>
                  {(slot.components || [])
                    .filter((comp) => comp.enabled !== false)
                    .map((comp) => {
                      const Component = COMPONENT_MAP[comp.componentKey];
                      if (!Component) return null;

                      // Special case for Hero component
                      if (comp.componentKey === "hero") {
                        return (
                          <div key={comp.id} className={styles.blockWrapper}>
                            <Component variant="template-2" data={blog.hero} />
                          </div>
                        );
                      }

                      // Resolve data for this specific blockId
                      const blockData = resolveBlockData(
                        blocksJson,
                        comp.blockId,
                        comp.componentKey,
                        contentHtml,
                        comp.settings
                      );

                      if (blockData && blockData.enabled === false) {
                        return null;
                      }

                      return (
                        <div key={comp.id || comp.blockId} className={styles.blockWrapper}>
                          <Component
                            data={blockData}
                            featuredMedia={featuredMedia}
                            settings={comp.settings}
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
