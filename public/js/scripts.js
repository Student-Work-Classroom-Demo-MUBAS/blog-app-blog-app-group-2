document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  
  if (!form) return;

  form.addEventListener('submit', function (event) {
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    let messages = [];

    if (title === '') {
      messages.push('Title is required');
    }
    if (content === '') {
      messages.push('Content is required');
    }

    if (messages.length > 0) {
      alert(messages.join('\n'));
      event.preventDefault();
    }
  });
});

//Get button element that will toggle dark or light mode
const modeToggle = document.getElementById("modeToggle");

//Get body element, where the dark or light class will be applied
const body = document.body;

// Check if user has a saved theme in local storage
if(localStorage.getItem("theme") === "dark") {
  
  //if saved theme is dark then add darkmode class to body
  body.classList.add("dark-mode");

  // update toggle button icon/text to indicate light mode switching
  modeToggle.innerHTML = '<i class="fa fa-sun"></i> Light Mode';
} else {
  //If no saved theme or light mode is theme, add light mode class to body 
  body.classList.add("light-mode");
}

// Add click event listener to toggle button
modeToggle.addEventListener("click", () => {
  //Toggle between darkmode and light mode classes on body
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  //Check which mode is active after toggling
  if(body.classList.contains("dark-mode")) {
    //if dark mode is active:
    //-Change button icon/text to indicate clicking will switch to light theme
    //-Save dark in local storage to remember choice
    modeToggle.innerHTML = '<i class="fa fa-sun"></i> Light Mode';
    localStorage.setItem("theme", "dark");
  } else {
    //If light mode is active:
    //-Change button icon/text to indicate clicking will switch to dark theme
    //-Save light in local storage to remember choice
    modeToggle.innerHTML = '<i class="fa fa-moon"></i> Dark Mode';
    localStorage.setItem("theme", "light");
  }
});

//script to move back up wehn clicked
// Get the button
let topButton = document.getElementById("topBtn");

// Show button after scrolling down 100px
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Smooth scroll to top when clicked
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

