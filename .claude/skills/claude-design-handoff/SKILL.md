---
name: claude-design-handoff
description: Use this skill when the user hands off a Claude Design bundle (a workspace or zip containing a top-level README.md, a chats/ folder of transcripts, and a project/ folder of HTML/JSX prototypes) and asks to "implement the designs" in a real repo. Also use it any time the user references implementing, merging, or landing a Claude Design export into slide-tool. Reads the design intent from the chat transcripts, reconciles the bundle's compiler-driven prototype format against this repo's actual native component format, ports the new/changed content in, and commits + pushes safely.
user-invocable: true
---

# Claude Design -> slide-tool handoff

This repo (`leeyaoming111-rgb/slide-tool`) is the *real* design-system repo. Separately, the user
periodically does design work in **Claude Design** (claude.ai/design), then exports a "handoff
bundle" and asks a coding agent to implement it here. This skill is the playbook for that
recurring task, distilled from doing it once by hand.

## What a handoff bundle looks like

It arrives as its own little workspace/repo, unrelated to `slide-tool`'s git history:

```
README.md          <- "CODING AGENTS: READ THIS FIRST" — generic instructions for any handoff
chats/chat1.md      <- transcript(s) between the user and the Claude Design assistant
chats/chat2.md
chats/chat3.md
project/            <- the actual Claude Design project export
  README.md         <- the design system's own manifest (context, content/visual foundations, index)
  CLAUDE.md          <- accumulated user preferences logged during design iteration
  styles.css, tokens/*.css   <- CSS-custom-property tokens
  components/<group>/<Name>.jsx + .d.ts + .prompt.md + *.card.html
  guidelines/*.card.html     <- foundation specimen cards
  slides/, *.html            <- sample/derivative slide artifacts
  references/                <- reference screenshots
  _ds_bundle.js, _ds_manifest.json, _adherence.oxlintrc.json   <- generated, ignore
```

**Important:** `project/` is in Claude Design's own internal format (a React-JSX-plus-compiler
system, `.d.ts` prop contracts, `.prompt.md` usage docs, `@dsCard`-tagged HTML previews). That
format is specific to the Claude Design authoring tool. It is almost never the format this repo
actually wants — see "Reconcile formats" below. Do not copy `project/` files into this repo
verbatim.

## Procedure

1. **Read the bundle's top-level `README.md` first.** It's boilerplate instructions for any
   coding agent, but confirms what's in `chats/` and `project/`.
2. **Read every file in `chats/` in order.** This is where the user's actual intent and final
   decisions live — the exported HTML/JSX is just the output. Look especially for: the last thing
   the user was iterating on (that's usually the priority), explicit likes/dislikes ("I like
   elements from slides 2, 3, 4, 8"), delivery-format requirements (e.g. "every slide needs to be
   an editable pptx"), and any logged design principles (often the assistant will say "I've
   logged this to CLAUDE.md").
3. **Read `project/README.md` and `project/CLAUDE.md` fully**, then the component/guideline/
   reference files they point to. Build a mental inventory: what's new or changed since this repo
   was last synced?
4. **Ask before assuming scope.** These sessions tend to arrive with real ambiguity: does the user
   want new production code, or just the bundle's content landed in the design-system repo? Full
   component port or just the newest pieces? Should the result be pushed? Use `AskUserQuestion`
   rather than guessing — it's cheap, and guessing wrong here means throwing away a lot of
   component-authoring work. (Last time: the user initially seemed to want a new app built, but
   actually just wanted the new files merged into the real `slide-tool` repo and pushed.)
5. **Get access to `slide-tool` if you're not already working in it.** The handoff bundle is
   usually its own throwaway repo/workspace, separate from `slide-tool`. Use:
   - `mcp__Claude_Code_Remote__add_repo` with `{owner: "leeyaoming111-rgb", repo: "slide-tool"}`
   - `git clone --depth 1 https://github.com/leeyaoming111-rgb/slide-tool /workspace/slide-tool`
     (give it a long timeout; large first clones through the proxy can take minutes — see the
     tool's own returned instructions for the exact do's/don'ts, e.g. never run a second
     concurrent clone)
   - `mcp__Claude_Code_Remote__register_repo_root` with the same owner/repo, so this repo's own
     `CLAUDE.md` and skills (this file included) load on the next turn.
   There is no GitHub MCP connector for this — repo access goes through `add_repo`, not
   `ListConnectors`/`SearchMcpRegistry`. Don't waste time searching the connector registry.
6. **Reconcile formats before writing anything.** Read this repo's actual conventions first:
   root `README.md`, `CLAUDE.md`, `docs/CHART_RULES.md`, `builder/BUILDER_SKILL.md`, and one
   existing component end-to-end (e.g. `components/charts-finance/football-field/`). This repo's
   native component format is **one `<name>.svg` (concrete hex colours, not CSS vars, so it
   pastes into PowerPoint as an editable shape) + `<name>.png` preview + `spec.md`** per component
   directory — nothing like the bundle's `.jsx`/`.d.ts`/`.prompt.md`. Every new component from the
   bundle needs to be re-authored as SVG in this format; treat the bundle's `.jsx` as the *design
   spec* to translate, not a file to copy.
7. **Merge reference images.** Copy new screenshots from the bundle's `project/references/` (or
   `project/uploads/`) into this repo's `references/` using the `refNN_short-description.png`
   naming convention, and add a row to `references/REFERENCES.md` for each (file, source/vibe,
   family, components to extract). Fold any newly logged design principles (from the bundle's
   `CLAUDE.md`) into `docs/CHART_RULES.md` as numbered rules, continuing the existing numbering.
