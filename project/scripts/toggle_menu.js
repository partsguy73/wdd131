function toggleMenu() {
    var navigation = document.getElementById("navigation");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = navigation.classList.toggle("show");
    if (isShow) {
        navigation.classList.remove("hidden");
        cheeseburger.innerHTML = '✖';
    }
    else {
        navigation.classList.add("hidden");
        cheeseburger.innerHTML = '&#9776;';
    }
    console.log(isShow);
    var pageHeader = document.getElementById("page-header");
    pageHeader.classList.toggle("hidden");
}