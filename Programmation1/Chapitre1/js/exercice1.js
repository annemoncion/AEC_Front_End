//Exercice 1 - AFficher le carré et le cube d'un nombre*/
//Étape 1 : Trouver les variables
var nombre;
var nombreAuCarre;
var nombreAuCube;

//Étape 2 : Lecture (demander à l'usager des données)
nombre = Number (prompt("Entrez un nombre"));

//Étape 3 : Calculs du carré et du cube du nombre lu
nombreAuCarre = nombre ** 2;
nombreAuCube = nombre ** 3;

//Étape 4 : Afficher les résultats
console.log("Le nombre est " + nombre + ".");
console.log("Le carré de ce nombre est " + nombreAuCarre + ".");
console.log("Le cube de ce nombre est " + nombreAuCube + ".");




