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

function clear() {
    currentValue = "";
    leftOperand = "";
    rightOperand = "";
    currentOperator = null;
}

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

//Display a number on calculator screen
function displayNumber(number) {
    display.textContent = Number(number);
};

//Add number to the display screen
function appendNumber(number) {
    currentValue += number.toString();
    displayNumber(currentValue);
}

function chooseOperator(operator) {
    currentOperator = operator;
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
let currentValue = "";
let leftOperand = "";
let rightOperand = "";
let currentOperator = null;

displayNumber(currentValue);

numberButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        appendNumber(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentOperator == null && leftOperand == "") {
            leftOperand = currentValue;
            currentValue = "";
            chooseOperator(button.id);
        } else if (currentValue == "") {
            chooseOperator(button.id);
            displayNumber(leftOperand);
        } else {
            rightOperand = currentValue;
            currentValue = "";
            leftOperand = operate(currentOperator, Number(leftOperand), Number(rightOperand));
            chooseOperator(button.id);
            displayNumber(leftOperand);
        };
    });
});

document.querySelector("#evaluate").addEventListener("click", () => {
    if (currentOperator == null || currentValue == "") {
        return;
    } else {
        rightOperand = currentValue;
        currentValue = "";
        leftOperand = operate(currentOperator, Number(leftOperand), Number(rightOperand));
        displayNumber(leftOperand);
        currentOperator = null;
    };
});

document.querySelector("#clear").addEventListener("click", () => {
    clear();
    displayNumber(currentValue);
});