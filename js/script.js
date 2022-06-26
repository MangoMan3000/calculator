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

function appendNumber(number) {
    currentValue += number.toString();
};

function resetLeftOperand() {
    if (leftOperand == "To Infinity...AND BEYOND"){
        leftOperand = "";
    };
};

function setOperator(operator) {
    resetLeftOperand()
    if (currentOperator == null && leftOperand == "") {
        leftOperand = currentValue;
        currentValue = "";
        currentOperator = operator;
    } else if (currentValue == "") {
        currentOperator = operator;
        displayNumber(leftOperand);
    } else {
        performOperation();
        currentOperator = operator;
    };
    isDecimal = false;
};

function evaluateButton() {
    resetLeftOperand()
    if (currentOperator == null || currentValue == "") {
        return;
    } else {
        performOperation();
        currentOperator = null;
    };
};

function addDecimal() {
    if (isDecimal == false) {
        if (currentValue == "") {
            appendNumber("0.");
            isDecimal = true;
        } else {
            appendNumber(".");
        };
    };
    displayNumber(currentValue); 
};

function backspace() {
    resetLeftOperand()
    if (currentValue == "") {
        return;
    } else {
        currentValue = currentValue.slice(0,-1);
        displayNumber(Number(currentValue));
    };
};

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
        setOperator(button.id);
    });
});

//If clicking equals button, operate left and right operand
document.querySelector("#evaluate").addEventListener("click", () => {
    evaluateButton(); 
});

//If clicking clear button, clear all variables
document.querySelector("#clear").addEventListener("click", () => {
    clear();
    displayNumber(Number(currentValue));
});

//If clicking decimal, toggle on isDecimal variable, if on already, do nothing
document.querySelector("#decimal").addEventListener("click", ()=> {
    addDecimal()  ;
});

//If clicking Delete, slice last item from current value, display value
document.querySelector("#backspace").addEventListener("click", () => {
    backspace();
});

//Keyboard Support
window.addEventListener("keyup", (e) => {
    if (e.key >= 0 || e.key <= 9) {
        appendNumber(e.key);
        displayNumber(Number(currentValue));
    }
    switch (e.key) {
        case "/":
            setOperator("divide");
            break
        case "*":
            setOperator("multiply");
            break
        case "+":
            setOperator("add");
            break
        case "-":
            setOperator("subtract");
            break
    }
    if (e.key == "Enter") {
        evaluateButton();
    }
    if (e.key == ".") {
        addDecimal();
    }
    if (e.key == "Backspace") {
        backspace();
    }
    if (e.key == "Delete") {
        clear();
        displayNumber(Number(currentValue));
    }
});