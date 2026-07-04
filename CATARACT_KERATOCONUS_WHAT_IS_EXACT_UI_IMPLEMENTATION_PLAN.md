# Cataract + Keratoconus Exact `What is` UI Implementation Plan

## Goal

Implement the cataract and keratoconus `What is...` sections inside the common `TreatmentBanner` with the exact same UI structure as their old page-specific components:

- Cataract old source: `src/component/ServiceCataract/banner/index.jsx` and `styles.module.css`
- Keratoconus old source: `src/component/ServiceKeratoconus/whatIsKeratoconus/index.jsx` and `styles.module.css`

The implementation must not affect the other treatment pages using `TreatmentBanner`, including LASIK, squint, pediatric, glaucoma, and retina.

## Is It Possible?

Yes, it is possible.

The safe approach is to keep `TreatmentBanner` as the common entry point, but render cataract and keratoconus explainer markup through variant-specific branches based only on:

```js
explainer.variant === "cataract"
explainer.variant === "keratoconus"
```

Other pages will continue using the existing generic explainer markup unless their `explainer.variant` is explicitly `cataract` or `keratoconus`.

## Current Data Wiring

### Cataract

File: `src/constant/serviceCataractContent.js`

Cataract already has:

```js
explainer: {
  variant: "cataract",
  title: "What is cataract?",
  paragraphs: [...],
  image: {
    src: "/assets/Service/cataract/Frame 95.png",
    alt: "Normal eye and cataract lens comparison",
  },
}
```

File: `src/constant/treatments/cataract.js`

Cataract already passes:

```js
banner: SERVICE_CATARACT_CONTENT.banner
```

So no constant change is required for cataract.

### Keratoconus

File: `src/constant/treatments/keratoconus.js`

Keratoconus already maps the old standalone data into `TreatmentBanner`:

```js
banner: {
  ...SERVICE_KERATOCONUS_CONTENT.banner,
  explainer: {
    ...SERVICE_KERATOCONUS_CONTENT.whatIsKeratoconus,
    variant: "keratoconus",
  },
},
```

The old `whatIsKeratoconus` section key is removed from the `sections` array, so the section will not render twice.

No constant change is required for keratoconus.

## Why Current Keratoconus UI Is Not Exact

Current common `TreatmentBanner` renders non-LASIK explainers like this:

```jsx
<section className={explainerClassName}>
  <h1 className={styles["treatment-explainer__title"]}>{explainer.title}</h1>

  <div className={styles["treatment-explainer__copy"]}>
    {paragraphs}
    {isKeratoconus && <div className={styles["treatment-explainer__progress"]}><span /></div>}
  </div>

  <div className={styles["treatment-explainer__visual"]}>...</div>
</section>
```

Old keratoconus source renders this structure:

```jsx
<section className={styles.section}>
  <div className={styles.inner}>
    <div className={styles.copyColumn}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.paragraphs}>{paragraphs}</div>
      <div className={styles.progressTrack}><span /></div>
    </div>

    <div className={styles.visualColumn}>...</div>
  </div>
</section>
```

The missing `inner`, `copyColumn`, and `paragraphs` wrappers are the main reason keratoconus does not match the old UI exactly.

## Why Current Cataract UI Is Not Exact

Old cataract source renders the title inside the copy column:

```jsx
<div className={styles["cataract-explainer__copy"]}>
  <h2>{explainer.title}</h2>
  {paragraphs}
</div>
```

Current common `TreatmentBanner` renders the title as a separate grid child above the copy content:

```jsx
<h1 className={styles["treatment-explainer__title"]}>{explainer.title}</h1>
<div className={styles["treatment-explainer__copy"]}>{paragraphs}</div>
```

This can look close, but it is not structurally identical. For exact old cataract UI, title and paragraphs should be grouped in one copy column.

## Implementation Strategy

### 1. Keep the Common Component Entry Point

File: `src/common/Treatment/TreatmentBanner/index.jsx`

Keep this render path unchanged:

```jsx
<TreatmentBanner data={t.banner} slug={t.slug} />
```

Do not re-import old page-specific components.

Do not change `TreatmentPage` routing unless validation shows a missing section key.

### 2. Add Shared Image Helper

Inside `TreatmentBanner`, add a small helper to render the explainer image so variant branches do not duplicate desktop/mobile image logic.

Suggested helper:

