var sbtn = document.getElementById("sidebar_btn");
var sidebar = document.getElementById("sidebar");
var O_TEXT = "Open sidebar";
var C_TEXT = "Close sidebar";

function syncText() {
    sbtn.innerText = sidebar.classList.contains("open") ? C_TEXT : O_TEXT;
}

function toggleSidebar() {
    sidebar.classList.toggle("open");
    syncText();
}

sbtn.addEventListener("click", toggleSidebar);
syncText();
