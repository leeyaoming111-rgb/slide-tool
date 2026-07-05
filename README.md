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
  containers/  callouts, KPI tiles, takeaway strips, comparison cards (done)
  tables/      stat tables, bear/base/bull scenario tables (done)
  charts-finance/  football-field, waterfall, scenario bars, build-up table (done)
  diagrams/    value-driver tree, 2x2, value chain, process (not started)
  headlines/   action-title and kicker patterns (done)
builder/       BUILDER_SKILL.md           (prompt for adding components later)
```

## Two visual families
- **Corporate (default):** clean navy + slate, semantic green/red/amber. Boardroom-legible.
- **Activist (optional):** black + signal yellow, high contrast. From the Irenic references.

Same foundation, different skin. Build corporate first; activist variants follow.

## Type note
Calibri (with Carlito, then Arial, as paste-safe fallbacks) is used deliberately: it is the
UoA Case Programme's native face, so components read as Auckland-model slides the moment they
are pasted in. Carlito is the metric-identical open-source Calibri clone, which keeps Linux/CI
renders pixel-faithful (`fonts-crosextra-carlito`). Optional Source Serif 4 for emphasis lines.

## Status
v0.2 — tokens, chart rules, reference library, and all four v1 finance charts are in (football
field, waterfall, scenario bars, build-up table), plus headlines, containers, and tables.
Next: the diagram primitives (value-driver tree, 2x2, value chain, process) are still unbuilt.

Built so far:
- `components/headlines/` &mdash; `kicker/`, `action-title/`
- `components/containers/` &mdash; `kpi-tile/`, `callout/`, `takeaway-strip/`, `comparison-card/`
- `components/tables/` &mdash; `stat-table/`, `scenario-table/`
- `components/charts-finance/` &mdash; `football-field/`, `waterfall/`, `scenario-bars/`, `build-up-table/`
- `components/diagrams/` &mdash; not started
