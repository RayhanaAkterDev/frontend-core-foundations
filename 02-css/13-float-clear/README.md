# 🧱 CSS Float & Clear

> Tags: css, float, clear, layout, positioning  
> **Purpose:** This topic explains how the `float` and `clear` properties work in CSS and how they affect the layout flow. It's useful for controlling element alignment and avoiding layout breakage.

---

## 📖 Overview

The `float` property allows an element to be positioned to the left or right within its container. It is commonly used to wrap text around images or align blocks.

However, floated elements are removed from the normal document flow. This can lead to layout issues unless the surrounding elements are properly cleared using the `clear` property.

---

## 🛠️ Detailed Explanation of Core Elements

### Float Property

- `float: left` → Moves the element to the left, letting following content wrap on the right.
- `float: right` → Moves the element to the right, letting content wrap on the left.
- Useful for image/text layouts, sidebars, badges, or small UI elements.

### Clear Property

- `clear: both` → Prevents an element from wrapping around both left and right floated items.
- Ensures that the cleared element appears below floated content.
- Can be applied via a `clearfix` utility div or directly on the next block element.

### Common Issues

- Floated elements can overlap or collapse parent containers if not cleared.
- Modern layout methods like Flexbox or Grid are preferred for large-scale designs, but float is still useful in small inline alignment cases.

---

## 💡 Pro Tip

1. Always clear floats if content appears below floated boxes.  
2. Use a `.clearfix` utility class for reliable flow control.  
3. Avoid float for full-page layouts — use Flexbox/Grid instead.

---

### 🧪 Code Example Reference

See files in the _`float-clear`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
