# TreatmentTypes GSAP Mobile Card Stack Implementation Plan

## Goal

Implement the Treatment Types mobile card behavior at `768px` and below using GSAP `ScrollTrigger` + `Observer`.

When the user scrolls to the Treatment Types section:

- The page should pin/stop on the section.
- The cards should animate one by one in a stacked layout.
- The first card should remain visible and scale down slightly when the next card enters.
- Each next card should slide up from below and sit above the previous card.
- After the last card is completed, normal page scrolling should resume.
- Scrolling back upward should reverse the stack card by card.
- Desktop and tablet behavior above `768px` must remain unchanged.

## Current Issue

The current mobile implementation in `src/common/Treatment/TreatmentTypes` uses CSS sticky behavior and still renders all mobile cards in the document flow. This means the section appears as a long list instead of a controlled pinned stack animation.

Current affected files:

- `src/common/Treatment/TreatmentTypes/index.jsx`
- `src/common/Treatment/TreatmentTypes/styles.module.css`

The repo already has `gsap` installed in `package.json`, and other components import GSAP using:

```js
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
```

For this feature, also use:

```js
import { Observer } from "gsap/dist/Observer";
```

## Implementation Steps

### 1. Replace the Current Mobile Scroll State

In `src/common/Treatment/TreatmentTypes/index.jsx`, remove the current scroll-progress state logic:

- `activeMobileIndex`
- `setActiveMobileIndex`
- `mobileScrollRef`
- the `useEffect` that listens to `window.scroll`
- active/next/previous class assignment based on `activeMobileIndex`

Replace it with GSAP refs:

- `sectionRef`
- `mobileStackRef`
- `mobileCardsRef`

Keep the desktop carousel state:

- `activeIndex`
- `previousSlide`
- `nextSlide`

### 2. Add GSAP Imports

At the top of `index.jsx`, use:

```js
import { useEffect, useRef, useState } from "react";
import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
```

### 3. Register Plugins Safely

Inside the mobile animation `useEffect`:

```js
if (typeof window === "undefined") return undefined;

gsap.registerPlugin(ScrollTrigger, Observer);
```

Use `gsap.matchMedia()` so the animation only runs at:

```js
"(max-width: 768px)"
```

### 4. Build the Mobile Stack Markup

Keep all slides rendered in the mobile stack, but remove JS active class switching.

Recommended mobile markup:

```jsx
<div
  ref={mobileStackRef}
  className={styles["treatment-types__mobile-stack"]}
  data-mobile-card-stack
>
  <div className={styles["treatment-types__mobile-cards"]}>
    {mobileSlides.map((slide, index) => (
      <article
        ref={(node) => {
          mobileCardsRef.current[index] = node;
        }}
        key={`mobile-${slide.id ?? slide.title}`}
        className={`${styles["treatment-types__card"]} ${styles["treatment-types__mobile-card"]}`}
        style={{ "--card-index": index }}
      >
        ...
      </article>
    ))}
  </div>
</div>
```

### 5. GSAP Timeline Behavior

Create a paused timeline where:

- card 1 starts visible
- cards 2+ start below the viewport with `y: window.innerHeight`
- every next card animates upward into the same grid position
- previous card scales slightly and moves upward for stack depth

Pseudo-implementation:

```js
const cards = mobileCardsRef.current.filter(Boolean);
const timeline = gsap.timeline({ paused: true });

gsap.set(cards, {
  y: (index) => (index === 0 ? 0 : window.innerHeight),
  scale: 1,
  opacity: 1,
  transformOrigin: "center top",
  zIndex: (index) => index + 1,
});

cards.forEach((card, index) => {
  if (index === 0) return;

  timeline.add(`card-${index}`);
  timeline.to(
    cards[index - 1],
    {
      scale: 0.9 + index * 0.015,
      y: -20 * index,
      duration: 0.5,
      ease: "power2.out",
    },
    "<",
  );
  timeline.to(
    card,
    {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "<",
  );
});
```

