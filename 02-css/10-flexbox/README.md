# 🎨 CSS Flexbox

> Tags: css, flexbox, layout, responsive, alignment  
> **Purpose:** To teach the CSS Flexible Box Layout (Flexbox) model for efficient one-dimensional layout control with responsive and dynamic item arrangement.

## 📖 Overview

CSS Flexbox is designed for one-dimensional layouts — arranging items either in a row or a column. It simplifies complex layouts by distributing space and aligning content efficiently, even when item sizes vary or change.

## 🛠️ Detailed Explanation of Core Elements

### Flex Container Properties

1. `display: flex;`  
   Defines a flex container enabling flex context for its children.

2. `flex-direction`  
   Controls the main axis direction (row, column, row-reverse, column-reverse).

3. `justify-content`  
   Aligns items along the main axis (start, center, end, space-between, space-around).

4. `align-items`  
   Aligns items along the cross axis (flex-start, center, flex-end, stretch).

5. `gap`  
   Adds consistent spacing between flex items.

### Flex Item Properties

1. `flex` (shorthand for `flex-grow`, `flex-shrink`, `flex-basis`)  
   Controls how items grow or shrink relative to the container and each other.

2. `order`  
   Controls the visual order of items without changing the DOM order.

3. `align-self`  
   Overrides container's `align-items` for individual item alignment.

## 💡 Pro Tip

1. Use `gap` instead of margins between flex items for cleaner spacing management.  
2. Combine `flex: 1` with `min-width` or `min-height` on items to ensure flexible but not too small elements.  
3. Test responsiveness by changing `flex-direction` for different screen sizes with media queries.

---

### 🧪 Code Example Reference

See files in the _`css-flexbox`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

### 🔙 Navigation

Back to the main CSS README: [CSS Main README](../../README.md)
