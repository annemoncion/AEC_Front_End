// Faites afficher 2 4 6 8 10 sur 30 lignes.

for (ligne = 1; ligne <= 30; ligne++) {
    for (nombre = 2; nombre <= 10; nombre += 2) {
        document.write(nombre + " ");
    }
    document.write("<br>");
}