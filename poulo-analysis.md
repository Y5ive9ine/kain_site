# Poulo.site clean-room analysis and implementation map

## Evidence source

The target was inspected as a visitor at `https://www.poulo.site/`. The visual and interaction notes below use rendered text, screenshots, responsive measurements and observed controls. The source site uses a long single page with light and dark themes.

The local Craft Anything reference project is `D:\work\craft-anything`, cloned from `https://github.com/storytold/craft-anything`. Brandon Thomas is associated with the project, while the repository owner is `storytold`. The checkout was left unchanged at commit `f63ff7b`.

Craft Anything's useful workflow for this implementation is Study → Build → Check → Ready. Its website checks compare multiple screen widths and keep evidence separate from the generated project. The Astro implementation follows the same boundary by keeping content in data files, layout in components, and responsive checks in `scripts/acceptance.mjs`.

## Page layout

- Fixed or sticky top navigation with Home, Work, Experiments, About, Stack, a booking CTA and a light/dark theme control.
- A very large hero with a role ticker, large typographic statement, a centered visual focal point and supporting interaction prompts.
- A horizontal row of circular brand marks with large whitespace around it.
- A Works section with filters, result count and Showcase/Grid/Deck view controls.
- Each work item uses a two-column case surface, a dark media area, a summary area, metadata and a single Learn more action.
- Four short insight tiles sit below each case surface.
- AI Experiments uses three equal cards with a visual preview, description and action.
- About uses a large statement next to expandable detail rows.
- Journey is presented as a low-density table. Stack is a list of capabilities and tools.
- The footer uses grouped links, a contact area and an oversized low-contrast wordmark.

## Visual system

- Canvas is white in light mode and near-black in dark mode.
- Primary ink is near-black. Supporting copy uses a neutral gray. Borders are very light gray.
- Cards use pale gray surfaces, 12–16px radii and restrained shadows.
- Typography is a clean sans-serif with strong 500–700 weight headings, tight tracking and 13–16px supporting text. Mono is reserved for small labels and metadata.
- Controls are compact pills with 1px borders. The primary CTA is a filled dark pill.
- Section separators and faint vertical rails create a quiet grid without adding decorative noise.
- The implementation uses system and Inter-compatible fallbacks so it remains self-contained and does not require a remote font request.

## Interaction state flow

1. Load the page with the default Showcase view and the All filter selected.
2. Select a category. Cards outside the category become hidden and the result count updates.
3. Select Grid or Deck. The same cards change layout without changing their URLs or content.
4. Hover cards and Learn more actions for a small lift and border/color response.
5. Open About rows with native `details` elements. The state is keyboard accessible without a framework.
6. Use the theme control to switch the document between light and dark tokens.
7. On narrow screens, the navigation collapses to a native details menu. Filters remain horizontally scrollable and case studies stack.

## Core content model

- `projects.ts` owns case metadata, tags, roles, years, summaries and section evidence.
- `experiments.ts` owns small experiments and their status.
- `posts.ts` owns Notes content and remains independent from the homepage presentation.
- `BaseLayout.astro` owns SEO, theme persistence and shared navigation/footer.
- `scripts/acceptance.mjs` checks content routes, responsive widths, filtering, view switching, theme state and feed endpoints.

