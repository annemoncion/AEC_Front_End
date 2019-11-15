// Lire une note d’examen et afficher « Échec » si la note est inférieure à 60
// et « Bravo » si la note est supérieure ou égale à 60.

var note = Number (prompt("Entrer la note de l'examen sur 100"));
var message;

if (note < 60 && note >= 0) {
    message = "Échec";
} else if (note >= 60 && note <= 100) {
    message = "Bravo";
} else {
    message = "Erreur, la note doit se situer entre 0 et 100."
}

document.write(message);