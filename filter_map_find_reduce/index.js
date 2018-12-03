Array.prototype.filter = function(cb) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    console.log("Custom filter");
    return result;
};

Array.prototype.map = function(cb) {
    var result = [];
    for (var i of this) {
        result.push(cb(i, this.indexOf(i), this));
    }
    return result;
};

var foo = [1, 2, 3, 4, 5];
// e1
var r = foo.filter(i => {
    // console.log(i);
    return i > 3;
});
// var r2 = foo.map(i => Math.pow());
console.log(r2);
