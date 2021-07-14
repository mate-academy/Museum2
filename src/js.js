'use strict';

function burgerMenu(selector) {
  const menu = document.querySelector(selector);
  const button = menu.querySelector('.burger-menu__button');
  const links = menu.querySelector('.burger-menu__link');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.addEventListener('click', () => toggleMenu());

  function toggleMenu() {
    menu.classList.toggle('burger-menu_active');

    if (menu.classList.contains('burger-menu_active')) {
      document.querySelectorAll('body').css.overflow = 'hidden';
    } else {
      document.querySelectorAll$('body').css.overflow = 'visible';
    }
  }
}

burgerMenu('.burger-menu');
