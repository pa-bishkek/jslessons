function concatStr(str_array) {
    var i = 0;
    var result = "";

    while (i < str_array.length) {
        var div = ""; // division(разделитель)
        // Пробел добавляется только если обрабатываемый элемент имеет индекс больше 0
        if (i > 0) {
            div = " ";
        }
        result = result + div + str_array[i];
        console.log(result); // Можем вывести промежуточный результат в консоль
        // Увеличиваем счетчик
        i++;
    }

    return result;
}
var foo = ["Consectetur", "iste", "ipsum", "voluptatum"];
// Сконкатенировать строки из массива foo
var bigString = concatStr(foo);
console.log(bigString);
