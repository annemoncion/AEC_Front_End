//Exercice 11 Afficher montant de frais, commission, deux taxes et prix de vente total d'une voiture
var prixBase;
var frais;
var commission;
var sousTotal;
var tps;
var tvq;
var grandTotal;

prixBase = Number(prompt("Entrer le prix de base de la voiture achetée."));

//Calcul des frais de 2% du prix de base
frais = Math.round((prixBase * 2 / 100)*100) / 100;
//Calcul de la commission (12% du prix de base)
commission = Math.round((prixBase * 12 / 100)*100) / 100;
//Calcul du sous-total
sousTotal = prixBase + frais + commission;
//Calcul de la TPS
tps = Math.round((sousTotal * 5 / 100)*100) / 100;
//Calcul de la TVQ
tvq = Math.round((sousTotal * 9.975 / 100)*100) / 100;
//Calcul du grand total
grandTotal = Math.round((sousTotal + tvq + tps) * 100) / 100;

console.log("Le prix de base de la voiture achetée est " + prixBase +"$.")
console.log("Les frais s'élèvent à " + frais +"$.")
console.log("La commission est de " + commission +"$.")
console.log("La TPS est de " + tps +"$.")
console.log("La TVQ est de " + tvq +"$.")
console.log("Le prix de vente total de cette voiture est " + grandTotal +"$.")
