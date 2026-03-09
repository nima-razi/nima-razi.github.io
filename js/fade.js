// Optimized Scroll Observer
const observerOptions = {
    root: null, // Use the browser viewport
    // rootMargin: trigger the animation 50px BEFORE the element enters the view
    rootMargin: '0px 0px -50px 0px', 
    threshold: 0.15 // Now matches your 15% goal
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Use requestAnimationFrame for a silky smooth frame rate
            requestAnimationFrame(() => {
                entry.target.classList.add('active');
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Use DOMContentLoaded to ensure the script runs only after the HTML is ready
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(section => observer.observe(section));
});