$(document).ready(function () {

    $("#callBurger").on('click', function () {
        $('#burger').toggleClass('show');
        $('body').toggleClass('fixed');
        $('.burger__list-menu').toggleClass('scroll');
        event.preventDefault();
    });

    $("#close").on('click', function () {
        $('#burger').toggleClass('show');
        $('body').toggleClass('fixed');
        $('.burger__list-menu').toggleClass('scroll');
        event.preventDefault();
    });

});

let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.burger');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});