# Pediatric Diagnosis Tablet Slider Implementation Plan

## Goal

Update the Pediatric page `How Pediatric Eye Problems Are Diagnosed` section so the layout behaves correctly from `1100px` down to mobile:

- From `1100px` and below, the diagnosis intro area should become a blue card style instead of relying on the large desktop background image.
- The three diagnosis media items should display on the right side as a wrapped group: two items in the first row and one item centered in the next row.
- The four treatment cards should become an autoplay looping slider:
  - `1100px` to `992px`: show `3` cards.
  - `992px` to `768px`: show `2` cards.
  - `768px` to `576px`: show `1.5` cards.
  - `576px` and below: show `1` card.
- Font sizes, image sizes, spacing, and card heights should scale smoothly for `1100px`, `992px`, `768px`, `576px`, and `390px`.

## Files To Update

- `src/component/Service-Pediatric/howSquintIsDiagnosed/index.jsx`
- `src/component/Service-Pediatric/howSquintIsDiagnosed/styles.module.css`
- `src/constant/servicePediatricContent.js` only if copy or media source changes are needed later.

## Current Structure

The section currently renders from:

```jsx
const { diagnosis } = SERVICE_PEDIATRIC_CONTENT;
```

The intro/video area is:

```jsx
<div className={styles["squint-diagnosis__panel"]}>
  <div className={styles["squint-diagnosis__copy"]}>...</div>
  <div className={styles["squint-diagnosis__media-list"]}>...</div>
</div>
```

The treatment cards are currently a static CSS grid:

```jsx
<div className={styles["squint-diagnosis__treatments"]}>
  {diagnosis.treatments.map(...)}
</div>
```

The CSS currently has several overlapping media rules, including `max-width: 1200px`, `max-width: 992px`, and final override rules. The new work should add a clear final responsive block at the bottom of the CSS so it wins the cascade without disturbing the desktop layout.

## Implementation Steps

### 1. Add React Slick For Treatment Cards

Use the existing project dependency:

```jsx
import Slider from "react-slick";
```

Add slider settings inside `HowPediatricCareIsDiagnosed`:

```jsx
const treatmentSliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1.5 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
};
```

Render both desktop grid and responsive slider:

- Keep existing `.squint-diagnosis__treatments` for desktop above `1100px`.
- Add a new `.squint-diagnosis__treatment-slider` wrapper for `1100px` and below.
- Hide/show via CSS so desktop remains unchanged.

Example JSX structure:

```jsx
<div className={styles["squint-diagnosis__treatments"]}>
  {diagnosis.treatments.map(renderTreatmentCard)}
</div>

<div className={styles["squint-diagnosis__treatment-slider"]}>
  <Slider {...treatmentSliderSettings}>
    {diagnosis.treatments.map(renderTreatmentCard)}
  </Slider>
</div>
```

Create a small `renderTreatmentCard` helper inside the component to avoid duplicate card markup.

### 2. Convert Panel To Blue Card At `1100px` And Below

At `max-width: 1100px`, override `.squint-diagnosis__panel`:

- Remove desktop background image.
- Use the Figma-like blue card color.
- Use `background: #dcecf4` or the closest current light blue used in the section.
- Set `height: auto`, `min-height: 0`, and `overflow: visible`.
- Use a two-column grid for `1100px` to `768px`:
  - left copy: about `42%`
  - right media grid: about `58%`
- At `768px` and below, stack copy and media vertically.

Suggested CSS:

```css
@media (max-width: 1100px) {
  .squint-diagnosis__panel {
    grid-template-columns: minmax(0, 0.42fr) minmax(0, 0.58fr);
    gap: clamp(22px, 3vw, 34px);
    height: auto;
    min-height: 0;
    padding: clamp(34px, 4vw, 48px);
    border-radius: clamp(26px, 4vw, 44px);
    background: #dcecf4;
    background-image: none;
    overflow: hidden;
  }
}
```

### 3. Make The Three Media Items Wrap Correctly

At `max-width: 1100px`, change `.squint-diagnosis__media-list` from column layout to flex wrap:

