

var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly


    let fullNameArray = firstAndLast.split(" ");

    this.setFirstName = function (first) {
        fullNameArray[0] = first;
    };
    this.setLastName = function (last) {
        fullNameArray[1] = last;
    };
    this.setFullName = function (firstAndLast) {
        console.log(firstAndLast);
        fullNameArray = firstAndLast.split(" ");
        console.log(fullNameArray);
    };
    this.getFullName = function () {
        return fullNameArray.join(" ");
    };
    this.getFirstName = function () {
        return fullNameArray[0];
    };
    this.getLastName = function () {
        return fullNameArray[1];
    };

    //return firstAndLast;

};

var bob = new Person('Bob Ross');
var yosi = new Person('yosi mosi');
//bob.getFullName();
console.log(bob.getFullName());
console.log(bob);
console.log(yosi.getFullName());
console.log(Person);

function setFullNameButton1() {
    //let fullNameInput = document.getElementById("nameField").value;
    //console.log(fullNameInput);
    bob.setFullName(document.getElementById("nameField").value);
    //document.getElementById("result").innerHTML = "test1";
};
function setFirstNameButton1() {
    let firstNameInput = document.getElementById("nameField").value;
    console.log(firstNameInput);
    bob.setFirstName(firstNameInput);
    //document.getElementById("result").innerHTML = "test1";
};
function setLastNameButton1() {
    let lastNameInput = document.getElementById("nameField").value;
    console.log(lastNameInput);
    bob.setLastName(lastNameInput);
    //document.getElementById("result").innerHTML = "test1";
};

function getFullNameButton1() {
    document.getElementById("result").innerHTML = bob.getFullName();
    console.log(Object.keys(bob).length);
    console.log(bob.getFullName());
console.log(yosi.getFullName());
};

function getFirstNameButton1() {
    document.getElementById("result").innerHTML = bob.getFirstName();
    console.log(Object.keys(bob).length);
};

function getLastNameButton1() {
    document.getElementById("result").innerHTML = bob.getLastName();
    console.log(Object.keys(bob).length);
};
console.log(bob);
console.log(yosi);