var btns = document.getElementsByTagName("button");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseenter", function(event) {
        event.target.classList.add("anim");
        var cb = function() {
            console.log("remove .anim");
            event.target.classList.remove("anim");
            event.target.removeEventListener("animationend", cb);
        };
        event.target.addEventListener("animationend", cb);
    });
}
