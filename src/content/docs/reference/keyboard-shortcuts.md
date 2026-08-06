---
title: Keyboard Shortcuts
description: Global keyboard shortcuts for quick navigation in UAC Launch Control.
---

Press `?` at any time to open the in-app shortcut reference.

> **Note:** all single-letter shortcuts are case-sensitive (lowercase only) and are disabled while typing in a text input or textarea, so you will not trigger them while filling out forms.

## Global navigation

| Shortcut | Action |
|----------|--------|
| `/` | Focus the search input |
| `i` | Go to the Install page |
| `m` | Go to Install > Mod Files tab |
| `w` | Go to Install > WAD Files tab |
| `l` | Go to the Launch page |
| `Ctrl + .` | Open Settings (`Cmd + .` on macOS) |
| `?` | Show this shortcut reference |

## How it works

The shortcuts are registered globally through a `keydown` event listener in `Header.tsx`. Routing uses `wouter` with URL query parameters (`/install?tab=files`) plus a custom `uac:switch-tab` DOM event to handle tab switching when you are already on the Install page.

## In-app reference

Press `?` or click the keyboard icon in the top navigation bar to open the **Keyboard & Protocols** modal at any time.
