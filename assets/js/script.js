'use strict';







// variaveis notification toast
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// eventListener notification toast
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





