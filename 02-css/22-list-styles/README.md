# 📝 CSS List Styles

> Tags: css, list, ul, ol, list-style-type, markers, custom-bullets  
> **Purpose:** This topic covers how to style HTML lists using CSS properties like `list-style-type`, `list-style-position`, and `list-style` shorthand. It helps create cleaner and more customized bullet or numbered lists.

---

## 📖 Overview

CSS offers several properties to control how ordered (`<ol>`) and unordered (`<ul>`) lists appear. Developers can adjust bullet styles, numbering types, position of markers, or remove list markers entirely.

This is useful for styling navigation menus, content sections, and creating design consistency in layouts.

---

## 🛠️ Detailed Explanation of Core Elements

### `list-style-type`

- Defines the bullet or numbering style.  
- For `<ul>`:
  - `disc`, `circle`, `square`  
- For `<ol>`:
  - `decimal`, `upper-roman`, `lower-alpha`, etc.

### `list-style-position`

- Controls the marker's placement:
  - `outside`: Default, marker is outside content box.  
  - `inside`: Marker aligns with content text block and flows with text.

### `list-style` (Shorthand)

- Combines `list-style-type`, `list-style-position`, and `list-style-image` (if used).  
- Syntax: `list-style: square inside;`

### Removing List Styles

- Use `list-style: none;` to remove bullets/numbers.  
- Often used in menus, navbars, or layout lists.

---

## 💡 Pro Tip

1. Use `list-style: none;` to fully customize list layouts with your own icons or symbols.  
2. Combine `list-style-position: inside;` with padding for neat alignment.  
3. Avoid custom list symbols that conflict with accessibility or user expectations.  
4. You can style `li::marker` in modern browsers for full control of bullet color or font.  
5. Use the difference between `inside` and `outside` positions to control how wrapped lines align with bullets.

---

### 🧪 Code Example Reference

See the following files in the _`css-list-styles`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
