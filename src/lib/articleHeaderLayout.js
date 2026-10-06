/**
 * Article-header placement.
 *
 * When a blog selects the "Article header" style, the hero is not shown as a full-width banner where the
 * template placed it. Instead it is rendered at the top of the first column of the first multi-column
 * section (e.g. Content + Sidebar), directly above the article content. Sections that only held the
 * hero are dropped so they leave no empty gap.
 *
 * Returns null when there is nothing to relocate (no hero / no multi-column section) so the hero then
 * simply renders where the template placed it.
 */
const HOST_LAYOUTS = ["content_sidebar", "two_column", "three_column"];

export function planArticleHeader(sections = [], heroComponent = null) {
  if (!heroComponent) return null;

  const active = sections.filter((section) => section.enabled !== false);
  const host = active.find((section) => HOST_LAYOUTS.includes(section.layout) && (section.slots || []).length >= 2);
  if (!host) return null;

  const emptiedSectionIds = new Set();
  active.forEach((section) => {
    if (section.id === host.id) return;
    const components = (section.slots || []).flatMap((slot) => (slot.components || []).filter((component) => component.enabled !== false));
    const hasHero = components.some((component) => component.id === heroComponent.id);
    const hasOtherContent = components.some((component) => component.id !== heroComponent.id);
    if (hasHero && !hasOtherContent) emptiedSectionIds.add(section.id);
  });

  return {
    heroId: heroComponent.id,
    hostSectionId: host.id,
    hostSlotId: host.slots[0].id,
    emptiedSectionIds,
  };
}
