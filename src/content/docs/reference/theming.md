---
title: Theming
description: Customize the look and feel of UAC Launch Control with built-in themes or custom CSS.
---

The UAC Launch Control terminal supports four visual profiles: **Dark** (default), **Light**, **Terminal Green**, and **Custom**. All themes are driven by CSS custom properties (HSL variables) with live preview — switch between them instantly and only commit on save.

## Selecting a theme

1. Open **Settings** (`Ctrl+.`)
2. Go to the **General** tab
3. In the **App Theme** selector, pick your profile:

| Theme | Description |
|-------|-------------|
| **UAC PHOBOS** | Default Phobos facility industrial. Neutral greys with UAC red accent. |
| **MAYKR** | A bright argent energy. Same structure, inverted for bright environments. |
| **PLUTONIA TERMINAL** | Green-phosphor matrix aesthetic. Early-90s UAC terminal feel. UAC red retained for warnings and destructive actions. |
| **CUSTOM** | User-defined palette via the Advanced tab editor. |

The interface updates immediately when you select a theme. Click **Apply** to save it permanently, or close without saving to revert to the previous theme.

---

## PLUTONIA TERMINAL

The Terminal Green profile (`120°` hue range):

| Element | Looks like |
|---------|-----------|
| Background | Near-black (`120 10% 4%`) to dark green (`120 10% 7%`) |
| Text / headings | Bright phosphor green (`120 60% 70%`) |
| Muted / secondary text | Dimmer green (`120 30% 40%–55%`) |
| Borders / inputs | Dark green (`120 25% 18%` / `120 20% 14%`) |
| Accent highlight | Vivid green (`120 100% 50%`) |
| Destructive / errors | Keep UAC red (`0 65% 45%`) — preserved for warning indication |

---

## Custom theme

The **Advanced** tab contains the Custom Theme Editor, only active when **CUSTOM** is selected in the General tab. Here you can paste HSL variable overrides for any of the theme's CSS custom properties.

### Format

Each line follows this pattern:

```
--variable-name: hue saturation lightness%;
```

The values use the **HSL color model**:

- **hue**: 0–360 (colour wheel position, e.g. `0` = red, `120` = green, `240` = blue)
- **saturation**: 0–100% (intensity of the colour)
- **lightness**: 0–100% (brightness; `0%` = black, `100%` = white)

### Example

![Theming example](/example-theme.png)

```css
.custom {
  /* === CORE SHADCN === */
  --background: 265 50% 4%;
  --foreground: 180 30% 95%;

  --card: 265 40% 7%;
  --card-foreground: 180 30% 95%;

  --popover: 265 40% 6%;
  --popover-foreground: 180 30% 95%;

  --primary: 320 100% 55%;
  --primary-foreground: 0 0% 100%;

  --secondary: 265 40% 15%;
  --secondary-foreground: 185 100% 70%;

  --muted: 265 30% 12%;
  --muted-foreground: 265 20% 65%;

  --accent: 265 40% 16%;
  --accent-foreground: 320 100% 65%;

  --destructive: 0 90% 60%;
  --destructive-foreground: 0 0% 100%;

  --border: 265 40% 25%;
  --input: 265 40% 20%;
  --ring: 185 100% 50%;
  --ring-color: hsl(var(--ring));
  
  --radius: 0;

  --bg-primary: 265 50% 4%;
  --bg-secondary: 265 40% 8%;
  --bg-tertiary: 265 35% 12%;
  --bg-card: 265 40% 7%;
  --bg-popover: 265 40% 6%;
  --bg-muted: 265 30% 12%;
  --bg-sidebar: 265 50% 3%;
  --bg-hover: 265 40% 16%;

  --text-primary: 180 30% 95%;
  --text-secondary: 265 30% 75%;
  --text-muted: 265 20% 60%;
  --text-sidebar: 180 30% 95%;
  --text-card: 180 30% 95%;
  --text-popover: 180 30% 95%;

  --accent-primary: 320 100% 55%;
  --accent-secondary: 265 40% 15%;

  --accent-highlight: 320 100% 55%;
  --accent-highlight-soft: 320 100% 55% / 0.15;
  --accent-highlight-border: 320 100% 55% / 0.45;

  --accent-destructive: 0 90% 60%;
  
  --accent-ring: 185 100% 50%;

  --border-primary: 265 40% 25%;
  --border-input: 265 40% 20%;
  --border-sidebar: 265 40% 15%;
}
```

### All available variables

**Background layers:**

| Variable | Default (dark) | Purpose |
|----------|---------------|---------|
| `--bg-primary` | `220 18% 5%` | Main background |
| `--bg-secondary` | `220 15% 9%` | Card / section backgrounds |
| `--bg-tertiary` | `220 12% 14%` | Deeper nested surfaces |
| `--bg-card` | `220 18% 8%` | Game cards |
| `--bg-popover` | `220 18% 9%` | Dropdowns, popovers |
| `--bg-muted` | `220 10% 18%` | Muted/hover states |
| `--bg-sidebar` | `220 18% 6%` | Sidebar panel |
| `--bg-hover` | `220 12% 16%` | Hover state backgrounds |

**Text layers:**

| Variable | Default (dark) | Purpose |
|----------|---------------|---------|
| `--text-primary` | `210 20% 92%` | Headings, body text |
| `--text-secondary` | `215 12% 70%` | Secondary information |
| `--text-muted` | `215 10% 75%` | Subtle labels, hints |
| `--text-sidebar` | `210 20% 92%` | Sidebar text |
| `--text-card` | `210 20% 92%` | Card text |
| `--text-popover` | `210 20% 92%` | Popover text |

**Accents:**

| Variable | Default (dark) | Purpose |
|----------|---------------|---------|
| `--accent-highlight` | `0 84% 60%` | Primary accent (buttons, active tabs) |
| `--accent-destructive` | `0 65% 45%` | Destructive actions, errors |
| `--accent-ring` | `0 84% 60%` | Focus ring colour |

**Borders:**

| Variable | Default (dark) | Purpose |
|----------|---------------|---------|
| `--border` | `220 12% 18%` | Standard borders |
| `--border-input` | `220 12% 16%` | Input field borders |
| `--border-sidebar` | `220 12% 14%` | Sidebar separators |
