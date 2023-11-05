// script.js
function changeColor() {
    var button = document.querySelector('#btn');
    if (button.style.backgroundColor === '' || button.style.backgroundColor === 'rgb(0, 123, 255)') {
        // If the button is not clicked or its color is the default blue
        button.style.backgroundColor = '#ff6347'; // Change the background color
        button.style.color = '#ffffff'; // Change the text color
        // Store the button state in localStorage
        localStorage.setItem('buttonState', 'clicked');
    } else {
        // If the button is already clicked and its color is red
        button.style.backgroundColor = '#007bff'; // Reset the background color to default blue
        button.style.color = '#ffffff'; // Reset the text color to default white
        // Remove the button state from localStorage
        localStorage.removeItem('buttonState');
    }
}

// Check if the button was previously clicked and change its color accordingly
window.onload = function() {
    var buttonState = localStorage.getItem('buttonState');
    if (buttonState === 'clicked') {
        changeColor();
    }
};
