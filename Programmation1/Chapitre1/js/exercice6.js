//Exercice 6: Programme qui lit le nom d'un article, son prix de détail, et fournit le prix de gros (66% du prix de détail) et le profit attendu
//Étape 1 : trouver les variables
var nomArticle;
var prixArticle;
var prixDeGrosArticle;
var profitArticle;

//Étape 2 : Lecture des données
nomArticle = prompt("Entrer le nom de l'article");
prixArticle = prompt("Entrer le prix de détail de l'article");

//Étape 3 : Les calculs
prixDeGrosArticle = prixArticle * 66 / 100;
profitArticle = prixArticle - prixDeGrosArticle;

//Étape 4 : Afficher les résultats
console.log("L'article " + nomArticle + " a un prix de détail s'élevant à " + prixArticle + "$.");
console.log("Le prix de gros de " + nomArticle + " est de " + prixDeGrosArticle + "$.");
console.log("L'article génèrera donc un profit de " + profitArticle + "$.");
