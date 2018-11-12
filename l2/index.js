/**
 * a {Number}
 * b {Nunber}
 * command {String} ["add"|"sub"|"mult"|"div"]
 */
function calc(a, b, command) {
    // typeof a = "number"
    if (typeof a !== "number" || typeof b !== "number") {
        console.error("Incorrect type of a||b");
        alert("Incorrect type of a||b");
        return;
    }
    switch (command) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mult":
            return a * b;
        case "div":
            return a / b;
        default:
            alert("Undefined command!!!");
    }
}

var result = calc(3, "sdfjlk", "mult");
console.log(result);
