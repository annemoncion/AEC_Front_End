/* Créez un tableau nommé tab2Exp avec 16 cases entières.
À l’aide d’une boucle, insérez les bonnes valeurs dans le tableau.

exp : tab2Exp[0] = 1;    // 20
...
exp : tab2Exp[4] = 16;  // 24
exp : tab2Exp[5] = 32;  // 25 */

var tab2Exp = [];
var exposant = 0;

for (var i = 0; i < 16; i++) {
    tab2Exp[i] = Math.pow(2, exposant);
    document.write(tab2Exp[i] + '<br>');
    exposant++;
}
