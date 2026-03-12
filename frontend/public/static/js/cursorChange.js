// Get references to the carousel and the custom cursor
const carousel = document.querySelector('.my-owl-2');
const customCursor = document.getElementById('custom-drag-cursor');

if (carousel && customCursor) {
    // 1. Universal mouse tracking (must be on document to track movement everywhere)
    document.addEventListener('mousemove', (e) => {
        // The cursor element is moved to the mouse coordinates
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });

    // 2. Show the custom cursor when the mouse enters the carousel
    carousel.addEventListener('mouseenter', () => {
        customCursor.style.opacity = 1;
        customCursor.innerText = 'Drag'; // Ensure text is 'Drag'
    });

    // 3. Hide the custom cursor when the mouse leaves the carousel
    carousel.addEventListener('mouseleave', () => {
        customCursor.style.opacity = 0;
    });

    // 4. Optional: Change text/color when the user is actively holding down the mouse
    carousel.addEventListener('mousedown', () => {
        customCursor.style.background = 'rgba(21, 131, 107, 0.9)'; /* Slightly darker or different color */
        customCursor.innerText = 'Release';
    });

    carousel.addEventListener('mouseup', () => {
        customCursor.style.background = 'rgba(44, 177, 143, 0.9)'; // Reset color
        customCursor.innerText = 'Drag';
    });
}