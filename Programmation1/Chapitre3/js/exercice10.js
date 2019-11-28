// Faire un programme qui boucle 10 fois.
// À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1
// et vous demande aussi de choisir un nombre entre 0 et 1.
// Si le nombre est identique, vous gagnez, perdez sinon.
// Vous affichez le pointage à la fin des 10 itérations.

var incrementation = 1;
var pointage = 0;

while(incrementation <= 10) {
    var nbAleatoire = Math.round(Math.random());
    var nbChoisi = Number(prompt("Choisir un chiffre entre 0 et 1."));
    if (nbAleatoire === nbChoisi) {
        pointage ++;
    } else if (nbChoisi != 0 && nbChoisi != 1) {
        incrementation = 10;
        document.write("Il faut écrire soit 0, soit 1.");
    }
    incrementation ++;
}

document.write("Vous avez gagné " + pointage + " parties sur 10.");
if (pointage >= 6) {
    document.write("<br>Bravo! Vous faites de la télépathie avec l'ordi!");
} else {
    document.write("<br>Meilleure chance la prochaine fois!");
}
