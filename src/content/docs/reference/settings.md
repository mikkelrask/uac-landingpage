---
title: Settings
description: Configure UAC Launch Control through the settings panel.
---

Open Settings with the cog icon in the top navigation bar, or press `Ctrl + .`. The panel has five tabs: **General**, **Paths**, **Source Ports**, **WAD Config**, and **Advanced**.

## General

### Preferences

- **App Theme**. Switch between the visual profiles:
  - **UAC PHOBOS**, the default dark industrial look
  - **MAYKR**, a bright light theme
  - **PLUTONIA TERMINAL**, green phosphor with UAC red kept for warnings and destructive actions
  - **CUSTOM**, your own palette via the Advanced tab
- **Database Link**. Changes the navigation shortcut in the top bar to your preferred mod source (ModDB, ZDoom Forum, DoomWorld, Itch.io).
- **Default View**. Sets the starting view mode when you open the games page.
- **UI Scale**. Adjusts the overall interface scaling (default 100%).
- **Launch Preview**. Shows the generated launch command on the Install page and in the per-game settings modal.

### Technical

- **Auto-update**. Checks for application updates on startup (on by default).
- **Registry Lookup**. When enabled, the app queries the online UAC Registry for mod file metadata when you add files to your catalog. Off by default.
- **Manual update check**. Check for updates on demand.
- **Config Path**. Read-only display of where `settings.json` lives on disk.

## Paths

The directories the app uses. Each can be typed manually or set with the folder icon.

| Use | Default |
|-----|---------|
| **Wads** | `~/.config/uac/wads` |
| **Mods** | `~/.config/uac/mods` |
| **Saves** | `~/.config/uac/saves` |
| **Screenshots** | `~/Pictures/UAC Launch Control/screenshots` |

> **Note on `~`:** the tilde expands to your home directory. Windows: `C:\Users\YOUR-NAME`. macOS: `/Users/YOUR-NAME`. Linux: `/home/YOUR-USER`.

## Source Ports

Manage the engine executables (GZDoom, UZDoom, Helion, Zandronum, and others). You can scan for installed ports, add one manually, or download a port directly inside the app. See [Manage Source Ports](/guides/source-ports/) and [Downloading Source Ports](/guides/downloading-source-ports/).

## WAD Config

The tab starts with a **FreeDoom** section. FreeDoom is a free replacement for the classic Doom game data, so you can get started without buying anything. Click **FreeDoom (Phase 1 + 2)** to download both IWADs, or **FreeDM** for the deathmatch version. The app fetches the files, verifies their checksums, and registers them automatically. An **Installed** badge appears once they are present.

Below that, each base game WAD you have imported gets a row:

- **Icon**. Click the icon preview to set a custom image.
- **Launch Arguments**. Flags such as `-iwad` passed to the source port.
- **Additional Parameters**. Extra engine parameters, e.g. `-nomonsters -warp 01`.
- **Hide from Interface**. Excludes the WAD from the sidebar and base game selectors. Useful for auxiliary files like `voices.wad`.
- **File Source**. The actual file path on disk (read-only).

The **radio dot** on the left of a WAD marks it as the **default WAD**. New protocols pre-fill their Base WAD from this selection.

## Advanced

### Custom Theme Editor

Active when **App Theme** is set to **CUSTOM**. Paste HSL variable overrides in CSS format to define your own colour palette. See the [Theming guide](/reference/theming/) for the full variable reference.

- **Wrap in .custom { }** surrounds your CSS with the required `.custom {}` wrapper.
- **Reset to defaults** fills the editor with the default dark theme values as a starting point.
