let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Scroll down: hide navbar
        navbar.style.top = "-60px"; /* Move navbar out of view */
    } else {
        // Scroll up: show navbar
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll;
});
