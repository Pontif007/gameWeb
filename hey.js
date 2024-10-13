    function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
let interval;

function showSlide(index) {
    if (index >= slide.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slide.length - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

function stopAutoSlide() {
    clearInterval(interval);
}

// Start automatic sliding
startAutoSlide();

// Stop auto sliding on button click
document.querySelector('.prev').addEventListener('click', stopAutoSlide);
document.querySelector('.next').addEventListener('click', stopAutoSlide);

// Resume auto sliding when window is resized
window.addEventListener('resize', () => {
    showSlide(currentIndex);
});

////////////////////////////////////////////////////////////////

function goToPage() {
    window.location.href = "info.html";
}