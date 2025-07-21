# 📏 CSS Units & Measurement

> Tags: css, units, px, em, rem, %, vw, vh, layout  
> **Purpose:** This topic explains the difference between absolute and relative CSS units, helping you build flexible, responsive layouts with the right measurement strategy.

---

## 📖 Overview

CSS units define how length, size, spacing, and layout are measured in a web page. They can be **absolute**, like `px` or `cm`, which are fixed, or **relative**, like `em`, `rem`, `%`, `vw`, and `vh`, which scale based on parent size or the viewport.

This topic introduces both types with examples to show how they behave in real layouts.

---

## 🛠️ Detailed Explanation of Core Elements

### Absolute Units

- **px (pixels):** One screen dot; widely used for fixed dimensions.
- **in (inches):** Physical inch; rarely used on screens but good for print.
- **cm (centimeters):** Also print-focused; 1cm = 37.8px approximately.

These units don't scale with screen size or user preferences.

### Relative Units

- **em:** Based on the font-size of the parent. Flexible but context-dependent.
- **rem:** Based on the root font-size (`html`). More consistent than `em`.
- **% (percentage):** Relative to parent element’s dimensions. Good for fluid layout.
- **vw:** 1% of the viewport width. Scales with screen size.
- **vh:** 1% of the viewport height. Helpful for full-screen or responsive height control.

Each unit plays a key role in responsive design. Understanding their behavior ensures better layout control across devices.

---

## 💡 Pro Tip

1. Use **`rem`** for consistent typography throughout the page.
2. Use **`%`**, **`vw`**, and **`vh`** for fluid, responsive layouts.
3. Avoid mixing too many unit types unless necessary — keep a unit strategy.
4. Test responsiveness on different screen sizes to fine-tune behavior.

---

### 🧪 Code Example Reference

See the following files in the _`css-units-measurement`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
