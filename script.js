// 1. Smooth Scroll from Button to Menu
document.getElementById('scroll-btn').addEventListener('click', function() {
    document.getElementById('menu').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// 2. Accordion Logic (Click category to show items)
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', function() {
        // Toggle the 'active' class on the clicked category
        this.classList.toggle('active');
    });
});

// 3. Back to Top Button Logic
const backToTopBtn = document.getElementById("back-to-top");

// Listen for scrolling
window.addEventListener('scroll', function() {
    // If the user scrolls down more than 300 pixels, show the button
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// When the user clicks the button, scroll to the top
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});