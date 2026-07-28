# Features

## Purpose

The `features` directory contains the functional capabilities of Vision3D.

Each feature solves a specific user problem and can evolve independently.

---

## What belongs here

- Product Viewer
- Upload
- Configurator
- Authentication
- Dashboard

---

## What does NOT belong here

- Generic UI
- Global utilities
- Route definitions

---

## Principles

- One feature should have one responsibility.
- Features should be modular.
- Features may use UI components.
- Features may communicate with external services through `/lib`.

---

## Examples

```
viewer/
upload/
configurator/
```
