const topBar = document.getElementById("topBar");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        // Hide top bar
        topBar.classList.add(
            "opacity-0",
            "h-0",
            "py-0"
        );

        // Navbar compact style
        navbar.classList.add(
            "shadow-md",
            "py-3"
        );

        navbar.classList.remove("py-5");

    } else {

        // Show top bar
        topBar.classList.remove(
            "opacity-0",
            "h-0",
            "py-0"
        );

        // Reset navbar
        navbar.classList.remove(
            "shadow-md",
            "py-3"
        );

        navbar.classList.add("py-5");
    }

});