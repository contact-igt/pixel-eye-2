# About Visionaries Desktop Alignment Fix Plan

## Scope
Fix only the About page `VisionariesSection` desktop alignment for:
- `1400px` and above
- `1200px` to `1399px`

This plan does not change the Suggested Reads section, Process Videos section, or mobile carousel behavior.

## Current Issue
`src/component/About/VisionariesSection/styles.module.css` allowed the bio card to use all remaining desktop grid width:

```css
.row {
  grid-template-columns: minmax(360px, 480px) minmax(0, 1fr);
}
```

In Chrome responsive mode, especially from `1200px` upward, the media card stayed near `480px` while the bio card stretched too wide. That created uneven visual balance and inconsistent gaps compared with the Figma layout.

## Implementation
1. Keep `VisionariesSection/index.jsx` unchanged.
2. Update `VisionariesSection/styles.module.css` only.
3. Cap desktop `.row` width but keep it on the same left content rail as the title/subtitle.
4. Use explicit desktop columns for `1400px+`:
   - Media column: `430px-480px`
   - Bio column: capped at `716px`
   - Gap: `28px-32px`
5. Add a separate `1200px-1399px` rule:
   - Row max width: `1110px`
   - Media column: `400px-440px`
   - Bio column: capped at `646px`
   - Gap: `26px`
6. Slightly reduce the desktop bio paragraph max font size so Chrome does not make the bio card visually heavier than the media card.
7. Prevent overlap by keeping the media/info card on its own layer and the bio card behind its own grid column.
8. Preserve the existing 1199px and below stacked layout.

## Verification
- `agent-browser` was requested, but the CLI is not installed in this environment.
- Verified the implementation with `npm run build`.
- Recommended manual checks in Chrome responsive mode: `1550px`, `1400px`, `1380px`, and `1200px` widths on `/about`.

## Expected Result
The Visionaries section should now keep the title, subtitle, doctor media card, and bio row aligned to the same left starting rail across `1400px+` and `1200px-1399px`, without changing the existing tablet/mobile stacking behavior.