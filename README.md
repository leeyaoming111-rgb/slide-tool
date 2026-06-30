# Case Design System

A library of reusable, copy-paste components for MBB-standard (McKinsey, Bain & Company, Boston
Consulting Group) case-competition slides, weighted toward finance. The goal is not to produce
whole slides, it is to hold a kit of good-looking, on-brand pieces (boxes, tables, charts,
diagrams, headline patterns) that drop into an existing deck and a set of rules that make them
consistent.

## How to use this repo
- **Browse** `components/` by category. Each component ships an editable `.svg`, a `.png`
  preview, and a `spec.md`.
- **Paste** the `.svg` into PowerPoint: it arrives as an editable vector shape, not a flat image.
- **For Claude Design:** point it at this repo. `tokens/` and `docs/CHART_RULES.md` define the
  system so anything generated stays on-brand.

## Structure
```
tokens/        tokens.json + tokens.css   (the palette, type, spacing — machine-readable)
docs/          CHART_RULES.md             (the house formatting rules)
references/    saved inspiration + REFERENCES.md catalog + model-reference.xlsx
components/
  containers/  callouts, KPI tiles, comparison cards
  tables/      stat tables, bear/base/bull, scorecards
  charts-finance/  football-field (done), waterfall, scenario bars, build-up table
  diagrams/    value-driver tree, 2x2, value chain, process
  headlines/   action-title and kicker patterns
builder/       BUILDER_SKILL.md           (prompt for adding components later)
```

## Two visual families
- **Corporate (default):** clean navy + slate, semantic green/red/amber. Boardroom-legible.
- **Activist (optional):** black + signal yellow, high contrast. From the Irenic references.

Same foundation, different skin. Build corporate first; activist variants follow.

## Type note
Inter (with Arial as the paste-safe fallback) is used deliberately. Consulting decks reward
restraint and legibility over characterful display fonts, and Arial fallback means a pasted shape
never breaks on a machine without Inter installed. Optional Source Serif 4 for emphasis lines.

## Status
v0.1 — skeleton, tokens, chart rules, reference library, and the football field are in.
Next: waterfall/bridge, scenario bars, build-up table.
