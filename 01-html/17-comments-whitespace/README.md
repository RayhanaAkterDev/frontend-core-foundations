# HTML Comments & Whitespace

> Tags: html-comments, html-whitespace, clean-code, readability, html-basics  
> **Purpose:** Learn how to use comments and control whitespace in HTML for clarity and maintainability.

---

## Overview

This section introduces how comments and whitespace work in HTML. Comments help developers document and organize code, while whitespace—though mostly ignored by browsers—affects readability and can influence rendering when using certain characters.

---

## Detailed Explanation of Core Elements

### 1. HTML Comments

- Begin with `<!--` and end with `-->`.  
- Ignored by the browser; useful for leaving notes or explanations in the code.  
- Example:

```html
<!-- This is a comment -->
<p>Visible content</p>
```

### 2. Multi-line Comments

- Can span across multiple lines.
- Useful for sectioning or describing large blocks of HTML.
- Example:

```html
<!--  
  This is a
  multi-line comment
-->
```

### 3. HTML Whitespace Behavior

- Browsers collapse multiple spaces, tabs, or newlines into a single space.
- Use &nbsp; for non-breaking space when visual spacing is needed.

### 4. Best Practices

- Use comments to explain why, not just what.
- Keep code readable by managing indentation and whitespace.
- Avoid overusing comments for obvious code; aim for clean structure.

---

## 💡 Pro Tip

1. Place comments before sections or major components to clarify structure.
2. Use `&nbsp;` carefully—don't overdo spacing.
3. Consider using `<pre>` or CSS `white-space: pre` when preserving formatting is necessary.

---

### 🧪 Code Example Reference

[HTML Comments & Whitespace (index.html)](index.html) — Demonstrates single-line and multi-line comments, plus how whitespace and non-breaking spaces affect text rendering.

---

## 🔙 Navigation

[← Back to HTML Structure Topics](../README.md)
