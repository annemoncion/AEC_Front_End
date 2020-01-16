/* C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants
que chaque famille possède et par la suite afficher un tableau de statistiques
comme suit : Le nombre d’enfants est l’indice du tableau.

Regrouper ensemble les 10 enfants et plus.

Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.

Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants. */

var enfantsParFamille = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nombreEnfants;

// Comptabiliser 20 familles
for (var i = 0; i < 20; i++) {
    nombreEnfants = Number(prompt("Combien avez-vous d'enfants?"));
    if ( nombreEnfants > 0 && nombreEnfants < 10 ) {
        enfantsParFamille[nombreEnfants]++
    }
    else if ( nombreEnfants >= 10 ) {
        enfantsParFamille[9]++;
    }
}

//Afficher le tableau
for (var i = 0; i < enfantsParFamille.length; i++) {
    document.write("Nombre d'enfants: ");
    if (i === enfantsParFamille.length-1) {
        document.write((i+1) + " et plus");
    }
    else {
        document.write(i+1);
    }
    document.write(" Nb familles recensées: " + enfantsParFamille[i] + "<br>");
}


