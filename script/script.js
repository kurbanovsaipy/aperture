const body = document.querySelector('html');
const menuBtn = document.getElementById('menu_button');
const menu = document.querySelector('.menu');
let load = document.querySelector('.loading');

window.onload = function (){
    load.classList.add('hidden');
    setTimeout(() => {
        load.style.display = 'none';
    }, 3000);
};

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    body.classList.toggle('hidden');
    menu.classList.toggle('open');
});

/*-----------Скролл поверх страницы-------------*/ 
var {OverlayScrollbars} = OverlayScrollbarsGlobal;
const osInstance = OverlayScrollbars(document.querySelector('body'), {});