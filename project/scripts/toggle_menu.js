function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = menu.classList.toggle("show");
    cheeseburger.innerHTML = isShow ? '✖' : '&#9776;';
    var pageHeader = document.getElementById("page-header");
    pageHeader.classList.toggle("hidden");
}