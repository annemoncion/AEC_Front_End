// Lire une série de nombres fournis par l'usager (l'usager transmet le nombre 0 pour terminer).
// Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs on été entrés.

var nombre = 1;
var positif = 0;
var negatif = 0;

while(nombre != 0) {
    nombre = Number(prompt("Écrire un nombre positif ou négatif. Écrivez zéro ('0') pour terminer l'opération."));
    if (nombre < 0) {
        negatif ++;
    } else if (nombre > 0) {
        positif ++;
    }
}

document.write("Il y a " + positif + " nombres positifs et " + negatif + " nombres négatifs.");