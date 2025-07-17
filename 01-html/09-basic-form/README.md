# HTML Forms

> Tags: html-forms, semantic-html, accessibility, aria  
> **Purpose:** To understand and practice creating accessible, semantic HTML forms using labels, placeholders, ARIA attributes, field grouping, and proper UX-focused attributes.

---

## Overview

HTML forms are used to collect user input. Proper use of semantic elements, labels, and ARIA attributes enhances form usability and accessibility, especially for screen reader users. Grouping related fields using `<fieldset>` and describing them with `<legend>` ensures a more inclusive and understandable structure.

---

## Detailed Explanation of Core Elements

### `<form>`

- Wraps all input fields and controls.  
- Use `action` to define the submission target and `method` for HTTP behavior (`post` or `get`).  
- Use `aria-describedby` to link to helper text for screen readers.

---

### `<fieldset>` and `<legend>`

- `<fieldset>` groups related input fields logically.  
- `<legend>` describes the purpose of the group.  
- Together, they improve both visual organization and screen reader comprehension.

---

### `<label>`

- Describes an input’s purpose.  
- Connects using the `for` attribute (which must match the input’s `id`).  
- Crucial for accessibility and screen reader compatibility.

---

### `<input>`

- Captures single-line user input (e.g., name, email).  
- Common attributes:  
  - `required` → Ensures the field must be filled before submission  
  - `autocomplete` → Enables autofill (e.g., `name`, `email`)  
  - `placeholder` → Shows example input text  
  - `title` → Adds tooltip info on hover  
  - `aria-required="true"` → Clarifies the requirement to screen readers

---

### `<textarea>`

- Captures multi-line input such as messages.  
- Can use `placeholder`, `title`, and `autocomplete="off"` for privacy.

---

### ARIA Attributes

- `aria-describedby` → Associates the form or a specific input with visible help or instruction text.  
- `aria-required="true"` → Helps assistive technologies recognize required fields, especially when paired with the `required` attribute.

---

> 🧠 **Pro Tip**
>
> 1. Use semantic grouping with `<fieldset>` and `<legend>`  
> 2. Always pair inputs with visible `<label>` elements  
> 3. Add `aria-describedby` to connect to visible form instructions  
> 4. Use both `required` and `aria-required="true"` for maximum accessibility  
> 5. Avoid relying only on `placeholder`; it disappears when typing

---

## Code Example

- [HTML Forms Example (index.html)](index.html) — Demonstrates a contact form with semantic structure, visible labels, placeholders, ARIA support, and required fields.

---

## 🔙 Navigation

[← Back to HTML Fundamentals](../README.md)
