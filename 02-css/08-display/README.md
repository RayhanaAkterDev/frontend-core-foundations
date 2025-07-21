# 📐 CSS Display Property

> Tags: css, display, layout, block, inline, flex  
> **Purpose:** This topic explains how to control the visual formatting and layout behavior of elements using the `display` property in CSS.

---

## 📖 Overview

The `display` property defines how an element is visually rendered in the layout flow. It is one of the most fundamental CSS properties and affects box behavior, positioning, and interactions with other elements.

This topic covers essential display types and introduces layout features like flex and grid:

1. **Block & Inline:** Defines default element behavior in the flow.  
2. **Inline-Block:** Combines inline and block-level traits.  
3. **Display None:** Hides elements completely from the document flow.  
4. **Visibility Hidden:** Hides visually but preserves layout space.  
5. **Flex & Grid (Intro):** Lays the foundation for modern responsive layouts.

---

## 🛠️ Detailed Explanation of Core Elements

### Block & Inline

- `block`: Takes full width and starts on a new line.  
- `inline`: Flows inline with text and other elements, ignoring height/width.

### Inline-Block

- Behaves like inline but accepts box properties (width, height, margin).  
- Useful for aligning boxes horizontally without using float or flex.

### Display None

- Completely removes the element from the DOM flow.  
- It won't appear or take space in layout.

### Visibility Hidden

- Hides the element visually but still occupies layout space.  
- Useful for toggle effects where layout should not shift.

### Flex & Grid (Intro)

- `display: flex` creates 1D layouts (row/column).  
- `display: grid` creates 2D layouts (rows and columns).  
- Powerful and responsive layout systems in modern CSS.

---

## 💡 Pro Tip

1. Use `inline-block` for small elements that need size control inline.  
2. Prefer `flex` for horizontal/vertical alignment without floats.  
3. `display: none` is useful for toggling content with JS or media queries.  
4. Combine display types with `position` and `visibility` for precise control.

---

### 🧪 Code Example Reference

See the following files in the _`display-property`_ folder for a complete working demo of display modes:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
