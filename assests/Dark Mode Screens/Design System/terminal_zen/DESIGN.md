# Design System Strategy: High-End Minimalist Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Curator"
This design system moves away from the dense, modular "dashboard" aesthetic toward a sophisticated editorial experience. It is designed to feel like a high-end physical portfolio or a premium tech journal. We break the standard "template" look by prioritizing **negative space as a functional element**, rather than just a gap between content. 

The system utilizes intentional asymmetry and a rigid adherence to tonal depth. By stripping away decorative borders and high-contrast separators, we allow the content blocks to breathe and the typography to dictate the hierarchy. The result is an interface that feels quiet, authoritative, and deeply focused.

---

## 2. Colors

The palette is anchored in deep obsidian and muted indigo, moving away from "pure black" to create a more natural, ink-like darkness.

### The "No-Line" Rule
To achieve a premium editorial feel, **1px solid borders are strictly prohibited for sectioning or container definition.** Boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` (#131314) for large section backgrounds against the primary `background` (#0e0e0f).

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, matte surfaces.
- **Base Layer:** `background` (#0e0e0f).
- **Secondary Sections:** `surface-container` (#1a191b).
- **Interactive/Raised Elements:** `surface-container-highest` (#262528).
This nesting creates "soft edges" that guide the eye without the visual clutter of lines.

### Signature Textures & Gradients
Standard primary blocks can feel "flat." For main CTAs and key highlights, use a subtle linear gradient (135°) transitioning from `primary` (#bac3ff) to `primary_container` (#2f3f92) at a 40% opacity. This provides a "glass-like" soul to the professional blue/indigo.

---

## 3. Typography

The system utilizes a dual-font strategy: **Space Grotesk** for structural authority and **Inter** for legible, sophisticated body content.

- **Display & Headlines (Space Grotesk):** These should be treated as architectural elements. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to create a bold, "title page" impact. 
- **Titles & Body (Inter):** Used for all narrative content. The transition from `title-lg` (1.375rem) to `body-md` (0.875rem) should feel intentional, with ample line-height (1.6) to ensure the dark theme remains easy on the eyes.
- **Labels (Space Grotesk):** `label-md` (0.75rem) in all-caps should be used for metadata and category tags to maintain the "tech-editorial" vibe.

---

## 4. Elevation & Depth

### The Layering Principle
Depth is achieved through "Tonal Stacking." Place a `surface-container-lowest` (#000000) card on a `surface-container-low` (#131314) section to create a natural, recessed "well" effect. This replaces the need for drop shadows in standard layouts.

### Ambient Shadows
For floating elements (modals, tooltips), use a tinted ambient shadow.
- **Shadow Spec:** `0px 24px 48px -12px rgba(186, 195, 255, 0.06)`
By using a low-opacity version of the `primary` color instead of black, the shadow feels like light bouncing off a premium surface.

### The "Ghost Border" Fallback
If a border is required for accessibility, use a "Ghost Border": the `outline_variant` (#48474a) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** No solid background. Instead, use a `surface-container-highest` background with a `primary` label. For hover states, introduce a `surface-tint` glow.
- **Secondary:** Transparent background with an `outline` (#767578) ghost border.

### Cards & Content Blocks
- **The Divider Rule:** Forbid 1px dividers. Separate content inside cards using `Spacing Scale: 6` (2rem) or a subtle shift from `surface-container` to `surface-variant`.
- **Rounding:** All cards must use `rounded-lg` (0.5rem). Selection indicators (like active menu states) use `rounded-full`.

### Inputs & Chips
- **Inputs:** Use `surface-container-low` with a `title-sm` font. On focus, shift the background to `surface-bright`.
- **Chips:** `tertiary_container` for the background with `on_tertiary_fixed` text. Keep them small (`label-sm`) and use `rounded-full`.

### Navigation (Sidebar)
The sidebar should not be a separate "box." It should be an floating array of icons on the `background` layer, utilizing `surface-container` for the active state to create a "punched-out" effect.

---

## 6. Do's and Don'ts

### Do
- **Do** use `Spacing Scale: 12` (4rem) between major vertical content blocks to enforce the editorial feel.
- **Do** use `on_surface_variant` (#acaaad) for secondary text to maintain a low-contrast, premium aesthetic.
- **Do** allow hero imagery to bleed to the edges of containers to break the "boxed-in" grid.

### Don't
- **Don't** use pure white (#ffffff) for text. Use `on_surface` (#e8e4e8) to reduce glare on the dark background.
- **Don't** use "glow" effects or heavy neon pulses. Keep the blue/indigo application subtle—restricted to icons, active states, and small accents.
- **Don't** use standard 8px or 16px grids strictly. Use the Spacing Scale to create "breathing rooms" of 2.75rem or 3.5rem for a more bespoke layout.