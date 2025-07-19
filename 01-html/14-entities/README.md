# HTML Entities

> Tags: html-entities, reserved-characters, encoding, html-special-symbols  
> **Purpose:** Demonstrates how to use HTML character entities to display special, reserved, or invisible characters properly.

---

## Overview

In HTML, certain characters like `<`, `>`, and `&` are reserved for markup. If you want to display these characters as part of your content rather than HTML code, you must use **HTML entities**. These entities can be written using either a **named reference** (like `&lt;`) or a **numeric reference** (like `&#60;`).

---

## Detailed Explanation of Core Elements

### Common Reserved Characters

- HTML uses special characters like `<`, `>`, `&`, `"`, and `'` to define tags and attributes.
- These characters must be written using entities when used as part of the content.
- Examples:
  - `&lt;` → `<`
  - `&gt;` → `>`
  - `&amp;` → `&`
  - `&quot;` → `"`
  - `&apos;` → `'` *(works in HTML5)*

### Special Symbols

- HTML entities also let you insert copyright, currency, and trademark symbols.
- Examples:
  - `&copy;` → ©
  - `&reg;` → ®
  - `&euro;` → €
  - `&yen;` → ¥
  - `&pound;` → £

### Numeric Character References

- Sometimes symbols don't have names, or numeric references are preferred for compatibility.
- Format: `&#number;` (decimal) or `&#xhex;` (hexadecimal)
- Examples:
  - `&#169;` → ©
  - `&#174;` → ®
  - `&#34;` → "
  - `&#60;` → <

### Non-Breaking Space (`&nbsp;`)

- Prevents automatic line breaks between words.
- Useful for keeping related words stuck together (e.g., names or dates).
- Example:
  - `This&nbsp;is&nbsp;one&nbsp;chunk.` → This is one chunk.

---

## 💡 Pro Tip

1. Use `&lt;`, `&gt;`, and `&amp;` frequently when writing code snippets in HTML.
2. Use `&nbsp;` to control spacing when you don’t want the browser to split text.
3. Numeric references are more universal but less readable than named ones.
4. You can test any entity in the browser using basic HTML to see how it renders.

---

## 🔗 Code Example Reference

→ [Click here to view the full HTML entities example](./index.html)

---

## 🔙 Navigation

← Back to [HTML Topics Main README](../README.md)
