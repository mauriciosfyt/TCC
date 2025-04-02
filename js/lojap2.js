document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,  
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000, // Pequeno aumento para acompanhar a transição
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        speed: 1200, // Sincronizado com a transição do CSS
        effect: 'slide',
    });
});
