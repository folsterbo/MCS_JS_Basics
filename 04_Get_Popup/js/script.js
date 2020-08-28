const button = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

button.addEventListener('click', function () {
  popup.style.display = 'flex'
});
closePopup.addEventListener('click', function () {
  popup.style.display = 'none'
});
openMenu.addEventListener('click', function () {
  menu.style.left = '0'
});
closeMenu.addEventListener('click', function () {
  menu.style.left = '-50vw'
});

