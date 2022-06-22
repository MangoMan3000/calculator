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
    isDecimal = false;
}

function operate(operator, num1, num2) {
    if (operator == "divide" && Number(num2) == 0) {
        return "To Infinity...AND BEYOND"
    }
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

function performOperation() {
    rightOperand = currentValue;
    currentValue = "";
    leftOperand = operate(currentOperator, Number(leftOperand), Number(rightOperand));
    displayNumber(leftOperand);
    isDecimal = false;
}

function displayNumber(number) {
    display.textContent = number;
};

//Add text.Content of clicked button to the display screen
function appendNumber(number) {
    currentValue += number.toString();
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
let isDecimal = false;

displayNumber(0);

//If clicking button, add number to calculator display
numberButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        appendNumber(button.textContent);
        displayNumber(Number(currentValue));
    });
});

//If clicking operator buttons, choose set current operator and perform operation if required
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (leftOperand == "To Infinity...AND BEYOND"){
            leftOperand = "";
        }
        if (currentOperator == null && leftOperand == "") {
            leftOperand = currentValue;
            currentValue = "";
            chooseOperator(button.id);
        } else if (currentValue == "") {
            chooseOperator(button.id);
            displayNumber(leftOperand);
        } else {
            performOperation();
            chooseOperator(button.id);
        };
        isDecimal = false;
    });
});

//If clicking equals button, operate left and right operand
document.querySelector("#evaluate").addEventListener("click", () => {
    if (leftOperand == "To Infinity...AND BEYOND"){
        leftOperand = "";
    }
    if (currentOperator == null || currentValue == "") {
        return;
    } else {
        performOperation();
        currentOperator = null;
    };
});

//If clicking clear button, clear all variables
document.querySelector("#clear").addEventListener("click", () => {
    clear();
    displayNumber(Number(currentValue));
});

//If clicking decimal, toggle on isDecimal variable, if on already, do nothing
document.querySelector("#decimal").addEventListener("click", ()=> {
    if (isDecimal == false) {
        if (currentValue == "") {
            appendNumber("0.");
            isDecimal = true;
        } else {
            appendNumber(".");
        }
    }
    displayNumber(currentValue);   
});