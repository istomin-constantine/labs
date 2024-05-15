let name = prompt('Input your name:', '');
let age = prompt('Input your age:', '');

while(!Number.isInteger(parseInt(age)) || name.length === 0){
    alert('while')
    name = prompt('Input your name:', name);
    age = prompt('Input your age:', age);
}

if (age < 18){
    alert("You are not allowed to visit this website");
}
else if(18 < age && age <= 22){
    let isSure = confirm('Are you sure you want to continue?')
    if (isSure){
        alert("Welcome"+ " " + name);
    }
    else{
        alert("You are not allowed to visit this website");
    }
}
else{
    alert("Welcome"+ " " + name);
}

