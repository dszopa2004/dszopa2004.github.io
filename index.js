var isClick = false;
function displayBtn() {
  var text = document.getElementById("info-btns");
  isClick = !isClick;

  if(isClick)
    text.style.display = "block";
  else
    text.style.display = "none";
}