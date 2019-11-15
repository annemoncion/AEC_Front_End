//Exercice 6: Lire une note au clavier et afficher la lettre correspondante

var note;
var lettre;

note = Number (prompt("Entrer la note en chiffre"));

//En commençant par A
/*
if (note >= 90) {
    lettre = "A";
} else if (80 <= note && note < 90) {
    lettre = "B";
} else if (70 <= note && note < 80) {
    lettre = "C";
} else if (60 <= note && note < 70) {
    lettre = "D";
} else {
    lettre = "E";
}
 */

//En commençant par E

if (note < 60) {
    lettre = "E";
} else if (60 <= note && note < 70) {
    lettre = "D";
} else if (70 <= note && note < 80) {
    lettre = "C";
} else if (80 <= note && note < 90) {
    lettre = "B";
} else {
    lettre = "A";
}



console.log(note + " correspond à " + lettre);