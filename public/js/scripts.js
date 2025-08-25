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

