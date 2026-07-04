---
title: UAC Registry Lookup
description: Community-sourced database of mod file metadata for UAC Launch Control.
---

From version **E1M0.3.0**, **UAC Launch Control** includes a distributed lookup system — the **UAC Registry** — a community-sourced database of mod file metadata, hosted at `https://db.uac-soft.online`.

When enabled, the Registry acts as a two-way relay:

- **Incoming**: When you add a mod file to your catalog, the system queries the Registry by MD5 hash. If a match is found, metadata (name, version, source URL, load order dependencies) is auto-populated — saving you time and ensuring consistency.
- **Outgoing**: If a mod file has a **URL** provided (e.g. a ModDB, GitHub, or forum link) and the hash is not yet in the Registry (or the URL/version is new), the file's metadata is **anonymously submitted** to a **pending queue** for review. Submission data is **vetted before** being merged into the active Registry, so spam URLs and malicious entries are filtered out.

## Data transmitted

There is **no personally identifiable information** transmitted. Only the following data is sent:

| Data | Example | Condition |
|------|---------|-----------|
| MD5 Hash | `a1b2c3d4e5f6...` | Always |
| Suggested name | `Project Brutality Phase 2` | Always |
| URL | `https://www.moddb.com/mods/...` | Always (required for submission) |
| Version | `2.0b` | If provided |
| Sidecar flag | `0` or `1` | If set |
| Load order | `[{"name":"..."},...]` | If dependencies are configured |

A submission is triggered when:
- The file's hash is **not found** in the Registry, **or** the URL or version you've entered is new compared to what's already registered
- **AND** you have provided a URL for the mod file

## Enabling Registry Lookups

1. Open **Settings** via the cog icon (or press `Ctrl+.`)
2. Go to the **General** tab
3. Toggle **Registry Lookup** to the **ON** position

A unique **Registry UUID** will be generated for your system on first enable. This is used solely for deduplication — ensuring the same user doesn't submit the same mod entry multiple times.

Once enabled, the lookup runs automatically each time you add a file to the catalog via the **Add to Catalog** dialog. Files added on-the-fly from the Install form's **Configuration** tab also trigger a lookup.

## Privacy & Control

- Registry lookups are **opt-in**. The feature is disabled by default.
- You can disable it at any time. Disabling stops both outgoing submissions and incoming lookups.
- Existing catalog entries are unaffected.
- Submissions are **only sent when you provide a URL** — if you never fill in a URL field, no data is ever submitted.
- If you prefer to keep your mod catalog completely local, simply leave the feature disabled.

## Searching the Registry

From the **Launch view**, the search bar now queries not only your local game instances and mod catalogue, but also the **UAC Registry** — letting you discover mods by name without leaving the app.

Results appear in a dedicated **UAC Registry** section showing family name, version, category, and download links. Click a link to open the mod's ModDB, GitHub, or forum page.

## Technical

The Registry API lives at `https://db.uac-soft.online`. It exposes these endpoints:

- `GET /mod/:hash` — Look up a mod by its MD5 hash. Returns metadata if found.
- `POST /mod/pending` — Submit a mod to the pending review queue.
- `GET /api/mods?q=...` — Search the registry by name.

Lookups are performed asynchronously and do not block the catalog workflow — if the Registry is unreachable, the file is added locally without metadata, and no error is shown.

Submitted entries go through a manual review process before being approved into the active Registry. This ensures the database remains accurate and free of spam.
