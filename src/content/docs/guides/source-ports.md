---
title: Manage Source Ports
description: Configure multiple source port executables in UAC Launch Control.
---

You can configure multiple source ports (different engines or different versions of the same engine) and pick which one to use per protocol.

![Source Port Settings](/source-port-settings.png)

## Accessing source ports

Click the **cog icon** (`⚙️`) in the top navigation → **Settings** → **Paths** tab. The **Source Ports** section is at the top under **CORE INFRASTRUCTURE**.

## Scanning for source ports

Rather than hunting for executables yourself, click **Scan Path** and the system will check known install locations on your system for gzdoom, uzdoom, zdoom, zandronum, and helion. Found ports are added automatically with their family set — just review and save.

## Adding a source port manually

1. Click **+ Add Port**.
2. A file picker opens — select your source port executable (binary, AppImage, or .exe).
3. An inline form appears where you can set:

   | Field | Description |
   |-------|-------------|
   | **Name** | Human-readable label, auto-filled from filename. |
   | **Version** | Optional version string (e.g. `4.12.2`). |
   | **Executable Path** | Full path to the binary — can be typed or browsed with the folder icon. |
   | **Family** | Engine variant used for modpack import matching (see below). |

4. Click **Save**.

## Setting a default

Each port has a **radio dot** on the left — click it to set that port as the default. The default is used when a protocol has no specific port assigned, or when an imported modpack can't be matched to any port.

## Ignoring (hiding) ports

Click the **eye icon** to toggle visibility in protocol selectors. Hidden ports remain in your config but won't appear in the combobox dropdown.

## Editing and deleting

- **Pencil icon** — opens the inline form pre-filled with current values.
- **Trash icon** — removes the port. If you delete the default, the first remaining non-ignored port becomes the new default. Game instances referencing a deleted port fall back to the default.

## Using ports in game instances

When installing or editing a protocol, the **Source Port** field is a filterable combobox showing only non-ignored ports (name, family badge, version). No free-text entry — you must pick from the list.

## Fallback chain

When launching a game, the executable is resolved in this order:

1. The port referenced by the protocol (`sourcePortId`)
2. The default port (`defaultSourcePortId`)
3. The first non-ignored port in the list
4. Error — if no ports are configured, you'll be prompted to add one.

## Troubleshooting

| Problem | Likely cause | Solution |
|---------|-------------|----------|
| "No source ports configured" on launch | No ports in the list | Add at least one source port in Settings → Paths |
| Game launches with the wrong engine | Game instance has a different port selected | Edit the instance and check the Source Port selector |
| Combobox is empty | All ports hidden or none configured | Check eye icons in Settings → Paths |

