---
title: 'Photo Gallery'
description: "A local-first desktop photo library with on-device AI search, GPS maps, duplicate cleanup, and a markdown journal."
pubDate: 2026-06-02
stack: ["Rust", "Tauri", "React", "Local-first", "AI"]
status: 'in-progress'
featured: true
heroImage: "" # TODO: drop in hero shot — wide screenshot of the gallery grid
draft: false
---

A local-first desktop app for managing a personal photo and video library. Point
it at folders on your machine and it indexes everything in place — browse by
grid or timeline, search in plain language, map shots by location, clear out
duplicates, and keep a journal of the days behind the photos.

The defining idea is that nothing is locked away. Your photos and videos stay as
plain files in the folders you choose, the journal is plain markdown you can open
in any editor, and the index, albums, and embeddings live in a single SQLite
database — all open formats any tool can read. The AI runs entirely on-device,
so there are no accounts, no servers, and nothing is ever uploaded.

<!-- IMAGE: hero — full-window screenshot of the gallery grid -->
![Photo Gallery — main library view]()

## Features

### Natural-language AI search

Search the library in plain English — "dog on the beach" — using a local CLIP
model (ViT-B-32 via ONNX Runtime). Everything runs locally so your data never leaves your device.

<!-- GIF: typing a query and watching results land -->
![AI search in action]()

### GPS map

Every photo or video with location metadata is plotted on an interactive map
with marker clusters and a heatmap, so the whole library can be browsed
geographically.

<!-- IMAGE: map view zoomed out with clusters + heatmap -->
![GPS map with clusters and heatmap]()

### Duplicate detection & review

Finds duplicate photos and videos across every folder and drive at once — even
spread across different external drives. Keyboard shortcuts make it quick to step
through each set and clear the ones you don't want, and removals are recoverable
so nothing is lost by accident.

<!-- GIF: stepping through the duplicate review flow -->
![Duplicate review]()

### Visual clustering

Projects each photo's CLIP embedding into 2D space to explore the library as an
interactive cluster plot, where visually similar photos naturally fall close
together.

<!-- IMAGE: cluster scatter plot -->
![Embedding clusters]()

### Dashboard insights

Charts that summarize the library — counts, dates, locations, and camera
metadata — generated from queries against the local database.

It also includes a **sunburst chart** of disk usage, inspired by Filelight: each
ring is a level of your folder tree, sized by how much space its photos take up,
so you can see at a glance which parts of the library are taking up precious disk space.

<!-- IMAGE: dashboard with charts -->
![Dashboard insights]()

<!-- IMAGE: the folder sunburst / disk-usage chart -->
![Folder disk-usage sunburst]()

### Journal

Daily and weekly journal entries saved as plain markdown files, with a
date-filtered media picker for adding photos from a given day. Because they're
just markdown on disk, the entries can be opened and read in any editor —
Obsidian, VS Code, or a plain text app — not only inside Photo Gallery.

<!-- IMAGE: journal tab with a media picker open -->
![Markdown journal]()

### Unified filters

One set of filters — media type, favorites, GPS, folder, camera make and model —
that stays in sync across every view. Narrow the library down and the grid, map,
and clusters all reflect the same selection.

<!-- IMAGE: filter panel open with the gallery narrowed down -->
![Filters applied across views]()

### Library management

Virtualized grid and timeline views · EXIF metadata sidebar · albums and
favorites · a filesystem watcher that auto-indexes new files · folder rescan and
reconcile · video thumbnails · portable JSON library export.

<!-- IMAGE: grid/timeline view with the EXIF sidebar open -->
![Grid view with EXIF sidebar]()

## Built with

| Layer        | Tech |
|--------------|------|
| **Frontend** | Next.js (static export), React 19, TypeScript, Tailwind v4 |
| **Backend**  | Rust + Tauri 2 |
| **Storage**  | SQLite (bundled, no system dependency) |
| **AI**       | CLIP ViT-B-32 via ONNX Runtime — runs locally |
| **Maps / charts** | Leaflet, ECharts, and Recharts |

Two chart libraries, on purpose: Recharts (SVG) handles the small dashboard
charts with clean React composition, while the cluster view drops down to
ECharts' canvas renderer to stay smooth with thousands of photo points on screen
at once.

## How it's built

A single desktop binary: a TypeScript/React front end talking to a Rust core
over Tauri's IPC bridge. No server, no accounts, no network calls.

### A strict UI ⇄ Rust boundary

The front end never touches the database or filesystem directly. Rust owns all
durable data, scanning, embeddings, and background work; the UI only renders
state and calls through a single bridge module. That one rule keeps the React
side replaceable — the Next.js shell could be swapped for Vite without touching
the core — and makes the data flow easy to follow in one pass.

### Two-phase indexing

Importing a folder is split in two. A fast first pass walks the disk and records
each file so the library is browsable almost immediately. A second background
pass enriches each photo — EXIF extraction, thumbnail generation, then CLIP
embeddings — reporting progress as it goes. Heavy work never blocks the grid.

### Durable background jobs

Long-running work — scans, extracting exif metadata, embedding — is tracked as job rows in the
database, not just held in memory, and streams live progress to the UI as it
runs. Because the state lives on disk, a job survives a restart: close the app
partway through a 10,000-photo embedding run and it picks up where it left off.

### On-device CLIP search (TODO: make this better)

Two CLIP models come bundled with the installer. One encodes your photos into vectors —
that's what drives the cluster plot and natural-language search. The other
encodes text into the same space, so a typed query can be matched against those
photo vectors. Both run on-device; nothing leaves your machine.

### Sandboxed file access

The webview can only read the app's own data directory, where thumbnails are
cached — not the folders you add. Full-resolution originals are fetched on demand
only when a photo is opened. That keeps access tight, and it keeps the app ready
for Linux, which won't honor broad wildcard scopes anyway.

### SQLite as the index

The index, albums, and embeddings all live in a single SQLite file on disk. No database server to run, no account, just one file
sitting next to your photos that any tool can open. It runs in WAL mode so reads
and writes don't block each other — the UI keeps rendering the grid smoothly even
while a background scan or embedding job is writing to the same database.

## What's next

Some things I want to implement, not necessarily in that order:

- **Face grouping** — cluster photos by person, on-device, so you can browse by
  who's in the frame.
- **Share journal entries** — export a journal entry to email, and possibly
  straight to social media.
- **UMAP clustering** — swap PCA for UMAP in the cluster plot for clearer
  separation between groups.
- **GPU acceleration** — run embedding and other heavy work on the GPU where one
  is available.
- **Plugin system** — let users pick and choose which functionality is enabled,
  rather than shipping everything at once.
- **Lasso to filter** — draw a freehand or polygon selection over the cluster
  plot or the map to filter the gallery down to just the photos inside it.
- **Soft-delete whole folders** — apply the same recoverable deletion to entire
  folders, not just individual files.
- **Near-duplicate removal** — extend duplicate cleanup beyond exact matches to
  remove visually similar shots.
- **Cross-platform releases** — only the Windows build exists today; a Linux
  build is in the works, and macOS is on the list (anyone got a MacBook I can
  borrow?).
- **HEIC / HEIF support** — reliably import Apple's iPhone photo format..

