# HTML Semantic Tags

> Tags: semantic-html, accessibility, aria-roles, skip-link, screen-reader  
> **Purpose:** Demonstrates semantic HTML5 elements with accessibility enhancements like skip links, ARIA roles, and focus control for better structure, navigation, and usability.

---

## Overview

This topic focuses on using HTML5 semantic elements to build well-structured, accessible web pages. It includes elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`, along with accessibility practices like skip links, ARIA roles, `tabindex`, and clear heading hierarchy.

These tags not only improve SEO and content readability but also make your site more usable for screen readers and keyboard users.

---

## Detailed Explanation of Core Elements

### Semantic Structural Tags

- `<header>` — Represents the introductory section, often including the site title or branding.  
- `<nav>` — Contains site-wide navigation links; enhanced with `aria-label` for screen readers.  
- `<main>` — Defines the central content of the page; includes `role="main"` and `tabindex="-1"` for focus handling.  
- `<section>` — Groups thematically related content like blog posts.  
- `<article>` — Used for self-contained, standalone content such as blog entries.  
- `<aside>` — Contains supporting content (e.g., author bio); uses `role="complementary"` and `aria-label`.  
- `<footer>` — Wraps the closing content, including copyright.

### Accessibility Features

- **Skip Link** — A hidden link shown on keyboard focus (`.skip-link`) allowing users to skip to main content easily.  
- **ARIA Roles & Labels** — Added to elements like `nav`, `aside`, and `footer` to enhance meaning for assistive tech.  
- **Focus Management** — Using `tabindex="-1"` on the `<main>` element ensures it is focusable via skip link.

### Heading Hierarchy

- Maintains logical flow:
  - `<h1>` — For the site title  
  - `<h2>` — For main sections (e.g., Latest Posts)  
  - `<h3>` — For nested content like article titles  

---

> 🧠 Pro Tip
>
> 1. Always provide `tabindex="-1"` on `<main>` or target elements of skip links to make them programmatically focusable.  
> 2. Use `aria-label` to describe navigation, footer, or complementary regions for better screen reader context.  
> 3. Keep heading structure consistent to guide both users and search engines through your content logically.  
> 4. Semantic HTML not only improves accessibility but also helps with SEO and future maintenance.

---

## 🧪 Code Example Reference

- [Semantic Tags Template (index.html)](index.html) — Demonstrates proper use of semantic HTML5 layout, ARIA roles, skip links, and screen reader-friendly structure.

---

## 🔙 Navigation

[← Back to HTML Structure Topics](../README.md)
