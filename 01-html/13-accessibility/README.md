# HTML Accessibility

> Tags: html, accessibility, aria, semantic-html, keyboard-navigation, forms, tables  
> **Purpose:** Template page demonstrating comprehensive HTML accessibility features and best practices.

---

## Overview

This topic covers essential HTML accessibility techniques to create inclusive web content. It focuses on semantic HTML5 elements, ARIA roles and attributes, keyboard navigation enhancements, accessible forms, live regions for dynamic content, and accessible tables. The template demonstrates how to implement these features effectively to ensure websites are usable by people with various disabilities, including those relying on screen readers and keyboard navigation.

---

## Detailed Explanation of Core Elements

### Semantic HTML and Landmarks

- Use semantic elements like `<header>`, `<nav>`, `<main>`, and `<footer>` to define page structure.  
- Add ARIA roles such as `role="banner"`, `role="navigation"`, and `role="contentinfo"` to explicitly identify landmarks for assistive technologies.  
- The `main` element uses `role="main"` and a `tabindex="-1"` to allow programmatic focus.

### Skip Link for Keyboard Users

- A skip link allows keyboard users to bypass repetitive navigation and jump directly to the main content.  
- The link is visually hidden with `.sr-only` but becomes visible and styled when focused for better accessibility.

### Accessible Forms

- Form controls have associated `<label>` elements linked via `for` and `id`.  
- `aria-required="true"` and the `required` attribute indicate mandatory fields.  
- Additional instructions for screen readers are provided using visually hidden text with `aria-describedby`.

### ARIA Live Regions

- Dynamic content updates use `aria-live="polite"` and `aria-atomic="true"` to notify screen readers of changes politely without interrupting.

### Accessible Tables

- Tables include a `<caption>` (visually hidden) for context.  
- Column headers use `scope="col"` for clarity.  
- Proper semantic structure aids screen readers in understanding tabular data.

### Keyboard Focus Management

- Custom focus outlines are defined with CSS for links, buttons, and inputs to ensure visibility when navigating with keyboard.

### Screen Reader Only Text

- `.sr-only` CSS class hides content visually but keeps it accessible to screen readers, used for instructions and captions.

---

## 💡 Pro Tip

1. Always test your pages with keyboard-only navigation and screen readers.
2. Use ARIA only when native HTML cannot provide the required accessibility.
3. Ensure focus states are highly visible and consistent.
4. Keep skip links as the first focusable element in the document.
5. Use semantic HTML first before adding ARIA roles and properties.

---

## 🧪 Code Example Reference

- [HTML Accessibility Template (index.html)](index.html) — Demonstrates comprehensive HTML accessibility features including semantic landmarks, ARIA roles, skip links, forms, live regions, and accessible tables.

---

## 🔙 Navigation

[← Back to HTML Structure Topics](../README.md)
