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

//Function to clear stored variables
function clear() {
    currentValue = 0;
    storedValue = null;
    currentOperator = null;
}

//Take numbers and operator to perform operation
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
};

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
let currentValue = '';
let storedValue = null;
let currentOperator = null;
displayNumber(currentValue);

numberButtons.forEach(button => {
    button.addEventListener("click", ()=> {
        appendNumber(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        chooseOperator(button.id);
    });
});

// //Listen for button press
// buttons.forEach(button => {
//     button.addEventListener("click", e => {
//         if (!isNaN(button.textContent)) {
//             currentValue+= button.textContent.toString();
//             displayNumber(currentValue);
//         } else if (button.textContent == "C"){
//             clear();
//             displayNumber(currentValue);
//         } else if (button.className == "operator") {
//             if (currentOperator == null && storedValue == null) {
//                 storedValue = currentValue;
//                 currentValue = 0;
//                 currentOperator = button.id;
//             } else if (currentOperator == null) {
//                 currentOperator = button.id;
//             } else {
//                 storedValue = operate(currentOperator, storedValue, currentValue);
//                 currentOperator = button.id;
//                 currentValue = 0;
//                 displayNumber(storedValue);
//             }
//         } else if (button.id == "evaluate") {
//             if (currentOperator == null && storedValue == null) {
//                 storedValue = currentValue;
//                 displayNumber(storedValue);
//                 currentValue = 0;
//             } else if (currentOperator == null){
//                 displayNumber(storedValue);
//                 currentValue = 0;
//             } else {
//                 storedValue = operate(currentOperator, storedValue, currentValue);
//                 displayNumber(storedValue);
//                 currentValue = 0;
//                 currentOperator = null;
//             };
//         };
//     });
// });