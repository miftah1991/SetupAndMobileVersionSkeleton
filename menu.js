const menu = document.querySelector('.mobile-menu');
const menubtn = document.querySelector('.baricon');
const closebtn = document.querySelector('.close-item');
const portfolitbtn = document.querySelector('.portfolitbtn');
const aboutbtn = document.querySelector('.aboutbtn');
const contactbtn = document.querySelector('.contactbtn');
function showmMenu(e) {
  e.preventDefault();
  menu.style.display = 'block';
}
function hideMenu() {
  menu.style.display = 'none';
}

menubtn.addEventListener('click', showmMenu);
closebtn.addEventListener('click', hideMenu);
portfolitbtn.addEventListener('click', hideMenu);
aboutbtn.addEventListener('click', hideMenu);
contactbtn.addEventListener('click', hideMenu);
