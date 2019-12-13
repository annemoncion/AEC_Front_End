// Faites afficher 1 3 5 7 9 11 sur 13 lignes.

for (ligne = 1; ligne <= 13; ligne++) {
    for (nombre = 1; nombre <= 11; nombre += 2) {
        document.write(nombre + " ");
    }
    document.write("<br>");
}