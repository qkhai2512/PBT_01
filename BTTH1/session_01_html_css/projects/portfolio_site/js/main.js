const skillBars = document.querySelectorAll(".skill-progress");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const progressBar = entry.target;
            const value = progressBar.getAttribute("data-width");

            progressBar.style.width = value;
        }
    });
}, {
    threshold: 0.5
});

skillBars.forEach((bar) => {
    observer.observe(bar);
});