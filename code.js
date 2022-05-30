const btnChat1 = document.querySelector("#btnChat1");
const btnChat2 = document.querySelector("#btnChat2");

const zprava1 = document.querySelector('#zprava1');
const zprava2 = document.querySelector('#zprava2');

let zpravy1 = "";
let zpravy2 = "";

var uzivatel_1 = prompt("Zadejte jméno prvního uživatele");
var answer1Element = document.getElementById("Jmeno1")
answer1Element.innerText = uzivatel_1;
var uzivatel_2 = prompt("Zadejte jméno druhého uživatele");
var answer2Element = document.getElementById("Jmeno2")
answer2Element.innerText = uzivatel_2;

const chat2 = document.querySelector('#chat2');
const chat1 = document.querySelector('#chat1');

btnChat1.addEventListener("click", function () {
    zpravy1 += "Uživatel 1: " + zprava1.value + "\n";
    chat2.textContent = zpravy1;

});

btnChat2.addEventListener("click", function () {
    zpravy2 += "Uživatel 2: " + zprava2.value + "\n";
    chat1.textContent = zpravy2;
});

btnRefresh.addEventListener("click", function () {

    window.location.reload();
});