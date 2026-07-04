# TreatmentBanner `What is...` Variants Implementation Plan

## Goal

Move the already-created page-specific `What is...` UI patterns into the shared `src/common/Treatment/TreatmentBanner` flow without breaking the treatment pages that already use the generic banner/explainer layout.

Pages that need page-specific `What is...` layouts:

- Cataract: port the existing `ServiceCataract/banner` explainer markup/CSS into common `TreatmentBanner`.
- LASIK: port the existing `ServiceLasik/banner` `What is LASIK?` cutout + glasses comparison markup/CSS into common `TreatmentBanner`.
- Squint: port the existing `ServiceSquint/banner` explainer markup/CSS into common `TreatmentBanner`.
- Keratoconus: port the existing `ServiceKeratoconus/whatIsKeratoconus` markup/CSS into common `TreatmentBanner`.

Pages that should remain unchanged:

- Pediatric
- Retina
- Glaucoma

---

## Current State

### Shared Banner

File: `src/common/Treatment/TreatmentBanner/index.jsx`

The shared component currently renders one generic explainer style:

```jsx
<section className={styles["treatment-explainer"]}>
  <h1 className={styles["treatment-explainer__title"]}>{explainer.title}</h1>
  <div className={styles["treatment-explainer__copy"]}>...</div>
  {explainer.image && <div className={styles["treatment-explainer__visual"]}>...</div>}
</section>
```

This is suitable for pediatric / retina / glaucoma, but not exact for cataract / LASIK / squint / keratoconus.

### Existing Page-Specific UI References

These files are **reference sources only**. Do not import these components into `src/common/Treatment/TreatmentBanner`. Copy/adapt the needed JSX structure and CSS rules into the common banner component, then later the old page-specific folders can be deleted safely.

| Page | Existing code to port from | Notes |
|------|--------------------------|-------|
| Cataract | `src/component/ServiceCataract/banner/index.jsx` + `styles.module.css` | Has `cataract-explainer` layout with image on right and custom spacing/negative offset. |
| LASIK | `src/component/ServiceLasik/banner/index.jsx` + `styles.module.css` | Places `What is LASIK?` inside the hero image cutout, paragraphs below, then comparison image. |
| Squint | `src/component/ServiceSquint/banner/index.jsx` + `styles.module.css` | Has `squint-explainer` grid with title offset, copy/loader, and visual image. |
| Keratoconus | `src/component/ServiceKeratoconus/whatIsKeratoconus/index.jsx` + `styles.module.css` | Already a separate `whatIsKeratoconus` section after banner. Should be folded into common banner as the keratoconus explainer variant. |

---

## Recommended Architecture

Add a small `explainer.variant` switch to `TreatmentBanner` and keep all variants inside the common banner component.

Important implementation rule:

- Do **not** import `ServiceCataract/banner`, `ServiceLasik/banner`, `ServiceSquint/banner`, or `ServiceKeratoconus/whatIsKeratoconus` into the common component.
- Do **not** render those old components from `TreatmentBanner`.
- Use those files only as a blueprint and port their `What is...` JSX/CSS into `TreatmentBanner` using shared class names and variant modifiers.
- After all pages are completed and verified, the old page-specific folders can be removed separately.

Use one shared component, but render different markup/classes based on data:

```js
explainer: {
  variant: "cataract" | "lasik" | "squint" | "keratoconus" | undefined,
  ...existingData
}
```

Default behavior remains unchanged when `variant` is missing.

---

## Step 1 — Pass `slug` to `TreatmentBanner`

File: `src/pagecomponent/TreatmentPage/index.jsx`

Current:

```jsx
banner: (t) => <TreatmentBanner key="banner" data={t.banner} />,
```

Change to:

```jsx
banner: (t) => <TreatmentBanner key="banner" data={t.banner} slug={t.slug} />,
```

Why:

- Gives `TreatmentBanner` a safe page-level modifier class.
- Enables scoped styles such as `.treatment-detail--lasik`.
- Other pages are unaffected unless they define matching CSS.

---

## Step 2 — Add Variants in Treatment Configs / Constants

