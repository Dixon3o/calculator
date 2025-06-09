function add(a, b){
    return +a + +b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}


let firstNumber = '';
let operator = '';
let secondNumber = '';
let isInteringSecondNum = false;
let result = '';

function operate(firstNumber, operator, secondNumber){
    if(operator === '+'){
        return (add(firstNumber, secondNumber));
    }else if(operator === '-'){
        return (subtract(firstNumber, secondNumber));
    }else if(operator === '*'){
        return (multiply(firstNumber, secondNumber));
    }else if (operator === '/'){
        return (divide(firstNumber, secondNumber));
    }
}
let display = document.querySelector('.displayText');
function populateDisplay(){
    let buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(!isNaN(e.target.textContent) && isInteringSecondNum === false){
                firstNumber += e.target.textContent;
                display.textContent += e.target.textContent;
            }else if(['+', '-', '*', '/'].includes(e.target.textContent)){
                if(firstNumber && secondNumber && operator){
                    result = operate(firstNumber, operator, secondNumber);
                    firstNumber = result.toString();
                    display.textContent = result;
                    secondNumber = '';
                }
                display.textContent = '';
                operator = e.target.textContent;
                isInteringSecondNum = true;
            }else if(!isNaN(e.target.textContent) && isInteringSecondNum ===true){
                secondNumber += e.target.textContent;
                display.textContent += e.target.textContent;
            }else if(e.target.textContent === '=' && firstNumber && secondNumber && operator){
                result = operate(firstNumber, operator, secondNumber);
                firstNumber = result.toString();
                isInteringSecondNum = false;
                operator = '';
                secondNumber = '';
                display.textContent = result;
            }else if(e.target.textContent === 'Clear'){
                firstNumber = '';
                secondNumber = '';
                isInteringSecondNum = false;
                operator = '';
                result = '';
                display.textContent = '';
            }
            
            
        });
    });
}
populateDisplay();