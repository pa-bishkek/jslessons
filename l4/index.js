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

var cat = createRandomCat();
console.log(cat);

//var cats = [];
//var cat;
//for (var i = 0; i < 4; i++) {
//cat = createRandomCat();
//cats.push(cat);
//}
//console.log(cats);
