let BurgerBtn = document.querySelector(".nav_adaptive_btn");

BurgerBtn.addEventListener("click", () => {
  BurgerBtn.classList.toggle("active");
  document.querySelector(".nav_right").classList.toggle("active");
});

let languageBtn = document.querySelectorAll(".language_btn");

languageBtn.forEach((element) => {
  element.addEventListener("click", () => {
    languageBtn.forEach((btn) => {
      if (btn !== element) {
        btn.classList.remove("active");
      }
    });
    element.classList.toggle("active");
  });
});
