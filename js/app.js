var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
document.querySelector('.language-btn').addEventListener("click", () => {
    document.querySelector(".language-items").classList.toggle("active")
});
document.querySelector(".sing-list-item").addEventListener("click", () => {
    document.querySelector(".sing-in-remove").classList.add("active-singin");


});
document.querySelector('.removeItem').addEventListener("click", () => {
    document.querySelector(".sing-in-remove").classList.remove("active-singin");

})
document.querySelector('.watch-list-item').addEventListener("click", () => {
    document.querySelector(".movie-list-items").classList.add("movie-activ");

});
document.querySelector('.remove-movie-list').addEventListener("click", () => {
    document.querySelector(".movie-list-items").classList.remove("movie-activ");

});
document.querySelector(".menu-bar").addEventListener('click', () => {
    document.querySelector(".header-left-item").classList.toggle("active-header");

})
