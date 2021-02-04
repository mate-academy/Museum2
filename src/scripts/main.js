'use strict';
// let selectSide = document.querySelector('.header__side');
// let currentLang = document.querySelector('.header__lang');
// let listLang = document.querySelector('.header__list--lang');
// let imgLang = document.querySelector('.header__lang--img');

// selectSide.addEventListener('click' , ()=>{
//   currentLang.classList.toggle('.header__list--lang--active');
//   console.log(currentLang)
// });
(() => {
  const buttonLine = document.querySelector('.header__line');
  const art = document.querySelector('.art');
  const nav = document.querySelector('.nav');

  buttonLine.addEventListener('click', () => {
    art.classList.toggle('art__close');
    nav.classList.toggle('nav__open');
  });
})();
