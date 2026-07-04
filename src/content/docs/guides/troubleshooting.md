---
title: Troubleshooting
description: Common Doom/UAC Launch Control issues and how to fix them.
---

This page covers the most common issues when running modded Doom through **UAC Launch Control**.

---

## The app highlights common problems automatically

Before checking this list, look at the **Crash Log** panel when a session ends abnormally. For terminated sessions, the app shows the exit code and recent log output, plus a short hint for frequent failure modes.

If the app detected a likely cause, the quickest path is usually:

- **Wrong source port / version** → edit the Protocol and pick the port the mod requires.
- **Missing IWAD** → make sure the base game WAD is present and detected in **Settings → WAD Config**.
- **Bad load order** → reorder mod files in the Protocol; required mods are loaded first automatically.
- **Mod needs extra files** → check the mod page for dependencies, then mark them as **Required** or **Sidecar** in the catalog.

If none of those fit, keep reading.

---

## No ports configured

**Symptom:** Launch fails immediately.

When no source ports are configured, the app can’t start a session. Open **Settings → Paths → Source Ports** and add at least one executable.

---

## Wrong engine for the mod

**Symptom:** The game launches, but the mod doesn’t work, textures are missing, or the port errors on boot.

Many older mods target **GZDoom**, while newer or experimental mods may require **UZDoom**, **Zandronum**, or another port. Check the mod’s release page for required port/version, then add that exact version in **Settings → Paths → Source Ports**.

---

## Missing or broken IWAD

**Symptom:** Startup fails with an IWAD-related error, or the base game isn’t selectable.

A Protocol needs a valid base game file. Go to **WAD Files** on the Install page and confirm:

- The WAD is listed and recognized.
- The metadata/name is correct.
- The file path still points to an existing file.

If you moved WADs after adding them, re-import or re-link them.

---

## Mod dependency / load order issue

**Symptom:** Missing enemies, broken weapons, crashes after map load.

When multiple mods interact, order matters. In the Protocol editor:

- **Required mods** are always loaded first.
- Remaining mods follow the visual order in the file list.

Check the mod’s documentation for a recommended load order and reproduce it here. If two mods replace the same actors or weapons, one will usually win based on load order.

---

## Registry offline or slow

**Symptom:** Metadata lookup never completes or returns nothing.

The **UAC Registry** is optional and community-driven. If it’s unreachable, the app adds files locally and continues. You can keep Registry Lookups disabled and work fully offline.

---

## macOS: “App is damaged”

**Symptom:** macOS refuses to open the app.

Remove the quarantine flag from Terminal:

```bash
xattr -dr com.apple.quarantine "/Applications/UAC Launch Control.app"
```

---

## Linux AppImage: won’t run

**Symptom:** Double-clicking does nothing.

Make the AppImage executable:

```bash
chmod +x UAC-Launch-Control-*.AppImage
```

On some distributions, FUSE may also be required for AppImages.

---

## Still stuck?

If the crash log doesn’t make sense, save the log and reduce your Protocol to the smallest failing case: one base WAD + one mod. That usually isolates whether the issue is the mod, the port, or the map itself.
