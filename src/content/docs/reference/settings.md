---
title: Settings
description: Configure UAC Launch Control through the settings panel.
---

To open **Settings**, click the **cog icon** in the top navigation bar.

## General tab

### PREFERENCES

- **App Theme** — switch between visual colour profiles:
  - **UAC PHOBOS** — Default dark/red theme.
  - **MAYKR** — Bright argent energy (light).
  - **UAC TERMINAL** — Green phosphor display (keeps UAC red for warnings).
  - **CUSTOM** — User-defined palette via the Advanced tab.
- **Database Link** — changes the navigation shortcut in the top bar to your preferred mod source (ModDB, ZDoom Forum, DoomWorld, Itch.io).
- **Launch Preview** — toggles the preview of the generated launch command in the Install page and per-game settings modal.

### TECHNICAL SPECIFICATIONS

- **Auto-update** — automatically check for application updates on startup (default: on).
- **Registry Lookup** — when enabled, the system queries the online UAC Registry for mod file metadata when adding files to your catalog.
- **Manual update check** — check for updates on demand.
- **Config Path** — read-only display of where `settings.json` is stored on disk.

## Advanced tab

### CUSTOM THEME EDITOR

Available when **App Theme** is set to **CUSTOM**. Paste HSL variable overrides in CSS format to define your own colour palette. See the **[Theming guide](/reference/theming/)** for the full variable reference.

- **Wrap in .custom { }** — surrounds your CSS block with the required `.custom {}` wrapper.
- **Reset to defaults** — populates the editor with the default dark theme values as a starting point.

## Paths tab

Configure directories for **Source Ports**, **Wads**, **Mods**, **Saves** and **Screenshots**.

### Source Ports

The **Source Ports** section (under **CORE INFRASTRUCTURE**) lets you manage multiple source port executables.

- Click **+ Add Port** to open a file picker and select an executable.
- Click **Scan Path** to automatically detect supported source ports installed on your system.
- Use the inline form to set **name**, **version**, **executable path**, and **family**.
- Click the **radio dot** on the left to set a port as the **default**.
- Use the **eye icon** to hide a port from protocol selectors without deleting it.
- Use the **pencil** (edit) and **trash** (delete) icons to manage ports.

> **Note:** Source ports are managed globally via the **Paths tab** — you assign a source port per protocol, not per WAD. See [Manage source ports](/guides/source-ports/).

---

### Other Paths

**Default values:**

| Use | Default | Notes |
|-----|---------|-------|
| **Wads** | `~/.config/uac/wads` | Directory for base game WAD files. |
| **Mods** | `~/.config/uac/mods` | Each protocol gets a `.json` file here. Mod files are copied to a `files` subdirectory. |
| **Saves** | `~/.config/uac/saves` | Save data, subdirectories created per protocol (e.g. `dragon-sector-remake`). |
| **Screenshots** | `~/Pictures/UAC Launch Control/screenshots` | Screenshot output, uses your source port's default naming. |

All paths can be typed manually or set via the folder icon (`📂`) file picker.

### Note on `~`

The tilde (`~`) expands to your home directory:
- **Windows:** `C:\Users\YOUR-NAME`
- **macOS:** `/Users/YOUR-NAME`
- **Linux:** `/home/YOUR-USER`

## Wad Config tab

Configure settings for each detected base game WAD — shown name, icon, launch arguments, and additional parameters.

The application auto-detects these WADs: `doom.wad`, `doomu.wad`, `doom2.wad`, `doomii.wad`, `tnt.wad`, `plutonia.wad`, `freedoom1.wad`, `freedoom2.wad`, `heretic.wad`, `hexen.wad`, `hexdd.wad`, `strife.wad` — each gets a default name and icon.

- **Icon** — click the icon preview to set a custom image.
- **Launch Arguments** — e.g. `-iwad` or other flags passed to the source port.
- **Additional Parameters** — e.g. `-nomonsters -warp 01`.
- **Hide from Interface** — excludes the WAD from the sidebar and base game selectors (useful for auxiliary files like `voices.wad`).
- **File Source** — the actual file path on disk (read-only).

> **Note:** Source ports are managed globally via the **Paths tab** — you assign a source port per protocol, not per WAD. See [Manage source ports](/guides/source-ports/).
