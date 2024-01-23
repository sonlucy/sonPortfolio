const menuicon = document.querySelector('#menuicon');
const menu = document.querySelector('.navbar_menu');

menuicon.addEventListener("click", () => {
  menu.classList.toggle('active');
})