# Container Query

> Tags: css, responsive-design, container-query, frontend
> **Purpose**: This note explains the concept of CSS Container Queries, a powerful feature that allows styling child elements based on the size of their container rather than the viewport. It aims to clarify the difference between container queries and media queries, demonstrate practical usage, and provide an easy-to-understand example.

---

## 📚 Overview

Container Queries are a new CSS feature that enable developers to apply styles based on the dimensions of a specific container element, rather than the overall viewport size (as with media queries). This allows for more modular, flexible, and reusable component designs that adapt to their allocated space independently of screen size.

---

## 🧩 Detailed Explanation of Core Elements

1. **Container Type Declaration**

   To use container queries, you must first declare an element as a container by applying the `container-type` property, commonly `inline-size` (for width-based queries) or `size` (both width and height).

    ```css
    .container {
     container-type: inline-size;
    }
    ```

2. **Writing Container Queries**

    Container queries are written similarly to media queries, but use @container instead of @media.

    ```css
    @container (max-width: 400px) {
    /* styles for container <= 400px wide */
        .child {
            font-size: 14px;
            color: blue;
        }
    }
    ```

3. **Difference from Media Queries
   - Media queries respond to viewport size changes.
   - Container queries respond to the container's own size.
This makes container queries ideal for component-level responsiveness.

4. **Practical Usage**

    Useful in component libraries, cards, widgets, or any reusable UI elements that may appear in varying sizes across different layouts or devices.

---

### 💡 Pro Tip

- Always specify `container-type` on the container element to enable container queries.
- Use `container-name` if you want to name containers for nested queries.
- Test container queries by resizing the container element in dev tools, not just the viewport.
- Combine container queries with media queries for full responsiveness.

---

### 🧪 Code Example Reference

See files in the _`container-query`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  

---

### 🔗 Navigation

[← Back to Frontend Core Foundations README](../../README.md)
