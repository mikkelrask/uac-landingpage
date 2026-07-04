---
title: Add a Base Game WAD
description: Import and manage base game IWAD files for use with source ports.
---

Before you can launch any **Protocol**, you'll need at least one **base game WAD** available to the system. The base game WAD is the foundation — the "planet" your mission takes place on. Without it, your source port has nothing to run.

## What is a base game WAD?

A **base game WAD** (or IWAD) is the original game data file — `doom.wad`, `doom2.wad`, `heretic.wad`, `freedoom1.wad`, etc. These are **not** mods; they are the core game assets that every mod builds upon.

The system stores and manages these in your configured **WAD Files Directory**.

## Adding a WAD

Navigate to the **Install** page and switch to the **WAD Files** tab.

### Drag and drop

- Drag a `.wad` file from your file manager directly onto the dashed drop zone. The system will immediately begin scanning.

### Browse and select

- Click the drop zone to open a native file picker. Navigate to your WAD file and select it.

### Review and confirm

Once a WAD file is selected, the system will display:

- **Source File** — the original filename of the selected WAD
- **Stored As** — the filename it will be saved as (an MD5 hash-based name to prevent collisions, e.g. `doom2-<hash>.wad`)
- **MD5** — the computed MD5 checksum for integrity verification

Review the details and click **Confirm Import** to finalize. The file will be copied to your WAD directory and registered in the system.

## Post-Import: Configuration

Once a WAD has been imported, you can configure it in **Settings** → **WAD Config**:

- **Name** — The display name for the WAD (e.g. "Doom II: Hell on Earth" instead of `doom2.wad`)
- **Icon** — A custom icon displayed in the sidebar and dropdowns
- **Engine Runtime** — Override the source port executable for this specific WAD (e.g. if `heretic.wad` needs a different engine)
- **Launch Arguments** — Additional command-line arguments specific to this WAD
- **Additional Parameters** — Extra engine parameters (e.g. `-nomonsters -warp 01`)
- **Hide from Interface** — Excludes the WAD from base game dropdowns and the sidebar. Useful for support files like `voices.wad` that `strife.wad` requires but shouldn't appear as a selectable base game.

### Auto-detected WADs

The system recognizes the following WADs by default and supplies a pre-configured name and icon:

| File | Recognized As |
|------|---------------|
| `doom.wad` / `doomu.wad` | The Ultimate Doom |
| `doom2.wad` / `doomii.wad` | Doom II: Hell on Earth |
| `tnt.wad` | TNT: Evilution |
| `plutonia.wad` | The Plutonia Experiment |
| `freedoom1.wad` | FreeDoom: Phase 1 |
| `freedoom2.wad` | FreeDoom: Phase 2 |
| `heretic.wad` | Heretic |
| `hexen.wad` | Hexen |
| `hexdd.wad` | Hexen: Deathkings of the Dark Citadel |
| `strife.wad` | Strife |

Any unrecognized WAD will use a fallback icon and its filename as the display name, which you can customize in **WAD Config**.

## WAD Directory Watcher

The system automatically watches your configured **WAD Files Directory** for changes. When new WADs are added (or removed) outside the application — e.g. copied in via file manager — the system picks up the changes in near real-time and updates the version registry accordingly.

## Storage

All base game WAD data is stored in your configured **WAD Files Directory** (`~/.config/uac/wads/` by default). The configuration metadata lives in:

```
~/.config/uac/doomVersions.json
```

This file can be edited manually, though you should let the system handle it unless you know what you're doing. Tampering with the registry may result in **protocol instability** and unscheduled **UAC review meetings**.
