# Kashyap's Notes

A small Jekyll-style notes site built with **Node.js + Express + EJS**.
Markdown files in `posts/` are read at runtime, front matter is used for metadata, and the Markdown body is rendered as HTML.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
```

## Run

Production:

```bash
npm start
```

Development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Add a post

Create a Markdown file inside `posts/`, for example `posts/my-note.md`:

```md
---
title: My Note
category: Machine Learning
tags: [Ensemble Method, Boosting]
description: A short description of the note.
date: 2026-08-15
---

## Heading

Write normal Markdown here.
```

Only `title` is effectively required. Missing category becomes `Uncategorized`; tags, description and date are optional.

## Optional environment variables

Change the port:

```bash
PORT=4000 npm start
```

Set the public site URL for Open Graph metadata:

```bash
SITE_URL=https://example.com npm start
```

## Project structure

```text
.
├── app.js
├── package.json
├── posts/
├── public/
│   └── css/style.css
└── views/
    ├── index.ejs
    ├── post.ejs
    ├── 404.ejs
    └── partials/
        ├── head.ejs
        └── footer.ejs
```
