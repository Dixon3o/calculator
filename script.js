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
    let numOne = prompt('First number: ');
    let numTwo = prompt('Second number: ');
    let ope = prompt('+, -, * or /: ');
    if(ope === '+'){
        console.log(add(numOne, numTwo));
    }else if(ope === '-'){
        console.log(subtract(numOne, numTwo));
    }else if(ope === '*'){
        console.log(multiply(numOne, numTwo));
    }else if (ope === '/'){
        console.log(divide(numOne, numTwo));
    }else{
        console.log('Choose only between 4 basic math operations.');
    }
}
operate();