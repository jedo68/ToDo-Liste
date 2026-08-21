# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal German-language ToDo web app, "Meine Aufgaben — Contelos", implemented as a **single Claude Design (`.dc.html`) component**: `Aufgaben.dc.html` contains both the `<x-dc>` HTML template and an inline `Component extends DCLogic` JS class, executed client-side by `support.js` (a generated dc-runtime).

The canonical/editable source of this design lives in a Claude Design project (`DesignSync` MCP tool, projectId `5e6d33c1-d06f-452e-8da3-d41377418ebe`, "Persönliche ToDo-Website Mockup"). This repo is a local copy pulled from there — use `DesignSync` to pull further upstream changes if asked.

## Running / previewing

There is no build step. Serve the directory over HTTP and open `Aufgaben.dc.html`:

```bash
python -m http.server 8791
```

A `.claude/launch.json` config named `todo-static` already does this on port 8791 — use the preview tool's `preview_start` with `{name: "todo-static"}` to get a working tab.

**`file://` will not work**: opening the HTML file directly renders raw unresolved `{{ placeholders }}` with no script execution, because `support.js` only runs when the page is served over HTTP.

There are no tests, linter, or package manifest in this repo.

## Architecture

- **`Aufgaben.dc.html`** — the entire app in one file:
  - A `<helmet>` block that pulls in the design-system CSS token files and a small inline `<style>` override block.
  - An `<x-dc>` template using two custom control-flow tags handled by the runtime: `<sc-for list="{{ tasks }}" as="task">` (list rendering) and `<sc-if value="{{ isEmpty }}">` (conditional rendering). All dynamic content/attributes use `{{ expr }}` interpolation bound to values returned from `renderVals()`.
  - A `<script type="text/x-dc" data-dc-script data-props="...">` block defining `class Component extends DCLogic`. `data-props` declares the two editor-configurable props (`ownerName`, `subline`) with their defaults.
  - Component state: `{ tasks, filter, draft, saved }`. Tasks persist to `localStorage` under key `contelos.todos.v1` via `persist(tasks)`, which also stamps `savedAt`. `componentDidMount()` rehydrates from `localStorage` on load, falling back to the in-file `DEMO` array.
  - All derived/presentational values (row colors, badge labels, date formatting, filter-button active states, stats counts) are computed fresh each render inside `renderVals()` and returned as a flat object consumed by the template's `{{ }}` bindings — there is no separate view layer to keep in sync.
  - Export/import round-trips the task list as `aufgaben.json` (`{ version, savedAt, tasks }`) via a client-side `Blob`/`<input type=file>`, no server involved.

- **`support.js`** — the dc-runtime. **Generated, do not hand-edit** (header: `GENERATED from dc-runtime/src/*.ts — do not edit. Rebuild with 'cd dc-runtime && bun run build'`). It loads React/ReactDOM and parses/renders the `.dc.html` template, including the custom `sc-for`/`sc-if` tags and attributes like `style-hover`.

- **`_ds/contelos-jdo-design-system-.../`** — the "Contelos" design system consumed by the page:
  - `tokens/*.css` — CSS custom properties for colors, typography, spacing, borders, motion, fonts (e.g. `--blue-700`, `--text-body`, `--border-hairline`). Prefer these tokens over hardcoded values when styling.
  - `styles.css`, `_ds_bundle.js` — base styles and a small React component bundle.

## Known runtime quirks

- **`style-hover` is static, not reactive.** The dc-runtime's `style-hover="..."` attribute is compiled once at template-parse time — `{{ }}` expressions inside it do **not** re-evaluate when component state changes, even though the same expression inside a normal `style`/`class` attribute does. For any hover style that must depend on state (e.g. an active filter button's hover color), don't use `style-hover`; instead add a static CSS rule in the `<helmet>`'s `<style>` block keyed off a conditional class, and toggle that class per-render via `class="foo{{ activeClassExpr }}"` (see the `.dc-filter-btn` / `.dc-filter-active` pattern in the template).

## Git usage

This repo has no remote — git is used purely as a local backup/restore-point history. Commit after each meaningful change with a short descriptive message; this is pre-authorized as standing practice for this project, no need to ask first each time. Don't push anywhere unless explicitly asked (there's no remote configured anyway).
