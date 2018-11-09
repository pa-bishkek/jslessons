function concatStr(str_array) {
    var i = 0;
    var result = "";
    // В цикле while, проходимся по каждому элементу полученного массива(str_array)
    while (i < str_array.length) {
        var div = ""; // division(разделитель)
        // Пробел добавляется только если обрабатываемый элемент имеет индекс больше 0
        if (i > 0) {
            div = " ";
        }
        result = result + div + str_array[i];
        // Можем вывести промежуточный результат в консоль
        console.log(
            "Номер итерации:",
            i + 1,
            "Результат к концу итерации:",
            result
        );
        // Увеличиваем счетчик
        i++;
    }

    return result;
}
var foo = ["Consectetur", "iste", "ipsum", "voluptatum"];
var bigString = concatStr(foo); // Вызываем функцию и ложим результат ее выполнения в переменную bigString
console.info("Итоговый результат: ", bigString);
