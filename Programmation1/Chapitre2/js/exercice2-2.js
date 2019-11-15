//Lire 3 nombres A, B et C. Afficher le plus petit et le plus grand.

var a = Number (prompt("Entre un premier nombre."));
var b = Number (prompt("Entrer un deuxième nombre."));
var c = Number (prompt("Entrer un troisième nombre."));
var erreur = "Erreur: Vous devez entrer trois nombres différents.";
var plusPetitNombre = null;
var plusGrandNombre = null;

if (a < b && a < c) {
    plusPetitNombre = a;
} else if (b < a && b < c) {
    plusPetitNombre = b;
} else if (c < a && c < b) {
    plusPetitNombre = c;
} else {
    document.write(erreur);
}

if (a > b && a > c) {
    plusGrandNombre = a;
} else if (b > a && b > c) {
    plusGrandNombre = b;
} else if (c > a && c > b) {
    plusGrandNombre = c;
} else {
    document.write(erreur);
}

if (plusPetitNombre != null && plusGrandNombre != null) {
    document.write("Le plus petit nombre est " + plusPetitNombre + " et le plus grand nombre est " + plusGrandNombre + ".");
}
