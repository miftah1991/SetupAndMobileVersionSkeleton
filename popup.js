const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const popupWindow = document.querySelector('.project-popup');

const closer = document.getElementById("closer");

function displayPopup() {
  popupWindow.style.display = "flex";
}

function closeWindow() {
  popupWindow.style.display = "none";
}

button1.addEventListener('click', displayPopup);
button2.addEventListener('click', displayPopup);
button3.addEventListener('click', displayPopup);
button4.addEventListener('click', displayPopup);

closer.addEventListener('click', closeWindow);