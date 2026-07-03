# Clinical Expertise Section Implementation Plan

## Goal

Add the Cataract page's `ClinicalExpertise` section to both the Pediatric and Squint service pages, placing it immediately above the FAQ section on each page.

The implementation should preserve the same UI structure, animation behavior, responsive CSS, and data shape used by the Cataract page.

## Current Source Of Truth

Use the Cataract implementation as the reference:

- Component: `src/component/Service-Cataract/clinicalExpertise/index.jsx`
- Styles: `src/component/Service-Cataract/clinicalExpertise/styles.module.css`
- Content shape: `SERVICE_CATARACT_CONTENT.clinicalExpertise` in `src/constant/serviceCataractContent.js`
- Current Cataract placement: `src/pagecomponent/ServiceCataract/index.jsx`

Cataract renders the section in this order:

```jsx
<CataractApproach />
<ClinicalExpertise />
<CataractFaq />
```

Pediatric currently renders:

```jsx
<HowPediatricCareIsDiagnosed />
<CataractFaq />
```

Squint currently renders:

```jsx
<HowSquintIsDiagnosed />
<CataractFaq />
```

## Pediatric Implementation

1. Create a cloned Pediatric component folder:

```text
src/component/Service-Pediatric/clinicalExpertise/index.jsx
src/component/Service-Pediatric/clinicalExpertise/styles.module.css
```

2. Copy the Cataract clinical expertise component and styles into this new folder.

3. Update the component import/content source:

```jsx
import { SERVICE_PEDIATRIC_CONTENT } from "@/constant/servicePediatricContent";
```

4. Rename the component export to:

```jsx
const PediatricClinicalExpertise = () => { ... }

export default PediatricClinicalExpertise;
```

5. Add a `clinicalExpertise` object to `src/constant/servicePediatricContent.js` using the same shape as Cataract:

```js
clinicalExpertise: {
  title: "Clinical expertise",
  intro: "...",
  cardBg: "/assets/Service/cataract/clinicbg.png",
  cardBgAlt: "Pixel Eye clinic background",
  doctorImage: "/assets/Service/Dr. Abdul Rasheed.png",
  doctorImageAlt: "Dr. Abdul Rasheed",
  doctorName: "Dr. Abdul Rasheed",
  doctorDescription: "...",
}
```

6. Import and render the section above FAQ in `src/pagecomponent/ServicePediatric/index.jsx`:

```jsx
import PediatricClinicalExpertise from "@/component/Service-Pediatric/clinicalExpertise";
```

Render order:

```jsx
<HowPediatricCareIsDiagnosed />
<PediatricClinicalExpertise />
<CataractFaq />
```

## Squint Implementation

1. Create a cloned Squint component folder:

```text
src/component/Service-Squint/clinicalExpertise/index.jsx
src/component/Service-Squint/clinicalExpertise/styles.module.css
```

2. Copy the Cataract clinical expertise component and styles into this new folder.

3. Update the component import/content source:

```jsx
import { SERVICE_SQUINT_CONTENT } from "@/constant/serviceSquintContent";
```

4. Rename the component export to:

```jsx
const SquintClinicalExpertise = () => { ... }

export default SquintClinicalExpertise;
```

5. Add a `clinicalExpertise` object to `src/constant/serviceSquintContent.js` using the same shape as Cataract:

```js
clinicalExpertise: {
  title: "Clinical expertise",
  intro: "...",
  cardBg: "/assets/Service/cataract/clinicbg.png",
  cardBgAlt: "Pixel Eye clinic background",
  doctorImage: "/assets/Service/Dr. Abdul Rasheed.png",
  doctorImageAlt: "Dr. Abdul Rasheed",
  doctorName: "Dr. Abdul Rasheed",
  doctorDescription: "...",
}
```

6. Import and render the section above FAQ in `src/pagecomponent/ServiceSquint/index.jsx`:

```jsx
import SquintClinicalExpertise from "@/component/Service-Squint/clinicalExpertise";
```

Render order:

```jsx
<HowSquintIsDiagnosed />
<SquintClinicalExpertise />
<CataractFaq />
```

## Notes

- Keep the same class names inside each cloned CSS module unless a service-specific override is needed. CSS modules prevent class leakage, so matching class names are safe.
- Keep `IntersectionObserver` reveal behavior from the Cataract component.
- Keep the same responsive breakpoints from Cataract first, then adjust only if visual QA shows mismatch on Pediatric or Squint pages.
- Do not import Cataract's component directly into Pediatric or Squint, because it reads from `SERVICE_CATARACT_CONTENT`. Each service needs its own cloned component pointing to its own service content object.
- The shared FAQ currently comes from `src/component/Service-Cataract/cataractFaq`; this plan keeps that existing behavior unchanged.

## Verification

After implementation, run:

```powershell
npm run build
```

Then verify routes:

```text
http://localhost:3000/service/pediatric
http://localhost:3000/service/squint
```

Expected result:

- Pediatric page shows Clinical Expertise immediately above FAQ.
- Squint page shows Clinical Expertise immediately above FAQ.
- `npm run build` includes `/service/pediatric` and `/service/squint` without errors.
