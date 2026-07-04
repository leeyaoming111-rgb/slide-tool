# Templates

Working tools that sit upstream of the polished SVG components, per the
"live data vs locked data" rule in `docs/CHART_RULES.md`: build in the spreadsheet while
numbers are still moving, hand off to the SVG builder once they lock.

## `chart-templates.xlsx`

Native Excel chart templates, corporate family, one tab per chart type. Every chart is
pre-styled to `tokens/tokens.json` (navy/accent/grey palette, Inter with Arial fallback,
no gridlines unless precise reading is needed, direct labels with the value axis off where
Excel allows). Blue cells are inputs; grey cells are helper formulas the charts need
(waterfall bases, radar 0–100 normalisation) — edit the blue, leave the grey.

Tabs: READ ME (usage + palette + house-rule recap), Waterfall, Waterfall-H (horizontal
lever bridge), Football Field, Scenario Bars, Build-Up Table, Column-Hero, Bars-Ranking,
Stacked Bars, Line, Combo Bar+Line, Radar, Pie, Dual-Axis Lines.

Known Excel limits, noted on the relevant tabs:

- Football field: the amber current-price line must be added as a shape, or hand off to
  `components/charts-finance/football-field` once locked.
- Waterfall value labels sit inside segments; the SVG waterfall floats them above.
- Line charts: direct side labels are text boxes added after pasting.

## `build_chart_templates.py`

Generator script for the workbook (openpyxl). To add a chart type or change styling,
edit the script and re-run from the repo root:

```
pip install openpyxl
python3 templates/build_chart_templates.py
```

It overwrites `templates/chart-templates.xlsx` in place. Commit both files together.
