//Exercice 4 : Calculer le salaire brut d'un employé
//Étape 1 : Trouver les variables
var tauxHoraire;
var nbHeuresTravaillees;
var salaireBrut;

//Étape 2 : Lire les données
tauxHoraire = prompt("Entrer le salaire horaire de l'employé(e).");
nbHeuresTravaillees = prompt("Entrer le nombre d'heures travaillées de l'employé(e).");

//Étape 3 : Les calculs
salaireBrut = tauxHoraire * nbHeuresTravaillees;

//Étape 4 : Afficher les résultats
console.log("Le salaire brut de l'employé(e) est de " + salaireBrut + " $.");
