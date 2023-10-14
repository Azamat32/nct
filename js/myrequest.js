const accordions = document.querySelectorAll(".request_accordoin_item_row");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    accordions.forEach((item) => {
      if (item !== this) {
        item.classList.remove("active");
        const content = item.nextElementSibling;
        content.classList.remove("active");
      }
    });

    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.classList.toggle("active");
  });
});