```jsx
const renderExplainerImage = (image) => {
  if (!image) return null;

  return image.mobileSrc ? (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={2484}
        height={1398}
        className={`${styles["treatment-explainer__image"]} ${styles["treatment-explainer__image--desktop"]}`}
      />
      <Image
        src={image.mobileSrc}
        alt={image.alt}
        width={686}
        height={340}
        className={`${styles["treatment-explainer__image"]} ${styles["treatment-explainer__image--mobile"]}`}
      />
    </>
  ) : (
    <Image
      src={image.src}
      alt={image.alt}
      width={2484}
      height={1398}
      className={styles["treatment-explainer__image"]}
    />
  );
};
```

### 3. Add Cataract-Specific Explainer Branch

Add:

```js
const isCataract = variant === "cataract";
```

Then render cataract explainers with the old structure:

```jsx
const renderCataractExplainer = () => (
  <section className={explainerClassName} aria-labelledby={explainerTitleId}>
    <div className={styles["treatment-explainer__copy"]}>
      <h1 id={explainerTitleId} className={styles["treatment-explainer__title"]}>
        {explainer.title}
      </h1>

      {explainer.paragraphs.map((paragraph, index) => (
        <p key={`explainer-paragraph-${index}`}>{paragraph}</p>
      ))}
    </div>

    {explainer.image && (
      <div
        className={styles["treatment-explainer__visual"]}
        aria-label="Normal eye and cataract comparison"
      >
        {renderExplainerImage(explainer.image)}
      </div>
    )}
  </section>
);
```

This matches old cataract source:

```jsx
<section className="cataract-explainer">
  <div className="cataract-explainer__copy">
    <h2 />
    <p />
  </div>
  <div className="cataract-explainer__visual" />
</section>
```

### 4. Add Keratoconus-Specific Explainer Branch

Render keratoconus with the old `inner > copyColumn + visualColumn` structure:

```jsx
const renderKeratoconusExplainer = () => (
  <section className={explainerClassName} aria-labelledby={explainerTitleId}>
    <div className={styles["treatment-explainer__inner"]}>
      <div className={styles["treatment-explainer__copy-column"]}>
        <h1 id={explainerTitleId} className={styles["treatment-explainer__title"]}>
          {explainer.title}
        </h1>

        <div className={styles["treatment-explainer__paragraphs"]}>
          {explainer.paragraphs.map((paragraph, index) => (
            <p key={`explainer-paragraph-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className={styles["treatment-explainer__progress"]} aria-hidden="true">
          <span />
        </div>
      </div>

      {explainer.image && (
        <div className={styles["treatment-explainer__visual"]}>
          {renderExplainerImage(explainer.image)}
        </div>
      )}
    </div>
  </section>
);
```

This matches old keratoconus source:

```jsx
<section className="section">
  <div className="inner">
    <div className="copyColumn">
      <h2 className="title" />
      <div className="paragraphs" />
      <div className="progressTrack" />
    </div>
    <div className="visualColumn" />
  </div>
</section>
```

### 5. Branch Before Generic Explainer Markup

In the existing JSX, replace the single generic explainer block with:

```jsx
{explainer && isCataract && renderCataractExplainer()}
{explainer && isKeratoconus && renderKeratoconusExplainer()}
{explainer && !isCataract && !isKeratoconus && (
  // existing generic explainer markup
)}
```

This is the main safety rule. Other pages will not enter the new branches.

## CSS Plan

File: `src/common/Treatment/TreatmentBanner/styles.module.css`

### Cataract CSS Mapping

Update the cataract variant so the copy column owns title + paragraphs:

| Old cataract selector | Common selector |
| --- | --- |
| `.cataract-explainer` | `.treatment-explainer--cataract` |
| `.cataract-explainer__copy` | `.treatment-explainer--cataract .treatment-explainer__copy` |
| `.cataract-explainer__copy h2` | `.treatment-explainer--cataract .treatment-explainer__title` |
| `.cataract-explainer__copy p` | `.treatment-explainer--cataract .treatment-explainer__copy p` |
| `.cataract-explainer__visual` | `.treatment-explainer--cataract .treatment-explainer__visual` |
| `.cataract-explainer__visual img` | `.treatment-explainer--cataract .treatment-explainer__image` |

Important CSS adjustment:

```css
.treatment-explainer--cataract {
  grid-template-areas: "copy visual";
}

.treatment-explainer--cataract .treatment-explainer__copy {
  grid-area: copy;
  padding-top: 150px;
}

