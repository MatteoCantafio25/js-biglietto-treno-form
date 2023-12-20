//---------------------------------//
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");

//---------------------------------//
// ASSEGNO UNA COSTANTE AD OGNI CAMPO E LI PRENDO TRAMITE L'ID
const nameField = document.getElementById("name");
const ageField = document.getElementById("age");
const kmsField = document.getElementById("kms");


//---------------------------------//
// ASSEGNO UNA COSTANTE AD OGNI BOTTONE E LI PRENDO TRAMITE L'ID
const resetButton = document.getElementById("reset-button");
const confirmButton = document.getElementById("confirm-button");
const buyButton = document.getElementById("buy-button");

//---------------------------------//
// ASSEGNO UNA COSTANTE ALLA SECTION E AD OGNI ELEMENT PER POI PRENDERLI TRAMITE L'ID
const ticketSection = document.getElementById("ticket-section");
const passengerElement = document.getElementById("passenger-name");
const rateElement = document.getElementById("rate");
const carElement = document.getElementById("car");
const pnrElement = document.getElementById("pnr");
const priceElement = document.getElementById("price");


//---------------------------------//
// ASSEGNO UNA VARIABILE
let pricePerKms = 0.21;
let rateName = "Tariffa Standard";

//---------------------------------//
// AGGIUNGO UN EVENT LISTENER AL CLICK DEL BOTTONE DI CONFERMA
confirmButton.addEventListener("click", function () {
    //---------------//
    // RECUPERO I VALORI CHE SONO NEL FORM
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;

    console.log(nameValue, kmsValue, ageValue);

    //---------------//
    // VALIDAZIONE
    if (nameValue.lenght === 0 || isNaN(kmsValue) || kms < 1) {
        alert("Ci sono errori nel form");
        return;
    }

    //---------------//
    // CALCOLO IL PREZZO SENZA DISCOUNT
    let price = pricePerKms * kmsValue;

    //---------------//
    // CALCOLO IL PREZZO CON IL DISCOUNT
    if (ageValue === "minorenne") {
        rateName = "Tariffa Minorenni";
        price *= 0.8;
    } else if (ageValue === "over") {
        rateName = "Tariffa Over 65";
        price *= 0.6;
    }

    console.log(price, rateName);

    //---------------//
    // RANDOMIZZO IL NUMERO CHE VERRA' DATO PER INDICARE LA CARROZZA
    const car = Math.floor(Math.random() * 10) + 1;

    //---------------//
    // RANDOMIZZO UN NUMERO PER IL PNR
    const pnr = Math.floor(Math.random() * (100000 - 70000)) + 70000;

    //---------------//
    //STAMPO IN PAGINA GLI ELEMENTI
    passengerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    carElement.innerText = car;
    pnrElement.innerText = pnr;
    priceElement.innerText = "€" + price.toFixed(2);

    //---------------//
    // AGGIUNGO LA SEZIONE TICKET
    ticketSection.classList.remove("d-none");

})

//---------------//
//AGGIUNGO UN EVENT LISTENER AL CLICK DEL BOTTONE DI RESET
resetButton.addEventListener("click", function () {
    // RIMUOVIAMO LA SEZIONI TICKET
    ticketSection.classList.add("d-none");
    // AZZERIAMO TUTTI I CAMPI
    nameField.value = "";
    ageField.value = "";
    kmsField.value = "";
})