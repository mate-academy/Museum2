'use strict';

const lang = document.querySelector('.header__lang');

(() => {
  const buttonLine = document.querySelector('.header__line');
  const art = document.querySelector('.art');
  const nav = document.querySelector('.nav');

  buttonLine.addEventListener('click', () => {
    art.classList.toggle('art__close');
    nav.classList.toggle('nav__open');
    buttonLine.classList.toggle('header__chrest');
  });
})();

(() => {
  const list = document.querySelector('.header__list--lang');

  lang.addEventListener('click', () => {
    list.classList.toggle('header__list--open');
  });
})();

(() => {
  const listItemUa = document.querySelector('.item__en');

  listItemUa.addEventListener('click', () => {
    lang.innerHTML = 'EN';
  });
})();

(() => {
  const listItemUa = document.querySelector('.item__ua');

  listItemUa.addEventListener('click', () => {
    lang.innerHTML = 'UA';
  });
})();
