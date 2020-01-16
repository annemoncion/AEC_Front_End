/* Lire 10 noms et afficher en ordre alphabétique selon la 1ere lettre uniquement.
Indices :
var texte1 = “Shany”
var texte2 = “Carle”
console.log(texte1[0] < texte2[0]);
Va afficher false car ‘S’ n’est pas plus petit que ‘C’

tabMots[0] = "shany";
           console.log(tabMots[0][1]); //Affiche le caractère h
 */

var nom = [];
var premiereLettre = [];
var nomTrier = [];

// Lire 10 noms
for (var i = 0; i < 10; i++) {
    nom.push(prompt("Entrez les noms à trier par leur première lettre."));
}

// Ranger les premières lettres des 10 noms dans un nouveau tableau
for (var i = 0; i < nom.length; i++) {
    premiereLettre.push(nom[i][0]);
}

// Trier le tableau des premières lettres
premiereLettre.sort();

// Boucler dans le tableau des premières lettres
for (var i = 0; i < premiereLettre.length; i++) {
    // Boucler dans le tableau des noms
    for (var j = 0; j < nom.length; j++) {
        // Trouver la correspondance entre la première lettre et le nom
        if ( nom[j][0] === premiereLettre[i] ) {
            // Pousser le nom dans le tableau des noms triés
            nomTrier.push(nom[j]);
            // Annuler la valeur de ce nom pour qu'elle ne soit pas reprise si doublon
            nom[j] = 0;
        }
    }
}

// Afficher le tableau des noms triés
for (var i = 0; i < nomTrier.length; i++) {
    document.write(nomTrier[i] + "<br>");
}
