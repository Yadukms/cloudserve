const industryImage = document.getElementById("industryImage");
const buttons = document.querySelectorAll(".industry-btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        const newImage = btn.getAttribute("data-image");

        // Fade-out → change → fade-in
        industryImage.style.opacity = 0;

        setTimeout(() => {
            industryImage.style.backgroundImage = `url('${newImage}')`;
            industryImage.style.opacity = 1;
        }, 200);
    });
});
