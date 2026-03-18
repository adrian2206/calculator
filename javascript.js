let num1;
let num2; 
let operator;

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

console.log(operate(2, '/', 5));