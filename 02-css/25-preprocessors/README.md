# 🧪 CSS Preprocessors Introduction (Sass & LESS)

> Tags: css, preprocessors, sass, less, variables, nesting, mixins  
> **Purpose:** This topic introduces CSS preprocessors Sass and LESS, showing how they simplify CSS using features like variables, nesting, and mixins for cleaner, reusable code.

---

## 📖 Overview

Preprocessors are tools that extend CSS by adding programming-like features. They compile into plain CSS that browsers understand.  
**Sass** and **LESS** are two of the most popular preprocessors used in real-world projects to improve productivity and code quality.

---

## 🛠️ Detailed Explanation of Core Elements

### 🔹 Sass (SCSS Syntax)

- Uses variables with `$`
- Supports nested rules, mixins, partial imports
- File extensions: `.scss` or `.sass`
- Most popular and widely supported in modern frontend setups

**💡 Example:**

```scss
$primary-color: #3498db;

nav {
  background: $primary-color;
  ul {
    list-style: none;
    li {
      display: inline-block;
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
```

### 🔹LESS

- Uses @ for variables
- Similar to Sass in features
- File extension: .less
- Often used with older projects or Bootstrap v2–3

**💡 Example:**

```less
@main-color: #27ae60;

header {
  background: @main-color;
  nav {
    a {
      color: white;
      padding: 10px;
    }
  }
}
```

## 💡 Pro Tip

1. Use Sass (.scss) in modern frontend projects with build tools like Vite, Webpack, or Parcel.  
2. Avoid writing deeply nested rules (max 3 levels) — it becomes hard to maintain.  
3. Split large SCSS files into partials and use `@use` or `@import` for better organization.  
4. Many UI frameworks like Bootstrap and Bulma are built using preprocessors.

---

### 🧪 Code Example Reference

See the following file in the _`preprocessors-intro`_ folder for working code examples:

- [`index.html`](index.html)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
