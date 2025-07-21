# 🎨 CSS Specificity & Inheritance

> Tags: css, specificity, inheritance, selectors, cascade, !important  
> **Purpose:** To understand how CSS specificity and inheritance affect which styles apply and how styles are passed down from parents to children.

---

## 📖 Overview

CSS applies styles based on a system called **specificity** — the more specific a selector, the higher priority it has. Specificity hierarchy typically follows this order:

1. Inline styles (highest)
2. IDs
3. Classes, attributes, pseudo-classes
4. Elements and pseudo-elements (lowest)

The special `!important` rule can override normal specificity rules.

**Inheritance** means certain CSS properties are passed from parent elements to child elements unless explicitly overridden.

---

## 🛠️ Detailed Explanation of Core Elements

### Specificity Calculation

- Inline styles have the highest specificity and override all other rules.
- ID selectors carry more weight than class selectors.
- Class selectors override element selectors.
- When specificity ties, later declared rules win.
- The `!important` declaration overrides all specificity rules.

### Inheritance

- Properties like `color`, `font-family`, `line-height` inherit by default.
- Box model properties (`margin`, `padding`, `border`) do not inherit.
- You can override inheritance using explicit styles or `inherit` keyword.
- Understanding inheritance helps manage consistent styling and avoid unnecessary repetition.

---

## 💡 Pro Tip

1. Use IDs sparingly; prefer classes for reusable styles.  
2. Avoid overusing `!important` — it makes debugging harder.  
3. Use browser dev tools to inspect computed styles and specificity.  
4. Organize CSS rules from generic (element selectors) to specific (IDs and inline).

---

### 🧪 Code Example Reference

See files in the _`specificity-inheritance`_ folder for the complete demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
