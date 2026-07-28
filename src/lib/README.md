# Lib

## Purpose

The `lib` directory contains integrations with external libraries and services.

It is responsible for connecting Vision3D with the outside world.

---

## What belongs here

- OpenAI
- Gemini
- Three.js setup
- Database clients
- API clients

---

## What does NOT belong here

- Business decisions
- UI
- Feature logic

---

## Principles

- Wrap external libraries.
- Keep integrations isolated.
- Avoid mixing business logic with service configuration.

---

## Examples

```
openai.ts
gemini.ts
three.ts
database.ts
```