```css
@media (max-width: 1100px) {
  .squint-diagnosis__media-list {
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    justify-content: center;
    gap: clamp(14px, 2vw, 22px);
    margin-left: 0;
  }

  .squint-diagnosis__media-card {
    flex: 0 1 calc(50% - 12px);
    width: auto;
  }

  .squint-diagnosis__media-card:nth-child(3) {
    flex-basis: calc(50% - 12px);
    margin-inline: auto;
  }
}
```

For `768px` and below, allow larger cards:

```css
@media (max-width: 768px) {
  .squint-diagnosis__media-list {
    max-width: 560px;
    margin-inline: auto;
  }

  .squint-diagnosis__media-card {
    flex-basis: calc(50% - 10px);
  }
}
```

For `576px` and below, switch to one media item per row if the Figma mobile reference needs it:

```css
@media (max-width: 576px) {
  .squint-diagnosis__media-card {
    flex-basis: 100%;
  }
}
```

### 4. Replace Static Treatment Grid With Slider At `1100px` And Below

Default:

```css
.squint-diagnosis__treatment-slider {
  display: none;
}
```

Responsive:

```css
@media (max-width: 1100px) {
  .squint-diagnosis__treatments {
    display: none;
  }

  .squint-diagnosis__treatment-slider {
    display: block;
    margin-top: clamp(28px, 4vw, 46px);
    overflow: hidden;
  }
}
```

Style Slick internals inside CSS module:

```css
.squint-diagnosis__treatment-slider :global(.slick-list) {
  overflow: visible;
  margin: 0 -10px;
}

.squint-diagnosis__treatment-slider :global(.slick-slide) {
  padding: 0 10px;
}

.squint-diagnosis__treatment-slider :global(.slick-dots) {
  position: static;
  margin-top: 22px;
}
```

### 5. Normalize Slider Card Layout

Inside the slider, reset the desktop `nth-child` mosaic rules:

```css
@media (max-width: 1100px) {
  .squint-diagnosis__treatment-slider .squint-diagnosis__treatment-card,
  .squint-diagnosis__treatment-slider .squint-diagnosis__treatment-card:nth-child(1),
  .squint-diagnosis__treatment-slider .squint-diagnosis__treatment-card:nth-child(2),
  .squint-diagnosis__treatment-slider .squint-diagnosis__treatment-card:nth-child(3),
  .squint-diagnosis__treatment-slider .squint-diagnosis__treatment-card:nth-child(4) {
    width: 100%;
    min-height: clamp(360px, 42vw, 460px);
    margin: 0;
    border-radius: 24px;
    aspect-ratio: auto;
  }
}
```

Use consistent treatment image/content positioning so all four cards look like the Figma mobile cards:

- Image fills the card.
- Existing white gradient overlay remains.
- Title stays near top.
- Description stays near bottom.
- Card height stays equal inside the slider.

### 6. Responsive Font And Spacing Targets

Use these as final targets:

| Breakpoint | Heading | Body | Media Cards | Treatment Slider |
| --- | --- | --- | --- | --- |
| `1100px - 993px` | `42px - 48px` | `15px - 17px` | 2 + 1 wrapped | 3 cards |
| `992px - 769px` | `38px - 44px` | `15px - 16px` | 2 + 1 wrapped | 2 cards |
| `768px - 577px` | `34px - 40px` | `14px - 15px` | compact wrapped | 1.5 cards |
| `576px - 391px` | `30px - 34px` | `13px - 14px` | stacked if needed | 1 card |
| `390px` | `28px - 30px` | `13px` | stacked | 1 card |

### 7. Verification Checklist

Run:

```bash
npm run build
```

Manual responsive checks:

- `1100px`: blue card is visible, no desktop background image break, right media shows `2 + 1 centered`, treatment slider shows 3 cards.
- `992px`: panel is still balanced, treatment slider shows 2 cards.
- `768px`: slider shows 1.5 cards, no horizontal page overflow.
- `576px`: slider shows 1 card, text is readable and not clipped.
- `390px`: title, media cards, dots, and treatment card content fit without overlap.

## Important Notes

- Keep the desktop layout above `1100px` unchanged.
- Add new responsive override blocks at the bottom of `styles.module.css` to win over the existing duplicate media rules.
- Do not remove the current desktop mosaic rules until the responsive slider is verified.
- Use the existing `react-slick` dependency; do not add a new carousel library.
