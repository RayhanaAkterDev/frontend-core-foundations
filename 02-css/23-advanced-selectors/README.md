# ⚙️ Advanced CSS Selectors

> Tags: css, selectors, advanced, attribute-selectors, pseudo-classes, pseudo-elements, combinators  
> **Purpose:** This topic explains complex CSS selectors to target HTML elements precisely using attribute selectors, pseudo-classes, pseudo-elements, and combinators.

---

## 📖 Overview

Advanced CSS selectors enable developers to write powerful, precise styles targeting elements based on attributes, relationships, or states. These selectors improve maintainability and reduce the need for extra classes or IDs.

---

## 🛠️ Detailed Explanation of Core Elements

### Attribute Selectors

- `[attr="value"]`: Select elements with exact attribute value.  
- `[attr^="value"]`: Select elements where attribute value starts with given string.  
- `[attr$="value"]`: Select elements where attribute value ends with given string.  
- `[attr*="value"]`: Select elements where attribute value contains given string.

### Pseudo-Classes

- `:first-child`: Selects element that is the first child of its parent.  
- `:not(selector)`: Selects elements that do not match the selector.  
- `:empty`: Selects elements with no children (including text nodes).  
- `:nth-child(n)`: Selects the nth child element (supports formulas and keywords like odd/even).

### Pseudo-Elements

- `::before`: Inserts content before the element’s content.  
- `::after`: Inserts content after the element’s content.

### Combinators

- **Descendant (`space`)**: Selects all descendants of an element.  
- **Child (`>`)**: Selects direct children only.  
- **Adjacent sibling (`+`)**: Selects the next sibling immediately after.  
- **General sibling (`~`)**: Selects all siblings after the element.

---

## 💡 Pro Tip

1. Use attribute selectors for styling elements based on dynamic content or states.  
2. Combine pseudo-classes with attribute selectors for powerful targeting.  
3. Use pseudo-elements to add decorative content without extra markup.  
4. Combinators help create clean, contextual CSS targeting without adding extra classes.  
5. Always test advanced selectors for browser compatibility, especially on older browsers.

---

### 🧪 Code Example Reference

See the following files in the _`advanced-selectors`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
