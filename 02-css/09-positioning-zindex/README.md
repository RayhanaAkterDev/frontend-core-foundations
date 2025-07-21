# 📌 CSS Positioning & Z-Index

> Tags: css, position, z-index, layout, stacking, fixed  
> **Purpose:** This topic explains how to position elements using different CSS positioning methods and how to manage their stack order using z-index.

---

## 📖 Overview

CSS positioning allows developers to control where elements appear on the page using rules like static, relative, absolute, fixed, and sticky. The `z-index` property is used to manage how elements overlap.

This topic introduces essential layout strategies:

1. **Static:** Default layout flow for all elements.  
2. **Relative:** Moves the element from its normal position without affecting others.  
3. **Absolute:** Positions relative to nearest positioned ancestor.  
4. **Fixed:** Positions relative to the viewport and stays visible while scrolling.  
5. **Sticky:** Combines relative and fixed behavior when scrolling.  
6. **Z-Index:** Controls which elements appear in front when overlapping.

---

## 🛠️ Detailed Explanation of Core Elements

### Static Position

- The default value for all elements.  
- Follows the normal document flow.  
- Does not respond to `top`, `left`, etc.

### Relative Position

- Offsets the element from its normal position.  
- Leaves the original space intact.  
- Useful for fine-tuning layout without breaking flow.

### Absolute Position

- Removes the element from normal flow.  
- Positioned relative to the nearest ancestor with a non-static position.  
- Allows stacking or overlapping layout.

### Fixed Position

- Anchored to the viewport instead of the document.  
- Stays visible while scrolling.  
- Commonly used for headers, buttons, and popups.

### Sticky Position

- Behaves like relative initially, then sticks to a position as you scroll.  
- Often used for sticky headers or navigation bars.

### Z-Index

- Defines stacking order of elements along the z-axis.  
- Higher `z-index` means closer to the viewer.  
- Works only on positioned elements.

---

## 💡 Pro Tip

1. Use `relative` for gentle nudging and layout tweaks.  
2. Combine `absolute` with a relative parent for controlled overlays.  
3. `fixed` is great for persistent call-to-action buttons.  
4. Always check stacking context when `z-index` doesn’t work.

---

### 🧪 Code Example Reference

See the following files in the _`positioning-zindex`_ folder for a complete working demo of positioning techniques:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
