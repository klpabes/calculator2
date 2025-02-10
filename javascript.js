'use strict'   

const btnNums = document.querySelectorAll('.btn-number');
const display = document.querySelector('.calculator-display');
const btnOperate = document.querySelector('#btn-equals');
const btnOperators = document.querySelectorAll('.btn-operator');
const btnClear = document.querySelector('#btn-clear');
const btnPeriod = document.querySelector('#btn-period');
const btnSign = document.querySelector('#btn-sign');
const btnPercent = document.querySelector('#btn-percent');

let num1, num2, operation, sum;

btnNums.forEach(number => {
    number.addEventListener("click", (e) => {
            if (display.innerText.length <= 12) display.innerText += number.innerText;
    })
});

btnOperators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if (display.textContent) {
            num1 = display.textContent;
            display.textContent = '';
            operation = operator.textContent;
        }

    })
})

btnOperate.addEventListener("click", (e) => {
    if(num1 && operation && display.textContent) {
        num2 = display.textContent;
        display.textContent = operate(+num1, +num2, operation);
    }
})

btnClear.addEventListener('click', (e) => {
    num1 = '';
    num2 = '';
    operation = '';
    display.textContent = '';
})

btnPeriod.addEventListener('click', (e) => {
    if (display.textContent && !display.textContent.includes('.')) {
        display.textContent += '.';
    }
})

btnSign.addEventListener('click', (e) => {
    if(display.innerText) display.innerText = display.innerText * -1; 
})

btnPercent.addEventListener('click', (e) => {
    if(display.innerText) display.innerText = (display.innerText/100).toString();
})

document.addEventListener('keydown', (e) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (numbers.indexOf(e.key)!=-1) {
        display.textContent += e.key;
    }
})

document.addEventListener('keydown', (e) => {
   if (e.key === 'Backspace') {
    display.textContent = display.textContent.slice(0, -1);
   }
})

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) return 'ERROR';
    return a / b;
}

function operate (a, b, operator) {
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}