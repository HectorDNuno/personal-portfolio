const accordionOption = document.querySelectorAll(".accordion-option");

accordionOption.forEach((option) => {
  option.addEventListener("click", () => {
    option.classList.toggle("active");
  });
});
