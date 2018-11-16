// Array         0         1        2        3
var COLORS = ["yellow", "green", "black", "blue"];
var NAMES = ["Tom", "Pushok", "Luparik"];
var OWNERS = ["Top", "Bill", "John"];

function getRandomFromArray(array) {
    var random_number = Math.random() * array.length;
    var r_index = Math.floor(random_number);
    return array[r_index];
}

function getRandomColor() {
    return getRandomFromArray(COLORS);
}

function getRandomName() {
    return getRandomFromArray(NAMES);
}

function getRandomOwner() {
    return getRandomFromArray(OWNERS);
}

function createRandomCat() {
    var _cat = {
        name: getRandomName(),
        old: 3,
        color_eye: getRandomColor(),
        owner: getRandomOwner(),
        is_result: false
    };
    return _cat;
}

function getByColor(_cats, color) {
    //color "green"
    var result = [];
    for (var i = 0; i < _cats.length; i++) {
        var current_cat = _cats[i];
        if (current_cat.color_eye === color) {
            result.push(current_cat);
        }
    }
    return result;
}

function getFirstByColor(_cats, color) {
    for (var i = 0; i < _cats.length; i++) {
        if (_cats[i].color_eye === color) {
            return _cats[i];
        }
    }
}

var cats = [];
for (var i = 0; i < 1000; i++) {
    var cat = createRandomCat();
    cats.push(cat);
}
// cats = Array.length = 1000
var green_eye_cats = getByColor(cats, "green");
var green_eye_cat = getFirstByColor(cats, "gren");
console.log(green_eye_cat);
