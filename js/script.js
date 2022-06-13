let navbar  = document.querySelector(".links");
let menu    = document.querySelector("#menu-icon");

menu.onclick = () => {
    navbar.classList.toggle("active-links");
    menu.classList.toggle("fa-times");
}

window.onscroll = () => {
    navbar.classList.remove("active-links");
    menu.classList.remove("fa-times");
}