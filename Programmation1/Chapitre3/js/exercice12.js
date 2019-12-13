// Le premier jour de l'ouverture de votre compte, vous déposez .01 .
// À chaque jour pendant 10 jours, vous déposez le double de la veille.
// Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte.
var montant = 0.01;
var solde = 0;

for (jour = 1; jour <= 10; jour++) {
    document.write("Jour: " + jour + "<br>");
    document.write("Montant déposé: " + montant + "$<br>");
    solde = montant + solde;
    document.write("Solde du compte: " + solde.toFixed(2) + "$<br>");
    montant = montant * 2;
}