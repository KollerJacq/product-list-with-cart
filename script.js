const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "hsl(14, 86%, 42%)";
    button.style.color = "white";
    button.textContent = "1";
  });
});
