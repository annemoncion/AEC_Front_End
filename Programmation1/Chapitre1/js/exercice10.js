//Exercice 10 : Facture d'un client ( date + 3 articles + TPS + TVQ + Grand total)
//Étape 1 : Les variables
var dateFacture;
var prixArticle1;
var prixArticle2;
var prixArticle3;
var sousTotal;
var tps;
var tvq;
var grandTotal;

//Étape 2 : Lecture des données
prixArticle1 = Number(prompt("Entrer le prix du 1er article acheté.")); //Prix article 1
prixArticle2 = Number(prompt("Entrer le prix du 2e article acheté.")); //Prix article 2
prixArticle3 = Number(prompt("Entrer le prix du 3e article acheté.")); //Prix article 3

dateFacture = new Date(); //La date d'aujourd'hui

//Étape 3 : Les calculs
//--Calculer le sous-total
sousTotal = prixArticle1 + prixArticle2 + prixArticle3;
//--Calculer la tps et la tvq
tps = Math.round((sousTotal * 5 / 100)*100) / 100;
tvq = Math.round((sousTotal * 9.975 / 100)*100) / 100;
//--Calcule le grand total
grandTotal = Math.round((sousTotal + tps + tvq)*100) / 100;

//Étape 4 : Afficher la facture
console.log("Date de la facture: " + dateFacture);
console.log("TPS (5%): " + tps + "$")
console.log("TVQ (9.975%): " + tvq + "$");
console.log("Grand Total: " + grandTotal + "$");