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

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}