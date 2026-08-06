---
title: Manage Source Ports
description: Configure source port executables in UAC Launch Control, or download new ones.
---

You can keep multiple source ports around (different engines, or different versions of the same engine) and pick which one a protocol uses.

## Accessing source ports

Click the cog icon and open the **Source Ports** tab. It sits next to **Paths** in the settings panel.

## Scanning for source ports

Click **Scan Path** and the app checks known install locations on your system for gzdoom, uzdoom, zdoom, zandronum, and helion. Found ports are added automatically with their family set. Review the results and save.

## Adding a source port manually

1. Click **+ Add Port**.
2. Pick the executable in the file picker (binary, AppImage, or .exe).
3. Fill in the inline form:

   | Field | Description |
   |-------|-------------|
   | **Name** | Human-readable label, auto-filled from the filename. |
   | **Version** | Optional version string (e.g. `4.12.2`). |
   | **Executable Path** | Full path to the binary, typed or browsed with the folder icon. |
   | **Family** | Engine variant, used for modpack import matching. |

4. Click **Save**.

## Downloading a source port inside the app

If you do not have a port yet, click **Download**. The app fetches the latest releases of **UZDoom**, **GZDoom**, and **Helion** from GitHub, filtered to your platform. Pick a release and the app downloads, extracts, and registers the port for you. That is the fastest way to get a working setup. More detail in [Downloading Source Ports](/guides/downloading-source-ports/).

## Setting a default

The **radio dot** on the left marks the default port. The default is used when a protocol has no port assigned, or when an imported modpack cannot be matched to any port.

## Hiding ports

The **eye icon** toggles visibility in protocol selectors. Hidden ports stay in your config but do not appear in the combobox.

## Editing and deleting

- **Pencil icon** opens the inline form pre-filled with the current values.
- **Trash icon** removes the port. If you delete the default, the first remaining visible port becomes the new default. Protocols that referenced the deleted port fall back to the default.

## Using ports in protocols

On the Install page, the **Source Port** field is a filterable combobox showing only non-hidden ports (name, family badge, version). No free-text entry; you pick from the list.

## Fallback chain

When launching, the executable resolves in this order:

1. The port referenced by the protocol
2. The default port
3. The first non-hidden port in the list
4. An error prompt if no ports are configured

## Troubleshooting

| Problem | Likely cause | Solution |
|---------|-------------|----------|
| "No source ports configured" on launch | No ports in the list | Add at least one in Settings → Source Ports, or use **Download** |
| Game launches with the wrong engine | Protocol has a different port selected | Edit the protocol and check the Source Port selector |
| Combobox is empty | All ports hidden or none configured | Check the eye icons in Settings → Source Ports |
