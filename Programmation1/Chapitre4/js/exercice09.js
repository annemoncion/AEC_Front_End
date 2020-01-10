/* Lire 10 nombres quelconques et les placer dans un tableau.
Par la suite, trouver le plus petit et le plus grand de ces nombres. */

var nombres = [];

for (var i = 0; i < 10; i++) {
    nombres.push(parseInt(prompt("Entrez un nombre."), 10));
    document.write(nombres[i] + "<br>");
}

// Parce que la fonction sort() par défaut traduit les nombres en string
function compareNumbers(a, b) {
    return a - b;
}

nombres.sort(compareNumbers);

document.write("Le plus petit nombre est: " + nombres[0] + '<br>');
document.write("Le plus grand nombre est: " + nombres[nombres.length-1]);
