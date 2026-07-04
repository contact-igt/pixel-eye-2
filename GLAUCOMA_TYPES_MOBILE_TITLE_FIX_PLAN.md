# Glaucoma TreatmentTypes — Mobile Title Fix (≤768px) — UPDATED

## What the Figma Shows (Glaucoma Mobile)

```
┌──────────────────────────────────────────┐
│  Types of Glaucoma        [woman photo]  │  ← title OVERLAID on banner image
│                         ⬤ ⬤ ⬤ ⬤ ⬤     │  ← circular card thumbnails in image
└──────────────────────────────────────────┘
Different types of glaucoma affect the eye
in different ways. Identifying the type
helps plan the right treatment.             ← description BELOW banner (normal flow)

[ Open-Angle ]  [ Normal-Tension ]  …       ← card slider below
```

**Key point confirmed by Figma:** The `h2` title IS overlaid on the banner image (`position: absolute`). The description `p` is below the image (`position: static`). This is exactly the same structural pattern as squint / pediatric / retina.

---

## ⚠️ Correction from Previous Plan

The previous plan (Step 3) incorrectly stated:

> _"reset absolute — flows below the image"_ with `position: static` on `h2`

**This was wrong.** The Figma clearly shows the title ON TOP of the banner image. The previous plan would have broken the glaucoma layout.

---

## Actual Issues to Fix

After reading the current CSS, there are **two real bugs** in the shared mobile block that affect glaucoma specifically:

### Bug 1 — Broken `clamp()` on h2 font-size
```css
/* current — min = max = 37px, so font is ALWAYS exactly 37px regardless of viewport */
font-size: clamp(37px, 6.1vw, 37px);
```
"Types of Glaucoma" is a longer string than "Types of Squint" — at 37px it may overflow or wrap badly inside `width: min(50%, 230px)`.

### Bug 2 — h2 `width` too narrow for the glaucoma title
```css
width: min(50%, 230px);   /* caps at 230px — too tight for "Types of Glaucoma" */
```
At a 660px viewport, 50% = 330px but the cap is 230px, which is not wide enough for the 3-word glaucoma title at a legible size.

### Bug 3 — `mobileSrc` re-uses the desktop image
`types.png` (4083 × 1233px landscape) is used for both desktop and mobile. The mobile image rendition uses `object-fit: contain` on a very wide image which may show large empty gaps on a narrow screen. A dedicated mobile crop should be provided eventually, but a CSS `object-fit: cover` with `object-position: right center` will improve this in the interim.

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

---

### Step 2 — Apply slug modifier class on `<section>`

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
  className={`${styles["treatment-types"]}${slug && slug !== "treatment" ? ` ${styles[`treatment-types--${slug}`] || ""}` : ""}`}
  aria-labelledby={`${slug}-types-title`}
>
```

> Classes like `treatment-types--squint`, `treatment-types--pediatric`, etc. have no CSS rules — they are silently ignored. Only `treatment-types--glaucoma` will have rules, so zero other pages are affected.

---

### Step 3 — Add glaucoma-specific mobile CSS at end of stylesheet

**File:** `src/common/Treatment/TreatmentTypes/styles.module.css`

Add at the **very end**, after all existing media queries:

```css
/* ── Glaucoma: title overlay + image adjustments at mobile ── */
@media (max-width: 768px) {

  /* Fix the broken clamp (was 37px–37px) and allow enough width for 3-word title */
  .treatment-types--glaucoma .treatment-types__copy h2 {
    width: min(62%, 290px);
    font-size: clamp(28px, 6.4vw, 44px);
    line-height: 1.06;
  }

  /* Use cover so the wide desktop image fills without empty bars */
  .treatment-types--glaucoma .treatment-types__image--mobile {
    object-fit: cover;
    object-position: right center;
    aspect-ratio: 16 / 5;       /* matches approximate crop of types.png */
  }
}

@media (max-width: 576px) {
  .treatment-types--glaucoma .treatment-types__copy h2 {
    width: min(65%, 260px);
    font-size: clamp(24px, 7.4vw, 34px);
  }
}

@media (max-width: 430px) {
  .treatment-types--glaucoma .treatment-types__copy h2 {
    width: min(60%, 220px);
    font-size: clamp(22px, 6.8vw, 28px);
  }
}

@media (max-width: 390px) {
  .treatment-types--glaucoma .treatment-types__copy h2 {
    font-size: clamp(20px, 6.2vw, 25px);
  }
}
```

**What each rule does:**

| Rule | Why |
|------|-----|
| `width: min(62%, 290px)` | "Types of Glaucoma" (3 words) needs more width than `min(50%, 230px)` |
| `font-size: clamp(28px, 6.4vw, 44px)` | Fixes the broken `clamp(37px, 6.1vw, 37px)` — scales properly with viewport |
| `object-fit: cover; object-position: right center` | Avoids letterboxing the wide desktop image; keeps the woman's face in frame |
| `aspect-ratio: 16 / 5` | Sets a sensible crop height (~200px at 660px width) matching the Figma banner height |

---

## Files Changed

| File | Change |
|------|--------|
| `src/pagecomponent/TreatmentPage/index.jsx` | Pass `slug={t.slug}` to `<TreatmentTypes>` |
| `src/common/Treatment/TreatmentTypes/index.jsx` | Apply `treatment-types--{slug}` modifier class on `<section>` |
| `src/common/Treatment/TreatmentTypes/styles.module.css` | Add glaucoma `@media` overrides at end of file |

## Impact

| Page | ≤768px behaviour | Changed? |
|------|-----------------|----------|
| Squint | title overlaid on banner ✅ | ❌ No |
| Pediatric | title overlaid on banner ✅ | ❌ No |
| Retina | title overlaid on banner ✅ | ❌ No |
| Lasik | no banner image | ❌ No |
| Cataract | no banner image | ❌ No |
| **Glaucoma** | **title overlaid, correct size + image crop** | ✅ Yes |

## Future Improvement

When a dedicated mobile crop of the glaucoma types banner is ready:
- Add it to `serviceglaucomaContent.js` → `types.image.mobileSrc: "/assets/Service/glaucoma/types_mobile.png"`
- Remove the `aspect-ratio` and `object-fit` overrides from the glaucoma CSS block above


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
