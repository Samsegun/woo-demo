const menuBtn = document.getElementById("menu-icon");
const navWrapper = document.getElementById("page-nav");
const nav = document.getElementById("nav");
const menu = document.querySelector("nav .main-nav");
const modalLink = document.getElementById("modal-link");
const backdrop = document.querySelector(".backdrop");
const signinModal = document.querySelector(".popup-modal");

window.onscroll = function () {
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navWrapper.classList.add("nav-colored");
        nav.classList.add("close-padding");
    } else {
        navWrapper.classList.remove("nav-colored");
        nav.classList.remove("close-padding");
    }
};

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("translate-menu");
});

modalLink.addEventListener("click", () => {
    signinModal.classList.add("open");
    backdrop.classList.add("open");
});

backdrop.addEventListener("click", () => {
    signinModal.classList.remove("open");
    backdrop.classList.remove("open");
});
