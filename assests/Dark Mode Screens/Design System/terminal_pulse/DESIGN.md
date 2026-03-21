# Design System Strategy: The Engineered Atmosphere

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Console."** 

DevOps is about the seamless, invisible flow of data and the robust architecture that supports it. This design system rejects the "flat web" in favor of a high-fidelity, command-center aesthetic. We achieve this through a "Deep Stack" layout—using overlapping containers, asymmetric grid breaks, and high-chroma accents that feel like status indicators on a dark terminal. By utilizing extreme typographic contrast and glassmorphism, we move the portfolio from a static resume to an immersive technical environment.

## 2. Colors
Our palette is rooted in the deep void of a terminal, punctuated by the "electric" energy of deployment cycles.

*   **Primary (`#94aaff`):** Use for active states and high-priority technical data.
*   **Secondary (`#ff7520`):** Use for "Alert" level significance or secondary CTAs to balance the cool tones.
*   **Tertiary (`#81ecff`):** Specifically reserved for specialized tags or "Success" indicators.

### The "No-Line" Rule
Explicitly prohibit the use of 1px solid borders for sectioning or containment. Traditional lines clutter the "atmosphere." Instead, boundaries must be defined by:
*   **Background Shifts:** Transitioning from `surface` (`#0e0e10`) to `surface_container_low` (`#131315`).
*   **Tonal Transitions:** A card should be recognized because its surface color is slightly higher in the stack, not because it has an outline.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials.
*   **Level 0 (Foundation):** `background` (`#0e0e10`).
*   **Level 1 (Sections):** `surface_container` (`#19191c`).
*   **Level 2 (Cards/Modules):** `surface_container_high` (`#1f1f22`).
*   **Level 3 (Floating/Active):** `surface_container_highest` (`#262528`).

### The "Glass & Gradient" Rule
For elements that require high prominence (Hero headers or Navigation rails), use Glassmorphism. Apply `surface_variant` at 60% opacity with a `backdrop-filter: blur(20px)`. Main CTAs should use a subtle linear gradient from `primary` to `primary_container` at a 135-degree angle to simulate light hitting a high-tech surface.

## 3. Typography
The type system mirrors the precision of code and the authority of editorial design.

*   **Display & Headlines (Space Grotesk):** This font provides a technical, slightly "brutalist" edge. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero titles to command attention.
*   **Body & Labels (Inter):** Chosen for its exceptional readability on dark backgrounds. `body-md` (0.875rem) is our workhorse for descriptions.
*   **Visual Hierarchy:** Always pair a `display-sm` headline with a `label-md` uppercase subtitle (using `secondary` color) to create an "Editorial Stack."

## 4. Elevation & Depth
Depth is created through light simulation rather than structural lines.

*   **The Layering Principle:** Place a `surface_container_lowest` card inside a `surface_container_high` parent. This "recessed" look creates a professional, "machined" feel.
*   **Ambient Shadows:** Floating elements (like Tooltips or Popovers) must use ultra-diffused shadows: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. Avoid dark grey; ensure the shadow feels like a natural occlusion of the background.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility on a button or input, use `outline_variant` (`#48474a`) at 20% opacity. Never use 100% opacity borders.
*   **Glassmorphism Depth:** To separate the sidebar from the main content, use a `surface_bright` tint with a 10% opacity overlay and a heavy blur, creating a "frosted" separation that maintains the sense of space.

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background with `on_primary` text. `xl` (1.5rem) corner radius.
*   **Secondary:** Ghost style with a 20% opacity `primary` fill and the "Ghost Border."
*   **Interaction:** On hover, apply a `primary_dim` outer glow (8px blur) to simulate a light-up console button.

### Cards & Project Tiles
*   **Construction:** Use `surface_container_high`. No dividers.
*   **Spacing:** Enforce a `padding: 6` (1.5rem) minimum to allow the content to "breathe" within the dark space.
*   **Image Handling:** Project screenshots should have a `md` (0.75rem) radius and a `20%` opacity black overlay to ensure text overlays remain legible.

### Navigation Rail (Sidebar)
*   Instead of a horizontal top nav, use a vertical rail. This breaks the "template" look.
*   **Active State:** Use a `primary` glass container with a `primary_fixed` icon.

### Technical Tags (Chips)
*   Use `surface_variant` backgrounds with `on_surface_variant` text.
*   For "Skill" chips, use `sm` (0.25rem) radius to feel more "modular" and "industrial."

## 6. Do's and Don'ts

### Do:
*   **Do** use intentional asymmetry. For example, left-align your headlines but right-align your project dates to create a dynamic visual path.
*   **Do** use the `secondary` color (`#ff7520`) sparingly—only for critical callouts like "Available for Work" or "Error" states.
*   **Do** utilize `vertical white space` (Spacing 16 or 20) to separate the "About" section from the "Experience" section.

### Don't:
*   **Don't** use pure white (`#ffffff`) for body text. Use `on_surface` (`#f6f3f5`) to reduce eye strain on the dark background.
*   **Don't** use standard 1px dividers. If you need to separate content, use a 1px height `surface_variant` line at 10% opacity, or simply a background color shift.
*   **Don't** use sharp corners. Everything must adhere to the `md` (0.75rem) or `lg` (1rem) roundedness scale to maintain the "sleek/premium" feel.