//Lire 2 nb A et B différents. Trouver et afficher le plus petit et le plus grand, sinon message d'erreur

var a = Number(prompt("Entrer un premier nombre"));
var b = Number(prompt("Entrer un second nombre différent"));
var plusPetitNombre;
var plusGrandNombre;

if (a < b) {
    plusGrandNombre = b;
    plusPetitNombre = a;
} else if (a === b) {
    document.write("Erreur: Veuillez écrire deux nombres différents.")
} else {
    plusGrandNombre = a;
    plusPetitNombre = b;
}

if (a != b) {
    document.write("Le plus petit nombre est " + plusPetitNombre + " et le plus grand nombre est " + plusGrandNombre + ".");
}