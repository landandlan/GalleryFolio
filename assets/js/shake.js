// Select the element to animate
const shakeElement = document.getElementById('attention-shake');

// Set the interval to repeat the shake animation every 2 seconds
setInterval(() => {
  // Add the animation class
  shakeElement.style.animation = 'shake 0.5s ease-in-out';
  
  // Remove the animation class after it finishes
  setTimeout(() => {
    shakeElement.style.animation = 'none';
  }, 500); // Match the duration of the shake animation
}, 2000); // Repeat every 2 seconds