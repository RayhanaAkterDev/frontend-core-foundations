# 🎨 Introduction to CSS

> Tags: css, basics, styling, inline-css, internal-css, external-css  
> **Purpose:** This topic introduces basic CSS concepts, demonstrating how to apply styles using inline, internal, and external CSS. It helps learners understand how CSS is linked and structured in HTML documents.

---

## 📖 Overview

CSS (Cascading Style Sheets) is used to style HTML elements, controlling layout, colors, fonts, and more. This topic serves as a foundation by covering three primary ways to apply CSS:

1. **Inline CSS:** Styles applied directly to an HTML element via the `style` attribute.  
2. **Internal CSS:** CSS rules included within a `<style>` tag inside the HTML `<head>`.  
3. **External CSS:** CSS stored in separate `.css` files linked to HTML documents via `<link>` tags.

Understanding these methods prepares learners to organize and maintain styles effectively in real-world projects.

---

## 🛠️ Detailed Explanation of Core Elements

### Inline CSS

- Applied using the `style` attribute on HTML tags.  
- Useful for quick, one-off styles or testing.  
- Not recommended for large projects because it mixes content and presentation.

### Internal CSS

- CSS rules placed inside a `<style>` block in the `<head>` section.  
- Allows styling multiple elements with CSS selectors within a single HTML file.  
- Useful for single-page or demo documents.

### External CSS

- Styles saved in separate `.css` files and linked with `<link rel="stylesheet" href="style.css">`.  
- Promotes separation of concerns and reusability.  
- Essential for maintaining larger projects with multiple pages.

### Additional Notes

- This topic includes a simple HTML template demonstrating all three CSS application methods.  
- Basic CSS properties like `color`, `background-color`, `margin`, `padding`, and `border` are used to show visible style effects.  
- The template also includes a reset CSS file link (`reset.css`) to normalize default browser styles.

---

## 💡 Pro Tip

1. Prefer **external CSS** for maintainability and scalability.  
2. Use **internal CSS** for quick demos or when external files aren’t practical.  
3. Avoid **inline CSS** except for temporary testing or very small overrides.  
4. Always use meaningful class names and semantic HTML for better CSS targeting.

---

### 🧪 Code Example Reference

See the following files in the _`01-intro-to-css`_ folder for a complete working demo of inline, internal, and external CSS usage:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
