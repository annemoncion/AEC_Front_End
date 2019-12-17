// Écrire un programme qui saisit un entier et qui l'affiche à l'envers. Par exemple, l'utilisateur saisit 123456 et le programme affiche 654321.
// Il est interdit d’utiliser les string pour cette question!
// Pour cela il faudra utiliser la division et le modulo. Indice: 153%10 = 3 et 153/10 = 15

var num = Number(prompt("Entrez le nombre que vous voulez afficher à l'envers."));
var nombrePositif = Math.abs(num);
var longueur = Math.ceil(Math.log10(nombrePositif + 1));
var nombreEnvers = [];
var resultat = 0;


for (var i = 0; i < longueur; i++) {
    var chiffre = Math.floor(nombrePositif%10);
    nombrePositif = nombrePositif/10;
    nombreEnvers.push(chiffre);
}

for (var i = 0; i < longueur; i++) {
    resultat *= 10;
    resultat += nombreEnvers[i]
}

document.write(resultat);

