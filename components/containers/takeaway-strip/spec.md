# Takeaway strip

![preview](takeaway-strip.png)

**What it is.** A single full-width navy bar with centred white text. The strong close of a big
exhibit: the one sentence the reader should leave with (`ref01`).

**When to use.** At the very bottom of a single, large exhibit (a table, a chart, a KPI panel)
that has earned one closing sentence. Don't use it beneath multiple small panels; that's what a
navy dense-slide layout is for instead.

**Anatomy.**
- Full-width bar, no rounding, no border.
- One sentence, centred, 15px semibold white.
- Corporate: navy fill (`#1F3A52`). Activist (`data-theme="activist"`): black fill (`#111111`),
  same white text.

**To reskin / re-data.** Change the bar `fill` and the `<text>` content; keep the sentence to one
line at this width (roughly 90 characters before it needs to shrink or wrap).

**Narrative line to supply when requesting a variant.** The single takeaway sentence itself; this
component doesn't infer it.
