const buttons = document.querySelectorAll(".btn");
const minusSymbol = document.querySelectorAll(".minus");
const plusSymbol = document.querySelectorAll(".plus");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "hsl(14, 86%, 42%)";
    button.style.color = "white";
    button.style.borderColor = "hsl(14, 86%, 42%)";
    button.textContent = "1";

    minusSymbols[index].style.display = "block";
    plusSymbols[index].style.display = "block";
  });
});
