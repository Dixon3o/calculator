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

let firstNumber;
let operator;
let secondNumber;

function operate(){
    firstNumber = prompt('First number: ');
    secondNumber = prompt('Second number: ');
    operator = prompt('+, -, * or /: ');
    if(operator === '+'){
        console.log(add(firstNumber, secondNumber));
    }else if(operator === '-'){
        console.log(subtract(firstNumber, secondNumber));
    }else if(operator === '*'){
        console.log(multiply(firstNumber, secondNumber));
    }else if (operator === '/'){
        console.log(divide(firstNumber, secondNumber));
    }else{
        console.log('Choose only between 4 basic math operations.');
    }
}
