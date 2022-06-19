//Operator functions

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

//Take numbers and operator to perform operator function
function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(Number(num1), Number(num2));
            break
        case "subtract":
            return subtract(Number(num1), Number(num2));
            break
        case "multiply":
            return multiply(Number(num1), Number(num2));
            break
        case "divide":
            return divide(Number(num1), Number(num2));
    };
};

function displayNumber(number) {
    display.textContent = Number(number);
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let leftOperand = 0;
let rightOperand = 0;
let currentOperator = "add";
displayNumber(rightOperand);

//Listen for button press
buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (!isNaN(button.textContent)) {
            rightOperand += button.textContent.toString();
            displayNumber(rightOperand);
        } else if (button.textContent == "C"){
            leftOperand = 0;
            rightOperand = 0;
            currentOperator = "add";
            displayNumber(rightOperand);
        } else if (button.className == "operator") {
            leftOperand = operate(currentOperator, leftOperand, rightOperand);
            displayNumber(leftOperand);
            rightOperand = 0;
            currentOperator = button.id;
        } else if (button.id == "evaluate") {
            leftOperand = operate(currentOperator, leftOperand, rightOperand);
            rightOperand = 0;
            displayNumber(leftOperand);
        }
    });
});