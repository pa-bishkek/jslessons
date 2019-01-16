var sbtn = document.getElementById("sidebar_btn");

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

sbtn.addEventListener("click", toggleSidebar);
