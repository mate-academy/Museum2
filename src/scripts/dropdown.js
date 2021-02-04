'use strict';

(() => {
  const langBtnRef = document.querySelector('[data-lang]');
  const dropDown = document.querySelector('.dropdown');

  langBtnRef.addEventListener('click', () => {
    dropDown.classList.toggle('dropdown--active');
  });

  langBtnRef.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      dropDown.classList.toggle('dropdown--active');
    }
  });

  langBtnRef.addEventListener('blur', () => {
    dropDown.classList.toggle('dropdown--active');
  }
  );
})();
