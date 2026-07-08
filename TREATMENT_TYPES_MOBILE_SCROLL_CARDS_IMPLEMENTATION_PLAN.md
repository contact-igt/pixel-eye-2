# Treatment Types Mobile Scroll Cards Implementation Plan

## Goal

For the shared `TreatmentTypes` component, apply a mobile-only card scroll experience at `768px` and below.

When the user reaches this section while scrolling the page:

- The page should pause on the section.
- The user's continued scroll should progress through the treatment type cards.
- One full card should be visible at a time.
- The next card should appear after the previous card finishes its scroll step.
- Cards can have a drop shadow / stacked feel.
- After the final card is completed, normal page scrolling should continue to the next section.

This should apply to all pages using:

```text
src/common/Treatment/TreatmentTypes/index.jsx
src/common/Treatment/TreatmentTypes/styles.module.css
```

Examples:

- `/service/glaucoma`
- `/service/keratoconus`
- `/service/retina`
- `/service/pediatric`
- `/service/squint`

## Current Behavior

The shared `TreatmentTypes` component renders:

- Desktop carousel in `.treatment-types__cards-wrapper`
- Mobile card list in `.treatment-types__mobile-list`

Current mobile behavior at `768px` and below:

```jsx
const mobileSlides = data.slides;
```

So mobile now renders all cards from the same source as desktop.

Current mobile CSS displays the cards as either:

- A vertical grid/list for most mobile widths
- A horizontal scroll rail for `577px-768px`
- Special stacked grid behavior for Glaucoma

This is normal document scrolling. The section does not currently pin or consume scroll progress.

## Required UX

At `max-width: 768px`, the component should behave like a scroll-driven card stack:

1. User scrolls normally until the `TreatmentTypes` section reaches the active viewport position.
2. Section becomes sticky/pinned.
3. Scroll input advances the active card.
4. Only one card is fully visible at a time.
5. Optional: the next card can appear slightly below/behind with drop shadow.
6. After the last card is reached and completed, the page continues to the next section.

## Recommended Implementation Approach

Use CSS sticky plus scroll progress, not manual wheel locking.

This avoids fragile behavior on mobile browsers and keeps touch scrolling natural.

### Structure

Add an outer mobile scroll area around the mobile list:

```jsx
<div className={styles["treatment-types__mobile-scroll"]}>
  <div className={styles["treatment-types__mobile-sticky"]}>
    <div className={styles["treatment-types__mobile-list"]}>
      {mobileSlides.map(...)}
    </div>
  </div>
</div>
```

Only use this structure visually at `max-width: 768px`.

Desktop/tablet carousel should remain unchanged.

### Height Strategy

The scroll area must create enough page height for all cards:

```css
.treatment-types__mobile-scroll {
  height: calc(var(--mobile-card-count) * 100vh);
}
```

The sticky area remains visible:

```css
.treatment-types__mobile-sticky {
  position: sticky;
  top: 0;
  min-height: 100vh;
}
```

The card count can be passed from JSX:

```jsx
style={{ "--mobile-card-count": mobileSlides.length }}
```

### Card Display

Use one full card per viewport.

Base mobile card:

```css
.treatment-types__mobile-card {
  min-height: min(72vh, 520px);
  box-shadow: 0 18px 36px rgba(39, 57, 121, 0.14);
}
```

For a stacked feel:

```css
.treatment-types__mobile-card {
  position: sticky;
  top: clamp(84px, 12vh, 120px);
}
```

Each card can get a small vertical offset using its index:

```jsx
style={{ "--card-index": index }}
```

```css
.treatment-types__mobile-card {
  transform: translateY(calc(var(--card-index) * 8px));
}
```

## Important Implementation Detail

Avoid JavaScript wheel event locking if possible.

Do not use:

- `preventDefault()` on wheel/touchmove
- `position: fixed` scroll traps
- global body scroll locking

Those approaches often break mobile browser scrolling, address-bar resize behavior, and accessibility.

Prefer:

- `position: sticky`
- natural document height
- CSS scroll snap or sticky stacking

## Suggested CSS Direction

At `max-width: 768px`:

```css
.treatment-types__mobile-scroll {
  display: block;
  height: calc(var(--mobile-card-count, 1) * 100vh);
}

.treatment-types__mobile-sticky {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 100vh;
}

.treatment-types__mobile-list {
  display: grid;
  gap: 18px;
  width: 100%;
}

.treatment-types__mobile-card {
  min-height: min(72vh, 520px);
  border-radius: 14px;
  box-shadow: 0 18px 36px rgba(39, 57, 121, 0.14);
}
```

If true one-card-at-a-time behavior is required, use scroll snap inside the mobile section:

```css
.treatment-types__mobile-list {
  max-height: 78vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.treatment-types__mobile-card {
  scroll-snap-align: start;
}
```

But if the page itself must drive the card progress, use sticky card stacking instead of an internal scroll container.

## Recommended Build Steps

1. Update `TreatmentTypes/index.jsx`
   - Keep `mobileSlides = data.slides`.
   - Wrap mobile list in a mobile scroll container.
   - Pass `--mobile-card-count`.
   - Pass `--card-index` to each card.

2. Update `TreatmentTypes/styles.module.css`
   - Only add behavior inside `@media (max-width: 768px)`.
   - Keep desktop `.treatment-types__cards-wrapper` unchanged.
   - Keep existing mobile banner/copy layout.
   - Replace normal mobile card list flow with sticky/scroll-stacked behavior.

3. Check Glaucoma-specific mobile overrides
   - Existing Glaucoma CSS currently customizes:

```css
.treatment-types[data-treatment-slug="glaucoma"] .treatment-types__mobile-list
.treatment-types[data-treatment-slug="glaucoma"] .treatment-types__mobile-card
```

   - Ensure those rules do not undo the new shared sticky behavior.
   - If needed, move Glaucoma differences to spacing/font/card height only.

4. Test pages using `TreatmentTypes`
   - `/service/glaucoma`
   - `/service/keratoconus`
   - `/service/retina`
   - `/service/pediatric`
   - `/service/squint`

5. Verify at viewport widths
   - `768px`
   - `674px`
   - `430px`
   - `390px`
   - `320px`

6. Run:

```bash
npm run build
```

## Risk Areas

- Sticky behavior can fail if a parent has `overflow: hidden`.
- This component currently uses `overflow: hidden` in some mobile/tablet rules.
- Any parent wrapping the sticky element should avoid `overflow: hidden` unless needed.
- Glaucoma-specific mobile rules may override the shared mobile list/card behavior.
- Very tall card content can exceed viewport height on small phones.

## Acceptance Criteria

- At `768px` and below, all treatment type cards are present on mobile.
- The section does not skip cards.
- One full card is readable at a time.
- Continued page scroll progresses through cards.
- After the last card, the next section scrolls normally.
- Desktop and `769px+` behavior remains unchanged.
- `npm run build` passes.

