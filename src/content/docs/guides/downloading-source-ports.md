---
title: Downloading Source Ports
description: Where and how to download Doom source ports like GZDoom and UZDoom, including getting specific older versions.
---

A **source port** is a modern engine that can run classic Doom (and Doom-engine) games. While the original `doom.exe` is long obsolete, source ports like **UZDoom** and **GZDoom** keep the game playable on current hardware — with higher frame rates, widescreen resolutions, mod support, and modern operating systems.

This guide covers where to find them and how to grab a **specific version** (not just the latest).

---

## Helion

**[Helion](https://helion.sourceforge.net/)** is a modern source port built from the ground up in C#. It features a Vulkan renderer and performs well even on modest hardware, with experimental mod compatibility.

### Latest release

Grab it from the [Helion releases page on GitHub](https://github.com/Helion-Engine-Helion/Helion/releases).

| Platform | Package |
|----------|---------|
| **Windows** | `Helion-win-x64.zip` |
| **Linux** | `Helion-linux-x64.tar.gz` |

---

## UZDoom

UZDoom is the most modern and actively developed source port. It's a fork of GZDoom that adds **Vulkan** rendering and experimental features, and follows its own rapid release cycle.

### Latest release

Head to the [UZDoom releases page on GitHub](https://github.com/UZDoom/UZDoom/releases). The latest release is pinned at the top with download assets for each platform.

| Platform | Package |
|----------|---------|
| **Windows** | `uzdoom-*-windows.zip` |
| **macOS** | `uzdoom-*-macos.dmg` |
| **Linux** | `uzdoom-*-linux-x86_64.tar.xz` |

### Getting an older version

UZDoom does **not** maintain a directory archive of every build. To get a specific older version:

1. Go to the **[UZDoom releases page](https://github.com/UZDoom/UZDoom/releases)**.
2. Scroll down the list to find the release you want (newest first).
3. Click the **▼ Assets** disclosure triangle to expand the download list.
4. Download the archive for your OS.

Older releases are still fully accessible from GitHub — they just aren't organized in a browsable directory. Each release tag contains the complete set of binaries published at the time.

---

## GZDoom

GZDoom has been the standard source port for years and is what most existing mods target. Development has slowed, but it remains **essential** because many classic mods require a **specific older version** to work correctly. GZDoom's maintainers keep an archive of every release going back years, making it easy to find the exact build you need.

### Latest release

Grab it from the [GZDoom releases page on GitHub](https://github.com/ZDoom/gzdoom/releases):

| Platform | Package |
|----------|---------|
| **Windows** | `gzdoom-xx-x-x-Windows-64bit.zip` |
| **macOS** | `gzdoom-xx-x-x-macOS.dmg` |
| **Linux** | `gzdoom-xx-x-x-Linux.tar.xz` (AppImage also available) |

### Getting an older version (the archive)

GZDoom's developers run a **full directory listing** of every binaries build going back years on their official site:

**[https://zdoom.org/files/gzdoom/bin/](https://zdoom.org/files/gzdoom/bin/)**

This is the go-to when:

- A mod **requires a specific older version**.
- A newer release introduced a **regression** for your setup.
- You're **testing across versions** for compatibility.

The directory lists every numbered release as a subfolder (e.g. `g4-12-2/`, `g4-11-3/`, `g4-10-0/`). Inside each you'll find the same platform packages as the latest release. Just browse to the version you need, download the archive, and extract it anywhere on your system.

> **Tip:** You can leave multiple versions of both UZDoom and GZDoom installed at the same time. Add each as a separate source port in UAC Launch Control and pick which one to use per protocol. See the [Manage Source Ports](/guides/source-ports/) guide.

---

## Verifying your download

Once downloaded, extract the archive and look for the source port executable:

| Platform | Executable |
|----------|-----------|
| **Windows** | `gzdoom.exe` or `uzdoom.exe` |
| **macOS** | `GZDoom.app` or `UZDoom.app` |
| **Linux** | `gzdoom` binary (from the extracted tarball) or the `.AppImage` |

On **macOS**, you may need to right-click the `.app` and select **Open** the first time to bypass Gatekeeper. On **Linux**, you might need to make the binary executable with `chmod +x gzdoom` before it can be run.

Once verified, point UAC Launch Control to the executable via **Settings → Paths → Source Ports** (see the [Manage Source Ports](/guides/source-ports/) guide for details).
