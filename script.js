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
    if(+b === 0){
        return 'do not divide with 0';
    }
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

function populateDisplay(){
    let display = document.querySelector('.displayText');
    let buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(isNaN(display.textContent) && !isNaN(e.target.textContent)){
                firstNumber = '';
                secondNumber = '';
                operator = '';
                isInteringSecondNum = false;
                result = '';
                display.textContent = '';
            }
            if(!isNaN(e.target.textContent) && isInteringSecondNum === false){
                firstNumber += e.target.textContent;
                display.textContent += e.target.textContent;
            }else if(['+', '-', '*', '/'].includes(e.target.textContent)){
                if(!firstNumber) return;
                if((firstNumber && secondNumber && operator) || (firstNumber && operator)){
                    result = operate(firstNumber, operator, secondNumber);
                    firstNumber = result.toString();
                    display.textContent = result;
                    secondNumber = '';        
                }
                operator = e.target.textContent;
                isInteringSecondNum = true;
            }else if(!isNaN(e.target.textContent) && isInteringSecondNum ===true){
                secondNumber += e.target.textContent;
                display.textContent = secondNumber;
            }else if(e.target.textContent === '=' && firstNumber && secondNumber && operator){
                result = operate(firstNumber, operator, secondNumber);
                if(typeof result === 'string'){
                    display.textContent = result;
                    firstNumber = '';
                    isInteringSecondNum = false;
                    operator='';
                    secondNumber='';
                    return;
                }
                firstNumber = result.toString();
                isInteringSecondNum = false;
                secondNumber = '';
                operator = '';
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