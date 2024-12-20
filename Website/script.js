document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        stopSlideShow();
        startSlideShow(); // Restart slideshow setelah interaksi manual
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        stopSlideShow();
        startSlideShow(); // Restart slideshow setelah interaksi manual
    });

    // Mulai slideshow otomatis
    startSlideShow();

    // Opsional: Hentikan slideshow saat kursor di atas slider
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);
});

