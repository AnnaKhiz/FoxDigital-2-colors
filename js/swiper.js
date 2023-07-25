var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    lazy: true,
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    mousewheel: true,
    keyboard: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets'
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: "horizontal"
        },
        // when window width is >= 480px
        1101: {
            slidesPerView: 2,
            spaceBetween: 20,
            direction: "horizontal"
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 20,
            direction: "vertical"
        },
    }
});
