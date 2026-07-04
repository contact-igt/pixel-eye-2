# TreatmentBanner Cataract + Keratoconus `What is...` Audit

## Scope

Checked whether the common `TreatmentBanner` is correctly using the old page-specific `What is...` section code patterns for:

- Cataract: old source reference `src/component/ServiceCataract/banner/index.jsx` and `styles.module.css`
- Keratoconus: old source reference `src/component/ServiceKeratoconus/whatIsKeratoconus/index.jsx` and `styles.module.css`

Important: the common component does **not** import those old components, which is correct. It ports their data, markup pattern, and CSS into `src/common/Treatment/TreatmentBanner`.

---

## Current Wiring Status

### Cataract

Status: **Variant data is connected.**

File: `src/constant/serviceCataractContent.js`

```js
banner: {
  explainer: {
    variant: "cataract",
    title: "What is cataract?",
    paragraphs: [...],
    image: {
      src: "/assets/Service/cataract/Frame 95.png",
      alt: "Normal eye and cataract lens comparison",
    },
  },
}
```

Common component receives this through:

```js
CATARACT_TREATMENT.banner = SERVICE_CATARACT_CONTENT.banner
```

Then `TreatmentPage` renders:

```jsx
<TreatmentBanner data={t.banner} slug={t.slug} />
```

So cataract correctly receives:

- `slug = "cataract"`
- `explainer.variant = "cataract"`
- cataract image/content data

---

### Keratoconus

Status: **Variant data is connected, and duplicate old section is removed.**

File: `src/constant/treatments/keratoconus.js`

```js
banner: {
  ...SERVICE_KERATOCONUS_CONTENT.banner,
  explainer: {
    ...SERVICE_KERATOCONUS_CONTENT.whatIsKeratoconus,
    variant: "keratoconus",
  },
},
```

Also confirmed `"whatIsKeratoconus"` was removed from the sections array, so the old standalone section is not rendered twice.

So keratoconus correctly receives:

- `slug = "keratoconus"`
- `explainer.variant = "keratoconus"`
- `SERVICE_KERATOCONUS_CONTENT.whatIsKeratoconus` content
- progress bar render condition from common `TreatmentBanner`

---

## Current Common Component Markup

File: `src/common/Treatment/TreatmentBanner/index.jsx`

Current common explainer markup is:

```jsx
<section className={explainerClassName}>
  {!isLasik && <h1 className={styles["treatment-explainer__title"]}>{explainer.title}</h1>}

  <div className={styles["treatment-explainer__copy"]}>
    {explainer.paragraphs.map(...)}
    {isKeratoconus && <div className={styles["treatment-explainer__progress"]}><span /></div>}
  </div>

  {explainer.image && (
    <div className={styles["treatment-explainer__visual"]}>
      <Image className={styles["treatment-explainer__image"]} />
    </div>
  )}
</section>
```

This generic structure works for default pages, LASIK, and squint reasonably well. Cataract and keratoconus need special attention because their old source markup grouped elements differently.

---

## Cataract Comparison

### Old Cataract Markup

File: `src/component/ServiceCataract/banner/index.jsx`

```jsx
<section className={styles["cataract-explainer"]}>
  <div className={styles["cataract-explainer__copy"]}>
    <h2>{explainer.title}</h2>
    {explainer.paragraphs.map(...)}
  </div>

  <div className={styles["cataract-explainer__visual"]}>
    <img src={explainer.image.src} alt={explainer.image.alt} />
  </div>
</section>
```

### Current Common Markup Difference

In common `TreatmentBanner`, the title is **outside** the copy div:

```jsx
<h1 className="treatment-explainer__title" />
<div className="treatment-explainer__copy">paragraphs only</div>
```

Old cataract had:

```jsx
<div className="cataract-explainer__copy">
  <h2 />
  <p />
</div>
```

### Result

Cataract CSS is **mostly ported**, but not exactly equivalent.

The old cataract CSS applies `padding-top: 150px` to the whole copy block, including title and paragraphs:

```css
.cataract-explainer__copy {
  padding-top: 150px;
}
```

The new common CSS applies `padding-top: 150px` to only the title:

```css
.treatment-explainer--cataract .treatment-explainer__title {
  padding-top: 150px;
}
```

Because of this, the current cataract layout may look close, but it is not an exact port of the old source code structure.

### Cataract Audit Verdict

Cataract is **connected and mostly styled**, but to match old UI exactly, the common component needs a variant-specific inner copy wrapper behavior or CSS adjustment so the title and paragraphs behave like one `cataract-explainer__copy` column.

Recommended fix:

- For `variant === "cataract"`, wrap title + paragraphs together in the copy column, or
- Move the title into `.treatment-explainer__copy` for cataract only.

---

## Keratoconus Comparison

### Old Keratoconus Markup

