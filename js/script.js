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
        case '+':
            return add(num1, num2);
            break
        case '-':
            return subtract(num1, num2);
            break
        case '*':
            return multiply(num1, num2);
            break
        case '/':
            return divide(num1, num2);
    };
};

function displayNumber(number) {
    display.textContent = Number(number);
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let displayValue = 0;
let leftOperand = null;
let rightOperand = null;
let currentOperator = null;
displayNumber(displayValue);

//Listen for button press
buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (!isNaN(button.textContent)) {
            displayValue += button.textContent.toString();
            displayNumber(displayValue);
        } else if (button.textContent == 'C'){
            displayValue = '0';
            display.textContent = Number(displayValue);
        }   
    });
});