
var isClick = false;
function displayBtn() {
  var text = document.getElementById("info-btns");
  isClick = !isClick;

  if(isClick && mediaQ.matches)
    text.style.display = "block";
  else if(isClick && mediaQuery.matches)
    text.style.display = "inline";
  else
    text.style.display = "none";
}

const mediaQ = window.matchMedia('(min-width: 1100px)')
const mediaQuery = window.matchMedia('(max-width: 1100px)'); // Adjust the max-width to your desired breakpoint
handleDisplayType(mediaQuery); // Call the function once to apply initial styles