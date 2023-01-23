const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const searchIcon = document.querySelector(".search-bar > i");

const closeBtn = document.querySelector(".search-top i:last-child");

const searchTop = document.querySelector(".search-top");

const container = document.querySelector(".container");

searchIcon.addEventListener("click", () => {
    container.classList.add("change");
});

closeBtn.addEventListener("click", () => {
    container.classList.remove("change");
});

const scrollUp = document.getElementById("scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});