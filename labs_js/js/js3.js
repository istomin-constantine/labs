function calc(numA, numB, operation){
 switch(operation){
    case '+':
        return numA + numB
    case '-':
        return numA - numB
    case '*':
        return numA * numB
    case '/':
        return numA / numB
    default:
       console.log('Unexpected operator') 
 }
}

let numberA = prompt('Input a number:', '')
let numberB = prompt('Input a number:', '')
let operation = prompt('Input operation (+, -, *, /):')

while(numberA.includes(',') || numberB.includes(',') || !Number.isInteger(parseInt(numberA)) || !Number.isInteger(parseInt(numberB))){
    
    numberA = prompt("Input a number:", numberA)
    numberB = prompt("Input a number:", numberB)
}
if (numberA.includes('.')){
    numberA = parseFloat(numberA)
}
if(numberB.includes('.')){
    numberB = parseFloat(numberB)
}

console.log(calc(numberA, numberB, operation))