### Cataract

File: `src/constant/serviceCataractContent.js`

Inside `banner.explainer`, add:

```js
variant: "cataract",
```

### LASIK

File: `src/constant/serviceLasikContent.js`

Inside `banner.explainer`, add:

```js
variant: "lasik",
```

Keep existing:

```js
comparison: {
  image: {
    src: "/assets/Service/Lasik/glasses.png",
    alt: "Normal Vision vs Refractive Error comparison through glasses",
  },
},
```

The asset already exists at:

```txt
public/assets/Service/Lasik/glasses.png
```

### Squint

File: `src/constant/serviceSquintContent.js`

Inside `banner.explainer`, add:

```js
variant: "squint",
```

### Keratoconus

Best option: attach `whatIsKeratoconus` to `banner.explainer` in the treatment config, not by duplicating content.

File: `src/constant/treatments/keratoconus.js`

Current:

```js
banner: SERVICE_KERATOCONUS_CONTENT.banner,
```

Change to:

```js
banner: {
  ...SERVICE_KERATOCONUS_CONTENT.banner,
  explainer: {
    ...SERVICE_KERATOCONUS_CONTENT.whatIsKeratoconus,
    variant: "keratoconus",
  },
},
```

Then remove `"whatIsKeratoconus"` from `sections` because the section will now render as part of `TreatmentBanner`.

---

## Step 3 — Update `TreatmentBanner` Component

File: `src/common/Treatment/TreatmentBanner/index.jsx`

Change signature:

```jsx
const TreatmentBanner = ({ data, slug = "treatment" }) => {
```

Read additional fields:

```jsx
const { hero, explainer, comparison } = data;
const variant = explainer?.variant;
const isLasik = variant === "lasik";
```

No imports from the old page-specific banner components should be added. All rendering must stay inside this common component.

Add a scoped root class:

```jsx
const rootClassName = `${styles["treatment-detail"]}${
  styles[`treatment-detail--${slug}`] ? ` ${styles[`treatment-detail--${slug}`]}` : ""
}`;
```

Use it:

```jsx
<div className={rootClassName}>
```

### LASIK special title placement

Inside `.treatment-hero-wrap`, after `HeroBanner`, render:

```jsx
{isLasik && explainer?.title && (
  <h2
    id={`${slug}-explainer-title`}
    className={styles["treatment-explainer__cutout-title"]}
  >
    {explainer.title}
  </h2>
)}
```

Then do not render the normal explainer title when `variant === "lasik"`.

### Explainer section class

Use a variant class on the explainer section:

```jsx
const explainerClassName = `${styles["treatment-explainer"]}${
  variant && styles[`treatment-explainer--${variant}`]
    ? ` ${styles[`treatment-explainer--${variant}`]}`
    : ""
}`;
```

Use:

```jsx
<section className={explainerClassName} aria-labelledby={`${slug}-explainer-title`}>
```

For non-LASIK variants render title normally:

```jsx
{!isLasik && (
  <h1 id={`${slug}-explainer-title`} className={styles["treatment-explainer__title"]}>
    {explainer.title}
  </h1>
)}
```

### Optional comparison image

After the explainer section, render only when present:

```jsx
{comparison?.image && (
  <section className={styles["treatment-comparison"]}>
    <Image
      src={comparison.image.src}
      alt={comparison.image.alt}
      width={2484}
      height={600}
      className={styles["treatment-comparison__image"]}
    />
  </section>
)}
```

Only LASIK currently has `banner.comparison`, so this does not affect other pages.

### Variant markup ownership

Keep one `TreatmentBanner` component and branch only where markup genuinely differs:

- Default / pediatric / retina / glaucoma: current generic title + copy + optional image structure.
- Cataract: same generic data fields, but with cataract variant classes and image/copy placement matching the old cataract explainer.
- Squint: same generic data fields, but with squint variant classes and loader/image placement matching the old squint explainer.
- LASIK: cutout title inside `.treatment-hero-wrap`, paragraphs below hero, optional comparison image below paragraphs.
- Keratoconus: title/copy/progress/image structure inside the common explainer section.

