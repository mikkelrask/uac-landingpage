---
title: Getting Started
description: A brief walk-through on getting started with UAC Launch Control.
---

## 1. Download, install and launch

Follow the steps in the [Installation guide](/installation/). On first launch, a setup tour walks you through source ports, base WADs, and creating your first protocol. Existing users can skip it.

## 2. Configure source ports

You can add several engines (GZDoom, UZDoom, Zandronum, Helion, and more) and pick which one to use per protocol.

- Click the **cog icon** → **Source Ports** tab.
- Click **Scan Path** to auto-detect installed source ports, or **+ Add Port** to browse for an executable manually.
- No port installed? Use **Download** to fetch one inside the app.
- Give each port a name, set its family, and mark a **default**.

See the [Manage Source Ports](/guides/source-ports/) page for full details.

You can also set the directories for **WADs**, **Mods**, **Saves**, and **Screenshots** on the **Paths** tab. See [Settings → Paths tab](/reference/settings/#paths).

## 3. Create your first protocol

A **Protocol** is the combination of a base game, a source port, your mod files, and a load order that produces the final launch command.

### 3.1 Open the Install page

Press `i` from anywhere in the app, or use the sidebar. See [Keyboard shortcuts](/reference/keyboard-shortcuts/).

Fill out the form:

- **Name** (required), e.g. `Project Brutality Phase 2`
- **Base WAD** (required), e.g. `FreeDoom: Phase 2`. Pre-fills from your default WAD if you set one in Settings → WAD Config.
- **Source Port**, a combobox populated from your configured ports (see [Manage Source Ports](/guides/source-ports/))
- **Save Directory** and **Launch Parameters**, pre-filled from Settings
- **Screenshot URL** (optional), displayed as the protocol cover on the Launch page
- **Description** (optional), shown when hovering the protocol card

### 3.2 Add mod files

- Click **+ Add File** and use the folder icon to select a mod file on your system.
- Give it a "pretty name"; that is how it appears in your mod file catalog.
- Add more files the same way, or pick previously added mods from the **Catalog** dropdown.
- Drag mod files to set their load order.
- If a mod depends on other files, add those first. They load before the dependent mod automatically. Use the **Load Order** field in the Add to Catalog dialog to declare hard dependencies; those entries are marked **Required** and are always injected at the top of the list. **Sidecar** mods load alongside their parent but never on their own.

Click **Create protocol** when done. A notification confirms the protocol was created and returns you to the Launch view.

## 4. Launch

- On the **Launch** view, hover a protocol to see its description and reveal **Launch** and **Adjust** buttons.
- Click **Launch** to start.
- The **search** bar at the top filters your protocols, catalogue mod files, and searches the online **UAC Registry**, all in one place.
- **Sort** the grid by **Last Played**, **Playtime**, **Creation date**, or **A–Z** with the dropdown in the top right.
