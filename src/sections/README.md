# Sections

## Purpose

The `sections` directory contains the large visual building blocks of a page.

Each section represents a meaningful part of the user experience rather than a reusable UI element.

---

## What belongs here

- Hero
- Features
- Pricing
- Testimonials
- FAQ
- Footer
- CTA
- Contact

---

## What does NOT belong here

- Buttons
- Inputs
- Cards
- Modals
- Business logic
- API calls

Reusable UI belongs in `/ui`.

Business logic belongs inside `/features`.

---

## Principles

- A section should represent a complete part of a page.
- Sections may use many UI components.
- Sections should stay focused on presentation.
- Avoid business logic whenever possible.

---

## Examples

```
Hero/
Pricing/
FAQ/
Footer/
```
