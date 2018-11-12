function createCar(pmodel, pcolor, ppower) {
    return {
        model: pmodel,
        color: pcolor,
        power: ppower
    };
}

function compareCars(c1, c2) {
    if (!c1.power || !c2.power) {
        alert("A argument is not car");
    }
    if (c1.power === c2.power) {
        return c1;
    } else if (c1.power > c2.power) {
        return c1;
    } else {
        return c2;
    }
}

var car1 = createCar("Prius", "yellow", 150);
var car2 = createCar("Corolla", "black", 137);
console.log(car1, car2);
var most_powerfull_car = compareCars(car2, car1);
console.log(most_powerfull_car);
