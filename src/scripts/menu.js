'use strict';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileLangRef = document.querySelector('[data-lang]');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('menu-button--backdrop');

    mobileMenuRef.classList.toggle('nav--backdrop');
    mobileLangRef.classList.toggle('lang--visible');
  });
})();
