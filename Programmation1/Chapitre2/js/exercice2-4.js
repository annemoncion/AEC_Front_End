// Lire 2 nombres au clavier.
// Si ces 2 nombres sont :
// supérieurs ou égaux à 10, affichez leur somme
// inférieurs à 10, affichez leur produit
// Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10,
// affichez la différence entre les deux nombres.

var a = Number (prompt("Entrer un nombre."));
var b = Number (prompt("Entrer un second nombre."));
var resultat;

if ( a >= 10 && b >= 10) {
    resultat = a + b;
    document.write(a + " + " + b + " = " + resultat);
} else if ( a < 10 && b < 10) {
    resultat = a * b;
    document.write(a + " X " + b + " = " + resultat);
} else if ( a >= 10 && b < 10 ) {
    resultat = a - b;
    document.write(a + " - " + b + " = " + resultat);
} else if ( b >= 10 && a < 10 ) {
    resultat = b - a;
    document.write(b + " - " + a + " = " + resultat);
}