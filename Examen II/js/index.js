let currentInput = "";
let currentOperator = "";
let currentResult = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput !== "") {
    currentOperator = operator;
    currentResult = parseFloat(currentInput);
    currentInput = "";
    updateDisplay();
  }
}

function calculate() {
  if (currentInput !== "") {
    const inputNumber = parseFloat(currentInput);
    switch (currentOperator) {
      case "+":
        currentResult += inputNumber;
        break;
      case "-":
        currentResult -= inputNumber;
        break;
      case "*":
        currentResult *= inputNumber;
        break;
      case "/":
        currentResult /= inputNumber;
        break;
    }
    currentInput = currentResult.toString();
    currentOperator = "";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  currentResult = 0;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value =
    currentInput !== ""
      ? currentInput
      : currentOperator !== ""
      ? currentOperator
      : currentResult;
}
