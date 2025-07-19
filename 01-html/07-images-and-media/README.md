# HTML Images and Media

> Tags: html-media, images, audio, video, iframe  
> **Purpose:** To learn and practice embedding and controlling multimedia elements in HTML including images, audio, video, and embedded content via iframes.

---

## Overview

HTML supports various media types to create rich web content. This includes images, audio, video, and embedded resources such as YouTube videos. Understanding how to properly include and configure these elements is essential for building engaging and accessible web pages.

---

## Detailed Explanation of Core Elements

- **Images (`<img>`)**  
  Display static visuals. Can use absolute URLs or relative paths. Important attributes include `src`, `alt` (for accessibility), `width`, `height`, `loading="lazy"` for performance optimization, and `title`.

- **Audio (`<audio>`)**  
  Plays sound files with controls for play, pause, volume, etc. Use `<source>` for different audio formats. Always provide fallback text for unsupported browsers.

- **Video (`<video>`)**  
  Displays video with customizable controls. Attributes like `autoplay`, `loop`, and `muted` improve user experience. Include fallback text for unsupported browsers.

- **Embedded Content (`<iframe>`)**  
  Used to embed external content like YouTube videos. Important attributes include `src`, `title` (for accessibility), `loading="lazy"` for performance, and security attributes like `referrerpolicy` and `allow`.

---

> 🧠 Pro Tip 
>
> _Always provide descriptive `alt` text for images and `title` attributes for interactive or embedded elements to enhance accessibility._

---

## 🧪 Code Example Reference

- [HTML Images and Media Example (index.html)](index.html) — Demonstrates usage of images (absolute and relative), audio, video, and embedded iframes with best practices.

---

## 🔙 Navigation

[← Back to HTML Fundamentals](../README.md)
