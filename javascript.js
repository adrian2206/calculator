let inputN1 = [];
let inputN2 = [];
let n1 = 0;
let n2 = 0;
let isCalculated = false;
let operator = null;

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function calculate(operator, n1, n2) {
    switch(operator) {
        case '+': return add(n1, n2);
        case '-': return subtract(n1, n2);
        case '*': return multiply(n1, n2);
        case '/': return divide(n1, n2);
    }
}

const display = document.querySelector('#display');
display.innerText = '0';

const digitHandler = (e) => {
    /* Start inputN1 */
    if(operator === null) {
        if(isCalculated) {
            inputN1 = [];
            isCalculated = false;       
        } 
        if(e.target.innerText === '.') {
            if(inputN1.includes('.')) return;

            if(inputN1.length === 0) {
                    inputN1.push('0');
            }

            inputN1.push(e.target.innerText);
            n1 = parseFloat(inputN1.join(''));
            display.innerText = inputN1.join('');
        } else {
            inputN1.push(e.target.innerText);
            n1 = parseFloat(inputN1.join(''));
            display.innerText = inputN1.join('');
            
        }
        /* Start inputN2 */
    } else if(operator !== null) {
        if(e.target.innerText === '.') {
            if(inputN2.includes('.')) return;
            if(inputN2.length === 0) {
                    inputN2.push('0');
            }
        } 
        inputN2.push(e.target.innerText);
        n2 = parseFloat(inputN2.join(''));
        display.innerText = `${inputN1.join('')}${operator}${inputN2.join('')}`;
    }
}

const digits = document.querySelectorAll('.digits button');
digits.forEach(button => {
    button.addEventListener('click', digitHandler);
});

const operatorHandler = (e) => {
    const equal = e.target.innerText
    if(equal === '=') {
        if(operator === null || inputN2.length === 0) return;
        const results = calculate(operator, n1, n2);
        display.innerText = results;
        n1 = results;
        inputN1 = results.toString().split('');
        inputN2 = [];
        operator = null;
        isCalculated = true;
    } else if(inputN2.length > 0){
        const results = calculate(operator, n1, n2);
        display.innerText = `${results}${operator}`;
        isCalculated = true;
        n1 = results;
        inputN1 = results.toString().split('');
        inputN2 = [];
        operator = e.target.innerText;
    }else {
        operator = e.target.innerText;
        display.innerText = `${inputN1.join('')}${operator}`;
    }
}

const operators = document.querySelectorAll('.operators button');
operators.forEach(button => {
    button.addEventListener('click', operatorHandler);
})

const clear = document.querySelector('#clear')
clear.addEventListener('click', (e) => {
    display.innerText = '0';
    n1 = 0;
    n2 = 0;
    inputN1 = [];
    inputN2 = [];
    isCalculated = false;
    operator = null;
})