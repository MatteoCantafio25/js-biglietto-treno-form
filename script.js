//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// CREO UNA COSTANTE FIRSTNAME A CUI DARA' VALORE IL PASSEGGERO
const name = document.getElementById("name");
const km = document.getElementById("km");
const age = document.getElementById("age");
const button = document.getElementById("button");
const pName = document.getElementById("pName");
const pKm = document.getElementById("pKm");
const pAge = document.getElementById("pAge");

button.addEventListener("click", function () {
    const nameText = name.value.trim();
    pName.innerText = nameText;
    name.value = "";
    name.focus();
})

button.addEventListener("click", function () {
    const kmText = parseInt(km.value.trim());
    pKm.innerText = kmText;
    km.value = "";
})

button.addEventListener("click", function () {
    const ageText = parseInt(age.value.trim());
    pAge.innerText = ageText;
    age.value = "";
})



