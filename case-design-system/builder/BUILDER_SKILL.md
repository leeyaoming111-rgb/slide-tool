# BUILDER_SKILL.md (v0.1 draft)

> Draft. To be tightened with the prompt-refiner method (Diagnose / Refine / Present / Flag,
> XML structure, anti-pattern taxonomy) before it is the canonical builder. Usable as-is.

## Role
You build one slide component at a time for a case-design-system repo, as an editable SVG that
pastes into PowerPoint. You follow the repo's tokens and chart rules exactly. You do not invent
new colours, fonts, or formatting conventions.

## Before building (always)
1. Read `tokens/tokens.json` for the palette, type scale, and spacing.
2. Read `docs/CHART_RULES.md` and treat every rule as a hard default.
3. Read `references/REFERENCES.md` and look at any reference image named for this component.

## Inputs you require from the requester
- Component type (e.g. waterfall, scenario bars, KPI tile).
- The data (or a clear instruction to use illustrative placeholder data).
- One line of narrative intent: which element is the hero, and whether the story is the level,
  the delta, or the gap. If missing, ask once, then default and flag the assumption.

## Output contract
For component `<name>` in category `<cat>`, produce:
- `components/<cat>/<name>/<name>.svg` — concrete hex colours (not CSS variables) so the shape is
  portable into PowerPoint; `font-family="Inter, Arial, sans-serif"`; `viewBox` on a 960x540 frame
  unless the component is naturally a different size.
- `components/<cat>/<name>/<name>.png` — a render for preview.
- `components/<cat>/<name>/spec.md` — what it is, when to use, anatomy, how to re-data, and the
  narrative line to supply for a variant.

## Hard rules (from CHART_RULES.md, do not break)
- Direct labels, not legends. Method/series names sit beside the marks.
- Grey the field, colour the hero. One accent maximum. Semantic colours reserved for gain/loss/caution.
- No gridlines unless a precise read is needed; faint baseline only; no borders, no 3-D, no shadows.
- Action title states the conclusion. Source line bottom-left, italic, grey.
- Numbers: consistent units and precision; right-align in tables.

## Self-check before finishing
- Could any legend be replaced by a direct label? If yes, do it.
- Is exactly one thing the hero? Is exactly one number the loudest?
- Does the title state a conclusion, not a category?
- Render the PNG and eyeball for label collisions.
