
var isClick = false;
function displayBtn() {
  var text = document.getElementById("info-btns");
  isClick = !isClick;

  if(isClick)
    text.style.display = "block";
  else
    text.style.display = "none";

  if(isClick && mediaQuery.matches)
    text.style.display = "inline";
  else
    text.style.display = "none";
}

const mediaQuery = window.matchMedia('(max-width: 1100px)'); // Adjust the max-width to your desired breakpoint
handleDisplayType(mediaQuery); // Call the function once to apply initial styles
mediaQuery.addListener(handleDisplayType); // Add listener for changes in screen size