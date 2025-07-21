# 🎨 CSS Grid Layout

> Tags: css, grid, layout, two-dimensional, rows, columns, grid-template  
> **Purpose:** To teach CSS Grid Layout for designing two-dimensional grid-based page layouts with precise control over rows, columns, and item placement.

## 📖 Overview

CSS Grid Layout is a two-dimensional CSS system designed for laying out content in rows and columns. It makes complex layouts easier by allowing precise control over grid structure and item placement without needing floats or positioning hacks.

## 🛠️ Detailed Explanation of Core Elements

### Grid Container Properties

1. `display: grid;`  
   Defines a grid container that establishes a new grid formatting context.

2. `grid-template-columns` and `grid-template-rows`  
   Specify the size and number of grid tracks (columns and rows).

3. `gap` (or `grid-column-gap` / `grid-row-gap`)  
   Controls spacing between grid cells.

### Grid Item Properties

1. `grid-column` and `grid-row`  
   Define where the item starts and ends on the grid lines.

2. `grid-area`  
   A shorthand to specify grid row and column start/end in one declaration.

---

## 💡Pro Tip

1. Use `repeat()` function in `grid-template-columns` or `rows` for cleaner, scalable track definitions.  
2. Combine `auto-fit` or `auto-fill` with `minmax()` to create responsive grids (better suited for responsive design topics).  
3. Explicitly place items when needed to build complex grid layouts using grid lines or named areas.

---

### 🧪 Code Example Reference

See files in the _`css-grid`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

### 🔙 Navigation

Back to the main CSS README: [CSS Main README](../../README.md)
