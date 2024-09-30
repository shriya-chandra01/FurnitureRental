// JavaScript for responsive menu
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // Form validation for dates
    const form = document.getElementById("rental-form");
    const dateWarning = document.getElementById("date-warning");

    form.addEventListener("submit", function(event) {
        const pickupDate = new Date(document.getElementById("pickup-date").value);
        const returnDate = new Date(document.getElementById("return-date").value);

        // Reset warning
        dateWarning.style.display = "none";

        // Check if dates are valid and pickup date is before return date
        if (isNaN(pickupDate.getTime()) || isNaN(returnDate.getTime()) || pickupDate >= returnDate) {
            dateWarning.style.display = "block";
            event.preventDefault(); // Prevent form submission
        }
    });

    // Optional Scroll-to-Top Button
    document.addEventListener("scroll", function() {
        const scrollTopButton = document.getElementById("scroll-top-btn");

        if (window.scrollY > 500) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    document.getElementById("scroll-top-btn").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
