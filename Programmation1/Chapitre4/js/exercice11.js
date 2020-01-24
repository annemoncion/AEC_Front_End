/* C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants
que chaque famille possède et par la suite afficher un tableau de statistiques
comme suit : Le nombre d’enfants est l’indice du tableau.

Regrouper ensemble les 10 enfants et plus.

Truc : il faut utiliser l'indice du tableau pour représenter le nombre d'enfants.

Par exemple : tab[2] = 10; signifie qu'il y a 10 familles qui ont 2 enfants. */

var enfantsParFamille = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nombreEnfants = 0;

// Comptabiliser le nombre d'enfants par famille pour plusieurs familles
while (!isNaN(nombreEnfants)) {
    nombreEnfants = Number(prompt("Combien avez-vous d'enfants? Appuyez sur une lettre pour terminer."));
    if ( nombreEnfants > 0 && nombreEnfants < 10 ) {
        enfantsParFamille[nombreEnfants-1]++;
    }
    else if ( nombreEnfants >= 10 ) {
        enfantsParFamille[9]++;
    }
}

//Afficher le tableau du nombre de familles en fonction du nombre d'enfants par famille
document.write("<table><tr><th>Nombre d'enfants par famille</th><th>Nombre de familles recensées</th></tr>");
for (var i = 0; i < enfantsParFamille.length; i++) {
    document.write("<tr><td>");
    if (i === enfantsParFamille.length-1) {
        document.write((i+1) + "+");
    }
    else {
        document.write(i+1);
    }
    document.write("</td><td>" + enfantsParFamille[i] + "</td></tr>");
}
document.write("</table>");
