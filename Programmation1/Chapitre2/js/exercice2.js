// Exercice 2 : réduction de 15% si montant total achats plus grand que 200$.
// Calculer et afficher la réduction que chaque acheter a droit.
var montantTotalAchat;
var reduction;

montantTotalAchat = Number (prompt("Montant total des achats"));

reduction = 0;
if (montantTotalAchat > 200) {
    reduction = Math.round((montantTotalAchat * 15 / 100)*100) / 100;
}

console.log("Cet acheteur a droit à " + reduction + "$ de réduction.");

