'use strict';

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const miscBtns = document.querySelectorAll('.misc');
const outputNum = document.querySelector('.output-num');
const outputPrev = document.querySelector('.output-prev');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('#decimal');


const Add = (addend1, addend2) => addend1 + addend2;
const Subtract = (minuend, subtrahend) => minuend - subtrahend;
const Multiply = (multiplicand, multiplier) => multiplicand * multiplier;
const Divide = (dividend, divisor) => dividend / divisor;

const Modulo = (dividend, divisor) => dividend % divisor;

let num1, num2, result, operation;
let num1Inputted = false;
let num2Inputted = false;
let hasOperated = false;

numbers.forEach(number => {
    number.addEventListener('click', (e) => PlaceToOutput(e));
});

operators.forEach(operator => {
    
    operator.addEventListener('click', (e) => {
        console.log(num1Inputted, num2Inputted, hasOperated);
        if (num1Inputted && !num2Inputted && !hasOperated) {
            Operate();
            hasOperated = false;
        }

        SetFirstNumber(e);
        num2Inputted = false;
        equals.disabled = false;
        decimal.disabled = false;
    });
});

miscBtns.forEach(miscBtn => {
    miscBtn.addEventListener('click', (e) => {
        switch (e.target.id) {
            case "ac":
                ResetCalc();
                break;
            case "backspace":
                Backspace();
                break;
            case "modulo":
                operation = "modulo"
        }
    })
})

equals.addEventListener('click', () => {
    console.log(num1Inputted, num2Inputted, hasOperated);

    if (!num1Inputted && !num2Inputted) {
        equals.disabled = true;
        hasOperated = false;
    }
    else if (num1Inputted && num2Inputted && !hasOperated) {
        equals.disabled = true;
    }
    else if (num1Inputted && !num2Inputted && !hasOperated) {
        Operate();
        hasOperated = false;
    }
});

decimal.addEventListener('click', () => {
    decimal.disabled = true;
})

const PlaceToOutput = (event) => outputNum.textContent += event.target.textContent;

const SetFirstNumber = (event) => {
    num1 = Number(outputNum.textContent);
    operation = event.target.id;
    outputNum.textContent = "";
    outputPrev.textContent = `${num1} ${event.target.textContent}`;
    num1Inputted = true;
}

const SetSecondNumber = () => {
    num2 = Number(outputNum.textContent);
    outputNum.textContent = "";
    outputPrev.textContent += ` ${num2}`;
    num2Inputted = true;
}

const Operate = () => {
    SetSecondNumber();
    
    switch (operation) {
        case "add":
            result = Number(Add(num1, num2).toFixed(1));
            break;
        case "subtract":
            result = Number(Subtract(num1, num2)).toFixed(1);
            break;
        case "multiply":
            result = Number(Multiply(num1, num2)).toFixed(1);
            break;
        case "divide":
            if (num2 !== 0) result = Number(Divide(num1, num2)).toFixed(1);
            else result = "error";
            break;
        case "modulo":
            result = Number(Modulo(num1, num2)).toFixed(1);
            break;
        default:
            outputNum.textContent = 'err';
        }
    
    console.log(num1, num2);
    outputNum.textContent = result;
    result = 0;
}

const ResetCalc = () => {
    outputNum.textContent = "";
    outputPrev.textContent = "";
    num1, num2, result = 0;
    equals.disabled = false;
    decimal.disabled = false;
    hasOperated = false;
    num1Inputted = false;
    num2Inputted = false;
    operation = "";
}

const Backspace = () => {
    let newNum = outputNum.textContent;
    newNum = newNum.slice(0, -1);
    outputNum.textContent = newNum;
}
