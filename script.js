const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const outputNum = document.querySelector('.output-num');
const miscBtns = document.querySelectorAll('.misc');
const equals = document.querySelector('.equals');

const Add = (addend1, addend2) => addend1 + addend2;
const Subtract = (minuend, subtrahend) => minuend - subtrahend;
const Multiply = (multiplicand, multiplier) => multiplicand * multiplier;
const Divide = (dividend, divisor) => dividend / divisor;

const Modulo = (dividend, divisor) => dividend % divisor;

let num1, num2, result, operation;
let num1Inputted = false;
let num2Inputted = false;

numbers.forEach(number => {
    number.addEventListener('click', (e) => PlaceToOutput(e));
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!num1Inputted) SetFirstNumber(e);
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
    SetSecondNumber();

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
        case "modulo":
            result = Modulo(num1, num2);
            break;
        default:
            outputNum.textContent = 'err';
    }

    console.log(num1, num2);
    outputNum.textContent = result;
});



const PlaceToOutput = (number) => outputNum.textContent += number.target.textContent;

const SetFirstNumber = (event) => {
    num1 = Number(outputNum.textContent);
    operation = event.target.id;
    outputNum.textContent = "";
    console.log(`first number is ${num1} and operation is ${operation}`);
    num1Inputted = true;
}

const SetSecondNumber = () => {
    num2 = Number(outputNum.textContent);
    outputNum.textContent = "";
    console.log(`second number is ${num2}`);
    num2Inputted = true;
}

const ResetCalc = () => {
    outputNum.textContent = "";
    num1, num2, result = 0;
    num1Inputted = false;
    num2Inputted = false;
    operation = "";
}


// const Operate = (num1) => {
//     num2 = Number(outputNum.textContent);
//     outputNum.textContent = "";
//     switch (operation) {
//         case "add":
//             result = Add(num1, num2);
//             break;
//         case "subtract":
//             result = Subtract(num1, num2);
//             break;
//         case "multiply":
//             result = Multiply(num1, num2);
//             break;
//         case "divide":
//             result = Divide(num1, num2);
//             break;
//         default:
//             outputNum.textContent = 'err';
//     }

//     outputNum.textContent = result;
//     num1 = result;
//     num1Inputted = false;
// }

