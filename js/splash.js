let logo = document.getElementById("splash-logo");
let title = document.getElementById("title");
let vision = document.querySelector(".vision p");

window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        logo.classList.add("logo-animation");
        setTimeout(() => {
            title.classList.add("title-animation");
            setTimeout(() => {
                vision.classList.add("fade-out"); // Fade-out animation for vision
                setTimeout(() => {
                    window.location.href = "home.html";
                }, 2000); // Redirect to home page after 2 seconds of fade-out animation
            }, 1000);
        }, 1000);
    }, 500);
});
