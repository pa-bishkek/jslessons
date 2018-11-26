function Animal(name) {
    this.name = name;
    this.breathe_sound = "Zzzzz";
}
Animal.prototype.breathe = function() {
    console.log(this.breathe_sound);
};

function Dog(name) {
    // this = {}
    var self = this;
    Animal.apply(self, arguments);
    this.paw_count = 4;
    this.breathe_sound = "ZZZZZZZZ";
}
Dog.prototype.__proto__ = Animal.prototype;
Dog.prototype.protect = function() {
    console.log("Protect");
};

var d = new Dog("Chappie");
d.breathe();
