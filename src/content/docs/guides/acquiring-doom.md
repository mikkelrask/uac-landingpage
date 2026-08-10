---
title: Acquiring DOOM
description: Where to get DOOM and other base game WADs, Steam, GOG, or FreeDoom, and how to find the WAD files on your system.
---

Every **Protocol** needs a base game WAD, the mission data your source port runs. UAC Launch Control doesn't bundle any game data, so you need to get it yourself. You have two legal routes: **buy the classics**, or grab the free **FreeDoom** replacement.

---

## Option 1: Buy the classics (Steam or GOG)

Both [Steam](https://store.steampowered.com/search/?term=doom) and [GOG](https://www.gog.com/en/games?query=doom) sell the original games, and they go on sale regularly for pocket change. What you are buying is the game data, the WAD files, which is all UAC needs:

| Game | WAD file(s) you get |
|------|---------------------|
| The Ultimate DOOM | `doom.wad` |
| DOOM II: Hell on Earth | `doom2.wad` |
| Final DOOM | `tnt.wad`, `plutonia.wad` |
| Master Levels for DOOM II | `masterlevels.wad` |

GOG's versions are DRM-free, which is nice. The older Steam/GOG releases ship the raw WAD files directly; the newer **DOOM + DOOM II** remaster keeps them too, just in a `base` subfolder (see below).

## Option 2: FreeDoom, free and no purchase required

**FreeDoom** is a free, legally redistributable replacement for the classic DOOM game data, with the same levels and new assets, at zero cost. It is the easiest path if you do not own the originals.

**UAC Launch Control can download it for you:**

1. Go to **Settings → Wad Config** (or the **WAD Files** tab during onboarding).
2. In the **FreeDoom** section, click **FreeDoom (Phase 1 + 2)**, the app downloads both IWADs (`freedoom1.wad`, `freedoom2.wad`), verifies their checksums, and registers them automatically.
3. A **FreeDM** option is also available if you fancy the deathmatch-only IWAD.

See the [Base Game WAD guide](/guides/base-game-wad/) for what happens after you have the files.

---

## Finding your WAD files on disk

WAD files are just files. You can leave them where they are, copy them anywhere, or import them straight into UAC. Here is where to look, per platform.

### Windows

**Steam** installs games under `C:\Program Files (x86)\Steam\steamapps\common\` (or `<your Steam library>\steamapps\common\`):

| Game | Folder | WAD file(s) |
|------|--------|-------------|
| The Ultimate DOOM | `DOOM` | `DOOM.WAD` |
| DOOM II: Hell on Earth | `DOOM 2` | `DOOM2.WAD` |
| Final DOOM | `Final DOOM` | `TNT.WAD`, `PLUTONIA.WAD` |
| Master Levels for DOOM II | `Master Levels of DOOM` | `MASTERLEVELS.WAD` |
| DOOM + DOOM II (2024 remaster) | `DOOM + DOOM II\base` | `DOOM.WAD`, `DOOM2.WAD` |

**GOG** installs to `C:\GOG Games\<Game>\` by default (or wherever you chose). The WAD sits right next to `doom.exe` / `doom2.exe` in the game folder. GOG's DOSBox releases ship it loose, no digging required.

### macOS

**Steam:** `~/Library/Application Support/Steam/steamapps/common/`, same game folder names as Windows (`DOOM`, `DOOM 2`, `Final DOOM`, etc.).

**GOG:** the games install as `.app` bundles. Right-click the game → **Show Package Contents**, then look in `Contents/Resources/` for the WAD files.

### Linux

**Steam (native):** `~/.steam/steam/steamapps/common/`. On many distros `~/.local/share/Steam/steamapps/common/` points to the same place. Same game folder names as Windows.

**Steam (Flatpak):** `~/.var/app/com.valvesoftware.Steam/.steam/steam/steamapps/common/`.

**GOG via Heroic or Lutris:** the game runs in a Wine prefix, the WAD lives at `<prefix>/drive_c/GOG Games/<Game>/`. Find the prefix path in **Heroic** (game → settings → Wine prefix) or **Lutris** (right-click game → Configure → Game options).

---

## What you're looking for

| File | Game | Auto-detected by UAC? |
|------|------|----------------------|
| `DOOM.WAD` / `doomu.wad` | The Ultimate Doom | ✅ |
| `DOOM2.WAD` / `doomii.wad` | Doom II: Hell on Earth | ✅ |
| `TNT.WAD` | TNT: Evilution | ✅ |
| `PLUTONIA.WAD` | The Plutonia Experiment | ✅ |
| `MASTERLEVELS.WAD` | Master Levels for DOOM II | ⚠️ Not auto-named, imports fine, set a name/icon in **Settings → Wad Config** |
| `FREEDOOM1.WAD` / `FREEDOOM2.WAD` / `FREEDM.WAD` | FreeDoom | ✅ (or download in-app) |

If a WAD isn't auto-recognised, it still imports and works; you just give it a name and icon in **Settings → Wad Config** (see the [Base Game WAD guide](/guides/base-game-wad/)).

## Next steps

Once you've located your WADs, head to the **WAD Files** tab on the Install page (or press `w`) and drag them in. The app copies them into your WAD directory, hashes them, and registers them. Full details in the [Base Game WAD guide](/guides/base-game-wad/).
