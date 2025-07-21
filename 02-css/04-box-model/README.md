# 📦 CSS Box Model

> Tags: css-box-model, layout, spacing, padding, margin, border  
> **Purpose:** Understand how HTML elements are structured using the box model—content, padding, border, and margin.

---

## 📖 Overview

The CSS box model defines how elements are rendered on a web page by wrapping them in rectangular boxes. Each box consists of content and optional surrounding layers: padding, border, and margin. These layers determine spacing, layout behavior, and how elements interact visually with one another.

---

## 🛠️ Detailed Explanation of Core Elements

### Content

- The main area where text, images, or other content appear.
- Controlled by width and height.

### Padding

- The space between the content and the border.
- Creates internal breathing room around the content.
- Affects the visible size of the box if `box-sizing` is not set to `border-box`.

### Border

- A visible line drawn around the padding (or content if padding is 0).
- Can be styled with `border-width`, `border-style`, and `border-color`.

### Margin

- The outermost space that separates the element from its neighbors.
- Does not affect the element’s size—it's purely external spacing.

---

## 💡 Pro Tip

1. Use browser DevTools (like Chrome's inspector) to **visualize the box layers** live.
2. Adding `padding` and `border` increases the size of the box **unless** you use `box-sizing: border-box`.
3. Margins can **collapse** (merge) between vertical elements—be cautious when stacking blocks.

---

### 🧪 Code Example Reference

See files in the _`box-model`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
