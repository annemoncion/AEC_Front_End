/* Lire 12 nombres quelconques et les mettre dans un tableau.
Vérifier si le dernier nombre (12e) additionné avec un des 11 autres nombres
font une somme de 15. Si tel est le cas, afficher ces 2 nombres. */

var nombres = [];
var dernierNombre;

for (var i = 0; i < 12; i++) {
    nombres.push(Number(prompt("Entrez un nombre entier.")));
}

dernierNombre = nombres[nombres.length-1];

for ( var i = 0; i < nombres.length; i++ ) {
    // TEST: console.log(dernierNombre + nombres[i]);
    if ( dernierNombre + nombres[i] === 15 ) {
        document.write( dernierNombre + " + " + nombres[i] + " = 15<br>");
    }
}