.treatment-explainer--cataract .treatment-explainer__title {
  padding-top: 0;
}
```

This restores the old behavior where title and paragraph spacing are controlled by the copy column.

### Keratoconus CSS Mapping

Add new common classes for the old missing wrappers:

| Old keratoconus selector | Common selector |
| --- | --- |
| `.section` | `.treatment-explainer--keratoconus` |
| `.inner` | `.treatment-explainer--keratoconus .treatment-explainer__inner` |
| `.copyColumn` | `.treatment-explainer--keratoconus .treatment-explainer__copy-column` |
| `.title` | `.treatment-explainer--keratoconus .treatment-explainer__title` |
| `.paragraphs` | `.treatment-explainer--keratoconus .treatment-explainer__paragraphs` |
| `.paragraph` | `.treatment-explainer--keratoconus .treatment-explainer__paragraphs p` |
| `.progressTrack` | `.treatment-explainer--keratoconus .treatment-explainer__progress` |
| `.progressFill` | `.treatment-explainer--keratoconus .treatment-explainer__progress span` |
| `.visualColumn` | `.treatment-explainer--keratoconus .treatment-explainer__visual` |
| `.visualImage` | `.treatment-explainer--keratoconus .treatment-explainer__image` |

Recommended CSS shape:

```css
.treatment-explainer--keratoconus {
  display: block;
  padding: 8px var(--section-px) 100px;
  width: 100%;
  margin: 0;
}

.treatment-explainer--keratoconus .treatment-explainer__inner {
  width: min(100%, var(--container-max));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 0.98fr) minmax(420px, 1fr);
  gap: clamp(28px, 4vw, 54px);
  align-items: start;
}

.treatment-explainer--keratoconus .treatment-explainer__copy-column {
  padding-top: 0;
}
```

Then move existing keratoconus paragraph, title, progress, and image styles to the new wrapper selectors.

## Files To Change

Only these files should need changes:

1. `src/common/Treatment/TreatmentBanner/index.jsx`
2. `src/common/Treatment/TreatmentBanner/styles.module.css`

No changes should be needed in:

- `src/pagecomponent/TreatmentPage/index.jsx`
- `src/constant/serviceCataractContent.js`
- `src/constant/serviceKeratoconusContent.js`
- `src/constant/treatments/cataract.js`
- `src/constant/treatments/keratoconus.js`

## Safety / No Other Page Impact

This is safe because:

1. The new markup branches only run for `explainer.variant === "cataract"` or `explainer.variant === "keratoconus"`.
2. LASIK already has its own `variant === "lasik"` behavior and remains in the generic non-cataract/non-keratoconus path.
3. Squint already has its own CSS variant but can keep using the generic markup path.
4. Pediatric, glaucoma, and retina do not use these two variants, so they keep the existing default markup.
5. No old page-specific components are imported into the common component.

## Validation Plan

### Static checks

Run focused lint:

```powershell
npx eslint src\common\Treatment\TreatmentBanner\index.jsx src\pagecomponent\TreatmentPage\index.jsx src\constant\treatments\cataract.js src\constant\treatments\keratoconus.js src\constant\serviceCataractContent.js src\constant\serviceKeratoconusContent.js
```

### Visual pages to check

Check these pages after starting dev server:

```powershell
npm run dev
```

Then inspect:

- `/service/cataract`
- `/service/keratoconus`
- `/service/lasik`
- `/service/squint`
- `/service/pediatric`
- `/service/glaucoma`
- `/service/retina`

### Expected visual result

Cataract:

- `What is cataract?` title and paragraphs are grouped in the left copy column.
- Left copy column has the same spacing as old `ServiceCataract/banner`.
- Cataract image positioning matches the old `cataract-explainer__visual img` behavior.

Keratoconus:

- Section has the same `inner` container layout as old `ServiceKeratoconus/whatIsKeratoconus`.
- Title, paragraphs, and progress bar sit in one left column.
- Image sits in one right column.
- Mobile layout stacks exactly like old source.

Other pages:

- LASIK `What is LASIK?` remains unchanged.
- Squint `What is Squint?` remains unchanged.
- Pediatric/glaucoma/retina default explainer sections remain unchanged.

## Implementation Order

1. Add `isCataract` and shared `renderExplainerImage()` in `TreatmentBanner/index.jsx`.
2. Add `renderCataractExplainer()` and `renderKeratoconusExplainer()` in the same file.
3. Gate generic explainer rendering with `!isCataract && !isKeratoconus`.
4. Update cataract CSS so the copy block contains title + paragraphs.
5. Update keratoconus CSS to use `.treatment-explainer__inner`, `.treatment-explainer__copy-column`, and `.treatment-explainer__paragraphs`.
6. Run focused ESLint.
7. Start dev server and compare the seven listed pages.

## Final Recommendation

Implement this using variant-specific branches inside `TreatmentBanner`, not by importing old `ServiceCataract` or `ServiceKeratoconus` components. This gives cataract and keratoconus the exact old `What is...` UI structure while keeping all other treatment pages on their current common rendering path.
