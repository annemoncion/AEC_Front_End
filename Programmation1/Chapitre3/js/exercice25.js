// Trouvez les nombres parfaits
// On souhaite écrire un programme C# de calcul des n premiers nombres parfaits.
// Un nombre est dit parfait s’il est égal à la somme de ses diviseurs, 1 compris.
//
// Exemple : 6 = 1+2+3 , est un nombre parfait.

var nombre = Number(prompt("Pour afficher la liste des nombres parfaits jusqu'au nombre inscrit..."));
var nombreTest;
var division;

for (nombreTest = 1; nombreTest <= nombre; nombreTest++) { //Pour tous les nombres jusqu'au nombre inscrit
    var diviseurs = [];
    somme = 0;
    for (diviseur = 1; diviseur < (nombreTest); diviseur++) { //Pour tous les diviseurs jusqu'au nombre testé
        division = nombreTest / diviseur; // Effectuer la division du nombre testé par chaque diviseur
        if (Number.isInteger(division)) { // Si le résultat est un nombre entier, ajouté le diviseur à la liste
            diviseurs.push(diviseur)
        }
    }

    if (diviseurs.length >= 1) { // Exclut le nombre 1
        for (var i = 0; i < diviseurs.length; i++) { // Additionner tous les diviseurs ensemble pour donner la somme
            somme += diviseurs[i]; // OK.
        }
        if (nombreTest === somme) { // Si la somme des diviseurs est égale au nombre testé, c'est un nombre parfait.
            document.write(nombreTest + " ");
        }
    }
}
