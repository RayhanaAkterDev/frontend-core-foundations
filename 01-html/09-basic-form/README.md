# HTML Forms (Basic Form)

> Tags: html-forms, accessible-forms, semantic-html, aria  
> **Purpose:** Demonstrates a properly structured, accessible HTML form with semantic tags, visible labels, placeholders, and ARIA attributes for clarity and better UX.

---

## Overview

This topic covers the basics of creating HTML forms using semantic and accessible markup. It focuses on using `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, and `<textarea>` elements properly to build a user-friendly contact form. The use of ARIA attributes enhances support for assistive technologies, and placeholders and titles improve the user experience.

---

## Detailed Explanation of Core Elements

### Input Types Used

- `text` — for entering full name.  
- `email` — for email address.  
- `textarea` — for multi-line message input.

### `<form>`

- Wraps the entire form, defining submission behavior using `action` and `method` attributes.
- `aria-describedby` connects the form to descriptive text for screen readers.
- `novalidate` disables built-in validation to be handled separately if desired.

### `<fieldset>` and `<legend>`

- `<fieldset>` groups related inputs to provide logical sections.
- `<legend>` labels the group, improving both visual organization and accessibility.

### `<label>`

- Associates visible text with form controls via the `for` attribute matching the input’s `id`.
- Essential for accessibility and click-target usability.

### `<input>` and `<textarea>`

- Capture user input for different types of data.
- Attributes like `required`, `aria-required`, `autocomplete`, `placeholder`, and `title` improve UX and accessibility.

---

> 🧠 **Pro Tip**
>
> 1. Always associate labels with inputs using `for` and `id`.  
> 2. Group related inputs with `<fieldset>` and `<legend>`.  
> 3. Use ARIA attributes to enhance screen reader support.  
> 4. Use placeholders and titles thoughtfully to guide users.

---

## Code Example Reference

- [Basic Form Example (index.html)](index.html) — Shows an accessible contact form with semantic markup and ARIA support.

---

## 🔙 Navigation

[← Back to HTML Fundamentals](../README.md)
