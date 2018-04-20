

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly

   let fullName;
    
    this.setFirstName = function (first) {

    };
    this.setLastName = function (last) {

    };
    this.setFullName = function (firstAndLast) {
        console.log(firstAndLast);
        fullName = firstAndLast;
        console.log(fullName);
        };

    this.getFullName = function () {
       
        return fullName;
    };
    this.getFirstName = function () {
        return "";
    };
    this.getLastName = function () {
        return "";
    };
    
    return firstAndLast;
    
};

var bob = new Person('Bob Ross');
//bob.getFullName();
console.log(bob.getFullName());

function setFullNameButton1() {
    let fullNameInput = document.getElementById("nameField").value;
    console.log(fullNameInput);
    bob.setFullName(fullNameInput);
    //document.getElementById("result").innerHTML = "test1";
    

};

function getFullNameButton1() {
    document.getElementById("result").innerHTML = bob.getFullName();
    console.log(Object.keys(bob).length);
};

