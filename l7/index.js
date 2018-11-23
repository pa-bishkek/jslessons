function Room() {
    this.persons = [];
    this.addPerson = function(p) {
        this.persons.push(p);
    };
}

function Person(fn, ln) {
    // console.log(this) <-
    this.firstName = fn;
    this.lastName = ln;
    this.old = 3;
    this.getFullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

var p1 = new Person("John", "Lennon");
var p2 = new Person("Paul", "McCartney");

console.log(p1.getFullName());
