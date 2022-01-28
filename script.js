const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const outputNum = document.querySelector('.output-num');

const Add = (addend1, addend2) => addend1 + addend2;
const Subtract = (minuend, subtrahend) => minuend - subtrahend;
const Multiply = (multiplicand, multiplier) => multiplicand * multiplier;
const Divide = (dividend, divisor) => dividend / divisor;

let num1, num2, result, operation;
let num1Inputted = false;

numbers.forEach(number => {
    number.addEventListener('click', (e) => PlaceToOutput(e));
});


operators.forEach(operator => {
    operator.addEventListener('click', (e) => !num1Inputted ? SetFirstNumber(e) : Operate(num1));
});

const PlaceToOutput = (number) => outputNum.textContent += number.target.textContent;
const SetFirstNumber = (event) => {
    num1 = Number(outputNum.textContent);
    operation = event.target.id;
    outputNum.textContent = "";
    console.log(`first number is ${num1} and operation is ${operation}`);
    num1Inputted = true;
}

const Operate = (num1) => {
    num2 = Number(outputNum.textContent);
    outputNum.textContent = "";
    switch (operation) {
        case "add":
            result = Add(num1, num2);
            break;
        case "subtract":
            result = Subtract(num1, num2);
            break;
        case "multiply":
            result = Multiply(num1, num2);
            break;
        case "divide":
            result = Divide(num1, num2);
            break;
        default:
            outputNum.textContent = 'err';
    }

    outputNum.textContent = result;
    num1 = result;
    num1Inputted = false;
}

