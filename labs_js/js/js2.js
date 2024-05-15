function task2(){
    let number = prompt("Input a number:", '')

    while(number.includes(',') || !Number.isInteger(parseFloat(number))){
    number = prompt("Input a number:", '')
    }

    if (number < 5){
        alert('Sorry, no numbers')
    }
    else {
        for (let i = 0;i <= number; i+=5){
        console.log(i)
        }
    }
}

function isPrime(number){
    if (number % 2 == 0){
        return false
    }
    for (let i = 3; i < number; i += 2){
        if(number % i == 0){
            return false
        }
    }
    return true
}

function task2_1(){
    let numberA = prompt('Input a number:', '')
    let numberB = prompt('Input a number:', '')

    while(numberA.includes(',') || numberB.includes(',') || !Number.isInteger(parseFloat(numberA)) || !Number.isInteger(parseFloat(numberB))){
        numberA = prompt("Input a number:", numberA)
        numberB = prompt("Input a number:", numberB)
    }

    for(let i = numberA; i < numberB; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
task2();
task2_1();