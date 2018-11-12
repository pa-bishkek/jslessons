// Array         0         1        2        3
var colors = ["yellow", "green", "black", "blue"];

function getRandomColor() {
    var random_number = Math.random() * (colors.length - 1);
    var r_index = Math.round(random_number);
    console.log(r_index);
    return colors[r_index];
}

function createRandomCat() {}

for (var i = 0; i < 100; i++) {
    console.log(getRandomColor());
}
