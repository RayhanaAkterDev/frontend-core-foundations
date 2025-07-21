# 🎨 CSS Transitions & Animations

> Tags: css, transitions, animations, keyframes, effects  
> **Purpose:** This topic covers CSS transitions for smooth property changes and CSS animations with keyframes for complex, repeatable animations.

---

## 📖 Overview

CSS Transitions provide a way to animate changes between states smoothly without JavaScript, useful for hover effects and UI feedback.  
CSS Animations enable control over sequences of changes using keyframes, allowing looping, delays, and more complex behaviors.

---

## 🛠️ Detailed Explanation of Core Elements

### CSS Transitions

- Properties: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`  
- Shorthand: `transition: all 0.3s ease 0s;`  
- Applied typically on hover or focus states to animate property changes such as `background-color`, `transform`, `opacity`, etc.

### CSS Keyframe Animations

- Defined with `@keyframes` followed by animation name and percentage steps  
- Control animation with `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`  
- Useful for complex sequences, loading indicators, and attention-catching effects

---

## 💡 Pro Tip

1. Use transitions for simple state changes for better performance.  
2. Use animations for looping or complex sequences.  
3. Keep animation duration and easing smooth for good UX.  
4. Prefer `transform` and `opacity` properties for hardware acceleration.  
5. Avoid animating expensive properties like `width` or `height` where possible.

---

### 🧪 Code Example Reference

See files in the _`css-transitions-animations`_ folder for a complete working demo:

- [`index.html`](index.html)  
- [`style.css`](style.css)

---

## 🔙 Navigation

- [← Back to CSS Topics](../README.md)
