export const CUSTOM_TEMPLATE_SETTING_VALUES = Object.freeze({
  contentWidth: ["narrow", "standard", "wide", "full"],
  pageBackground: ["white", "soft_gray", "brand_tint"],
  spacing: ["compact", "normal", "spacious"],
  typography: ["editorial", "modern", "clinical"],
  sectionLayout: ["full_width", "content_sidebar", "two_column", "three_column"],
  responsiveStrategy: ["stack_on_mobile", "sidebar_below_on_tablet", "equal_columns", "main_sidebar", "three_to_two_to_one"],
  sectionBackground: ["white", "slate", "sky"],
});

export const DEFAULT_CUSTOM_TEMPLATE_PAGE_SETTINGS = Object.freeze({
  contentWidth: "full",
  background: "white",
  spacing: "normal",
  typography: "editorial",
});

export function normalizeCustomTemplateSettings(rawConfig) {
  if (!rawConfig || typeof rawConfig !== "object" || Array.isArray(rawConfig)) return rawConfig;
  const config = JSON.parse(JSON.stringify(rawConfig));
  const page = config.page && typeof config.page === "object" && !Array.isArray(config.page) ? config.page : {};
  config.page = { ...DEFAULT_CUSTOM_TEMPLATE_PAGE_SETTINGS, ...page };
  if (!Array.isArray(config.sections)) return config;
  config.sections = config.sections.map((rawSection) => {
    if (!rawSection || typeof rawSection !== "object" || Array.isArray(rawSection)) return rawSection;
    const legacyBackground = rawSection.background ?? "white";
    
    const section = {
      ...rawSection,
      enabled: rawSection.enabled ?? true,
      responsiveStrategy: rawSection.responsiveStrategy ?? (rawSection.layout === "content_sidebar" ? "sidebar_below_on_tablet" : "stack_on_mobile"),
      settings: {
        width: "inherit",
        backgroundStyle: legacyBackground,
        paddingTop: "inherit",
        paddingBottom: "inherit",
        ...(rawSection.settings || {})
      }
    };
    
    delete section.background;

    if (!Array.isArray(rawSection.slots)) return section;
    section.slots = rawSection.slots.map((rawSlot) => {
      if (!rawSlot || typeof rawSlot !== "object" || Array.isArray(rawSlot) || !Array.isArray(rawSlot.components)) return rawSlot;
      return {
        ...rawSlot,
        components: rawSlot.components.map((rawComponent) => {
          if (!rawComponent || typeof rawComponent !== "object" || Array.isArray(rawComponent)) return rawComponent;
          const settings = rawComponent.settings && typeof rawComponent.settings === "object" && !Array.isArray(rawComponent.settings)
            ? { ...rawComponent.settings }
            : {};
          if (rawComponent.componentKey === "spacer" && settings.size === undefined && settings.height !== undefined) {
            settings.size = settings.height;
            delete settings.height;
          }
          if (rawComponent.componentKey === "divider" && settings.style === undefined && settings.variant !== undefined) {
            settings.style = settings.variant === "dots" ? "dashed" : settings.variant;
            delete settings.variant;
          }
          return { ...rawComponent, enabled: rawComponent.enabled ?? true, settings };
        }),
      };
    });
    return section;
  });
  return config;
}

export function resolveSectionSettings(
  pageSettings,
  sectionSettings
) {
  return {
    width: sectionSettings?.width && sectionSettings.width !== 'inherit' ? sectionSettings.width : pageSettings?.contentWidth,
    backgroundStyle: sectionSettings?.backgroundStyle && sectionSettings.backgroundStyle !== 'inherit' ? sectionSettings.backgroundStyle : pageSettings?.background,
    paddingTop: sectionSettings?.paddingTop && sectionSettings.paddingTop !== 'inherit' ? sectionSettings.paddingTop : pageSettings?.spacing,
    paddingBottom: sectionSettings?.paddingBottom && sectionSettings.paddingBottom !== 'inherit' ? sectionSettings.paddingBottom : pageSettings?.spacing,
  };
}
