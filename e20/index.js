window.onload = function() {
    var form = document.getElementById("form");
    var pre = document.getElementById("preview");
    function handleChange() {
        var elements = form.elements;
        var obj = {};
        for (var i = 0; i < elements.length; i++) {
            var item = elements.item(i);
            if (item.tagName === "BUTTON") continue;
            obj[item.name] = item.value;
        }
        pre.innerText = JSON.stringify(obj, "", 4);
    }

    form.addEventListener("change", handleChange);
    form.addEventListener("keydown", handleChange);
};
