// get the mode toggle icon
const modeToggle = document.querySelector('#dark-light-toggle');

function displayModeToggle (event) {
    event.preventDefault();
    console.log("click");
    
    var element = document.body;
    element.classList.toggle("dark-mode");
};

// USER INTERACTIONS
// event listener for light/dark mode
modeToggle.addEventListener('click', displayModeToggle);