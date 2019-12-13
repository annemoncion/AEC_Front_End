// Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
// Comptez et affichez le nombre de mots entrés avant le mot patate.
var mot = "";
var compteurMots = 0;

while (mot != "patate") {
    mot = prompt("Entrez un mot. Terminer en écrivant 'patate'.");
    document.write(mot + "<br>");
    compteurMots++;
}

document.write(compteurMots + " mots entrés.");