---

## Step 4 — Port Existing Variant CSS into Common Styles

File: `src/common/Treatment/TreatmentBanner/styles.module.css`

Keep the existing generic styles as the default. Add scoped variant blocks after the generic styles. The old CSS files are references only; do not import them from common CSS.

### Cataract Variant

Reference code to port from: `src/component/ServiceCataract/banner/styles.module.css`

Do not import this stylesheet. Copy the required `cataract-explainer` rules into `src/common/Treatment/TreatmentBanner/styles.module.css` using the mapped common selectors below.

Map old selectors to new selectors:

| Old selector | New selector |
|-------------|--------------|
| `.cataract-explainer` | `.treatment-explainer--cataract` |
| `.cataract-explainer__copy` | `.treatment-explainer--cataract .treatment-explainer__copy` |
| `.cataract-explainer__copy h2` | `.treatment-explainer--cataract .treatment-explainer__title` |
| `.cataract-explainer__visual` | `.treatment-explainer--cataract .treatment-explainer__visual` |
| `.cataract-explainer__visual img` | `.treatment-explainer--cataract .treatment-explainer__image` |

Important CSS behavior to preserve:

- desktop two-column layout
- `margin: -162px auto 90px`
- copy padding top
- responsive single-column behavior at `max-width: 1199px`
- mobile width/margins at `767px` and below

### LASIK Variant

Reference code to port from: `src/component/ServiceLasik/banner/styles.module.css`

Do not import this stylesheet. Copy the required `lasik-what` and `lasik-comparison` rules into `src/common/Treatment/TreatmentBanner/styles.module.css` using the mapped common selectors below.

New selectors:

| Old selector | New selector |
|-------------|--------------|
| `.lasik-what__title` | `.treatment-detail--lasik .treatment-explainer__cutout-title` |
| `.lasik-what__body` | `.treatment-explainer--lasik` |
| `.lasik-what__p` | `.treatment-explainer--lasik .treatment-explainer__copy p` |
| `.lasik-comparison` | `.treatment-detail--lasik .treatment-comparison` |
| `.lasik-comparison__img` | `.treatment-detail--lasik .treatment-comparison__image` |

Important CSS behavior to preserve:

- `What is LASIK?` absolutely positioned in the bottom-center hero cutout.
- Paragraphs centered below hero.
- First paragraph narrower than the second.
- `/assets/Service/Lasik/glasses.png` displayed below paragraphs.
- Mobile hero cutout title sizing from existing LASIK CSS.

### Squint Variant

Reference code to port from: `src/component/ServiceSquint/banner/styles.module.css`

Do not import this stylesheet. Copy the required `squint-explainer` rules into `src/common/Treatment/TreatmentBanner/styles.module.css` using the mapped common selectors below.

New selectors:

| Old selector | New selector |
|-------------|--------------|
| `.squint-explainer` | `.treatment-explainer--squint` |
| `.squint-explainer__title` | `.treatment-explainer--squint .treatment-explainer__title` |
| `.squint-explainer__copy` | `.treatment-explainer--squint .treatment-explainer__copy` |
| `.squint-explainer__loader` | `.treatment-explainer--squint .treatment-explainer__loader` |
| `.squint-explainer__visual` | `.treatment-explainer--squint .treatment-explainer__visual` |
| `.squint-explainer__image` | `.treatment-explainer--squint .treatment-explainer__image` |

Important CSS behavior to preserve:

- grid-template-areas `". title"` and `"copy visual"`
- negative top margin after hero
- title padding/offset
- loader below copy
- visual rounded image card
- mobile single-column layout

### Keratoconus Variant

Reference code to port from: `src/component/ServiceKeratoconus/whatIsKeratoconus/styles.module.css`

Do not import this stylesheet or component. Copy the required section/copy/progress/image rules into `src/common/Treatment/TreatmentBanner/styles.module.css` using the mapped common selectors below.

New selectors:

