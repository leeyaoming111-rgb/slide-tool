# Reference library

Saved inspiration. Each entry notes what to lift from it. Keep adding rows; this is the taste
record the builder learns from. Two aesthetic families are present: **corporate** (clean navy,
boardroom) and **activist** (black/yellow, high contrast). The default system is corporate;
activist is an optional theme.

| File | Source / vibe | Family | Components to extract |
|------|---------------|--------|------------------------|
| `ref01_finance-buildup-table.png` | Auckland-style FINANCE slide | corporate | Bottom-up build-up table (ARPU x users = revenue); green highlight "Change" row; navy takeaway strip |
| `ref02_value-driver-tree.png` | "Impact of B-Corp Boost" | corporate | Value-driver tree (Revenue -> drivers); dashed callout boxes; "Underlying Assumptions" bracket; section-tracker footer |
| `ref03_stackedbar-kpi-panel.png` | "ATTACHÉ" impact slide | corporate | Stacked bar with in-segment labels; right-side KPI panel (big number + icon + descriptor); kicker headline "Impact \| ..." |
| `ref04_waterfall-bridge.png` | Irenic "6 Steps to 7x" | activist | Waterfall / bridge (share-price build); numbered step chips; endpoint bars in accent; direct value labels on floating bars |
| `ref05_three-panel-exhibit.png` | Irenic Opex slide | activist | Three-panel exhibit triptych; left accent rule per panel; per-panel takeaway; bottom black summary-math strip; pie with external leader labels (no legend) |
| `ref06_comparison-cards.png` | Irenic "competition" slide | activist | Comparison-card grid (logo + image + stat + descriptor); accent top-border per card; numbered kicker tab |
| `ref07_ic-thesis-layout.png` | Weebit Nano sell thesis | corporate | Stat table (price/shares/EV); bear/base/bull price-target table (red/blue/green headers); numbered point list (alternating shade); coloured-header info boxes |
| `ref08_scenario-cagr-boxes.png` | Scenario set | corporate | Scenario-comparison stack; small navy bar chart per scenario; oval CAGR-arrow annotation; dashed highlight border on the chosen scenario |
| `model-reference.xlsx` | Auckland Model breakdown | — | Working model the finance components should mirror in convention (mine for build-up structure, ratio formulas, formatting) |
| `ref09_stacked-bars-with-arrow-callouts.png` | McKinsey hydrogen market-size slide | corporate | Stacked bar chart (domestic/international) with a diagonal arrow annotation carrying a CAGR chip ("+12-15% p.a."); legend top-left since segments are thin |
| `ref10_horizontal-waterfall-lever-breakdown.png` | McKinsey hydrogen cost-bridge slide | corporate | **Waterfall flipped sideways**: each lever is a horizontal bar, stacked top-to-bottom from a start total to an end total, with a floating running-total connector and a bold delta chip ("-46%") at the foot. Annotation column to the right explains each lever |
| `ref11_grey-white-row-banding-timeline.png` | McKinsey hydrogen application-timeline slide | corporate | **Row banding**: alternating white/light-grey bands group each row (no border lines) across a left data table and a right Gantt-style ramp timeline with diamond break-even markers and tapering wedge bars |
| `ref12_four-column-scenario-bars.png` | McKinsey hydrogen export-market slide | corporate | Four-column scenario/geography layout, each column its own mini bar chart (paired base/ambitious bars per year) under a shared header row |
| `ref13_stacked-bars-by-country-legend.png` | McKinsey hydrogen export-market slide | corporate | Stacked bars by country/region with a top-right colour legend (used when segments are too thin for direct labels); paired ovals above each bar group call out summary totals |
| `ref14_navy-dense-multi-panel.png` | Digital-assets market slide | corporate (navy bg) | **Navy-background dense multi-panel**: solid navy fill, white text/rules, several small exhibits (bar chart, mini table, line chart, stat callouts) packed into one slide, each with its own tight header |
| `ref15_metric-decomposition-times-equals.png` | Bitcoin-mining valuation slide | corporate | Metric decomposition using `x` / `=` connector chips between three stacked bar-chart rows (bitcoins created x price = value); left-hand shaded metric labels, CAGR arrows over each row |
| `ref16_navy-hero-stat-dual-axis.png` | Quantum-computing investment slide | corporate (navy bg) | Navy background with one oversized hero stat ("<10%") and a dual-axis line chart (two y-axis scales, two series) below it |

## Design principles logged from user feedback
The user called these out explicitly when reviewing generated slides; treat them as house rules
alongside `docs/CHART_RULES.md`:
- **Bar charts flipped sideways** (horizontal bars) for ranking or scenario lists where the label
  sits on the left. See `ref11`.
- **Waterfalls flipped sideways**: a vertical stack of lever bars, each connecting to a running
  total on the left, with an annotation column on the right. See `ref10`.
- **Row banding on tables/timelines**: alternate white and light-grey row bands (no border lines)
  to segment rows instead of drawing rules. See `ref11`.
- **Navy-background dense slides**: many small diagrams packed into one slide, each with its own
  tight header and unit note. Use when the story is "look at all this evidence at once". See
  `ref14`, `ref16`.
- **Tables have horizontal rules only**: a rule under the header row, a rule at the foot, and thin
  rules between rows if needed. No outside border, no vertical lines, no cell fills except
  optional row banding.
- **No em dashes.** Use colons, commas, semicolons, or a new sentence in all slide copy.

## Build priority (v1)
Finance charts first: **football field** (done, see `components/charts-finance/football-field/`),
then **waterfall/bridge** (`ref04`, `ref10`) — done, see `components/charts-finance/waterfall/` —
then **scenario bars** (`ref08`, `ref12`) — done, see `components/charts-finance/scenario-bars/` —
then the **build-up table** (`ref01`) — done, see `components/charts-finance/build-up-table/`.
Next up: the **diagram primitives** (value-driver tree, 2x2, value chain, process) are still
unbuilt — see `components/diagrams/`.
