function scan(name) {
    var result = +prompt("Введите число " + name);
    if (!result) {
        alert("Некорректное данные");
        return scan(name);
    }
    return result;
}

alert(scan("a") + scan("b"));
