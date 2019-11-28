// Combien de temps pour exécuter une boucle qui n'affiche rien 100 000 fois ? (Moins de 1s, c'est instantané.)

var incrementation = 1;
var texte = "";

while(incrementation <= 100000) {
    document.write(texte);
    incrementation ++;
}