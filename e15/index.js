var div, div2, h1, btn;

function insert(parent, node) {
    if (parent.children.length) {
        parent.insertBefore(node, parent.firstElementChild);
    } else {
        parent.appendChild(node);
    }
}

function changeType() {
    var input = document.querySelector("input");
    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
    } else {
        input.setAttribute("type", "text");
    }
    return 1;
}

btn = document.querySelector("button");
btn.onclick = changeType;

div = document.createElement("div");
h1 = document.createElement("h1");
h1.innerText = "Hello World!";
div.appendChild(h1);

div2 = document.createElement("div");
div2.className = "second";
div2.innerHTML = "<p>text</p><p>text2</p>";

insert(document.body, div);
insert(document.body, div2);
