# 👆 CSS Cursor Visibility

> Tags: css, cursor, pointer, grab, zoom, interaction, ux  
> **Purpose:** This topic demonstrates how to use professional-level cursor styles to enhance UX. It includes real-world examples like clickable buttons, input fields, draggable elements, and zoom zones.

---

## 📖 Overview

The `cursor` property in CSS changes how the mouse pointer appears when hovering over elements. It helps users understand which actions are possible—like clicking, dragging, or waiting.

In modern development, cursor types such as `pointer`, `text`, `grab`, `move`, `not-allowed`, and `zoom-in` are used to guide interaction and improve the experience in form controls, UI components, and visual tools.

---

## 🛠️ Detailed Explanation of Core Elements

### `cursor` Property

- Defines how the mouse pointer should appear on hover.  
- Applied using `cursor: value;` in CSS.  
- Commonly used to communicate interactivity, accessibility, and state.

### Professional Cursor Types

- **`pointer`**  
  - Displays a hand icon.  
  - Used on clickable items like buttons and links.

- **`text`**  
  - Shows an I-beam icon.  
  - Used on text inputs or editable content areas.

- **`grab` / `grabbing`**  
  - Indicates the user can drag the element.  
  - Used in sliders, cards, or reorderable items.

- **`move`**  
  - Suggests the item can be moved freely.  
  - Used in layout editors or UI panels.

- **`not-allowed`**  
  - Displays a blocked circle icon.  
  - Used on disabled buttons or restricted actions.

- **`zoom-in`**  
  - Shows a magnifying glass.  
  - Used in media preview areas like images or maps.

### Use Case Examples

- Enhance button UX with `pointer`.  
- Show editable fields with `text`.  
- Add drag indicators with `grab` and `move`.  
- Display clear access restrictions using `not-allowed`.  
- Use `zoom-in` on interactive media zones to suggest click-to-enlarge.

---

## 💡 Pro Tip

1. Use `cursor` styling to reinforce the **action the user expects** (click, drag, etc.).  
2. Avoid `cursor: none` unless absolutely necessary and always provide **visual alternatives**.  
3. Combine `cursor` with pseudo-classes like `:hover` to make dynamic interfaces.  
4. Only use advanced cursors like `zoom-in` or `grab` when the associated action is actually supported.

---

### 🧪 Code Example Reference

See the following files in the _`css-cursor-visibility`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
