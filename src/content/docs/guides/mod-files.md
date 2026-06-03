---
title: Add Mod Files to Your Catalog
description: Register mod files in the system catalog for use in game instances.
---

Before you can assemble a **Launch Protocol** (a game instance), you'll need to have some **mod files** registered in the system catalog. Think of the catalog as the armory — every weapon (mod) needs to be logged before it can be loaded into a mission.

## Adding a Mod File

Navigate to the **Install** page and switch to the **Mod Files** tab. This is your **Mod File Catalog** — a searchable database of all mod files the system knows about.

### Via the "Add to Catalog" dialog

1. Click the **Add File** button at the top of the catalog table.
2. In the dialog that opens:
   - Click the folder icon (`📂`) to browse your file system and select a mod file (`.pk3`, `.wad`, `.zip`, `.deh`, etc.)
   - Give it a **Pretty Name** — this is how the mod will be referred to throughout the system. If your file is called `Project_Brutality_2.0b.pk3`, you might name it `Project Brutality Phase 2`.
   - Optionally add a **Version** (e.g. `2.0b`)
   - Optionally add a **URL** linking to the mod's ModDB page, forum thread, or source
   - **Load Order** lets you specify other mod files this one depends on. The system will automatically load dependencies before this mod when launching. You can reorder dependencies by dragging them, or remove them with the trash icon.
   - Toggle **Sidecar mod** if this file doesn't work on its own and is only meant to be loaded alongside another mod.
3. Click **Add to Catalog**. The system will copy the file to your mods directory with an MD5 hash-based filename to prevent collisions, and register it in the catalog.

The file is now available in the catalog and can be assigned to any **Launch Protocol** via the **Mod File Selector** dropdown on the Install page.

### Via the Install form directly

On the **Configuration** tab of the Install page, you can also add files on-the-fly:

1. Click the **+ Add File** button below the file list.
2. Browse to your mod file or select one from the **Catalog** dropdown (which lists everything already in your catalog).
3. The file will be added to the current protocol. If it's a new file (not yet in the catalog), it will be registered automatically when you create the protocol.

### Editing or Removing Catalog Entries

Back in the **Mod Files** tab:

- Click the **pencil icon** (`✏️`) on any row to edit the entry's name, version, URL, or load order.
- Click the **trash icon** (`🗑️`) to remove a file from the catalog entirely. This does **not** delete the actual file from disk — only removes it from the system registry.

### UAC Registry Lookup (E1M0.3.0+)

If you have **Registry Lookups** enabled in `core_settings` → **General**, the system will attempt to match your mod file against the online **UAC Registry** when adding it to the catalog. Matched files will auto-populate metadata like name and version. Registry lookups require an active connection to the UAC data centers.

See the **[UAC Registry Lookup](/reference/uac-registry/)** page for full details.

## Storage

Mod files registered in the catalog are stored in your configured **Mods Directory** (`~/.config/uac/mods/` by default). The catalog index itself lives at:

```
~/.config/uac/modFileCatalogue.json
```

This file can be edited manually if needed, though using the in-app tools is recommended to avoid corrupting the registry.
