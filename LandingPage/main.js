const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open");
});

// constant for scroll reveal option -- orgin, distance, and duration
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content  h1", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".header__content header__btn", {
    ...scrollRevealOption,
    delay: 1500,
});

//reaveals 1 feature card ever 0.30 secs ever, time to reveal at 2.5secs
ScrollReveal().reveal(".feature__card", {
    duration: 1750,
    interval: 500,
});

ScrollReveal().reveal(".tech__content .section__header", {
    ...scrollRevealOption,
    
});
ScrollReveal().reveal(".tech__content  p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".tech__btn", {
    ...scrollRevealOption,
    delay: 850,
});


const swiper  = new Swiper (".swiper", {
    slidesPerView:"auto",
    spaceBetween: 0,
});

ScrollReveal().reveal(".discount__content .section__header", {
    ...scrollRevealOption,
    
});
ScrollReveal().reveal(".discount__content  p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".discount__btn", {
    ...scrollRevealOption,
    delay: 805,
});