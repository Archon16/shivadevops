# Design System Document: Kinetic Precision

## 1. Overview & Creative North Star: "The Clinical Console"
The Creative North Star for this design system is **"The Clinical Console."** It moves away from the gritty, dark aesthetics of traditional terminal interfaces and reimagines DevOps tooling as a high-end, editorial experience. It is where the raw speed of a command-line interface meets the sophisticated clarity of a Swiss design laboratory.

We break the "template" look by rejecting standard grid boundaries. Instead, we use **intentional asymmetry**—aligning heavy data blocks against expansive white space—and **tonal depth** to create a UI that feels engineered, not just "designed." Every element must feel like a precision instrument: sharp, reactive, and essential.

## 2. Colors & Surface Architecture
The palette is anchored by a sterile, high-contrast base (`#f5f7f9`) electrified by a singular, high-energy Primary Blue (`#0049e6`).

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural definition must be achieved through:
*   **Background Shifts:** Use `surface-container-low` for sidebars and `surface` for main content.
*   **Tonal Nesting:** Create depth by placing `surface-container-lowest` cards on `surface-container` backgrounds. This creates a natural "lift" that feels integrated into the architecture rather than floating on top of it.

### Glass & Gradient Strategy
To prevent the UI from feeling flat or "cheap," apply these signature treatments:
*   **The Pulse Gradient:** Use a subtle linear gradient from `primary` to `primary-container` for high-action CTAs. This adds "soul" and kinetic energy to the button.
*   **Frosted Glass:** Floating panels (like Command Palettes or Popovers) should use `surface-container-lowest` at 85% opacity with a `12px` backdrop blur. This allows the vibrant `primary` accents of the background to bleed through, softening the interface.

## 3. Typography: The Space Grotesk Hierarchy
We use **Space Grotesk** exclusively. Its monospaced-adjacent terminals and geometric construction evoke a "Kinetic Console" feel while remaining highly legible.

*   **Display (lg/md):** Use for "System Status" or "Global Metrics." These should be set with a `-0.04em` letter-spacing to feel tight and engineered.
*   **Headline (lg/md/sm):** These are your primary landmarks. Use `on-surface` for maximum contrast against the light background.
*   **Title (lg/md/sm):** Reserved for card headers and section labels.
*   **Body (lg/md/sm):** The workhorse for logs and data. `body-md` is the default for terminal-style output.
*   **Label (md/sm):** Always uppercase with `+0.05em` letter-spacing when used for metadata or status tags to mimic console "tags."

## 4. Elevation & Depth: Tonal Layering
In this system, light is the architect. We do not use heavy shadows to simulate height; we use the **Layering Principle.**

*   **The Stack:**
    1.  Base: `surface` (#f5f7f9)
    2.  Sections: `surface-container-low` (#eef1f3)
    3.  Interactive Cards: `surface-container-lowest` (#ffffff)
*   **Ambient Shadows:** If an element must float (e.g., a Modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(44, 47, 49, 0.06)`. Note the use of the `on-surface` color at a very low opacity to keep the shadow feeling "clean."
*   **The Ghost Border:** For high-density data tables where separation is critical, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

## 5. Components: The Kinetic Toolset

### Buttons (Kinetic Triggers)
*   **Primary:** A gradient fill from `primary` to `primary-dim`. Use `DEFAULT` (0.25rem) roundedness for a sharp, technical look.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **States:** On hover, primary buttons should shift slightly toward `primary-fixed-dim` to simulate a "glow" effect.

### Input Fields (Data Entry)
*   **Style:** Minimalist. Only a bottom-border using `outline-variant` is required. When focused, the border transitions to `primary` at 2px thickness. 
*   **Typography:** All input text uses `body-md`. Helper text uses `label-sm` with `on-surface-variant`.

### Cards & Lists (The Divider-Free Rule)
*   **Rule:** Forbid the use of horizontal rules (`<hr>`).
*   **Execution:** Separate list items using the Spacing Scale (e.g., `spacing-4` or `0.9rem`). Use a subtle background shift to `surface-container-low` on hover to define the interactive area.

### Chips (System Tags)
*   **Action Chips:** Use `secondary-container` with `on-secondary-container` text. These should feel like physical "tabs" on a console.

### Additional Component: The "Live Stream" Log
*   A specialized list component for DevOps logs. Use `surface-dim` for the background, `SPACE_GROTESK` in `body-sm`, and `tertiary` (green) for "Success" timestamps.

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a functional tool. A `24` (5.5rem) gap between major modules is encouraged to reduce cognitive load.
*   **DO** use `tertiary` (vibrant green) sparingly for "System Healthy" indicators to contrast against the `primary` blue.
*   **DO** lean into asymmetry. A left-heavy sidebar balanced by a centered, wide-margin terminal log creates a premium, custom feel.

### Don't:
*   **DON'T** use 100% black. Always use `on-surface` (#2c2f31) for text to maintain the "Clinical" look without being jarring.
*   **DON'T** use `lg` or `xl` roundedness on functional components. Stick to `DEFAULT` or `sm` to maintain the "Engineered" aesthetic.
*   **DON'T** use drop shadows on cards. Use surface color nesting instead.