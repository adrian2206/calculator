let num1;
let num2; 
let operator;
let digitClicks = 0;

function add(num1,num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1,num2) {
    const difference = num1 - num2;
    return difference;
}

function multiply(num1,num2) {
    const product = num1 * num2;
    return product;
}

function divide(num1,num2) {
    const quotient = num1 / num2;
    return quotient;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: return "Operator invalid";
    }
}

const digitHandler = (e) => {const digit = e.target;
    value = parseInt(e.target.innerText);
    digit.style.backgroundColor = "green";
    if(num1 === undefined) {
        num1 = value;
    } else {
        num2 = value;
        digits.removeEventListener("click", (e));
    }
    digitClicks++;
    if(digitClicks >= 2) {
        digits.removeEventListener("click", digitHandler);
    }
}

const digits = document.querySelector('.digits');
digits.addEventListener("click", digitHandler);

const operatorHandler = (e) => {
    operator = e.target.innerText;
}

const operators = document.querySelector('.operators');
operators.addEventListener('click', operatorHandler);

