"use strict"

// Sticky Form
window.onscroll = function () { myFunction() };

var forma = document.querySelector(".forma");
var sticky = forma.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        forma.classList.add("sticky");
    } else {
        forma.classList.remove("sticky");
    }
}