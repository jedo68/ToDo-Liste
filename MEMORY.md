# MEMORY.md

Projektwissen zu `ToDo-Liste` ("Meine Aufgaben — Contelos"). Ergänzt `CLAUDE.md` (dort steht die technische Referenz für Claude Code); hier steht der gesammelte Kontext/Verlauf aus bisherigen Sessions.

## Was das Projekt ist

Eine persönliche, deutschsprachige ToDo-Web-App für den Nutzer (Jens Dorstewitz), umgesetzt als **eine einzige Claude-Design-Komponente** (`Aufgaben.dc.html`): `<x-dc>`-Template + inline `class Component extends DCLogic`, ausgeführt clientseitig durch `support.js` (generierte dc-Runtime).

**Quelle der Wahrheit:** Das eigentliche, editierbare Design liegt in einem Claude-Design-Projekt, erreichbar über das `DesignSync`-MCP-Tool:
- Projekt-ID: `5e6d33c1-d06f-452e-8da3-d41377418ebe`
- Name: "Persönliche ToDo-Website Mockup"

Dieses Repo ist eine lokale Kopie davon (Pull am 2026-08-14). Weitere Änderungen aus dem Claude-Design-Projekt holt man per `DesignSync` erneut ab.

## Kernkomponenten

- **`Aufgaben.dc.html`** — die gesamte App:
  - `<helmet>` bindet die Design-System-CSS-Tokens ein + kleiner inline `<style>`-Override-Block.
  - Template nutzt `<sc-for list="{{ tasks }}" as="task">` (Listen) und `<sc-if value="{{ isEmpty }}">` (Bedingungen); alle dynamischen Werte kommen über `{{ expr }}` aus `renderVals()`.
  - `Component`-State: `{ tasks, filter, draft, saved }`.
  - Persistenz: `localStorage`-Key `contelos.todos.v1`, geschrieben über `persist(tasks)` (stempelt `savedAt`). `componentDidMount()` lädt beim Start aus `localStorage`, sonst Fallback auf das eingebaute `DEMO`-Array.
  - Abgeleitete Werte (Zeilenfarben, Badge-Labels, Datumsformatierung, aktiver Filter-Button, Statistik-Zahlen) werden bei jedem Render frisch in `renderVals()` berechnet — keine separate View-Schicht, die veralten könnte.
  - Export/Import: Task-Liste als `aufgaben.json` (`{ version, savedAt, tasks }`) über Blob-Download bzw. `<input type=file>`. Kein Server, kein Konto.

- **`support.js`** — generierte dc-Runtime. **Nie von Hand editieren** (Kopfzeile: "GENERATED ... Rebuild with `cd dc-runtime && bun run build`"). Lädt React/ReactDOM, parst/rendert `sc-for`/`sc-if` und Spezial-Attribute wie `style-hover`.

- **`_ds/contelos-jdo-design-system-.../`** — das "Contelos"-Design-System: CSS-Tokens (`tokens/*.css`, z. B. `--blue-700`, `--text-body`, `--border-hairline`) + `styles.css`/`_ds_bundle.js`. Beim Styling immer diese Tokens statt Hardcoded-Werten bevorzugen.

## Preview / Ausführung

- Kein Build-Schritt, kein Test, kein Linter, kein Package-Manifest.
- **`file://` funktioniert nicht** — zeigt nur unaufgelöste `{{ platzhalter }}`, weil `support.js` nur bei HTTP-Auslieferung läuft (gilt auch für die Browser-Pane im Agent).
- Lokal servieren: `python -m http.server 8791`, oder über `.claude/launch.json`-Konfig `todo-static` (Port 8791) via `preview_start` mit `{name: "todo-static"}`.

## Bekannte Runtime-Eigenheit: `style-hover` ist statisch

`style-hover="..."` wird von der dc-Runtime **einmalig beim Template-Parsing** ausgewertet, nicht bei jedem Render — `{{ }}`-Ausdrücke darin reagieren **nicht** auf State-Änderungen, obwohl dieselben Ausdrücke in normalem `style`/`class` sehr wohl reaktiv sind.

**Workaround:** Für zustandsabhängige Hover-Styles keine `style-hover`-Bindung verwenden, sondern:
1. Eine statische CSS-Regel im `<helmet>`-`<style>`-Block anlegen, die an eine bedingte Klasse gekoppelt ist.
2. Diese Klasse per normalem `class="foo{{ activeClassExpr }}"`-Binding pro Render umschalten.

Beispiel im Code: das `.dc-filter-btn` / `.dc-filter-active`-Muster für die Filter-Buttons (Alle/Offen/Wichtig/Erledigt).

Entdeckt am 2026-08-14 beim Versuch, die Hover-Farbe des aktiven Filter-Buttons an seinen Aktiv-Zustand zu koppeln — eine reine `style-hover="background:{{ ... }}"`-Bindung änderte sich nie.

## Git-Workflow

Kein Remote konfiguriert — Git dient rein als lokale Sicherungs-/Wiederherstellungspunkt-Historie, kein PR-Workflow.

- **Standing instruction (vorab autorisiert):** Nach jeder sinnvollen Änderung committen, mit kurzer beschreibender Message. Dafür nicht extra nachfragen.
- Nicht pushen, außer der Nutzer bittet explizit darum (es gibt ohnehin kein Remote).
- Lokale Git-Identität (repo-lokal, nicht global) gesetzt auf `Jens Dorstewitz <dorstewitz@gmx.de>`, da beim Anlegen kein globaler Git-User konfiguriert war.

## Änderungsverlauf (aus `git log`, chronologisch)

1. `4063a22` — Initiale Version: Aufgaben-App aus Claude Design importiert.
2. `f4ce543` — Aktiven Filter-Button rot hervorheben.
3. `2825846` — Hover-Zustand der Filter-Buttons an aktive Farbe angepasst.
4. `4367fa1` — Stern-Icon im Wichtig-Filter-Button ergänzt, Farbe folgt Filterzustand.
5. `f790e75` — Erledigt-Zeilen farblich konsistent gedämpft (Datum und Stern folgen Erledigt-Status).
6. `9ebcfab` — Badge-Border bei erledigten Aufgaben auf neutrales Grau statt blaustichigem Hairline umgestellt.
7. `82ea5f1` — Heute-Badge blau hervorgehoben statt neutral wie Normal-Badge.
8. `726a5f8` — Stern-Icon im Wichtig-Filter-Button wieder entfernt (Design-Entscheidung rückgängig gemacht).

Erkennbares Muster: iterative Feinjustierung der Farb-/Badge-Logik für Filter-Buttons und Task-Zeilen (aktiv/erledigt/wichtig/heute/überfällig), mehrfach in kleinen Schritten korrigiert statt in einem großen Wurf — passend zum granularen Commit-pro-Änderung-Workflow oben.

## Nutzer-Kontext

- Nutzer: Jens Dorstewitz (dorstewitz@gmx.de).
- App-Domäne deutet auf berufliche Nähe zu Vermessung/BIM/Schulungen hin (Demo-Daten erwähnen "Revit-Schulung", "Punktwolke für Halle 3", "Recap-Datei von Vermessung") — reine Testdaten, keine bestätigte Tatsache über den Nutzer selbst.
- Bevorzugt granulare, lokal committete Änderungen mit deutschsprachigen Commit-Messages.
