/* Global variables */

let num1 = 0;
let num2 = 0;
let operator;
let inputDigits1 = [];
let inputDigits2 = [];
let justCalculated = false;

/* Body */

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if(num2 === 0){
        return `Don't do that!`
    } else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2) {
    switch(operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

const digitHandler = (e) => {
    if (justCalculated) {
        num1 = 0;
        num2 = 0;
        inputDigits1 = [];
        inputDigits2 = [];
        justCalculated = false;
    }

    if(operator === undefined) {
        inputDigits1.push(e.target.innerText);
        num1 = parseFloat(inputDigits1.join(''));
        const display = document.querySelector('#display');
        display.innerText = num1;
        return num1;
    } else if(operator != undefined && operator != '=') {
        inputDigits2.push(e.target.innerText);
        num2 = parseFloat(inputDigits2.join(''));
        const display = document.querySelector('#display');
        display.innerText = `${num1} ${operator} ${num2}`;
        return num2;
    }
}

const operatorHandler = (e) => {
    const clickedOperator = e.target.innerText;

    if (clickedOperator === '=') {
        if (operator !== undefined && inputDigits2.length > 0) {
            const result = operate(operator, num1, num2);
            display.innerText = result;
            num1 = result;
            num2 = 0;
            operator = undefined;
            inputDigits1 = [];
            inputDigits2 = [];
            justCalculated = true;  // ← flag
        }
    } else {
        if (operator !== undefined && inputDigits2.length > 0) {
            num1 = operate(operator, num1, num2); 
            display.innerText = num1;
            inputDigits2 = [];
        }
        justCalculated = false;
        operator = clickedOperator;
        display.innerText = `${num1} ${operator}`;
    }
};

const digits = document.querySelectorAll('.digits button');
digits.forEach(button => {
    button.addEventListener('click', digitHandler);
});

const operators = document.querySelectorAll('.operators button');
operators.forEach(button => {
    button.addEventListener('click', operatorHandler )
});

const reset = (e) => {
    num1 = 0;
    num2 = 0;
    inputDigits1 = [];
    inputDigits2 = [];
    justCalculated = false;
    display.innerText = 0;
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', reset);