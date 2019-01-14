var btns = document.getElementsByClassName("btn");
var alerts_list = document.getElementById("alerts_list");
var body = document.body;

function addNotification(event) {
    var type = event.target.getAttribute("data-type");
    var alert_class = "alert-" + type;
    //
    var noty = document.createElement("div");
    noty.classList.add("alert", alert_class);
    noty.innerText =
        "Amet mollitia repellat delectus ex sint corporis. Ullam maiores sunt.";
    alerts_list.appendChild(noty);
}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", addNotification);
}

btn.addEventListener("click", addNotification);
