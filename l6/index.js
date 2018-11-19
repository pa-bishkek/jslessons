function getHeader() {
    var h = document.getElementById("header");
    return h;
}

function printTimer() {
    console.log("Hello!");
    setTimeout(printTimer, 1000);
}

printTimer();
