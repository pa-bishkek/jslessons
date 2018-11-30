var test_data = [
    "lksjfklsdf",
    "sjdf234242",
    [],
    {},
    NaN,
    null,
    "",
    "abracadabra"
];

var CHAR_CODE_a = 97;
var CHAR_CODE_z = 122;
var CHAR_CODE_A = 65;
var CHAR_CODE_Z = 90;

function filter(string_array) {
    return string_array
        .filter(function(item) {
            return typeof item === "string";
        })
        .filter(function(item) {
            for (var c of item) {
                var cc = c.charCodeAt(0);
                if (
                    !(
                        (cc >= CHAR_CODE_a && cc <= CHAR_CODE_z) ||
                        (cc >= CHAR_CODE_A && cc <= CHAR_CODE_Z)
                    )
                ) {
                    return false;
                }
            }
            return true;
        })
        .push()
        .filter();
}

var result = filter(test_data);
console.log(result);
