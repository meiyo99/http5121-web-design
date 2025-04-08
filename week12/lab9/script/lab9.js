// Get references to the HTML elements
const skyElement = document.getElementById('sky');
const sunElement = document.getElementById('sun');
const toggleButton = document.getElementById('button');

// Add event listener for the button click
toggleButton.addEventListener('click', () => { 
    const currentSunState = window.getComputedStyle(sunElement).animationPlayState;

    if (currentSunState === 'running') {
        // If running, pause both animations
        skyElement.style.animationPlayState = 'paused';
        sunElement.style.animationPlayState = 'paused';
        // --- Button text remains static ---
        // toggleButton.textContent = 'Play'; // REMOVED
    } else {
        // If paused, resume (run) both animations
        skyElement.style.animationPlayState = 'running';
        sunElement.style.animationPlayState = 'running';
        // --- Button text remains static ---
        // toggleButton.textContent = 'Pause'; // REMOVED
    }
});

// No need to set initial button text based on state,
// as the HTML defines the static text "Play/Pause".