// Afficher 10 fois un décompte de 20 à 2.

/*
var decompte = 1;

while (decompte <=10) {
    var decrementation = 20
    while (decrementation >= 2) {
        document.write(decrementation + "<br>");
        decrementation --;
    }
    decompte ++;
}
 */

for (decompte = 0; decompte < 10; decompte++) {
    for (decrementation = 20; decrementation >= 2; decrementation--) {
        document.write(decrementation + "<br>");
    }
}
