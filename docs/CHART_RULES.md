# Chart & formatting rules (the house style)

This is the file that turns "the hard part" into a default. Every preference about how a
chart should look, once written here, gets applied the same way every time instead of being
re-requested. Add to it whenever a new preference surfaces.

These rules cover how an exhibit **looks**; how its copy is **worded** (titles, numbers,
takeaways, the Auckland voice) lives in `COPY_RULES.md`.

Acronyms used below: average revenue per user (ARPU), compound annual growth rate (CAGR),
discounted cash flow (DCF), earnings before interest, tax, depreciation and amortisation (EBITDA).

## Labelling

1. **Direct labels over legends.** Put the series name next to the thing it labels, not in a
   legend the reader has to bounce back to. Side labels on lines, end-of-bar labels on bars,
   leader-line labels on pie/donut slices. A legend is the fallback only when direct labelling
   is physically impossible (e.g. many thin stacked segments), and even then label the largest
   segments directly. (Seen in your refs: the pie in `ref05` and the bar end-labels in `ref04`.)
2. **Data labels on, axis numbers off** when the chart has few marks. If every bar is labelled
   with its value, drop the y-axis number ticks; they are redundant and add clutter.
3. **One number per slide should be the loudest.** The figure that carries the message is the
   largest type on the chart. Everything else is support.

## Colour discipline

4. **Grey the field, colour the hero.** In a comparison, the bar/line that proves the point is
   navy or accent; the rest are grey. Never colour everything; colour is meaning, not decoration.
5. **Semantic colours are reserved.** Green = upside/gain, red = downside/risk, amber =
   caution or a reference line. Do not use these three for neutral categories.
6. **Max one accent.** A single highlight colour per chart. If two things are "highlighted",
   nothing is.

## De-cluttering

7. No gridlines unless the reader must read a precise value off the axis; if needed, make them
   faint (`--gridline`) and behind the data.
8. No chart border, no 3-D, no drop shadows on bars, no background fill inside the plot.
9. Round bar corners 3px max. Keep it subtle.
10. Y-axis baseline is a thin rule, not a heavy line. Drop the right and top spines entirely.

## Numbers

11. Right-align numeric columns in tables. Align decimals.
12. Consistent units and precision within a chart ($ millions to one decimal, or whole numbers,
    not both). State the unit once, in the axis title or a top-left note ("Revenues in €m").
13. Currency and unit live with the first number or in the header, not repeated on every cell.

## Structure of a finance exhibit

14. **Action title, not a label title.** "Revenue grows to $300m by 2015", not "Revenue".
    The title states the conclusion; the chart is the evidence.
15. **Build bottom-up and show the arithmetic.** ARPU x users = revenue; bridge start -> deltas
    -> end. The reader should be able to reconstruct the number. (`ref01`, `ref04`.)
16. Source line bottom-left, italic, grey, small. Always present on a data exhibit.
17. A takeaway strip (one navy bar with white text) at the bottom is a strong close for a single
    big exhibit. (`ref01`.)

## The narrative handoff (the part the human still owns)

A chart cannot infer which fact is the message. When you request a chart, give one line of intent:
"hero is FY27, the story is the delta not the level" or "the point is the gap to peer median".
With that line, every rule above resolves automatically. Without it, the builder will pick a
reasonable default and you may need one revision.

## Live data vs. locked data

Native spreadsheet charts recalculate; an exported SVG does not. Rule of thumb: while the
numbers are still moving, build in the spreadsheet. Once the numbers are locked and it needs to
look perfect, hand it over as SVG. Football fields, waterfalls and scenario bars are usually
locked by formatting time, so they are the best candidates for this library.

## Orientation, tables and copy (added from user review, see `references/REFERENCES.md`)

18. **Bar charts and waterfalls read well flipped sideways.** A horizontal bar chart suits a
    ranking or scenario list where the label sits on the left (`ref11`). A waterfall/bridge can
    run as a vertical stack of horizontal lever bars connecting to a running total, rather than
    the classic left-to-right column bridge (`ref10`).
19. **Row banding, not rules, for long tables/timelines.** Alternate white and light-grey row
    bands to group rows instead of drawing a line under each one (`ref11`).
20. **Tables use horizontal rules only.** A rule under the header row, a rule at the foot, and
    thin rules between rows if needed. No outside border, no vertical lines, no cell fills except
    optional row banding.
21. **Navy-background dense slides** are the right tool when the story is "look at all this
    evidence at once": several small exhibits, each with its own tight header and unit note,
    packed onto one solid-navy slide (`ref14`, `ref16`).
22. **No em dashes in slide copy.** Use colons, commas, semicolons, or a new sentence instead.

## Radar and combo charts (construction rules borrowed from bklit-ui's code, not its look)

23. **Radar: normalise every axis to 0-100 before plotting.** Raw metrics (revenue in $m,
    NPS in points, share in %) are not comparable as radii. Score each metric 0-100 first and
    keep the scoring table in the spec's data notes so the chart can be re-derived. The plot
    uses one shared 0-100 scale; never mix raw units on the spokes.
24. **Radar: first spoke at 12 o'clock.** Spoke angle for metric i of n is
    `i * 360/n - 90` degrees. The most important metric goes on the vertical spoke; the rest
    read clockwise. Spoke labels sit just outside the outer ring (radius + ~24px), anchored
    middle.
25. **Radar polygon styling.** Series polygon: 2px stroke in the series colour, same-colour
    fill at ~15% opacity, `stroke-linejoin: round`. Vertex dots get a 2px stroke in the slide
    background colour so they read as points against the fill. Grey the field, colour the
    hero (rule 4) applies: competitor polygons grey, our polygon navy/accent.
26. **Radar grid: 4-5 rings maximum,** faint (`--gridline`), with ring values labelled once
    along the vertical spoke only, not on every spoke.
27. **Combo chart (bars + line): one scale per unit, never per series.** Group series by unit;
    absolute values (revenue bars) own the left axis, the rate series (margin %, growth %)
    owns the right axis. Two axes maximum. Style the right axis in the line's colour so
    ownership is unambiguous.
28. **Combo chart axis maxima are computed, then rounded to a nice tick.** If bars are
    stacked, the left-axis max is the largest *stack sum* per period, not the largest single
    segment, compared against any same-axis line values; take the overall max and round up to
    a clean interval (steps of 1/2/2.5/5 x 10^n) so gridlines land on round numbers.