8. **Port components one directory at a time.** For each new/changed component:
   - Read the bundle's `<Name>.jsx`, `<Name>.d.ts`, and `<Name>.prompt.md` to understand exact
     props, states, and variants.
   - Design an SVG that demonstrates it with realistic illustrative data (reuse real numbers from
     the bundle's `.prompt.md` examples or from any real case data in the bundle, e.g. an
     Auckland-model-style deck, when available — it reads better than placeholder Lorem data).
   - Match this repo's viewBox convention: full `0 0 960 540` slide frame for full exhibits;
     a smaller natural size for atomic pieces (a headline block, a single tile). Show 2-3 variants
     stacked in one SVG (with small grey uppercase variant labels) when a component has meaningful
     variants, matching how `action-title` and `callout` do it.
   - Render a PNG preview with `scripts/render-svg.js` from this skill directory (needs the
     environment's pre-installed Playwright; plain `require('playwright')` fails from an arbitrary
     cwd because it's a global install, so the script requires it by absolute path,
     `/opt/node22/lib/node_modules/playwright`, and launches Chromium from
     `/opt/pw-browsers/chromium` — don't run `playwright install`, it's already there). Match the
     existing 1.5x `deviceScaleFactor` convention (a 960x540 viewBox renders to a 1440x810 PNG).
   - **Actually view the rendered PNG with the Read tool before moving on.** Check for text
     overflow/collisions (e.g. a long title running into a logo slot) and fix the SVG, then
     re-render. Don't assume the geometry is right just because the SVG is well-formed.
   - Write `spec.md` following the existing template: `# Name`, `![preview](name.png)`, then
     **What it is.** / **When to use.** / **Anatomy.** / **To reskin / re-data.** / **Narrative
     line to supply when requesting a variant.** sections (see any existing `spec.md` for exact
     tone). Call out any faithfulness quirks inherited from the source component (e.g. a
     low-contrast text/fill combination that's in the ground-truth JSX) rather than silently
     "fixing" them.
   - Update the group's `README.md` placeholder to list the new component directories.
9. **Merge tokens.** Add any new token values/aliases from the bundle's `tokens/*.css` into this
   repo's `tokens/tokens.css` **and** `tokens/tokens.json` together (the CI checks both exist and
   that `tokens.json` is valid JSON — see `.github/workflows/validate-design-system.yml`).
10. **Update the root `README.md`** status/structure section to reflect what's newly built vs.
    still open (e.g. diagram primitives have been the recurring "not yet built" item across
    multiple rounds of this).
11. **Verify against the CI checks before committing** (`.github/workflows/validate-design-system.yml`):
    every `components/*/*/` directory needs a `spec.md` and at least one `.svg`/`.png`; every
    `references/ref*.png` needs a matching row in `references/REFERENCES.md`; `tokens/tokens.json`
    must parse as JSON.
12. **Commit, then fetch + rebase before pushing.** Another session/CI run may have pushed to
    `main` in the meantime (this happened the first time: a CI-workflow-and-CLAUDE.md commit
    landed upstream mid-session). Always `git fetch origin main` and `git rebase origin/main`
    before `git push origin main`; don't force-push. Confirm with the user before the actual push
    (it's a shared, visible action) unless they've already told you to push without asking.

## Things that went wrong last time, so you don't repeat them

- `cp` with a brace-expansion glob (`ref0{9}*.png`) silently no-ops when the brace only has one
  alternative and there's no matching literal file — copy reference images one at a time or with a
  plain glob, and verify the destination `ls` afterward.
- Don't assume the bundle's `project/` structure *is* the deliverable. The first instinct (copy
  React components in) would have created a second, incompatible component system living
  alongside this repo's real SVG-based one. Always read one real existing component in the target
  repo before writing anything.
- The user may not want a new app at all — this repo is a component/reference library, not an
  application. When in doubt, ask "update the design-system repo" vs. "build something new" as an
  explicit question.
