var btns = document.querySelectorAll("button, .btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("mouseenter", function(event) {
        event.target.classList.add("anim");
        function cb() {
            event.target.classList.remove("anim");
            event.target.removeEventListener("animationend", cb);
        }
        event.target.addEventListener("animationend", cb);
    });
}
