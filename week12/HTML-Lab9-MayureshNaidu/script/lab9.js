var sky = document.getElementById('sky');
var sun = document.getElementById('sun');
var button = document.getElementById('button');

button.addEventListener('click', function() { 
    var currentState = window.getComputedStyle(sun).animationPlayState;

    if (currentState === 'running') {
        sky.style.animationPlayState = 'paused';
        sun.style.animationPlayState = 'paused';
    } else {
        sky.style.animationPlayState = 'running';
        sun.style.animationPlayState = 'running';
    }
});