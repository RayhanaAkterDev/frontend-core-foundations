# CSS Colors and Backgrounds (including Gradients & Multiple Backgrounds)

> Tags: css-colors, gradients, multiple-backgrounds, rgba, hsl, background-image  
> **Purpose:** Learn how to use CSS colors, gradients, and layered backgrounds to enhance visual styling.

---

## 🌟 Overview

This topic covers how to apply color to text and backgrounds using solid colors, gradients, and multiple layered backgrounds. You’ll learn about color formats, image backgrounds, and stacking techniques.

---

## 🔍 Detailed Explanation of Core Elements

### Text Color Formats

- `color`: Applies color to text using formats:
  - Named: `red`, `blue`
  - Hex: `#ffcc00`
  - RGB: `rgb(255, 100, 0)`
  - HSL: `hsl(210, 100%, 50%)`
  - RGBA for transparency: `rgba(0, 0, 0, 0.5)`

### Backgrounds

- `background-color`: Solid fill
- `background-image`: URL image
- `background-repeat`: repeat or no-repeat
- `background-position`: top, center, right bottom
- `background-size`: `cover`, `contain`

### Gradients

- `linear-gradient()`: Smooth transition between colors along a direction
- `radial-gradient()`: Radiates from center or custom position
- Multiple color stops: Combine 3 or more colors for vibrant blends

### Multiple Backgrounds

- Layer with comma-separated backgrounds
- Example:

```css
  background: url('texture.png'), linear-gradient(to right, #667eea, #764ba2);
  background-blend-mode: overlay;
```

### Combining Background Properties Using Shorthand

Instead of writing individual background properties, you can combine them using the `background` shorthand:

```css
  background: url('img.jpg') no-repeat center center / cover;
```

## 💡 Pro Tip

1. Combine gradients with semi-transparent colors for soft transitions.
2. Use patterns as the bottom layer and gradients as overlay for creative effects.
3. Always provide a fallback solid color before images or gradients for better accessibility.

---

### 🧪 Code Example Reference

See files in the _`css-colors-and-backgrounds`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
