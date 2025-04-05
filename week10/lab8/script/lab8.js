document.addEventListener('DOMContentLoaded', function() {

    var myButton = document.getElementById('myButton');
    var myShape = document.getElementById('myShape');

    // Add an event listener for the button click
    myButton.addEventListener('click', function() {
        console.log("Transition Start");
        myShape.classList.add('animate-shape');
    });

    myShape.addEventListener('transitionend', function() {
        console.log("Transition End");
        myShape.classList.remove('animate-shape');
    });

});