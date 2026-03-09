document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("text");
    const phrases = ["BIT Graduate", "Web Developer", "Front-End Developer"];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        // Determine what text to show
        if (isDeleting) {
            // Remove a character
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75; // Faster when deleting
        } else {
            // Add a character
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Standard typing speed
        }

        // Logic for switching states
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing word: Pause, then start deleting
            isDeleting = true;
            typeSpeed = 2000; // Wait 2 seconds at the end of the word
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting: Move to next word
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Small pause before typing next word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Fire it up!
    typeEffect();
});