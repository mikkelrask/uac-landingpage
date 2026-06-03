# UAC Launch Control Docs

Documentation site for [UAC Launch Control](https://github.com/mikkelrask/uaclaunchcontrol) — a cross-platform Doom source port launcher.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build).

## 🚀 Project Structure

```
.
├── public/              # Static assets (images, favicons)
├── src/
│   ├── assets/          # Page assets
│   ├── content/
│   │   └── docs/        # Documentation pages (MDX)
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |

## 📖 Content

This documentation covers:

- **Getting Started** — Installation and first-time setup
- **Guides** — Managing source ports, mod files, and base game WADs
- **Reference** — Settings, theming, keyboard shortcuts, UAC Registry
- **For Developers** — Architecture, API, building from source

## License

See the main [UAC Launch Control repository](https://github.com/mikkelrask/uaclaunchcontrol) for license information.
