---
title: For Developers
description: "Technical details about UAC Launch Control: architecture, setup, API, and contribution guide."
---

A little about the technical details of the **UAC Launch Control** app. If you want to contribute, or build it for yourself, read on.

You can also check out the more detailed explanation about the project and its structure on **[DeepWiki](https://deepwiki.com/mikkelrask/uaclaunchcontrol)**.

> **Note:** This document gets updated frequently during early development. If you run into any trouble, please open an issue or reach out.

## Architecture

### Technology Stack

- **Frontend**: React + TypeScript + TailwindCSS v3
- **Backend**: Express.js API server
- **Desktop**: Electron with electron-vite
- **Build Tool**: Vite (for the renderer)
- **File Watching**: Chokidar for real-time WAD directory synchronization
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: wouter (path-based; tab state via URL query params, e.g. `/install?tab=files`)
- **Icons**: Lucide React + Nerd Font (Atkinson Mono Nerd Font)

### Application Structure

```
uaclaunchcontrol/
├── src/
│   ├── main/
│   │   ├── index.ts          # Electron main process
│   │   └── server/
│   │       ├── index.ts      # Server setup (port 7666), CORS, logging
│   │       ├── routes.ts     # REST API endpoints
│   │       ├── storage.ts    # JSON file persistence + WAD file watcher
│   │       └── services/
│   │           ├── fileService.ts     # File system operations
│   │           ├── freedoomService.ts # FreeDoom manifest fetch + download
│   │           ├── gameService.ts     # Game/protocol management
│   │           ├── gameplayWatchers.ts # Session/process monitoring
│   │           ├── playerService.ts   # Player data/achievements
│   │           └── portService.ts     # Source port installation/selection
│   ├── preload/
│   │   └── index.ts/.d.ts    # Electron preload bridge
│   └── renderer/
│       └── src/
│           ├── main.tsx      # React entry
│           ├── App.tsx       # Root: router, auto-updater, modals
│           ├── api.ts        # Fetch-based API client (localhost:7666)
│           ├── pages/        # GamesPage (/), InstallPage (/install), not-found
│           ├── components/   # Custom components (CatalogManager, GameCard, etc.)
│           │   └── ui/       # shadcn/ui primitives (40+ components)
│           ├── hooks/        # useAutoUpdater, useToast, useMobile
│           ├── lib/          # gameService, fileService, queryClient, utils
│           ├── icons/        # DoomVersionIcon + PNG assets
│           └── assets/       # Fonts, images, logos
└── src/shared/
    ├── schema.ts             # All interfaces: IProtocol, IModFile, IDoomVersion, etc.
    ├── debug.ts              # DEBUG-gated logging helper
    └── categories.ts         # Mod file catalog categories
```

### Data Flow

1. **Electron (Main)** starts and spawns the Express API server on port `7666`.
2. **Express Server** manages JSON file storage at `~/.config/uac/`:
   - `settings.json`: App settings (paths, preferences)
   - `doomVersions.json`: Configured Doom versions/WADs
   - `modFileCatalogue.json`: Catalog of available mod files
   - `mods/`: Individual Protocol configurations as JSON files
3. **Chokidar** watches the WAD files directory for changes and syncs Doom versions automatically.
4. **Renderer** (React app) communicates with the API server via HTTP fetch.
5. **Media Proxy**: Images served via both `/api/media?path=` and `/images/:fileName` to bypass Electron security restrictions.
6. **Auto-Update**: Uses `electron-updater` with GitHub releases.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- GZDoom (or similar source port) installed on your system

```bash
# Clone the repository
git clone https://github.com/mikkelrask/uaclaunchcontrol.git
cd uaclaunchcontrol

# Install dependencies
npm install
```

### Development

```bash
# Run in development mode (with hot reload)
npm run dev
```

This will:
- Start the Vite dev server for the renderer (with proxy to Express on port 7666)
- Start the Electron main process
- Start the Chokidar WAD watcher for real-time sync

```bash
# TypeScript type checking
npm run typecheck

# Lint and format
npm run lint
npm run format

# Build for your current platform
npm run build
```

### Platform-specific builds

```bash
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
npm run build:unpack # Build + unpacked directory (for testing)
```

Built applications will be in the `dist/` directory.

## Configuration

Done via the application settings (cog icon in the top right corner), but everything is also stored in plain text JSON files, so you can edit them manually if you want to. All paths support tilde (`~`) expansion.

### Storage Location

All application data is stored in `~/.config/uac/`:

```
~/.config/uac/
├── settings.json           # App settings (paths, preferences)
├── doomVersions.json       # Configured Doom versions/WADs
├── modFileCatalogue.json   # Catalog of available mod files
├── mods/                   # Individual mod configurations
│   ├── 1.json
│   ├── 2.json
│   └── ...
├── images/                 # Screenshots and downloaded images
└── saves/                  # Game save files (per-mod, optional)
```

### Default Settings

```json
{
  "sourcePorts": [],
  "defaultSourcePortId": null,
  "defaultDoomVersionId": null,
  "theme": "dark",
  "savegamesPath": "~/.config/uac/saves",
  "modsDirectory": "~/.config/uac/mods",
  "screenshotsPath": "~/Pictures/UAC Launch Control/screenshots",
  "databaseLinkPresets": [
    { "name": "MODDB", "url": "https://www.moddb.com/games/doom-ii" },
    { "name": "ZDOOM", "url": "https://forum.zdoom.org/" },
    { "name": "DOOMWORLD", "url": "https://www.doomworld.com/" },
    { "name": "ITCH", "url": "https://itch.io/game-mods/tag-doom" }
  ],
  "selectedPresetIndex": 0,
  "wadFilesDirectory": "~/.config/uac/wads",
  "autoUpdateEnabled": true,
  "registryLookupEnabled": false,
  "showLaunchPreview": true,
  "uiScale": 100
}
```

## API Endpoints

The Express server exposes the following REST API on `localhost:7666`:

### Protocols (game instances)
- `GET /api/protocols`: List all protocols (optional `?version=` and `?search=` query params)
- `GET /api/protocols/:id`: Get a specific protocol
- `POST /api/protocols`: Create a protocol
- `PUT /api/protocols/:id`: Update a protocol
- `DELETE /api/protocols/:id`: Delete a protocol
- `POST /api/protocols/:id/launch`: Launch a protocol (spawns source port)
- `POST /api/protocols/test-launch`: Test a launch configuration without saving
- `POST /api/protocols/:id/playtime`: Record playtime for a protocol

### FreeDoom
- `GET /api/freedoom/manifest`: Fetch the current FreeDoom release manifest
- `POST /api/freedoom/download`: Download a FreeDoom bundle (`phase12` or `freedm`)

### Doom Versions / WADs
- `GET /api/versions`: List all Doom versions
- `PUT /api/versions`: Save all Doom versions (full array replace)
- `GET /api/versions/:slug`: Get Doom version by slug
- `PUT /api/versions/:id`: Update a single Doom version
- `POST /api/wads/import`: Import a .wad file with MD5-based renaming

### Mod File Catalog
- `GET /api/mod-files/catalog`: List catalog files
- `POST /api/mod-files/catalog`: Add file to catalog
- `PUT /api/mod-files/catalog/:id`: Update catalog entry
- `DELETE /api/mod-files/catalog/:id`: Delete catalog entry
- `POST /api/mod-files/hash`: Compute MD5 hash of a file
- `POST /api/mod-files/move`: Move file to mod folder with hash-based naming
- `POST /api/mod-files/unzip-scan`: Scan a zip archive for supported files
- `POST /api/mod-files/unzip-import`: Import files from a zip archive
- `POST /api/mod-files/unrar-scan`: Scan a RAR archive for supported files

### Settings
- `GET /api/settings`: Get expanded application settings
- `PUT /api/settings`: Update settings

### Media & Files
- `GET /api/media?path=`: Proxy for serving local files safely
- `GET /images/:fileName`: Serve images from the images directory
- `POST /api/screenshots/upload`: Upload/copy a screenshot to images dir
- `GET /api/screenshots/:fileName/content`: Fetch a screenshot's image data
- `POST /api/screenshots/import`: Import a screenshot
- `POST /api/protocol/download-image`: Download an image from a URL
- `POST /api/move-file`: Move a file from one path to another
- `POST /api/file-read`: Read a text file's contents
- `POST /api/dialog/open`: Open native file/folder picker (supports tilde)

### Configs
- `POST /api/configs/blank`: Create a blank `settings.cfg` for a mod file

## Path Aliases

Defined in `electron.vite.config.ts` (legacy) or Vite config:

- `@/`: Maps to `src/renderer/src/` (e.g. `@/components/ui/button`)
- `@shared/`: Maps to `src/shared/` (e.g. `@shared/schema`)

## Styling

- TailwindCSS v3 with class-based dark mode
- Custom app utility classes: `bg-app-primary`, `bg-app-secondary`, `text-app-primary`, `text-app-muted`, `border-app`, `bg-accent-highlight`
- Font: **Aldrich** (sans, bundled via `@font-face`), with Atkinson Mono Nerd Font as fallback for icon glyphs
- UI components in `src/renderer/src/components/ui/` (40+ shadcn/ui primitives)

## Dialog Pattern

All dialogs follow a consistent pattern modeled on `SettingsDialog.tsx`:

```tsx
<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
  <DialogContent className="bg-app-primary shadow-2xl border-app max-w-4xl p-0 overflow-hidden flex flex-col">
    {/* Full-bleed header bar */}
    <div className="flex items-center justify-between p-4 border-b border-app bg-app-secondary">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent-highlight/10 rounded-md">
          <Icon className="w-5 h-5 text-accent-highlight" />
        </div>
        <div>
          <DialogTitle className="text-xl font-bold tracking-tight text-app-primary lowercase">
            title_text
          </DialogTitle>
          <DialogDescription className="text-xs font-semibold font-mono text-app-muted uppercase tracking-widest opacity-80">
            UAC Launch Control // Description
          </DialogDescription>
        </div>
      </div>
    </div>

    {/* Body */}
    <div className="flex-1 overflow-y-auto p-4">...</div>

    {/* Full-bleed footer bar */}
    <DialogFooter className="bg-app-secondary border-t border-app p-4 shrink-0">
      <Button variant="outline" onClick={onClose}>Cancel</Button>
      <Button className="bg-accent-highlight text-white">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Keyboard Shortcuts

Defined in `Header.tsx`. All single-letter shortcuts are lowercase and disabled when typing in an input/textarea:

| Key | Action |
|-----|--------|
| `/` | Focus search input |
| `i` | Go to Install > Configuration tab |
| `m` | Go to Install > Mod Files tab |
| `w` | Go to Install > WAD Files tab |
| `l` | Go to Launch page |
| `Ctrl+.` | Open Settings |
| `?` | Show keyboard shortcuts modal |

Global shortcuts use URL query params (`/install?tab=files`) + custom DOM events (`uac:switch-tab`) since wouter only tracks pathname.

## Shared Types

All interfaces in `shared/schema.ts` use `I` prefix:

- **IProtocol**: Game instance/protocol (title, description, files, source port, etc.)
- **IModFile**: Individual mod file entry (path, hash, type, load order)
- **IDoomVersion**: Base game/WAD configuration (name, slug, executable, icon)
- **ISourcePort**: Source port executable configuration (name, family, path, default flag)
- **IDatabaseLink**: Preset database link (name + URL) for the nav shortcut
- **IAppSettings**: Application settings (paths, theme, toggles, database links)
- **IUpdateInfo**: Auto-update status (version, release notes, download progress)
- **IPlayerData** / **IPlayerStats** / **IAchievementState**, Player stats & achievements
- **IDoomVersionDelta**: WAD watcher change notification
- **IInstallType**: Supported install type descriptor
- **IVersionData**: FreeDoom manifest version info
- **IResponseMessage**: Generic API response wrapper

## Development Notes

### TypeScript Configuration

The project uses separate TypeScript configurations:

- `tsconfig.node.json`: Server code
- `tsconfig.web.json`: Renderer process (includes `shared` via composite)

### Code Style

- TypeScript strict mode, files: `.ts` / `.tsx`
- No semicolons, single quotes, 100 char print width, no trailing commas (Prettier)
- PascalCase for components, camelCase for hooks (`use` prefix), kebab-case for files
- PascalCase with `I` prefix for types (`IMod`, `IModFile`)
- Use `cn()` from `@/lib/utils` for conditional class merging
- Errors displayed via `useToast()` hook

### State Management

- **Server state**: TanStack Query (`useQuery`, `useMutation`) with `staleTime: Infinity`
- **Local state**: `useState`
- **Global UI**: React Context (rare)
- **Query keys**: Use URL paths as keys: `['/api/mods']`, `['/api/mod-files/catalog']`, `['/api/settings']`

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- Extensions:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
