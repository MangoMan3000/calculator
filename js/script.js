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

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

//Listen for button press
buttons.forEach(button => {
    button.addEventListener("click", e => {
        console.log(button.textContent);
    });
});