
// MOBILE NAVIGATION

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile__nav-toggle");
const primaryNav = document.getElementById("primary-navigation");

navToggle.addEventListener("click", () => {
    
    primaryNav.hasAttribute("data-visible")
    ?
    navToggle.setAttribute("aria-expanded", false)
    :
    navToggle.setAttribute("aria-expanded", true);

    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});
