// Créer un programme qui lit un nombre et affiche tous les chiffres de ce nombre séparément.
// Votre programme peut afficher les nombres en ordre ou en ordre inverse.

var nombre = Number(prompt("Entrez un nombre.")).toString();
var nombreEnMorceaux = nombre.split("");
var envers = nombre.split("").reverse();
var positionDansArray = 0;
var suiteDeChiffres = "";
var suiteDeChiffresEnvers = "";

while(nombreEnMorceaux[positionDansArray]) {
    suiteDeChiffres = nombreEnMorceaux[positionDansArray] + "<br>";
    document.write(suiteDeChiffres);
    positionDansArray++;
}

document.write("<br>OU<br><br>");

positionDansArray = 0;

while(envers[positionDansArray]) {
    suiteDeChiffresEnvers = envers[positionDansArray] + "<br>";
    document.write(suiteDeChiffresEnvers);
    positionDansArray++;
}