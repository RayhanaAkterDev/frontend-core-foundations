# 🎨 Advanced CSS Syntax & Selectors

> Tags: css, selectors, syntax, advanced, specificity, pseudo-classes  
> **Purpose:** This topic introduces foundational and advanced CSS syntax rules and selector types for effective styling and targeting in real-world projects.

---

## 📖 Overview

This topic explores CSS syntax and various selector types from basic to advanced. It explains how to write clean CSS targeting HTML elements efficiently and covers selector specificity and combinators. Examples include element, class, ID, group, universal, descendant, child, sibling, attribute selectors, pseudo-classes, and pseudo-elements.

---

## 🛠️ Detailed Explanation of Core Elements

### CSS Syntax Basics

- CSS rules consist of a selector and a declaration block containing property-value pairs.

### Basic Selectors

- Element Selector targets all elements of a type (e.g., `p`).  
- Class Selector targets elements with a class (`.highlight`).  
- ID Selector targets a unique element by ID (`#unique-text`).  
- Group Selector applies styles to multiple selectors separated by commas.

### Combinators and Descendant Selectors

- Descendant Selector targets nested elements (e.g., `.parent p`).  
- Child Selector targets direct children (`.parent > ul > li`).  
- Adjacent Sibling Selector targets an element immediately after another (`h3 + p`).  
- General Sibling Selector targets all siblings after an element (`h3 ~ p`).

### Attribute Selectors

- Target elements based on attributes and values (e.g., `[type="text"]`, `[disabled]`).

### Pseudo-classes and Pseudo-elements

- Pseudo-classes define element states (`:hover`, `:focus`, `:active`).  
- Pseudo-elements style parts of elements (`::first-letter`).

### Specificity and Ranking

- Inline styles > ID selectors > Class selectors > Element selectors in specificity.

### CSS Application Methods

- Inline CSS: Styles added via the `style` attribute.  
- Internal CSS: Styles within `<style>` tags in HTML.  
- External CSS: Styles in separate files linked with `<link>` tags.

---

## 💡 Pro Tip

1. Use class selectors for reusable styles rather than IDs for flexibility.  
2. Avoid overly complex selectors for performance.  
3. Understand specificity to prevent unexpected overrides.  
4. Comment your CSS for clarity and maintainability.

---

### 🧪 Code Example Reference

See files in the _`syntax-selectors`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

Global styles handled by `reset.css` and `base.css`.

---

## 🔙 Navigation

- [← Back to CSS Topics Index](../README.md)
