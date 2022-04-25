"use strict";

 const operation = {
    type: null,
    operator1: 0,
    operator2: 0,
}

// Results
let operationResult = 0;

// DOM Elements
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const resultContainer = document.getElementById('resultContainer');
const resultElement = document.getElementById('result');
const resultErrorElement = document.getElementById('resultError');

// Core Functions
const sum = (a, b) => a + b;
const rest = (a, b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a/b;

const doOperation = (operationType) => {
    switch (operationType) {
        case 'sum':
            operationResult = sum(operation.operator1, operation.operator2);
            break;
        case 'minus':
            operationResult = rest(operation.operator1, operation.operator2);
            break;
        case 'multiply':
            operationResult = multiply(operation.operator1, operation.operator2);
            break;
        case 'divide':
            operationResult = divide(operation.operator1, operation.operator2);            
            break;
        default:
            break;
    }
}

function onClickOperation(operationType) {
    // Always hide error at click
    if (!resultError.classList.contains('hide')) {
        toggleHidden(resultError);
    }
    // Always display result
    if (resultContainer.classList.contains('hide')) {
        toggleHidden(resultContainer)
    }
    // Check input values is number
    let firstNumber = isNaN(number1.value) || number1.value === '' ? null : +number1.value;
    let secondNumber = isNaN(number2.value) || number2.value === '' ? null : +number2.value;
    if (firstNumber && secondNumber) {
        operation.operator1 = firstNumber;
        operation.operator2 = secondNumber;
        doOperation(operationType);
        printResults();
    } else {
        printError()
    }
}

function printResults() {
    resultElement.innerHTML = operationResult;
}

const toggleHidden = (domElement) => domElement.classList.toggle('hide');

function printError() {
    resultErrorElement.innerHTML = 'Sólo se admiten valores númericos';
    toggleHidden(resultErrorElement);
    toggleHidden(resultContainer);

}
