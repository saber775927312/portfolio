document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.querySelector(".theme-switcher");
    const moonIcon = themeSwitcher.querySelector(".fa-moon");
    const sunIcon = themeSwitcher.querySelector(".fa-sun");
    const body = document.body;

    // Theme switching logic
    themeSwitcher.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "light") {
            body.removeAttribute("data-theme");
            moonIcon.classList.add("active");
            sunIcon.classList.remove("active");
        } else {
            body.setAttribute("data-theme", "light");
            sunIcon.classList.add("active");
            moonIcon.classList.remove("active");
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Set active class for current section in navigation
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Initial active link setup
    if (window.location.hash) {
        const initialSection = document.querySelector(window.location.hash);
        if (initialSection) {
            initialSection.scrollIntoView({
                behavior: "smooth"
            });
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === window.location.hash) {
                    link.classList.add("active");
                }
            });
        }
    } else {
        // Set 'Home' as active if no hash is present
        document.querySelector(".nav-links a[href=\"#home\"]").classList.add("active");
    }
});
