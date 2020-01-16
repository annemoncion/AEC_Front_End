// Lire 5 valeurs dans un tableau. Trier ce tableau en ordre décroissant.

var tableau = [];
var tableauEndroit;
var tableauEnvers = [];
var compteur = 0;

for (var i = 0; i < 5; i++) {
    tableau.push(Number(prompt("Entrez un nombre.")));
}

function compareNumbers(a,b) {
    return a - b;
}

tableauEndroit = tableau.sort(compareNumbers);

for (var i = tableauEndroit.length-1; i >= 0; i--) {
    tableauEnvers.push(tableauEndroit[i]);
    document.write(tableauEnvers[compteur] + "<br>");
    compteur++;
}


