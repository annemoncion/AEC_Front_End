// Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1.
var compteZero = 0;
var compteUn = 0;
var incrementation = 1;

while(incrementation <= 100) {
    var nbAleatoire = Math.round(Math.random());
    document.write(nbAleatoire + " ");
    if (nbAleatoire === 0) {
        compteZero ++;
    } else if (nbAleatoire === 1) {
        compteUn ++;
    }
    incrementation ++;
}

document.write("<br>Il y a " + compteZero + " '0' et " + compteUn + " '1'.");
