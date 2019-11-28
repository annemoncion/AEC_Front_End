// Lire un code de sexe d'un individu (M ou F) et imprimer le sexe de l'individu par le mot corespondant (Masculin ou Féminin)
// Traiter plusieurs codes de sexe jusqu'à temps que ce code soit autre chose que M ou F.
// De plus, afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.

nombreDeM = 0;
nombreDeF = 0;
sexe = prompt("Entrer le sexe de l'individu, en inscrivant 'M' ou 'F'.").toUpperCase();

while(sexe === 'M' || sexe === 'F') {
    sexe = prompt("Entrer le sexe de l'individu, en inscrivant 'M' ou 'F'.").toUpperCase();
    if (sexe === 'M') {
        document.write("Masculin<br>");
        nombreDeM ++;
    } else if (sexe === 'F') {
        document.write("Féminin<br>");
        nombreDeF++;
    }
}

document.write("Il y a " + nombreDeF + " femme(s) et " + nombreDeM + " homme(s).");
