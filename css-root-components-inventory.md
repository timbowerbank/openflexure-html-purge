# OpenFlexure Root Component Classes Inventory

This document contains the root-level custom component classes used throughout the OpenFlexure HTML files. These are the main wrapper classes for each component that will need to be extracted for the Jekyll transition and Sass optimization.

## Project Overview
- **Analysis Date:** Generated during Sass optimization project
- **Purpose:** Identify root component classes for light/dark theme implementation
- **Total HTML Files Analyzed:** 11

---

## Root Component Classes

### Core Layout & Navigation
- `pd-body` **light+dark**
- `pd-content-cover`
- `pd-mega-menu-outer` **light+dark**

### Hero Components
- `pd-hero-16` **light+dark**
- `pd-heroesHalf-7` **light+dark**

### Card System Components
- `pd-cards-14` **light+dark**
- `pd-cards-17` **light+dark**
- `pd-cards-18` **light+dark**
- `pd-cards-19` **light+dark**
- `pd-cards-20` **light+dark**
- `pd-cards-21` **light+dark**
- `pd-cards-22` **light+dark**

### Grid Components
- `pd-grid-3` **light+dark**
- `pd-grid-5` **light+dark**
- `pd-grid-6` **light+dark**

### Section Components
- `pd-section-19` **light+dark**
- `pd-section-20` **light+dark**
- `pd-section-21` **light+dark**

### Call-to-Action Components
- `pd-CTA-8` **light+dark**

### Footer Components
- `pd-footer-4` **light+dark**

### Modal Components
- `pd-modal-2` **light+dark**

### Gallery Components
- `pd-gallery-1` **light+dark**

### Slider Components
- `pd-slider-1` **light+dark**

### Text Components
- `pd-text-1` **light+dark**

### Utility Components
- `pd-page-header` **light+dark**
- `pd-page-menu-outer` **light+dark**
- `pd-divider`
- `pd-separator`
- `pd-pink-background` **light+dark**

---

## Summary

- **Total Root Components:** 25
- **Components Needing Light+Dark Treatment:** 22
- **Utility Components:** 3

## Implementation Notes

1. **Light+Dark Implementation:** Classes marked with **light+dark** need both light (default) and dark variants using the `pd-is-dark` modifier.

2. **Component Pattern:** Most components follow the pattern `pd-[component-type]-[number]` (e.g., `pd-cards-17`, `pd-hero-16`).

3. **Sass Variables Required:**
   - `$light: #E7E7E7`
   - `$dark: #2A2A2A`
   - `$info: #C5247F`

4. **Dark Theme Usage:** Components become dark-themed by adding `pd-is-dark` class:
   ```html
   <div class="pd-hero-16 pd-is-dark">
   ```

---

*Generated for OpenFlexure Sass optimization and Jekyll transition project.*