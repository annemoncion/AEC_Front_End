/* Lire 10 valeurs déjà triées (en ordre) et les mettre dans un tableau.
Par la suite, lire une nouvelle valeur et afficher toutes les valeurs lues
dans l’ordre en ajoutant la nouvelle valeur à la bonne place. */

var tableau = [];
var tableauTri;
var ajoutValeur;

// Lire 10 valeurs et les mettre dans un tableau.
for (var i = 0; i < 10; i++) {
    tableau.push(Number(prompt("Entrez un nombre.")));
}

// Parce que la fonction sort() par défaut traduit les nombres en string
function compareNumbers(a, b) {
    return a - b;
}
// Trier le tableau du plus petit au plus grand nombre.
tableauTri = tableau.sort(compareNumbers);

// AFficher le tableau ordonné
for (var i = 0; i < tableauTri.length; i++) {
    document.write(tableau[i] + "<br>");
}
document.write("<br>");

// Lire une nouvelle valeur.
ajoutValeur = Number(prompt("Entrez un nombre."));

//Parcourir le tableau ordonné
for (var i = 0; i < tableauTri.length; i++) {
    // Si la nouvelle valeur est plus petite que celle du début du tableau
    if (ajoutValeur < tableau[0] ||
        // OU Si la nouvelle valeur se situe entre la valeur lue et la suivante
        ajoutValeur < tableau[i] && ajoutValeur >= tableau[i-1]) {
        // Stocker la dernière valeur du tableau pour la pousser à la fin.
        var derniereValeur = tableau[tableau.length-1];
        // Boucler à travers toutes les valeurs restantes du tableau ordonné
        for (var z = i; z < tableauTri.length; z++) {
            // Stocker la valeur temporairement
            var temp = tableau[z];
            // Remplacer l'ancienne valeur par la nouvelle
            tableau[z] = ajoutValeur;
            // Stocker la valeur temporaire en tant que prochaine valeur à ajouter.
            ajoutValeur = temp;
        }
        // Ajouter la dernière valeur du tableau
        tableau.push(derniereValeur);
        // Briser la boucle.
        break;
    }
    // Si la nouvelle valeur est plus grande que toutes les valeurs du tableau
    if ( ajoutValeur > tableau[tableau.length-1]) {
        // Stocker la dernière valeur du tableau pour la pousser à la fin.
        tableau.push(ajoutValeur);
    }
}

// Afficher le nouveau tableau avec la valeur ajoutée
for (var i = 0; i < tableauTri.length; i++) {
    document.write(tableau[i] + "<br>");
}

