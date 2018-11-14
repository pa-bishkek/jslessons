// Array         0         1        2        3
var COLORS = ["yellow", "green", "black", "blue"];
var NAMES = ["Tom", "Pushok", "Luparik"];
var OWNERS = ["Top", "Bill", "John"];

function getRandomFromArray(array) {
    var random_number = Math.random() * (array.length - 1);
    var r_index = Math.round(random_number);
    return array[r_index];
}

function getRandomColor() {
    return getRandomFromArray(COLORS);
}

function getRandomName() {
    var random_name = getRandomFromArray(NAMES);
    return random_name;
}

function getRandomOwner() {
    return getRandomFromArray(OWNERS);
}

function createRandomCat() {
    var _cat = {
        name: getRandomName(),
        old: 3,
        color_eye: getRandomColor(),
        owner: getRandomOwner()
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

var cats = [];
for (var i = 0; i < 1000; i++) {
    var cat = createRandomCat();
    cats.push(cat);
}
// cats = Array.length = 1000
var green_eye_cats = getByColor(cats, "green");
console.log(green_eye_cats);
