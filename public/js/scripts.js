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

