// Lire 2 valeurs dans un tableau. Inverser ces deux valeurs.

var valeurs=[];

for (var i = 0; i < 2; i++) {
    valeurs.push(prompt("Entrez de l'information."));
}

var valeur1 = valeurs[0];
var valeur2 = valeurs[1];

valeurs = [valeur2, valeur1];

for (var i = 0; i < valeurs.length; i++) {
    document.write(valeurs[i] + " ");
}
