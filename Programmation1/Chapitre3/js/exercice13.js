// Afficher les nombres impairs de 1 à 49, et mettre 5 valeurs par ligne.
compteur = 0;

for (nombre = 1; nombre <= 49; nombre += 2) {
    document.write(nombre + " ");
    compteur ++;
    if (compteur === 5) {
        document.write("<br>")
        compteur = 0;
    }
}