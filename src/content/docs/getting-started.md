---
title: Getting Started
description: A brief walk-through on getting started with UAC Launch Control.
---

A brief walk-through on getting started with UAC Launch Control.

## 1. Download, install and launch

Follow the steps in the **[Installation guide](/installation/)**. On first launch, the **Soldier Training** guided tour walks you through setting up source ports and creating your first protocol. Existing users can skip it.

## 2. Configure source ports

Supports multiple source ports — you can add different engines (GZDoom, UZDoom, Zandronum, Helion, etc.) and pick which one to use per protocol.

- Click the **cog icon** → **Paths** tab → **Source Ports** section.
- Click **Scan Path** to auto-detect installed source ports, or click **+ Add Port** to browse for an executable manually.
- Give each port a name, set its family, and mark a **default**.

See the **[Manage source ports](/guides/source-ports/)** page for full details.

You can also set directories for **WADs**, **Mods**, **Saves** and **Screenshots** on the same tab — see **[Settings → Paths tab](/reference/settings/#paths-tab)**.

## 3. Create your first protocol

A **Protocol** is the combination of a base game, source port, mod files, and load order that produces the final launch command.

### 3.1 Click the **Install** tab

This page can be accessed by pressing the `i` key from anywhere in the application (see [Keyboard shortcuts](/reference/keyboard-shortcuts/)).

Fill out the form:

- **Label/title** (required) — e.g. `Project Brutality Phase 2`
- **Base wad** (required) — e.g. `FreeDoom: Phase 2`
- **Source Port** — a combobox populated from your configured ports (see [Manage source ports](/guides/source-ports/))
- **Screenshot URL** (optional) — displayed as the protocol cover on the Launch page
- **Description** (optional) — shown when hovering the protocol card
- Remaining fields are prefilled from **[Settings](/reference/settings/)**

### 3.2 Add mod files

- Click **+ Add file** — use the folder icon to select a mod file on your system.
- Give it a "pretty name" — this is how it appears in your mod file catalog.
- Click **+ Add file** again to add more, or use the **Catalog** dropdown for previously added mods.
- Drag/drop mod files to set their load order.
- If a mod depends on other files, add those first — they’ll be loaded before the dependent mod automatically. Use the **Load Order** field in the Add to Catalog dialog to declare hard dependencies; those entries are marked **Required** and are always injected at the top of the list. **Sidecar** mods are loaded alongside their parent but never on their own.

Click **Create protocol** when done. A notification confirms the protocol has been created and you're returned to the Launch view.

## 4. Launch

- On the **Launch** view, hover a protocol to see its description and reveal **Launch** and **Adjust** buttons.
- Click **Launch** to start.
- **Search** the bar at the top to filter your protocols, catalogue mod files, and discover mods in the online **UAC Registry** — all in one place.
- **Sort** the grid by **Last Played**, **Playtime**, **Creation date**, or **A–Z** using the dropdown in the top right.