File: `src/component/ServiceKeratoconus/whatIsKeratoconus/index.jsx`

```jsx
<section className={styles.section}>
  <div className={styles.inner}>
    <div className={styles.copyColumn}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.paragraphs}>
        {paragraphs.map((paragraph) => <p className={styles.paragraph}>{paragraph}</p>)}
      </div>

      <div className={styles.progressTrack}>
        <span className={styles.progressFill} />
      </div>
    </div>

    <div className={styles.visualColumn}>
      <img className={styles.visualImage} />
    </div>
  </div>
</section>
```

### Current Common Markup Difference

Common `TreatmentBanner` does **not** have:

- `.inner` wrapper
- `.copyColumn` wrapper containing title + paragraphs + progress
- `.paragraphs` wrapper
- `.visualColumn` wrapper

Instead, it renders title, copy, and visual as direct grid children:

```jsx
<section className="treatment-explainer treatment-explainer--keratoconus">
  <h1 className="treatment-explainer__title" />
  <div className="treatment-explainer__copy">
    <p />
    <div className="treatment-explainer__progress" />
  </div>
  <div className="treatment-explainer__visual" />
</section>
```

### Result

Keratoconus is **wired correctly**, but the old UI is **not fully applied** because the DOM structure is different.

The old CSS expects title, paragraphs, and progress to live inside the same left column:

```jsx
.copyColumn
  h2.title
  .paragraphs
  .progressTrack
```

The current common markup separates the title and copy into different grid areas:

```css
"title visual"
"copy visual"
```

This creates a different vertical spacing model than the old component. It also means rules that were originally applied to `.copyColumn` cannot correctly affect the title and paragraph group together.

### Keratoconus Audit Verdict

Keratoconus has **not been fully applied like the old source UI**.

The data and variant are correct, but the markup needs a keratoconus-specific branch inside `TreatmentBanner` to reproduce the old structure.

Recommended fix:

For `variant === "keratoconus"`, render this structure inside `TreatmentBanner`:

```jsx
<section className={`${styles["treatment-explainer"]} ${styles["treatment-explainer--keratoconus"]}`}>
  <div className={styles["treatment-explainer__inner"]}>
    <div className={styles["treatment-explainer__copy-column"]}>
      <h1 id={explainerTitleId} className={styles["treatment-explainer__title"]}>
        {explainer.title}
      </h1>

      <div className={styles["treatment-explainer__paragraphs"]}>
        {explainer.paragraphs.map(...)}
      </div>

      <div className={styles["treatment-explainer__progress"]} aria-hidden="true">
        <span />
      </div>
    </div>

    <div className={styles["treatment-explainer__visual"]}>
      <Image className={styles["treatment-explainer__image"]} />
    </div>
  </div>
</section>
```

Then map old CSS directly:

| Old selector | Common selector |
|-------------|-----------------|
| `.inner` | `.treatment-explainer--keratoconus .treatment-explainer__inner` |
| `.copyColumn` | `.treatment-explainer--keratoconus .treatment-explainer__copy-column` |
| `.paragraphs` | `.treatment-explainer--keratoconus .treatment-explainer__paragraphs` |
| `.paragraph` | `.treatment-explainer--keratoconus .treatment-explainer__paragraphs p` |
| `.progressTrack` | `.treatment-explainer--keratoconus .treatment-explainer__progress` |
| `.progressFill` | `.treatment-explainer--keratoconus .treatment-explainer__progress span` |
| `.visualColumn` | `.treatment-explainer--keratoconus .treatment-explainer__visual` |
| `.visualImage` | `.treatment-explainer--keratoconus .treatment-explainer__image` |

---

## Summary

| Page | Data connected? | Old UI structure fully matched? | Notes |
|------|-----------------|----------------------------------|-------|
| Cataract | Yes | Mostly, not exact | Title is outside copy column, while old source had title inside copy column. |
| Keratoconus | Yes | No | Missing `.inner` and `.copyColumn` structure; title/copy/progress are split differently. |

---

## Recommended Next Implementation

1. Add a small render helper inside `TreatmentBanner` for explainer images to avoid duplicating image rendering.
2. Add a `renderKeratoconusExplainer()` branch that reproduces the old `inner > copyColumn + visualColumn` structure.
3. Optionally add a `renderCataractExplainer()` branch that places title inside the copy column like the old cataract source.
4. Update common CSS selectors for these two variants to target the new exact structure.
5. Validate:
   - `/service/cataract`
   - `/service/keratoconus`
   - `/service/lasik`
   - `/service/squint`
   - `/service/pediatric`, `/service/glaucoma`, `/service/retina` unchanged.

## Final Confirmation

- Cataract: current implementation is close but not a perfect structural port.
- Keratoconus: current implementation is wired but not fully applying the old `whatIsKeratoconus` UI because the common markup structure is different.
