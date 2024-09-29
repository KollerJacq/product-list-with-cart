const buttons = document.querySelectorAll(".btn");
const cartSymbol = document.querySelectorAll(".btnimg");
let minusSymbols = document.querySelectorAll(".minus");
let plusSymbols = document.querySelectorAll(".plus");

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "hsl(14, 86%, 42%)";
    button.style.color = "white";
    button.style.borderColor = "hsl(14, 86%, 42%)";
    button.querySelector(".add").textContent = "1";
    button.querySelector(".add").style.paddingRight = "30px";
    cartSymbol[index].style.display = "none";
    minusSymbols[index].style.display = "block";
    plusSymbols[index].style.display = "block";

    console.log(plusSymbols);
  });
});
