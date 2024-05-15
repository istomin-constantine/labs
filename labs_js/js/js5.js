function createNewUser(){
    var _firstname = prompt('Input name:','Constantine');
    var _lastname  = prompt('Input lastname:','Istomin');
    var _birthday = prompt('Input birthday (dd.mm.yyyy):','[REDACTED]');

    this.setFirstName = function(newFirstname){
        _firstname = newFirstname;
    };
    this.setLastName = function(newLastname){
        _lastname = newLastname;
    };
    this.setBirthday = function(newBirthday){
        _birthday = newBirthday;
    };
    this.getFirstName = function(){
        return _firstname;
    };
    this.getLastName = function(){
        return _lastname;
    };
    this.getBirthday = function(){
        return _birthday;
    };
    this.getLogin = function(){
        return this.getFirstName().toLowerCase()[0] + this.getLastName().toLowerCase();
    };
    this.getAge = function(){
        var today = new Date();
        var userDOB = _birthday.split('.')
        var millisecondDifference = today.getTime() - new Date(userDOB[2], userDOB[1], userDOB[0]).getTime()
        var yearDiff = millisecondDifference/1000/60/60/24/365.25;
        return yearDiff.toFixed(2);
    }
    this.getPassword = function(){
        return this.getFirstName().toUpperCase()[0] + this.getLastName().toLowerCase() + this.getBirthday().slice(-4);
    }
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
console.log(user.getAge())
console.log(user.getPassword())