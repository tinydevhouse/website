---
title: 'Photo Gallery'
description: 'Local-first photo management with a metadata layer for photos stored across local folders, external drives, and network shares.'
pubDate: 2026-06-02
stack: ['local-first', 'sqlite', 'desktop']
status: 'in-progress'
featured: true
---

## Overview

Photo Gallery is a local-first photo management project for people who keep images across more than one drive. It treats the filesystem as the source of truth and adds a structured metadata layer on top.

## What it does

The project is focused on indexing local folders, external drives, and network shares without forcing photos into a hosted library. Metadata is stored in SQLite and can be exported as JSON.

## Current focus

The active work is around the indexing model, durable metadata, and keeping the export format simple enough to inspect, back up, and repair.
