//Exercice 4 : Lire deux nombres. Diviser 1er par 2e seulement si 2e n'égal pas 0.
//Si 2e nb est 0, écrire "Division par zéro interdite"

var nombre1;
var nombre2;
var resultat;

nombre1 = Number (prompt("Nombre 1"));
nombre2 = Number (prompt("Nombre 2"));

if (nombre2 != 0) {
    resultat = nombre1 / nombre2;
} else {
    resultat = "Division par zéro interdite";
}

console.log(resultat);