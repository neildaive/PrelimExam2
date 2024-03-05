document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');

    carousels.forEach((carousel, index) => {
        let currentIndex = 0;

        function showImage(index) {
            const itemWidth = carousel.querySelector('img') ? carousel.querySelector('img').clientWidth : 0;
            carousel.style.transform = `translateX(${-index * itemWidth}px)`;
        }

        function prevImage() {
            const totalImages = carousel.querySelectorAll('img').length;
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }

        function nextImage() {
            const totalImages = carousel.querySelectorAll('img').length;
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        prevBtns[index].addEventListener('click', prevImage);
        nextBtns[index].addEventListener('click', nextImage);
    });
});
