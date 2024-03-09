function toggleContent(contentId) {
    var content = document.getElementById(contentId + 'Content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }
  
  // Adding event listener to the About link
  var aboutLink = document.getElementById('aboutLink');
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the link
    toggleContent('about');
  });
  const words = ['I\'m', '<span class="vandana-word">Vandana</span>']; // Array of words to display

  function typeWords(words, i, callback) {
    if (i < words.length) {
      let word = words[i];
      let span = document.querySelector('.abc');
      let delay = word.length * 150; // Adjust the typing speed (in milliseconds) based on word length
  
      setTimeout(function() {
        if (word.includes('vandana-word')) {
          span.innerHTML = word;
        } else {
          span.textContent = word;
        }
        typeWords(words, i + 1, callback);
      }, delay);
    } else if (typeof callback === 'function') {
      setTimeout(callback, 700);
    }
  }
  
  function startTyping() {
    typeWords(words, 0, function() {});
  }
  
  document.addEventListener('DOMContentLoaded', startTyping);