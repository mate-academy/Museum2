'use strict';

const submit = document.querySelector('.follow__button');
const input = document.querySelector('.follow__input');

submit.addEventListener('click', (event) => {
  setTimeout(() => (input.value = ''), 0);
});
