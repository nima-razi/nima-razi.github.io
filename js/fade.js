// Fade-in Scroll Observer
const observerOptions = {
    threshold: 0.25 // Trigger when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once it has faded in
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});