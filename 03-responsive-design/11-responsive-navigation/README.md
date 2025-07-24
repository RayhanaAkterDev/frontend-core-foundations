# Responsive Navigation Patterns

> Tags: css, responsive-design, navigation, accessibility, hamburger-menu, off-canvas, container-query
> **Purpose**: This note covers various navigation design patterns that adapt smoothly across different screen sizes and devices. It emphasizes accessibility, usability, and modern CSS techniques for creating effective responsive navigation menus.

---

## 📚 Overview

Responsive navigation ensures users can easily navigate websites on any device — from large desktops to small mobile screens. This involves switching layouts, hiding/showing menu items, and providing accessible controls such as hamburger menus or off-canvas panels.

---

## 🧩 Detailed Explanation of Core Elements

1. **Classic Navigation Patterns**

   - Horizontal navigation bars for desktops.
   - Hamburger menus for smaller screens to save space.
   - Off-canvas menus that slide in from the side.
   - Dropdown and mega menus with responsive behavior.

2. **Techniques for Responsiveness**

   - CSS media queries to adjust layout and visibility based on viewport size.
   - JavaScript toggles for opening and closing menus on mobile.
   - Use of ARIA roles and attributes (`aria-expanded`, `aria-controls`) for accessibility.
   - Keyboard navigation support.

3. **Modern CSS Features**

   - `container-type` and container queries to adapt navigation styling based on container size, not just viewport.
   - The `:has()` CSS selector to style parent elements based on child states without JavaScript.

4. **Accessibility Best Practices**

   - Clear focus indicators for keyboard users.
   - Logical tab order.
   - Proper labeling of toggle buttons and menus.
   - Screen reader announcements for menu state changes.

5. **Design Approaches**

   - Mobile-first development ensuring minimal, usable menus on small screens.
   - Progressive enhancement for richer navigation experiences on larger screens.
   - Use of CSS custom properties for theming and dynamic styling.

---

## 💡 Pro Tip

1. Use semantic HTML5 elements like `<nav>` and lists for navigation structure.
2. Ensure hamburger toggles have accessible labels and state management.
3. Test navigation across devices and with keyboard only.
4. Combine container queries with media queries for modular and scalable navigation components.
5. Keep JavaScript minimal and focus on progressive enhancement.

---

## 🧪 Code Example Reference

See files in the _`responsive-navigation`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)  
- [`script.js`](script.js)  

---

## 🔗 Navigation

[← Back to Frontend Core Foundations README](../../README.md)
