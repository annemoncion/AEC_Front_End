// Affichez les mois précédents de Décembre à Janvier.

var mois = new Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');

for (var i = mois.length-1; i >= 0; i--) {
    document.write(mois[i] + " ")
}
