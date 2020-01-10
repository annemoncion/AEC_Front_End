/* Modifiez le numéro précédent pour trouver le plus grand nombre possible
en JavaScript. */

var tab2Exp = [];
var exposant = 0;

for (var i = 0; i < 5000; i++) {
    tab2Exp[i] = Math.pow(2, exposant);
    document.write(tab2Exp[i] + '<br>');
    exposant++;
}

// Réponse: 8.98846567431158e+307, Infinity
