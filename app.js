document.addEventListener("DOMContentLoaded", function () {
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Initially hide scroll-up button
    scrollUpBtn.style.display = "none";

    // Show / hide scroll-up button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollUpBtn.style.display = "flex";
        } else {
            scrollUpBtn.style.display = "none";
        }
    });

    // Scroll to top when scroll-up button clicked
    scrollUpBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Smooth scroll for all anchor links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            // Skip external links or empty #
            if (!targetId.startsWith("#") || targetId === "#") return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Skip phone links
    if (anchor.getAttribute("href").startsWith("tel:")) return;
    
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


