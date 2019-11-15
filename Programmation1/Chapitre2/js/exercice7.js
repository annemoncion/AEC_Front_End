//Exercice 7 : Lire un nb au clavier. Afficher la catégorie (Positif / Négatif / Zéro)
var nombre;
var categorie;

nombre = Number(prompt("Entrer un nombre"));

if (nombre < 0) {
    categorie = "Négatif";
} else if (nombre == 0) {
    categorie = "Zéro";
} else {
    categorie = "Positif";
}

console.log(categorie);