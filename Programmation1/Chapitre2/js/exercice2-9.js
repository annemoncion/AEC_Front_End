// Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var revenu = Number(prompt("Entrer votre revenu pour l'année 2019."));
var impotProvincial;

if ( revenu > 0 && revenu <= 7000.00) {
    impotProvincial = Math.round((revenu * 16 / 100)*100) / 100;
} else if ( revenu > 7000.00 && revenu <= 14000.00) {
    impotProvincial = Math.round((1120 + (revenu - 1120) * 19.5 / 100)*100) / 100;
} else if ( revenu > 14000.00 && revenu <= 23000.00) {
    impotProvincial = Math.round((2485 + (revenu - 2485) * 21.5 / 100)*100) / 100;
} else if ( revenu > 23000.00 && revenu <= 50000.00) {
    impotProvincial = Math.round((4420 + (revenu - 4420) * 24.5 / 100)*100) / 100;
} else if ( revenu > 50000.00 ) {
    impotProvincial = Math.round((11035 + (revenu - 11035) * 26 / 100)*100) / 100;
}

document.write("Impôt provincial sur " + revenu + "$ de revenu: " + impotProvincial + "$.");