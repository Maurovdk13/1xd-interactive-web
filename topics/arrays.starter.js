/*
  __   ____  ____   __   _  _  ____ 
 / _\ (  _ \(  _ \ / _\ ( \/ )/ ___)
/    \ )   / )   //    \ )  / \___ \
\_/\_/(__\_)(__\_)\_/\_/(__/  (____/
*/

/*

*/

// 1 — Maak een array meals met drie van je favoriete maaltijden en log het naar de console
let meals = ["pizza", "durum", "frietjes"];
console.log(meals);

// 2 — Maak een array drinks met drie van je favoriete drankjes en log het naar de console
let drinks = ["cola", "bruiswater", "icetea"];
console.log(drinks);

// 3 - Maak een variabele lastmeal die het laatste item uit de meals array opslaat
let lastmeal = meals.pop();
console.log(lastmeal);

// 4 - Loop over de meals array en print elke maaltijd naar de console
meals.forEach(meal => console.log(meal));

// 5 - Voeg een maaltijd genaamd cereal toe aan de meals array met push() en log het resultaat
meals.push("cereal");
console.log(meals);

// 6 - Maak een variabele breakfast en vind de positie van cereal in de meals array
let breakfast = meals.indexOf("cereal");
console.log(breakfast);

/* CHALLENGE :: TIPJAR */

// 7 - Maak een array tipjar met de volgende fooien: 1, 5, 2, 2, 1
let tipjar = [1, 5, 2, 2, 1];

// 8 - Maak een functie tip die een fooi toevoegt aan de tipjar array
function tip(amount) {
    tipjar.push(amount);
}

// 9 - Roep de functie aan met een fooi van 2 en log de tipjar array naar de console
tip(2);
console.log(tipjar);

// 10 - Maak een functie total die het totaal van de tipjar array berekent en log het totaal naar de console
function total() {
    let sum = 0;
    for (let i = 0; i < tipjar.length; i++) {
        sum += tipjar[i];
    }
    return sum;
}

console.log(total());
