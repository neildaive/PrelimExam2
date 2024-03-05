document.addEventListener("DOMContentLoaded", function () {
    // Fetch and inject the common header into the body
    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);

            const header = document.querySelector('header');

            // Add a class to the header when it is about to be scrolled
            window.addEventListener("scroll", function () {
                header.classList.toggle('sticky', window.scrollY > 0);
            });
        });
});
