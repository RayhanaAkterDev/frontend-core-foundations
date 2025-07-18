# Form Validation (HTML Only)

> Tags: form-validation, html5-validation, native-validation, accessibility  
> **Purpose:** To understand and implement native HTML5 form validation attributes for client-side validation without relying on JavaScript.

---

## Overview

Form validation is essential to ensure that users provide the correct data before submitting a form. HTML5 offers built-in validation attributes such as `required`, `pattern`, `minlength`, `min`, and `max` that allow developers to enforce input rules without writing any JavaScript code. This enhances user experience by giving immediate feedback and improves accessibility.

---

## Detailed Explanation of Core Elements

- `<form>`  
  The container for all form elements. Omitting the `novalidate` attribute enables native validation by default.

- `<fieldset>` and `<legend>`  
  These group related inputs and provide descriptive labels for accessibility and better structure.

- Input attributes for validation:  
  - `required` — Makes the input mandatory before submission.  
  - `pattern` — Defines a regex pattern the input must match.  
  - `minlength` — Sets the minimum number of characters for text inputs.  
  - `min` and `max` — Define numeric input boundaries.  
  - `title` — Provides guidance on expected input format, shown on validation errors.  

- Checkbox with `required` — Used to ensure users accept terms or agreements.

---

> 🧠 **Pro Tip:**  
> Native HTML5 validation reduces the need for complex JavaScript validation and improves accessibility by leveraging built-in browser features.

---

## Code Example

- [Form Validation Example (index.html)](index.html) — Demonstrates the use of native validation attributes on various input types including username, email, password, age, website URL, and terms acceptance checkbox.

---

## 🔙 Navigation

[← Back to HTML Forms](../README.md)
