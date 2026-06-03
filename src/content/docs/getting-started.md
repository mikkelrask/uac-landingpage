---
title: Getting Started
description: A brief walk-through on getting started with UAC Launch Control.
---

A brief walk-through on getting started with UAC Launch Control.

## 1. Download and install

Follow the steps in the **[Installation guide](/installation/)**.

## 2. Configure source ports

**vE1M0.3.1** supports multiple source ports — you can add different engines (GZDoom, UZDoom, Zandronum, etc.) and pick which one to use per game instance.

- Click the **cog icon** → **Paths** tab → **Source Ports** section.
- Click **+ Add Port** to browse for an executable, give it a name, and pick its family.
- Set a **default port** (used when no specific port is assigned to an instance).

See the **[Manage source ports](/guides/source-ports/)** page for full details.

> **Upgrading from an earlier version?** Your old single source port path is **automatically migrated** on first launch.

You can also set directories for **WADs**, **Mods**, **Saves** and **Screenshots** on the same tab — see **[Settings → Paths tab](/reference/settings/#paths-tab)**.

## 3. Install your first game instance

A **Game Instance**, or "Protocol", is the combination of wads, mods, and load order that produces the final launch command.

### 3.1 Click the **Install** tab

This page can be accessed by pressing the `i` key from anywhere in the application (see [Keyboard shortcuts](/reference/keyboard-shortcuts/)).

Fill out the form:

- **Label/title** (required) — e.g. `Project Brutality Phase 2`
- **Base wad** (required) — e.g. `FreeDoom: Phase 2`
- **Source Port** — a combobox populated from your configured ports (see [Manage source ports](/guides/source-ports/))
- **Screenshot URL** (optional) — displayed as the game card cover on the Launch page
- **Description** (optional) — shown when hovering the game card
- Remaining fields are prefilled from **[core_settings](/reference/settings/)**

### 3.2 Add mod files

- Click **+ Add file** — use the folder icon to select a mod file on your system.
- Give it a "pretty name" — this is how it appears in your mod file catalog.
- Click **+ Add file** again to add more, or use the **Catalog** dropdown for previously added mods.
- Drag/drop mod files to set their load order.

Click **Create protocol** when done. A notification confirms the game instance has been created and you're returned to the Launch view.

## 4. Launch

- On the **Launch** view, hover a game instance to see its description and reveal **Launch** and **Adjust** buttons.
- Click **Launch** to start.
