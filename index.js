// Get all the buttons with the specified class
const buttons = document.querySelectorAll('.more-info');

let lastClickedButton = null;

// Helper function to resize the clicked button
function resizeButton(event) {
  const clickedButton = event.target;

  // Reset the size of the previously clicked button
  if (lastClickedButton && lastClickedButton !== clickedButton) {
    lastClickedButton.style.transform = 'scale(1)';
  }

  // Increase the size of the clicked button
  clickedButton.style.transform = 'scale(1.2)';
  
  // Update the lastClickedButton to the current clickedButton
  lastClickedButton = clickedButton;
}

// Attach a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', resizeButton);
});