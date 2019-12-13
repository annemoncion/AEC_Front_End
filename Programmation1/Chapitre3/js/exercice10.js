// Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00.
var montantAvecTaxe;

for (montant = 5; montant <= 100; montant += 5) {
    montantAvecTaxe = montant + montant * 0.09;
    document.write(montant.toFixed(2) + "$ (sans taxes) = " + montantAvecTaxe.toFixed(2) + "$ (avec taxes)<br>");
}