const testimonials = document.querySelectorAll(".op-child");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {

        testimonials.forEach(item => {
            item.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        testimonials[index].classList.add("active");
        dot.classList.add("active");
    });
});


// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".s");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});