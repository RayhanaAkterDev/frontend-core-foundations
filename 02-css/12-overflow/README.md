# 🎨 CSS Overflow

> Tags: css, overflow, scroll, hidden, content, clipping  
> **Purpose:** This topic explains the CSS overflow property, demonstrating how to control content that exceeds the size of its container by clipping, hiding, or scrolling.

---

## 📖 Overview

The CSS `overflow` property controls what happens when content inside an element is larger than its container. It manages whether the overflowing content is visible, hidden, or scrollable.

Common overflow values include:

1. `visible` (default) — content spills outside the container.  
2. `hidden` — excess content is clipped and not shown.  
3. `scroll` — scrollbars are always visible to access overflow content.  
4. `auto` — scrollbars appear only if the content overflows.

---

## 🛠️ Detailed Explanation of Core Elements

### Overflow Values

- **visible:** Content is not clipped and may overflow beyond the container bounds.  
- **hidden:** Content that exceeds the container is clipped and hidden from view.  
- **scroll:** Scrollbars are shown regardless of whether the content fits or not.  
- **auto:** Scrollbars appear only when content is too large for the container.

### Additional Properties

- `overflow-x` and `overflow-y` let you control overflow separately in horizontal and vertical directions.  
- Use `overflow-wrap: break-word` to prevent long words from causing horizontal overflow.

---

## 💡 Pro Tip

1. Use `overflow: auto` for most cases to show scrollbars only when needed.  
2. Combine with `overflow-x` and `overflow-y` to manage scroll direction.  
3. Use word-break or overflow-wrap to handle text overflow gracefully.

---

### 🧪 Code Example Reference

See the following files in the _`css-overflow`_ folder for a complete working demo of the overflow property and its values:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
