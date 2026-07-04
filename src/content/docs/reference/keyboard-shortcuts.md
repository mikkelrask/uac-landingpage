---
title: Keyboard Shortcuts
description: Global keyboard shortcuts for quick navigation in UAC Launch Control.
---

**UAC Launch Control** comes with a set of global keyboard shortcuts for quick navigation and common operations. Press `?` at any time to open the in-app shortcut reference.

> **Note:** All single-letter shortcuts are case-sensitive (lowercase only) and are disabled while typing in a text input or textarea — no accidental triggers while filling out forms.

## Global Navigation

| Shortcut | Action | Details |
|----------|--------|---------|
| `l` | **Launch page** | Navigates to the main game library view at `/` |
| `i` | **Install page — Configuration tab** | Navigates to the Install page and opens the Configuration (form) tab. Pressing `i` again while already on the Install page resets to Configuration. |
| `m` | **Install page — Mod Files tab** | Navigates to the Install page and switches to the Mod Files catalog tab. |
| `w` | **Install page — WAD Files tab** | Navigates to the Install page and switches to the WAD Files import tab. |
| `/` | **Focus search** | Moves focus to the database search input in the top navigation bar. |
| `?` | **Shortcuts help** | Opens this cheat sheet. |
| `Ctrl + .` | **Open Settings** | Opens **Settings**. On macOS this is `Cmd + .` |

## How it works

All shortcuts are registered globally via a `keydown` event listener in `Header.tsx`. The routing uses `wouter` plus URL query parameters (`/install?tab=files`) and a custom `uac:switch-tab` DOM event to handle tab switching when already on the Install page.

## In-app reference

You can also view these shortcuts at any time by pressing `?` or clicking the keyboard icon in the top navigation bar, which opens the **Keyboard & Protocols** modal.
