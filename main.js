//changing the nav bar scroll style
window.addEventListener("scroll", function () {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

///// show hide faq answer.

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", function () {
    faq.classList.toggle("open");

    ///changing the icon when toggled
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") icon.className = "uil uil-minus";
    else icon.className = "uil uil-plus";
  });
});

////////////////////////////////////////

//show/hide nav menu

const menu = document.querySelector(".nav__menu");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const openMenuBtn = document.querySelector("#open-menu-btn");

openMenuBtn.addEventListener("click", function () {
  menu.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", function () {
  menu.style.display = "none";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
});