### 6. Use Observer to Control Card-by-Card Scroll

Use GSAP `Observer` only while the section is pinned.

Behavior:

- Wheel/touch down moves to the next label.
- Wheel/touch up moves to the previous label.
- Disable Observer at the first card when scrolling upward.
- Disable Observer after the last card when scrolling downward.
- When disabled, native page scrolling resumes.

The implementation should avoid global variables by keeping state inside the `useEffect` closure:

```js
let animating = false;
let currentIndex = 0;

const goToCard = (nextIndex) => {
  if (animating || nextIndex < 0 || nextIndex >= cards.length) return;
  animating = true;
  currentIndex = nextIndex;
  timeline.tweenTo(`card-${nextIndex}`, {
    onComplete: () => {
      animating = false;
    },
  });
};
```

For the first card, add a timeline label like `card-0` at the start.

### 7. Pin the Section with ScrollTrigger

Create a mobile-only `ScrollTrigger`:

```js
ScrollTrigger.create({
  trigger: mobileStack,
  pin: true,
  start: "top 12%",
  end: "+=120",
  onEnter: () => observer.enable(),
  onEnterBack: () => observer.enable(),
});
```

Use `pinSpacing: true` so the next section starts only after the stack interaction finishes.

Do not enable markers in production.

### 8. Cleanup Correctly

The cleanup must remove all GSAP side effects:

```js
return () => {
  observer.kill();
  trigger.kill();
  timeline.kill();
  mm.revert();
};
```

If using `gsap.context`, call `ctx.revert()` in cleanup.

### 9. CSS Changes

In `src/common/Treatment/TreatmentTypes/styles.module.css`:

Remove or override the current CSS sticky mobile block that starts with:

```css
/* Mobile sticky card flow: every card gets its own scroll segment. */
```

Add mobile stack styles:

```css
.treatment-types__mobile-stack {
  display: none;
}

@media (max-width: 768px) {
  .treatment-types__cards-wrapper {
    display: none;
  }

  .treatment-types__mobile-stack {
    display: block;
    position: relative;
    width: 100%;
    min-height: min(72vh, 520px);
    overflow: visible;
  }

  .treatment-types__mobile-cards {
    display: grid;
    width: 100%;
    min-height: min(72vh, 520px);
  }

  .treatment-types__mobile-card {
    grid-area: 1 / 1;
    width: 100%;
    height: min(72vh, 520px);
    min-height: 360px;
    margin: 0;
    box-shadow: 0 20px 44px rgba(39, 57, 121, 0.2);
    will-change: transform;
  }
}
```

Keep existing treatment-specific typography overrides where needed, especially glaucoma mobile title sizing.

### 10. Accessibility and Fallback

Add a reduced-motion fallback:

```js
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (reduceMotion.matches) return undefined;
```

For reduced motion:

- Do not enable Observer.
- Let cards display as a normal vertical list.

### 11. Verification Checklist

Run:

```bash
npm run build
```

Manually verify at these widths:

- `768px`
- `688px`
- `576px`
- `463px`
- `390px`
- `320px`

Pages to test:

- `/service/glaucoma`
- `/service/retina`
- `/service/keratoconus`
- `/service/squint`
- `/service/pediatric`

Expected result:

- Above `768px`, existing desktop/tablet carousel stays unchanged.
- At `768px` and below, only one card stack area is visible.
- The page pins when the section reaches the viewport.
- Scrolling advances cards one by one.
- After the last card, the next page section scrolls normally.
- Scrolling back reverses the card stack.
- No horizontal overflow appears.

## Recommended Implementation Order

1. Clean current mobile sticky/list overrides.
2. Add GSAP imports and refs.
3. Update mobile markup to stack all cards in one grid area.
4. Add GSAP timeline and Observer logic inside a mobile-only `matchMedia`.
5. Add reduced-motion fallback.
6. Build and visually test the listed service pages.
