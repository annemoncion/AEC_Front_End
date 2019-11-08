//Exercice 5 : Informer un individu du nomnbre de jours qu'il a vécu.
//Étape 1 : Les variables
var userName;
var userAge;
var userDaysLived

//Étape 2 : Lecture des données
userName = prompt("Entrez votre nom.");
userAge = prompt("Entrez votre âge.")

//Étape 3 : Les calculs
userDaysLived = userAge * 365;

//Étape 4 : Afficher les résultats
console.log("Bonjour " + userName + ". Saviez vous que vous aviez vécu " + userDaysLived + " jours jusqu'à présent ?");
