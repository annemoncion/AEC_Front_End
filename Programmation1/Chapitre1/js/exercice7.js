//Exercice 7 : Convertisseur de degrés Celsius en Fahrenheit
//Étape 1 : Trouver les variables
var degreCelsius;
var degreFahrenheit;
var degreUnite = "\u00b0";

//Étape 2 : Lire une température en degrés Celsius
degreCelsius = prompt("Entrer une température en degrés Celsius.");

//Étape 3 : Faire les calculs
degreFahrenheit = degreCelsius * 1.8 + 32;

//Étape 4 : Afficher les résultats
console.log(degreCelsius + "C" + degreUnite + " correspond à " + degreFahrenheit + "F" + degreUnite + ".");
