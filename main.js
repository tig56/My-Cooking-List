'use strict';

{
    const open = document.getElementById('open');
    const menuBtn = document.querySelector('.menu-btn');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        menuBtn.classList.add('show');
        open.classList.add('hide');
     });

     close.addEventListener('click', () => {
        menuBtn.classList.remove('show');
        open.classList.remove('hide');
     });
}