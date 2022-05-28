const btnChat1 = document.querySelector("#btnChat1");
const btnChat2 = document.querySelector("#btnChat2");

const zprava1 = document.querySelector('#zprava1');
const zprava2 = document.querySelector('#zprava2');

let zpravy1 = "";
let zpravy2 = "";

const chat2 = document.querySelector('#chat2');
const chat1 = document.querySelector('#chat1');

btnChat1.addEventListener("click", function() {
    zpravy1 += "Alice: " + zprava1.value + "\n"; 
    chat2.textContent = zpravy1;
    
});

btnChat2.addEventListener("click", function() {
    zpravy2 += "Bob: " + zprava2.value + "\n";
    chat1.textContent = zpravy2;
});

btnRefresh.addEventListener("click", function() {
    
        window.location.reload();
});

person1_img.addEventListener("click", function() {

    alert("Jméno: Alice");
});

person2_img.addEventListener("click", function() {

    alert("Jméno: Bob");
});

