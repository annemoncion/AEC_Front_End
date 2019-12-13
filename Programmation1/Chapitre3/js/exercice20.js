// Faites afficher 10 8 6 4 2 0 sur 12 lignes

for (ligne = 1; ligne <= 12; ligne++) {
    for (nombre = 10; nombre >= 0; nombre -= 2) {
        document.write(nombre + " ");
    }
    document.write("<br>");
}