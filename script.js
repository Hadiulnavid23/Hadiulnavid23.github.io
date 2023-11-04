document.addEventListener('DOMContentLoaded', function () {
  const modeToggleButton = document.getElementById('mode-toggle-button');
  const body = document.body;

  // Check local storage for the user's mode preference
  const userMode = localStorage.getItem('mode');
  console.log(userMode);

  // Function to toggle dark mode
  function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
      modeToggleButton.textContent = 'Light Mode';
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
      modeToggleButton.textContent = 'Dark Mode';
    }
  }

  // Set the initial mode based on user preference
  if (userMode === 'dark') {
    body.classList.add('dark-mode');
    modeToggleButton.textContent = 'Dark Mode';
  } else {
    modeToggleButton.textContent = 'Light Mode';
  }

  // Toggle dark mode when the button is clicked
  modeToggleButton.addEventListener('click', toggleDarkMode);
});

// Define variables to keep track of user choices and consequences
let choice1Made = false;
let choice2Made = false;
let choice3Made = false;
let choice4Made = false;

// Event listeners for user choices
document.getElementById("choice1").addEventListener("click", () => {
    choice3Made = true;
    displayResult();
});

document.getElementById("choice2").addEventListener("click", () => {
    choice4Made = true;
    displayResult();
});

document.getElementById("choice3").addEventListener("click", () => {
    choice5Made = true;
    displayResult();
});

document.getElementById("choice4").addEventListener("click", () => {
    choice6Made = true;
    displayResult();
});

// Function to display the result based on user choices
function displayResult() {
    // Check user choices and update the result
    let result = "You made the following decisions:\n";
    if (choice1Made) {
        result += "- You approached a historical figure.\n";
    } else {
        result += "- You observed from the shadows.\n";
    }
    if (choice3Made) {
        result += "- You attempted to change a historical event.\n";
    } else {
        result += "- You chose not to change the event.\n";
    }

    // Display the result
    document.getElementById("result").textContent = result;

    document.getElementById("choice1").addEventListener("click", () => {
    choice1Made = true;
    displayResult();
    console.log("Choice 1 made.");
});

// Repeat similar logs for other choices

}

// Get the button and the heading element by their IDs
const button = document.getElementById("myButton");
const heading = document.getElementById("demo");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Change the text of the heading when the button is clicked
    heading.textContent = "Text changed! The website is interactive now!";
});
