# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating
- Reset the state to rate again seamlessly without page reloads

### Screenshot

![preview](./preview.jpg)

### Links

- Solution URL: [https://frontendmentor.io](https://frontendmentor.io)
- Live Site URL: [https://github.io](https://github.io)

## My process

### Built with

- Semantic HTML5 Form Markup
- CSS Custom Properties (Variables)
- CSS Grid & Flexbox Layout Engines
- CSS Modern Logical Properties (`padding-inline`, `margin-block-start`)
- Mobile-first engineering workflow
- Fluid Typography Scales (`clamp()`)
- Modern CSS Color Engineering (`color-mix()`)
- Pure Vanilla JavaScript DOM Manipulation

### What I learned

Coming from a professional background in accounting, I approach engineering layouts with an intense mindset of mathematical rigor and zero-tolerance error tracking. 

In this project, I focused heavily on ensuring the absolute compliance of web accessibility (WCAG) guidelines instead of treating it as a purely visual task. I learned that hiding native forms incorrectly can completely break screen-reader experiences.

#### ♿ Accessible Control Hiding (HTML/CSS)
Instead of using `display: none` on the native radio buttons, which completely destroys keyboard navigation, I implemented a bulletproof `.visually-hidden` utility wrapper to shrink the element down to a single pixel while keeping it fully interactive in the DOM for assistive technologies.

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

#### 🔄 Dynamic State Tracking (JavaScript)
I engineered a modular approach using data attributes (`data-state`) instead of injecting inline styles via JS. This keeps the separation of concerns perfectly clean—JavaScript only manipulates the logical state, while CSS handles the visual outcome.

```js
ratingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const checkedRadio = ratingForm.querySelector('input[name="rating_score"]:checked');
  if (!checkedRadio) return;

  selectedRatingValue.textContent = checkedRadio.value;
  ratingForm.setAttribute('data-state', 'hidden');
  thankYouState.setAttribute('data-state', 'active');
  thankYouState.setAttribute('aria-hidden', 'false');
});
```

### Continued development

Moving forward into my learning path, my primary targets are:
- Deepening my knowledge in **Web Accessibility (a11y)**, exploring screen-reader interactions and complex ARIA state controls.
- Expanding my **Vanilla JavaScript Core Concepts** to handle asynchronous tasks and local application states.
- Perfecting the fluid architecture of container queries alongside modern layout engineering systems.

### Useful resources

- [Responsively App](https://responsively.app) - A game-changing open-source browser modifier that accelerated my development process by letting me visualize mobile, tablet, and desktop viewports simultaneously in real-time.
- [MDN Web Docs - Logical Properties](https://mozilla.org) - This documentation helped me fully master directional independence over traditional physics-based properties like padding-left or margin-top.

### AI Collaboration

This layout was built using an active pair-programming simulation with an AI collaborator operating under strict "Teaching Mode" constraints. 
- **Tools used**: Gemini 1.5 Pro.
- **Methodology**: Rather than accepting boilerplate code blindly, I used the assistant to unpack layout anomalies, debug sub-pixel rendering offsets, and validate specific CSS architecture metrics.
- **Outcome**: The collaboration proved highly successful in maintaining code cleanliness, stripping out redundant selectors, and implementing mathematically balanced typographic scales without sacrificing cross-browser layout safety.

## Author

- Frontend Mentor - [@cipdanila](https://www.frontendmentor.io/profile/cipdanila)
- GitHub - [@cipdanila](https://github.com/cipdanila)
