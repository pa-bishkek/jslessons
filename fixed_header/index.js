window.onload = function() {
    var nav = document.getElementById("nav");
    var hook_point = null;

    function setFixed() {
        nav.style.position = "fixed";
        nav.style.top = "0";
        nav.style.left = "0";
    }

    function setBlock() {
        nav.style.position = "static";
    }

    window.addEventListener("scroll", function(e) {
        var viewport_offset_top = nav.getBoundingClientRect().top;
        console.log(hook_point);
        if (viewport_offset_top < 0) {
            hook_point = window.pageYOffset;
            setFixed();
        } else if (hook_point && window.pageYOffset < hook_point) {
            hook_point = null;
            setBlock();
        }
    });
};
