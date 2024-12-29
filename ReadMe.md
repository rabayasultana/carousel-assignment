# Carousel Assignment Documentation

## Overview
This Assignment implements a responsive and interactive carousel feature designed to display books fetched dynamically from a JSON file. The carousel includes support for auto-rotation, pagination, keyboard navigation, and adaptive card scaling based on screen size.

## Code Structure
### Files
1. **HTML File**(`index.html`): 
   - Contains the basic structure of the webpage, including the carousel container and buttons.
2. **CSS File**(`my-styles.css`): 
   - Provides styles for the carousel, including the layout, animations, and responsive design.
3. **JavaScript File**(`my-script.js`): 
   - Handles the dynamic creation of carousel cards, interactivity, and auto-rotation.
4. **JSON File** (`book-description.json`): 
   - Stores the data for the books displayed in the carousel (e.g., title, description, and photo).

## How to Configure
### Parameters
- **`n`**: Total number of cards in the carousel (from the `book-description.json` file).
- **`x`**: Number of visible cards in the screen at a time.

### How to Configure `n` and `x`
1. **`n` (Total Cards):**
   - Add or remove entries in the `book-description.json` file to increase or decrease the total number of cards.
   - Each entry must include:
     ```json
     {
       "title": "Book Title",
       "description": "Book description...",
       "photo": "Image URL"
     }
     ```

2. **`x` (Visible Cards):**
   - Modify the CSS rule for `.carousel-card` in `my-styles.css` to adjust the number of visible cards:
     ```css
     .carousel-card {
       flex: 0 0 calc(100% / x); /* Replace 'x' with the desired number of visible cards */
     }
     ```
   - Example: If `x = 3`, visible cards will be 3 at a time.
     
## Features
### Dynamic Card Scaling
- The card in the center is larger and highlighted (`center` class).
- Side cards are smaller, with reduced opacity (`side` class).
- Far side cards are smallest, with minimal opacity (`far-side` class).

### Responsive Design
- The layout adapts to different screen sizes:
  - Large screens: Up to 5 visible cards.
  - Medium screens: Up to 3 visible cards.
  - Small screens: 1 card visible.

### Interactivity
1. **Navigation Buttons:**
   - Left and right buttons allow users to scroll through the carousel.
2. **Pagination Dots:**
   - Dots below the carousel indicate the current position.
   - Clicking on a dot navigates directly to the corresponding card.
3. **Keyboard Navigation:**
   - Arrow keys (`Right` and `Left`) can be used to navigate the carousel.

### Auto-Rotation
- The carousel automatically scrolls in every 4 seconds.
- This can be modified in `my-script.js` by changing the interval:
  ```javascript
  setInterval(() => {
    rightButton.click();
  }, 4000); // Adjust the time (in milliseconds) for auto-rotation
  ```


