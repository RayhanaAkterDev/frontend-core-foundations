# 📱 Media Queries in CSS

> Tags: css, responsive-design, media-queries, mobile-first, breakpoints  
> **Purpose:** To enable responsive web design by applying different CSS rules based on device characteristics like screen size.

---

## 📖 Overview

Media queries are a powerful CSS feature that allow developers to apply styles conditionally depending on the characteristics of the device or viewport. They are essential for creating responsive designs that adapt smoothly to varying screen sizes, orientations, and resolutions.

---

## 🛠️ Detailed Explanation of Core Elements

### 1. What Are Media Queries?

- Media queries use the `@media` rule in CSS.
- They test conditions like viewport width, height, device resolution, orientation, and other features.
- When the conditions match, the specified CSS rules inside the media query block are applied.

### 2. Basic Syntax

```css
@media (condition) {
  /* CSS rules */
}
```

Example:

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

### 3. Mobile-First Approach

- Write base styles targeting small/mobile screens by default.
- Use `min-width` media queries to progressively enhance styles for larger screens.
- This approach improves performance and ensures better compatibility.

Example:

```css
/* Base styles for mobile */
body {
  font-size: 14px;
}

/* For tablets and up */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

/* For desktops and up */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

### 4. Common Media Features

- `width` / `min-width` / `max-width`: viewport width
- `height` / `min-height` / `max-height`: viewport height
- `orientation`: `portrait` or `landscape`
- `resolution`: device pixel ratio or dpi

### 5. Logical Operators

- Use `and` to combine multiple conditions.
- Use `,` (comma) for OR condition (multiple media queries separated by comma).

Example:

```css
@media (min-width: 600px) and (max-width: 900px) {
  /* styles here */
}
```

## 💡 Pro Tip

1. Always adopt mobile-first media queries with `min-width` for better maintainability and performance.
2. Define a clear set of breakpoints based on your design needs — common ones include 576px (small devices), 768px (tablets), 992px (small desktops), and 1200px+ (large desktops).
3. Avoid targeting too many narrow ranges; instead, use cascading styles that enhance progressively.
4. Test on real devices or emulators to ensure your breakpoints work as expected.

---

## 🧪 Code Example Reference

See files in the _`media-query`_ folder

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to Responsive-Design Topics](../README.md)
