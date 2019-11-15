//Exercice 10 : Lire un nombre entier et afficher le nom du mois correspondant, sinon "Mois invalide"

var nombreMois;
var nomMois;

nombreMois = prompt("Entrer un nombre de 1 à 12");

if (nombreMois == 1) {
    nomMois = "janvier";
} else if (nombreMois == 2) {
    nomMois = "février";
} else if (nombreMois == 3) {
    nomMois = "mars";
} else if (nombreMois == 4) {
    nomMois = "avril";
} else if (nombreMois == 5) {
    nomMois = "mai";
} else if (nombreMois == 6) {
    nomMois = "juin";
} else if (nombreMois == 7) {
    nomMois = "juillet";
} else if (nombreMois == 8) {
    nomMois = "août";
} else if (nombreMois == 9) {
    nomMois = "septembre";
} else if (nombreMois == 10) {
    nomMois = "octobre";
} else if (nombreMois == 11) {
    nomMois = "novembre";
} else if (nombreMois == 12) {
    nomMois = "décembre";
} else {
    nomMois = "Mois invalide";
}

console.log(nomMois);
