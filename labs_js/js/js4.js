function createNewUser(){
    let _firstname = prompt('Input name:','');
    let _lastname  = prompt('Input lastname:','');

    this.setFirstName = function(newFirstname){
        _firstname = newFirstname;
    };
    this.setLastName = function(newLastname){
        _lastname = newLastname;
    };
    this.getFirstName = function(){
        return _firstname;
    };
    this.getLastName = function(){
        return _lastname;
    };
    this.getLogin = function getLogin(){
        return this.getFirstName().toLowerCase()[0] + this.getLastName().toLowerCase();
    };
}


var user = new createNewUser();
console.log(user)
console.log(user.getLogin())
console.log(user.getFirstName())
console.log(user.getLastName())

user._firstname = 'Jeff'
console.log(user.getFirstName())
user.setFirstName('Jeff')
console.log(user.getFirstName())
