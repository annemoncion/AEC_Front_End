// Lire une lettre de l'alphabet.
// Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules.

var lettre = prompt("Entrer une lettre de l'alphabet");
var categorieLettre;

if (lettre.toUpperCase() === "A" || lettre.toUpperCase() === "E" || lettre.toUpperCase() === "I" || lettre.toUpperCase() === "O" || lettre.toUpperCase() === "U" || lettre.toUpperCase() === "Y") {
    categorieLettre = "voyelle";
} else {
    categorieLettre = "consonne";
}

document.write("La lettre " + lettre + " est une " + categorieLettre + ".");