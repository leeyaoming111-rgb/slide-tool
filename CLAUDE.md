# Case Design System — Claude instructions

## Project overview
This is a library of reusable MBB-standard slide components (SVG/PNG) for case competitions,
finance-weighted. Two visual families: corporate (default) and activist.

## Always read before building
1. `tokens/tokens.json` — palette, type scale, spacing.
2. `docs/CHART_RULES.md` — every rule is a hard default.
3. `references/REFERENCES.md` — inspiration catalog.
4. `builder/BUILDER_SKILL.md` — the component builder prompt.

## Incoming from Claude Design ("Send to Claude Code Web")
If the session includes a full handoff bundle (a `README.md` + `chats/` + `project/` workspace,
usually its own separate repo from this one), use the
`.claude/skills/claude-design-handoff/SKILL.md` skill — it's the detailed, battle-tested
playbook for that case, including how to reconcile the bundle's React/JSX prototype format
against this repo's real SVG component format, and a reusable SVG->PNG render script.

For the lighter-weight case where individual design files just show up loose in this workspace
(no full bundle), follow the shorter version below:

1. **Reference images** → move to `references/` with naming pattern `ref##_short-description.png`,
   and add a row to `references/REFERENCES.md`.
2. **Component SVGs/PNGs** → place in `components/<category>/<name>/` alongside a `spec.md`.
3. **Token or rule updates** → merge into `tokens/tokens.json` / `tokens/tokens.css` /
   `docs/CHART_RULES.md` as appropriate.
4. **Skills or builder prompts** → place in `builder/`.
5. Commit and push immediately after filing everything.

## Auto-sync rule (CRITICAL)
After adding, updating, or deleting ANY file in this repo — reference images, component SVGs,
specs, tokens, docs, skills, or this file itself — you MUST commit and push before ending the
session. Follow this sequence:

1. `git add` the changed files (be specific, don't use `git add .`).
2. Write a clear commit message describing what was added/changed.
3. `git push -u origin <current-branch>`.

Do not leave uncommitted work. The repo is the single source of truth for the design system.

## Repo structure conventions
```
tokens/          tokens.json + tokens.css (palette, type, spacing)
docs/            CHART_RULES.md (house formatting rules)
references/      inspiration images + REFERENCES.md catalog + model-reference.xlsx
components/
  <category>/<name>/
    <name>.svg   editable vector (concrete hex, not CSS vars)
    <name>.png   preview render
    spec.md      what, when, anatomy, re-data instructions
builder/         BUILDER_SKILL.md (component builder prompt)
templates/       chart-templates.xlsx (native Excel chart templates) + generator script
```

## When adding reference images
- Place the file in `references/` with the naming pattern `ref##_short-description.png`.
- Add a row to `references/REFERENCES.md` with: file name, source/vibe, family, and components to extract.

## When adding components
- Follow the output contract in `builder/BUILDER_SKILL.md`.
- Every component needs: `<name>.svg`, `<name>.png`, and `spec.md`.
- Use concrete hex colours from `tokens/tokens.json`, not CSS variables.
- Font stack: `Inter, Arial, sans-serif`.

## When updating tokens or rules
- Keep `tokens.json` and `tokens.css` in sync.
- If a new colour or type entry is added, note the use case.
