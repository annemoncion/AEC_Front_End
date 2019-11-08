//Exercice 8 : Convertisseur de degrés Fahrenheit en degrés Celsius
//Étape 1 : les variables
var degreFahrenheit;
var degreCelsius;
var degreUnite = "\u00b0";

//Étape 2 : Lecture des données
degreFahrenheit = Number(prompt("Entrer une température en degrés Fahrenheit."));

//Étape 3 : Les calculs
degreCelsius = (degreFahrenheit - 32) / 1.8;

//Étape 4 : Afficher les résultats
console.log(degreFahrenheit + "F" + degreUnite + " correspond à " + degreCelsius + "C" + degreUnite + ".");