# Glaucoma TreatmentTypes — Mobile Title Fix (≤768px)

## Problem

`TreatmentTypes` is a shared component used by all treatment pages (squint, pediatric, retina, glaucoma, etc.).

At **≤768px** the current CSS does:

```css
/* TreatmentTypes/styles.module.css  @media (max-width: 768px) */
.treatment-types__copy h2 {
  position: absolute;           /* floats ON TOP of banner image */
  top: clamp(24px, 7.2vw, 54px);
  left: clamp(18px, 4.4vw, 34px);
  …
}
```

This is **correct** for squint / pediatric / retina — the Figma places the title as an overlay on the banner photo.

For **glaucoma** the Figma shows the title + description sitting **below** the mobile banner image (not overlaid), matching the layout:

```
[ glaucoma mobile banner image ]
Types of Glaucoma              ← below image, in normal flow
Different types of glaucoma…   ← description also below
[ card slider ]
```

## Root Cause

`TreatmentPage` passes `data` and `slug` to most common components but **does not pass `slug` to `TreatmentTypes`**, so the component cannot distinguish which page it is rendering for.

---

## Implementation Plan — 3 Steps

---

### Step 1 — Pass `slug` to `TreatmentTypes` in `TreatmentPage`

**File:** `src/pagecomponent/TreatmentPage/index.jsx`

**Current:**
```jsx
types: (t) =>
  t.types ? <TreatmentTypes key="types" data={t.types} /> : null,
```

**Change to:**
```jsx
types: (t) =>
  t.types ? <TreatmentTypes key="types" data={t.types} slug={t.slug} /> : null,
```

`TreatmentTypes` already has `slug = "treatment"` in its prop signature — no JSX changes needed inside the component itself beyond the modifier class (Step 2).

---

### Step 2 — Apply slug modifier class on the section element

**File:** `src/common/Treatment/TreatmentTypes/index.jsx`

**Current:**
```jsx
<section
  className={styles["treatment-types"]}
  aria-labelledby={`${slug}-types-title`}
>
```

**Change to:**
```jsx
<section
  className={`${styles["treatment-types"]}${slug !== "treatment" ? ` ${styles[`treatment-types--${slug}`]}` : ""}`}
  aria-labelledby={`${slug}-types-title`}
>
```

> This adds `treatment-types--glaucoma` (or any other slug) as a second class, leaving all other pages completely unaffected since `treatment-types--squint` / `treatment-types--pediatric` etc. have no CSS rules and are silently ignored.

---

### Step 3 — Add glaucoma-specific mobile override CSS

**File:** `src/common/Treatment/TreatmentTypes/styles.module.css`

Add at the **very end** of the file (after all existing media queries):

```css
/* ── Glaucoma: title + description below the banner on mobile ── */
@media (max-width: 768px) {
  .treatment-types--glaucoma .treatment-types__copy h2 {
    position: static;         /* reset absolute — flows below the image */
    width: 100%;
    max-width: none;
    top: unset;
    left: unset;
    font-size: clamp(32px, 6vw, 44px);
    line-height: 1.08;
    pointer-events: auto;
  }
}

@media (max-width: 576px) {
  .treatment-types--glaucoma .treatment-types__copy h2 {
    font-size: clamp(28px, 8vw, 36px);
  }
}

@media (max-width: 390px) {
  .treatment-types--glaucoma .treatment-types__copy h2 {
    font-size: clamp(26px, 7.5vw, 32px);
  }
}
```

**Why this works:**

- The base `@media (max-width: 768px)` block already sets `.treatment-types__copy { position: static; margin-top: 24px }` and `.treatment-types__copy p { position: static }`.
- Only the `h2` is made `position: absolute` in the shared CSS.
- The glaucoma override resets `h2` to `position: static` so both title and description flow in the normal document order **below** the mobile banner image, matching the Figma.
- No other page is affected — their slugs produce class names with no matching CSS rules.

---

## Files Changed

| File | Change |
|------|--------|
| `src/pagecomponent/TreatmentPage/index.jsx` | Pass `slug={t.slug}` to `<TreatmentTypes>` |
| `src/common/Treatment/TreatmentTypes/index.jsx` | Apply `treatment-types--{slug}` modifier class |
| `src/common/Treatment/TreatmentTypes/styles.module.css` | Add `@media` overrides for `.treatment-types--glaucoma` |

## Impact

| Page | ≤768px behaviour | Changed? |
|------|-----------------|----------|
| Squint | title overlaid on banner | ❌ No |
| Pediatric | title overlaid on banner | ❌ No |
| Retina | title overlaid on banner | ❌ No |
| Lasik | no banner image | ❌ No |
| Cataract | no banner image | ❌ No |
| **Glaucoma** | **title + description below banner** | ✅ Yes |
