// Lire une série de nombres fournis par l'usager (l'usager transmet le nombre 0 pour terminer). Afficher
// la somme des nombres positifs ainsi que la somme des nombres négatifs.

var nombre = 1;
var positif = 0;
var negatif = 0;

while(nombre != 0) {
    nombre = Number(prompt("Écrire un nombre positif ou négatif. Écrivez zéro ('0') pour terminer l'opération."));
    if (nombre < 0) {
        negatif += nombre;
    } else if (nombre > 0) {
        positif += nombre;
    }
}

document.write("La somme des nombres positifs est " + positif + " et la somme des nombres négatifs est " + negatif + ".");