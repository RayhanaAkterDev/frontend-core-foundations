# Script Tag Basics

> Tags: html-script, javascript, dom-manipulation, inline-script, external-script  
> **Purpose:** Learn the basics of the HTML `<script>` tag and how to include JavaScript in an HTML document.

---

## Overview

This section introduces the fundamental usage of the `<script>` tag in HTML to run JavaScript code. It covers both inline scripting and linking to external JavaScript files. The demo also explains where to place script tags for proper execution and user experience.

---

## Detailed Explanation of Core Elements

### 1. `<script>` Tag Basics

- The `<script>` element is used to embed or reference executable JavaScript code in an HTML document.
- It can be placed in the `<head>` or at the end of the `<body>`.

### 2. Inline JavaScript

- JavaScript can be written directly inside a `<script>` tag.
- This is useful for short scripts or quick DOM manipulations.
- Example:

```html
  <script>
    document.getElementById('demo').textContent = 'Hello from inline JavaScript!';
  </script>
```

### 3. External JavaScript

- For better maintainability, JS code is usually written in external files and linked via the src attribute.
- Example:

```html
<script src="scripts/script.js"></script>
```

### 4. Script Placement

- Scripts in the `<head>` run before HTML content is loaded unless deferred.
- Scripts at the end of `<body>` run after the HTML is parsed, which is generally recommended for DOM manipulation.

---

> 💡 Pro Tip
>
> - Avoid using alert() for debugging—use console.log() instead.
> - Always place scripts at the end of the body or use defer in the `<head>` to avoid blocking page load.
> - Keep JavaScript in external files for cleaner HTML and reusable code.

---

## 🧪 Code Example Reference

- [Script Tag Basics (index.html)](index.html) — Demonstrates how to use the `<script>` tag in HTML with both inline JavaScript and a placeholder for external JavaScript files. Includes DOM manipulation and console logging examples.

---

## 🔙 Navigation

[← Back to HTML Structure Topics](../README.md)
