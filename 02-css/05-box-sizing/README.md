# 📐 CSS Box Sizing

> Tags: css, box-sizing, layout, content-box, border-box  
> **Purpose:** Understand how the `box-sizing` property controls how an element's total width and height are calculated in CSS layouts.

---

## 🌟 Overview

The `box-sizing` property determines whether the padding and border are included in an element’s total width and height. This affects how boxes behave inside a layout, especially when dealing with spacing, alignment, and consistency across devices.

---

## 🔍 Detailed Explanation of Core Elements

### `box-sizing: content-box`

- **Default behavior** in CSS.
- The `width` and `height` apply **only to the content area**.
- Padding and border are added **outside** the defined width/height.
- This can cause unexpected box growth if not handled carefully.

### `box-sizing: border-box`

- The `width` and `height` apply to the **entire box**, including content, padding, and border.
- Ensures a **consistent box size**, making layout easier to manage.
- Widely used in modern CSS frameworks and resets.

### Global Usage Example

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

This rule sets border-box as the default sizing model for all elements and pseudo-elements—making layout behavior more predictable.

## 💡 Pro Tip

1. Always use `box-sizing: border-box` in real-world projects for layout consistency.
2. Set it globally via the universal selector (`*`) during a CSS reset or in your base styles.
3. Avoid layout issues—such as unexpected width overflow or distorted box sizes—when padding or borders are added.

---

## 🧪 Code Example Reference

See files in the _`box-sizing`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔗 Navigation

⬅️ Back to [CSS Topics Main README](../README.md)
