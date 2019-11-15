// Calculer et afficher la surface d'un rectangle pour seulement ceux ayant un périmètre d'au moins 100.

var longueur = Number (prompt("Entrer la longueur du rectangle"));
var largeur = Number (prompt("Entrer la largeur du rectangle"));
var perimetre = longueur * 2 + largeur * 2;
var surface = longueur * largeur;

if (perimetre >= 100) {
    document.write("La surface du rectangle est de " + surface + ".");
} else {
    document.write("Nous ne calculerons pas la surface des rectangles dont le périmètre est inférieur à 100, désolé.")
}