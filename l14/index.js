function foo(str, cmd) {
    if (typeof str !== "string") {
        alert("Incorrect type of str");
        return;
    }
    switch (cmd) {
        case "up":
            return str.toUpperCase();
        case "down":
            return str.toLowerCase();
        case "camel":
            return str
                .split("")
                .map(function(c, idx) {
                    if ((idx + 1) % 2 === 0) {
                        return c.toUpperCase();
                    }
                    return c.toLowerCase();
                })
                .join("");
        case "turn":
            return str
                .split("")
                .map(function(c, idx) {
                    if (/[a-z]/.test(c)) {
                        return c.toUpperCase();
                    }
                    return c.toLowerCase();
                })
                .join("");
        default:
            return str;
    }
}

var cmd = prompt("Enter a command");
console.log(foo("Hello World", cmd));
