const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const outputNum = document.querySelector('.output-num');
const outputPrev = document.querySelector('.output-prev');
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
let initialState = true;

numbers.forEach(number => {
    number.addEventListener('click', (e) => PlaceToOutput(e));
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!num1Inputted) {
            SetFirstNumber(e);
            num2Inputted = false;
            equals.disabled = false;
        }
        else if (num1Inputted && num2Inputted && initialState) {
            Operate();
            outputPrev.textContent = `${result} ${e.target.textContent}`;
            outputNum.textContent = "";
        }
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
    if (!num1Inputted && initialState) equals.disabled = true;
    else if (num1Inputted && num2Inputted && !initialState) {
        equals.disabled = true;
    }
    else {
        equals.disabled = false;
        Operate();
    }

    console.log(num1Inputted, num2Inputted);
});



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
    initialState = false;
}

const ResetCalc = () => {
    outputNum.textContent = "";
    outputPrev.textContent = "";
    num1, num2, result = 0;
    equals.disabled = false;
    num1Inputted = false;
    num2Inputted = false;
    operation = "";
}

const Backspace = () => {
    let newNum = outputNum.textContent;
    newNum = newNum.slice(0, -1);
    outputNum.textContent = newNum;
}

