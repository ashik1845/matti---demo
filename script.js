document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const carouselContent = document.querySelector(".carousel-content img");
    
    const images = [
        "WhatsApp Image 2025-03-26 at 10.05.07 AM.jpeg",
        "image2.jpg",
        "image3.jpg"
    ];
    let currentIndex = 0;
    
    function updateImage() {
        carouselContent.src = images[currentIndex];
    }
    
    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });
    
    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });
    
    setInterval(function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 5000);
});
