# Pediatric Diagnosis Responsive Min-Height Plan

## Target Issue

The Pediatric diagnosis section breaks between `1200px` and `992px`, especially around `1140px`, when the panel uses a fixed value such as:

```css
min-height: 860px;
```

The issue appears in:

```text
src/component/Service-Pediatric/howSquintIsDiagnosed/styles.module.css
```

The affected section is:

```css
.squint-diagnosis__panel
.squint-diagnosis__treatments
.squint-diagnosis__treatment-card
```

## Root Cause

The current CSS has multiple overlapping responsive rules for the same section:

- Base `.squint-diagnosis__panel` uses a large desktop `min-height`.
- `@media (max-width: 1200px)` changes the panel, treatments, and card heights.
- `@media (max-width: 992px)` changes the layout to stacked/mobile behavior.
- Later duplicate rules again override card margins, row gaps, and 4th-card placement.

Because `max-width: 1200px` applies all the way down to `0px`, a fixed `min-height: 860px` also affects the transition area near `1140px`. The layout then conflicts with the next breakpoint at `992px`, where the section should become more natural and stacked.

## Correct Responsive Strategy

Do not use a single fixed `min-height` for the whole `1200px` range.

Use a bounded range for the desktop-tablet transition:

```css
@media (min-width: 993px) and (max-width: 1200px) {
  .squint-diagnosis__panel {
    min-height: clamp(720px, 72vw, 860px);
  }
}
```

Then reset the panel at `992px` and below:

```css
@media (max-width: 992px) {
  .squint-diagnosis__panel {
    min-height: 0;
    height: auto;
    aspect-ratio: auto;
  }
}
```

This keeps the Figma-like height in the `1200px -> 993px` range, but avoids carrying a desktop min-height into the stacked tablet/mobile layout.

## Implementation Plan

### 1. Consolidate Panel Height Rules

In `src/component/Service-Pediatric/howSquintIsDiagnosed/styles.module.css`, add one final override near the bottom of the file so it wins over earlier duplicate rules:

```css
/* Pediatric diagnosis: responsive panel handoff */
@media (min-width: 993px) and (max-width: 1200px) {
  .squint-diagnosis__panel {
    min-height: clamp(720px, 72vw, 860px);
    height: auto;
    aspect-ratio: auto;
  }
}

@media (max-width: 992px) {
  .squint-diagnosis__panel {
    min-height: 0;
    height: auto;
    aspect-ratio: auto;
  }
}
```

### 2. Make Treatments Follow Panel Height

The treatments currently rely on negative margins such as `margin-top: -438px`. Keep this only in the desktop-tablet range, and reset at `992px`:

```css
@media (min-width: 993px) and (max-width: 1200px) {
  .squint-diagnosis__treatments {
    margin-top: clamp(-438px, -36vw, -360px);
    row-gap: clamp(28px, 3vw, 44px);
  }
}

@media (max-width: 992px) {
  .squint-diagnosis__treatments {
    margin-top: 28px;
    row-gap: 24px;
  }
}
```

### 3. Remove Unsafe Fixed Inspector Values

Do not keep:

```css
min-height: 860px;
```

as a plain rule inside `@media (max-width: 1200px)`.

If `860px` is needed visually, it should be the upper bound of a clamp:

```css
min-height: clamp(720px, 72vw, 860px);
```

### 4. Keep `1201px-1400px` Separate

The existing `1201px-1400px` fix should stay range-scoped:

```css
@media (min-width: 1201px) and (max-width: 1400px) {
  .squint-diagnosis__treatment-card:nth-child(1) {
    margin-top: 40px;
  }
}
```

Do not use `@media (max-width: 1400px)` for this margin, because it leaks into `1200px`, `992px`, and mobile.

### 5. Verification Checklist

After implementation, test these widths in responsive mode:

- `1400px`
- `1280px`
- `1200px`
- `1140px`
- `1024px`
- `992px`
- `768px`

Expected behavior:

- `1201px-1400px`: Figma desktop layout remains intact.
- `993px-1200px`: panel height scales with viewport and does not collide with the treatment cards.
- `992px and below`: panel becomes natural height and stacked layout no longer inherits desktop min-height.
- No manual `margin-top: 40px` should affect widths below `1201px`.

## Stop Rule

Run:

```bash
npm run build
```

Then verify `/service/pediatric` visually at `1140px`, `1024px`, and `992px` before making further spacing tweaks.
