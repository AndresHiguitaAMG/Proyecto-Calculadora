const showPreviousValue = document.getElementById("previous-value");
const showCurrentValue = document.getElementById("current-value");
const numbersButton = document.querySelectorAll(".number");
const operatorsButton = document.querySelectorAll(".operator");

const display = new Display(showPreviousValue, showCurrentValue);

numbersButton.forEach(button => {
    button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

operatorsButton.forEach(btn => {
    btn.addEventListener("click", () => display.compute(btn.value))
});

