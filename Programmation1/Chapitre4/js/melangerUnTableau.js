// Pour mélanger un tableau:
var tableau = [1,2,3,4,5,6,7,8,9,10];

//Boucler dans tout le tableau
for (var i = 0; i < tableau.length; i++) {
    // Générer nombre aléatoire
    var r = Math.floor((Math.random() * 10));
    // Stocker valeur temporaire
    var temp = tableau[i];
    // Remplacer valeur correspondante à l'indice par celle correspondant à r
    tableau[i] = tableau[r];
    // Et placer la valeur initiale à l'indice r
    tableau[r] = temp;
}

// Afficher le tableau
for (var i = 0; i < tableau.length; i++) {
    document.write(tableau[i] + "<br>");
}
