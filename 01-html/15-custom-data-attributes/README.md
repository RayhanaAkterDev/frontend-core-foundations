# Custom Data Attributes

> Tags: html5, data-attributes, javascript-dom, interactivity, accessibility  
> **Purpose:** Demonstrates how to use custom `data-*` attributes in HTML and access them dynamically using JavaScript for interactive behavior.

---

## 🧭 Overview

HTML5 introduced `data-*` attributes to allow embedding custom, non-visible information directly inside HTML elements. These values can be easily accessed through JavaScript for dynamic behavior without polluting class or ID structures.

---

## 📌 Detailed Explanation of Core Elements

### `data-*` Attributes in HTML

- Custom attributes prefixed with `data-`, such as `data-id`, `data-category`.
- Do not affect the visual rendering of HTML.
- Stored directly in elements to carry extra data.

### Accessing Data with JavaScript

- Accessed using `.dataset` property.
- For example: `element.dataset.category` for `data-category`.

### Event Handling with `mouseenter`, `mouseleave`, `focus`, and `keydown`

- Used to show/hide data dynamically on mouse hover or keyboard focus.
- `mouseenter`: triggers display of data.
- `mouseleave`: clears data display.
- `keydown` (Enter): makes the list item interactive using keyboard.

### Accessibility Additions

- Added `tabindex="0"` and `role="button"` to each `<li>` item to allow keyboard users to navigate and activate.
- Used `aria-live="polite"` in the result container to announce updates dynamically for screen readers.

---

## 💡 Pro Tip

1. Always use `data-*` attributes for storing extra data that is relevant to the element but not meant for styling or IDs.
2. Do not overuse `data-*`; prefer structured data where possible in large-scale apps.
3. Combine `data-*` with accessible JavaScript interactions to enhance UX without cluttering HTML with non-semantic classes or IDs.

---

## 🧪 Code Example Reference

- [Custom Data Attributes Example (index.html)](index.html) — Demonstrates how to embed and retrieve custom `data-*` attributes using JavaScript’s `dataset` API for dynamic interaction.

---

## 🔙 Navigation

← Back to [HTML Features Main README](../README.md)
