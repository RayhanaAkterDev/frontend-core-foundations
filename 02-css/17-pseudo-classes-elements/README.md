# 🎯 CSS Pseudo-classes & Pseudo-elements

> Tags: css, pseudo-classes, pseudo-elements, hover, before, after, focus  
> **Purpose:** This topic explores how to apply styles based on element state, position, or virtual content using CSS pseudo-classes and pseudo-elements.

---

## 📖 Overview

Pseudo-classes apply styles based on dynamic or structural states of elements, such as hover, focus, or being the first/last child. Pseudo-elements allow you to style and insert content before or after an element’s main content, enabling cleaner markup and enhanced visuals.

---

## 🛠️ Detailed Explanation of Core Elements

### Pseudo-classes

- **`:hover`** — Activates on mouse hover to style interactivity.  
- **`:focus`** — Triggers when the element gains focus (keyboard/tab).  
- **`:first-child`, `:last-child`** — Target specific positions in a parent.  
- **`:not()`** — Excludes certain selectors from a group.  

### Pseudo-elements

- **`::before`** — Inserts content before the actual content (e.g., quotes).  
- **`::after`** — Inserts content after the element’s content.  
- Often used for decorative effects, icons, or structure indicators.

### Combined Example

- You can pair pseudo-classes and pseudo-elements for advanced hover effects (e.g., an animated underline on a link).

---

## 💡 Pro Tip

1. Use pseudo-classes to target behavior (like hover/focus).
2. Use `::before` and `::after` to add non-essential design elements.
3. Use `:not()` to exclude specific child or type from general styles.
4. Combine them for interactive styling without JavaScript.

---

### 🧪 Code Example Reference

See the following files in the _`css-pseudo-selectors`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
