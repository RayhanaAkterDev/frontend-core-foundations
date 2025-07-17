# HTML Tables

> Tags: html-tables, semantic-html, accessibility  
> **Purpose:** To understand and practice creating accessible, well-structured HTML tables using semantic tags and proper scope attributes.

---

## Overview

Tables organize tabular data in rows and columns. Proper use of semantic HTML table elements enhances accessibility, readability, and maintainability.

---

## Detailed Explanation of Core Elements

- **`<table>`** — The container element for all table content.
- **`<caption>`** — Provides a descriptive title for the table, improving accessibility.
- **`<thead>`** — Groups the header content (usually column headers).
- **`<tbody>`** — Groups the main body content of the table.
- **`<th>`** — Defines header cells. Use `scope="col"` for column headers and `scope="row"` for row headers.
- **`<td>`** — Defines standard data cells.

---

> 🧠 **Pro Tip**
>
> Use semantic elements:
> `<thead>`, `<tbody>`, `<caption>`
>
> Always include `scope` attributes on `<th>` elements  
> → Defines clear header-cell relationships  
> → Improves screen reader navigation and table accessibility

---

## Code Example

- [HTML Tables Example (index.html)](index.html) — Demonstrates a semantic employee directory table with caption, headers, and clickable email links.

---

## 🔙 Navigation

[← Back to HTML Fundamentals](../README.md)
