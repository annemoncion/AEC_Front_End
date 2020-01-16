/* Lire 12 nombres quelconques et vérifier si deux de ces nombres font une somme de 15.
 Si tel est le cas, affichez ces deux nombres. */

var nombres = [];

for (var i = 0; i < 12; i++) {
    nombres.push(Number(prompt("Entrez un nombre entier.")));
}

for ( var i = 0; i < nombres.length; i++ ) {
    for (var j = 0; j < nombres.length; j++) {
        if ( nombres[i] + nombres[j] === 15) {
            document.write(nombres[i] + " + " + nombres[j] + " = 15<br>");
        }
    }
}