| Old selector | New selector |
|-------------|--------------|
| `.section` | `.treatment-explainer--keratoconus` |
| `.inner` | can be avoided by using section grid, or add a wrapper if needed |
| `.copyColumn` | `.treatment-explainer--keratoconus .treatment-explainer__copy` |
| `.title` | `.treatment-explainer--keratoconus .treatment-explainer__title` |
| `.paragraph` | `.treatment-explainer--keratoconus .treatment-explainer__copy p` |
| `.progressTrack` | new optional `.treatment-explainer__progress` |
| `.visualColumn` | `.treatment-explainer--keratoconus .treatment-explainer__visual` |
| `.visualImage` | `.treatment-explainer--keratoconus .treatment-explainer__image` |

Because keratoconus uses a progress bar, add optional rendering when `variant === "keratoconus"`:

```jsx
{variant === "keratoconus" && (
  <div className={styles["treatment-explainer__progress"]} aria-hidden="true">
    <span />
  </div>
)}
```

---

## Step 5 — Clean Up Page Map After Keratoconus Move

File: `src/pagecomponent/TreatmentPage/index.jsx`

After keratoconus `whatIs` is handled inside `TreatmentBanner`:

- Remove import:

```jsx
import WhatIsKeratoconus from "@/component/ServiceKeratoconus/whatIsKeratoconus";
```

- Remove section map key:

```jsx
whatIsKeratoconus: (_t) => <WhatIsKeratoconus key="whatIsKeratoconus" />,
```

- Remove `"whatIsKeratoconus"` from `KERATOCONUS_TREATMENT.sections`.

This avoids rendering the section twice.

---

## Step 6 — Keep Default Pages Unchanged

Do not add `explainer.variant` to:

- `servicePediatricContent.js`
- `serviceRetinaContent.js`
- `serviceglaucomaContent.js`

They will continue using the existing default `.treatment-explainer` CSS.

---

## Suggested File Changes

| File | Change |
|------|--------|
| `src/pagecomponent/TreatmentPage/index.jsx` | Pass `slug` to `TreatmentBanner`; later remove `whatIsKeratoconus` map/import. |
| `src/common/Treatment/TreatmentBanner/index.jsx` | Add variant-aware render logic, LASIK cutout title, optional comparison image, optional keratoconus progress. Do not import old Service* components. |
| `src/common/Treatment/TreatmentBanner/styles.module.css` | Port scoped variant CSS for cataract, LASIK, squint, keratoconus. Do not import old Service* stylesheets. |
| `src/constant/serviceCataractContent.js` | Add `banner.explainer.variant: "cataract"`. |
| `src/constant/serviceLasikContent.js` | Add `banner.explainer.variant: "lasik"`; keep `comparison.image`. |
| `src/constant/serviceSquintContent.js` | Add `banner.explainer.variant: "squint"`. |
| `src/constant/treatments/keratoconus.js` | Attach `whatIsKeratoconus` as `banner.explainer` with `variant: "keratoconus"`; remove section key. |

---

## Validation Checklist

### Desktop

- `/service/cataract`: hero + `What is cataract?` matches old cataract banner layout.
- `/service/lasik`: `What is LASIK?` appears in hero cutout, paragraphs below, glasses image visible.
- `/service/squint`: `What is Squint?` matches old squint layout with loader and visual image.
- `/service/keratoconus`: banner followed by `What is Keratoconus?` layout with progress track and image, no duplicate section.
- `/service/pediatric`, `/service/glaucoma`, `/service/retina`: unchanged generic explainer layout.

### Mobile / Tablet

- Check 390px, 576px, 768px, 992px breakpoints.
- Cataract visual image remains below copy on small screens.
- LASIK cutout title stays inside hero and does not overlap hero copy.
- Squint explainer becomes single-column with loader and visual image.
- Keratoconus text, progress bar, and image stack correctly.

### Code Checks

Run focused diagnostics for:

- `src/common/Treatment/TreatmentBanner/index.jsx`
- `src/common/Treatment/TreatmentBanner/styles.module.css`
- `src/pagecomponent/TreatmentPage/index.jsx`
- changed constants/configs

Then run the smallest available executable check. If using full `npm run lint`, expect existing unrelated lint errors in the repository; verify no new errors are from the touched files.
