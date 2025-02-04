// JavaScript to enable swipe and drag functionality on the event slider
const slider = document.querySelector('.previous-editions');
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDragging = false;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the speed of the drag
    slider.scrollLeft = scrollLeft - walk;
});

// Enable swipe functionality on mobile devices
let startTouch;
slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startTouch = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const walk = (startTouch - x) * 2; // Adjust swipe speed
    slider.scrollLeft += walk;
});

slider.addEventListener('touchend', () => {
    isDragging = false;
});
