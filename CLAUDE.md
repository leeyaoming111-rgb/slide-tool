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
When this session was started from Claude Design, files from the design project may be present
in the workspace but the `slide-tool` repo will NOT be cloned automatically. You must connect
it yourself before you can push. Follow these steps:

### Step 1: Connect the repo
Use the `add_repo` tool to add `leeyaoming111-rgb/slide-tool`, then clone it using the command
returned by the tool. Register the repo root after cloning.

### Step 2: File the incoming design assets
Scan the workspace for new or updated design files and sort them into the cloned repo:

1. **Reference images** → copy to `references/` with naming pattern `ref##_short-description.png`,
   and add a row to `references/REFERENCES.md`.
2. **Component SVGs/PNGs** → place in `components/<category>/<name>/` alongside a `spec.md`.
3. **Token or rule updates** → merge into `tokens/tokens.json` / `tokens/tokens.css` /
   `docs/CHART_RULES.md` as appropriate.
4. **Skills or builder prompts** → place in `builder/`.
5. **CLAUDE.md or project config** → merge changes into the existing `CLAUDE.md`, don't overwrite.

### Step 3: Commit and push
Commit with a descriptive message and push immediately. Do not ask the user for confirmation —
this sync should be automatic. Push to `main` unless instructed otherwise.

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
