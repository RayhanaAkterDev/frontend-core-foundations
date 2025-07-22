# 📏 Units & Fluid Layouts

> Tags: css, units, responsive-layout, px, rem, percent, vw, fluid  
> **Purpose:** To build responsive and adaptable designs using proper CSS units and layout techniques.

---

## 📖 Overview

CSS provides both **absolute** and **relative** units to define measurements such as width, padding, and font sizes.  
Using the right unit is essential to create layouts that look good on all screen sizes.  
Fluid layouts rely on relative units to scale content responsively.

---

## 🛠️ Detailed Explanation of Core Elements

### 1. Absolute Units

- These units are fixed and do not scale with screen size.
- Examples: `px`, `pt`, `cm`, `in`
- Common use: small UI elements that must remain a fixed size.

Example:

```css
.box {
  width: 200px;
}
```

### 2. Relative Units

These adapt based on parent size, font size, or viewport dimensions.  
Useful for creating fluid and responsive layouts.

**Common relative units:**

- `%`: relative to parent container  
- `em`: relative to the element’s font size  
- `rem`: relative to root `<html>` font size  
- `vw` / `vh`: relative to viewport width/height  

**Example:**

```css
.box {
  width: 50%;
}
```

---

### 3. Fluid Layouts

Use relative units like `%`, `vw`, `em`, and `rem` to ensure content adapts to different screen sizes.  
Often combined with `max-width` to prevent overly large layouts.

**Example:**

```css
.container {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}
```

---

## 💡 Pro Tip

1. Use `rem` for consistent spacing and typography scaling across the app.  
2. Use percent (`%`) and `vw` for flexible layouts that grow and shrink with screen size.  
3. Avoid mixing too many units unless you have a specific design reason.  
4. Set a `max-width` to prevent overly stretched designs on large screens.

---

## 🧪 Code Example Reference

See files in the _`units-fluid-layouts`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to Responsive-Design Topics](../README.md)
