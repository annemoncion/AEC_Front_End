//Exercice 9 : Lire 2 nombres A et B au clavier. Donner à A la valeur de B, et à B la valeur de A en utilisant uniquement 3 var A B C. Afficher A et B.
//Étape 1 : Les variables
var a;
var b;
var c;

//Étape 2 : Lecture des données
a = prompt("Entrer la valeur de A.");
b = prompt("Entrer la valeur de B.");

//Étape 3 : Les calculs (nouvelles affectations)
c = a;
a = b;

//Étape 4 : Afficher les résultats
alert("A vaut maintenant " + a);
alert("B vaut maintenant " + c);
