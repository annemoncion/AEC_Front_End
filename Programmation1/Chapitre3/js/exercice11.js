// Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres.

var carre;
var cube;

for (nombre = 1; nombre <= 10; nombre++) {
    carre = Math.pow(nombre, 2);
    cube = Math.pow(nombre, 3);
    document.write(nombre + ", " + carre + " ," + cube + "<br>");
}