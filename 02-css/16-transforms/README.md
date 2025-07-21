# 🎨 CSS Transforms (translate, rotate, scale, skew)

> Tags: css, transforms, translate, rotate, scale, skew, transition  
> **Purpose:** This topic explains CSS transform functions that let you move, rotate, resize, and skew elements to create dynamic visual effects and interactions.

---

## 📖 Overview

CSS transforms allow manipulation of elements in 2D and 3D space without affecting the document flow. You can translate (move), rotate, scale (resize), and skew (slant) elements using the `transform` property. These transformations can be smoothly animated with CSS transitions.

---

## 🛠️ Detailed Explanation of Core Elements

### Translate

- Moves an element from its current position along the X and Y axes using `translate(x, y)`.
- Can be used with units like px, %, em.
- Example: `transform: translate(50px, 20px);`

### Rotate

- Rotates an element around a fixed point (by default, the center) using `rotate(angle)`.
- Angle units can be degrees (`deg`) or radians (`rad`).
- Example: `transform: rotate(30deg);`

### Scale

- Resizes an element in the X and Y directions using `scale(x, y)`.
- Values greater than 1 enlarge, between 0 and 1 shrink.
- Example: `transform: scale(1.5);`

### Skew

- Skews an element along the X and Y axes using `skew(x-angle, y-angle)`.
- Creates a slanted effect.
- Example: `transform: skew(20deg, 10deg);`

### Combined Transforms

- Multiple transforms can be combined in one declaration, executed from right to left.
- Example: `transform: translate(30px, 10px) rotate(20deg) scale(1.3);`

---

## 💡 Pro Tip

- Always use `transform-origin` to adjust the pivot point for rotations and scaling when necessary.
- Combine transforms thoughtfully to avoid confusing UI effects.
- Use CSS transitions on `transform` to animate changes smoothly.
- Remember transforms do not affect document flow, so space occupied by the element remains the same.

---

### 🧪 Code Example Reference

See the following files in the _`css-transforms`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
