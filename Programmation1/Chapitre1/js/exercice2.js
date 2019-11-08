//Exercice 2: Surface d'un rectangle*/
//Étape 1 : Trouver les variables
var largeurRect;
var longueurRect;
var surfaceRect;

//Étape 2 : Lire une largeur et une longueur pour le rectangle
largeurRect = prompt("Entrez la largeur du rectangle");
longueurRect = prompt("Entrer la longueur du rectangle");

//Étape 3 : Les calculs
surfaceRect = largeurRect * longueurRect;

//Étape 4 : Afficher les résultats
console.log("La surface d'un rectangle de " + largeurRect + " de large et " + longueurRect + " de long est " + surfaceRect + ".");
